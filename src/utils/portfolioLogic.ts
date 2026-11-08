import {
  ContactFormValues,
  ContactValidationResult,
  ProjectCategory,
  ProjectItem,
  SkillCategory,
  SkillItem,
} from '../types/portfolio';

/**
 * Filters skills by selected category.
 */
export function filterSkillsByCategory(
  skills: SkillItem[],
  category: SkillCategory
): SkillItem[] {
  if (category === 'All') {
    return skills;
  }
  return skills.filter((skill) => skill.category === category);
}

/**
 * Filters projects by category and optional search query.
 */
export function filterProjects(
  projects: ProjectItem[],
  category: ProjectCategory,
  searchQuery = ''
): ProjectItem[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesCategory = category === 'All' || project.category === category;
    if (!matchesCategory) return false;

    if (!normalizedQuery) return true;

    const searchableText = [
      project.title,
      project.subtitle,
      project.clientOrOrg,
      project.summary,
      ...project.deliverables,
      ...project.metrics.map((m) => `${m.label} ${m.value}`),
    ]
      .join(' ')
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}

/**
 * Validates the Contact Form fields before submitting to Web3Forms.
 * Never substitutes fallback values when required inputs are empty or invalid.
 */
export function validateContactForm(
  values: ContactFormValues
): ContactValidationResult {
  const errors: Partial<Record<keyof ContactFormValues, string>> = {};

  const trimmedName = values.name.trim();
  const trimmedEmail = values.email.trim();
  const trimmedMessage = values.message.trim();

  if (!trimmedName) {
    errors.name = 'Please enter your full name.';
  } else if (trimmedName.length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail) {
    errors.email = 'Please enter your email address.';
  } else if (!emailRegex.test(trimmedEmail)) {
    errors.email = 'Please enter a valid email address (e.g. name@company.com).';
  }

  if (!values.inquiryType.trim()) {
    errors.inquiryType = 'Please select an inquiry topic.';
  }

  if (!trimmedMessage) {
    errors.message = 'Please enter a message outlining your role or project.';
  } else if (trimmedMessage.length < 15) {
    errors.message = 'Please provide at least 15 characters of context.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Constructs the Web3Forms JSON payload with the user's configured token.
 */
export function buildWeb3FormsPayload(
  values: ContactFormValues,
  accessKey: string,
  recipientName: string
): Record<string, string | boolean> {
  const orgSuffix = values.organization.trim()
    ? ` (${values.organization.trim()})`
    : '';

  return {
    access_key: accessKey,
    subject: `[Portfolio Inquiry — ${values.inquiryType}] from ${values.name.trim()}${orgSuffix}`,
    from_name: `${recipientName} Portfolio Contact`,
    name: values.name.trim(),
    email: values.email.trim(),
    organization: values.organization.trim() || 'Not specified',
    inquiry_type: values.inquiryType.trim(),
    message: values.message.trim(),
    botcheck: false,
  };
}
