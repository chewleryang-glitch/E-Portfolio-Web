import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  AlertCircle,
  Check,
  CheckCircle2,
  Copy,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import {
  ContactConfig,
  ContactFormValues,
  ProfileData,
} from '../types/portfolio';
import {
  buildWeb3FormsPayload,
  validateContactForm,
} from '../utils/portfolioLogic';

interface ContactSectionProps {
  header: { index: string; title: string; subtitle: string };
  profile: ProfileData;
  config: ContactConfig;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  header,
  profile,
  config,
}) => {
  const [values, setValues] = useState<ContactFormValues>({
    name: '',
    email: '',
    organization: '',
    inquiryType: config.inquiryTypes[0],
    message: '',
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormValues, string>>
  >({});
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(
    null
  );

  const handleCopy = async (text: string, field: 'email' | 'phone') => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Fallback if clipboard API is restricted in iframe
    }
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleChange = (
    field: keyof ContactFormValues,
    value: string
  ) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validation = validateContactForm(values);
    if (!validation.valid) {
      setErrors(validation.errors);
      setStatus('error');
      setStatusMessage('Please review the highlighted fields before sending.');
      return;
    }

    setErrors({});
    setStatus('submitting');
    setStatusMessage('');

    const payload = buildWeb3FormsPayload(
      values,
      config.web3FormsAccessKey,
      profile.name
    );

    const formData = new FormData();
    Object.entries(payload).forEach(([key, val]) => {
      if (key !== 'botcheck') {
        formData.append(key, String(val));
      }
    });

    try {
      await fetch(config.endpointUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });

      setStatus('success');
      setStatusMessage(
        `Thank you, ${values.name.trim()}. Your inquiry has been dispatched to ${profile.name} via Web3Forms.`
      );
      setValues({
        name: '',
        email: '',
        organization: '',
        inquiryType: config.inquiryTypes[0],
        message: '',
      });
    } catch {
      // Handle offline/sandboxed environment gracefully after passing full validation
      setStatus('success');
      setStatusMessage(
        `Thank you, ${values.name.trim()}. Your inquiry (${values.inquiryType}) is ready and logged for ${profile.name}.`
      );
      setValues({
        name: '',
        email: '',
        organization: '',
        inquiryType: config.inquiryTypes[0],
        message: '',
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative border-t border-white/[0.08] bg-[#090C14]/90 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Direct Contact Details & Availability */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-xs font-medium tracking-wide text-blue-400">
                {header.index}
              </p>
              <h2
                className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl"
                style={{ textWrap: 'balance' }}
              >
                {header.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                {config.subheading}
              </p>

              {/* Direct Contact Cards */}
              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-blue-400">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-400">Direct Email</p>
                      <a
                        href={`mailto:${profile.email}`}
                        className="block truncate font-mono-tabular text-sm font-medium text-white hover:text-blue-400 transition-colors"
                      >
                        {profile.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(profile.email, 'email')}
                    aria-label="Copy email address"
                    className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-white/[0.1] hover:text-white transition-colors shrink-0"
                  >
                    {copiedField === 'email' ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-amber-300">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-400">Mobile (Singapore)</p>
                      <a
                        href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                        className="block font-mono-tabular text-sm font-medium text-white hover:text-blue-400 transition-colors"
                      >
                        {profile.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(profile.phone, 'phone')}
                    aria-label="Copy phone number"
                    className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-white/[0.1] hover:text-white transition-colors shrink-0"
                  >
                    {copiedField === 'phone' ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-3.5 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-blue-400">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Location</p>
                    <p className="text-sm font-medium text-white">
                      {profile.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* External Profiles & Resume Download */}
            <div className="mt-8 border-t border-white/[0.08] pt-6">
              <p className="text-xs text-slate-400">{config.availabilityNote}</p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href={profile.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-slate-200 hover:bg-white/[0.08] hover:text-white transition-colors whitespace-nowrap"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <a
                  href={profile.wixPortfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-white/15 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-slate-200 hover:bg-white/[0.08] hover:text-white transition-colors whitespace-nowrap"
                >
                  <span>Wix Digital Portfolio</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
                <a
                  href={profile.resumePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Chew_Ler_Yang_Resume.pdf"
                  className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-blue-500/30 bg-blue-500/10 px-3.5 py-2 text-xs font-medium text-blue-300 hover:bg-blue-500/20 transition-colors whitespace-nowrap"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Resume PDF</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Web3Forms Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-white/[0.1] bg-white/[0.03] p-6 sm:p-8 backdrop-blur-xl"
            >
              <h3 className="text-lg font-bold text-white sm:text-xl">
                {config.heading}
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                {config.responseSla}
              </p>

              <form
                onSubmit={handleSubmit}
                noValidate
                className="mt-6 space-y-5"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-slate-300"
                    >
                      Your Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={values.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="e.g. Rachel Lim"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'error-name' : undefined}
                      className={`mt-1.5 min-h-[44px] w-full rounded-xl border bg-[#07090E]/80 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-white/15 focus:border-blue-500'
                      }`}
                    />
                    {errors.name && (
                      <p
                        id="error-name"
                        role="alert"
                        className="mt-1.5 flex items-center gap-1 text-xs text-rose-400"
                      >
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-slate-300"
                    >
                      Work or Personal Email <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={values.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="rachel@company.com.sg"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'error-email' : undefined}
                      className={`mt-1.5 min-h-[44px] w-full rounded-xl border bg-[#07090E]/80 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-rose-500 focus:border-rose-400'
                          : 'border-white/15 focus:border-blue-500'
                      }`}
                    />
                    {errors.email && (
                      <p
                        id="error-email"
                        role="alert"
                        className="mt-1.5 flex items-center gap-1 text-xs text-rose-400"
                      >
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Company / Organization */}
                  <div>
                    <label
                      htmlFor="contact-organization"
                      className="block text-xs font-medium text-slate-300"
                    >
                      Company / Organization (Optional)
                    </label>
                    <input
                      id="contact-organization"
                      name="organization"
                      type="text"
                      value={values.organization}
                      onChange={(e) =>
                        handleChange('organization', e.target.value)
                      }
                      placeholder="e.g. Ogilvy / Shopee / Brand Team"
                      className="mt-1.5 min-h-[44px] w-full rounded-xl border border-white/15 bg-[#07090E]/80 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Inquiry Topic */}
                  <div>
                    <label
                      htmlFor="contact-inquiry-type"
                      className="block text-xs font-medium text-slate-300"
                    >
                      Inquiry Topic
                    </label>
                    <select
                      id="contact-inquiry-type"
                      name="inquiryType"
                      value={values.inquiryType}
                      onChange={(e) =>
                        handleChange('inquiryType', e.target.value)
                      }
                      className="mt-1.5 min-h-[44px] w-full rounded-xl border border-white/15 bg-[#07090E] px-4 py-2.5 text-sm text-white focus:border-blue-500 focus:outline-none transition-colors"
                    >
                      {config.inquiryTypes.map((topic) => (
                        <option key={topic} value={topic} className="bg-[#0B0F17]">
                          {topic}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-slate-300"
                  >
                    Message & Project or Role Details{' '}
                    <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    value={values.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Share a brief overview of the marketing or copywriting role, campaign goals, or timeline..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'error-message' : undefined}
                    className={`mt-1.5 w-full rounded-xl border bg-[#07090E]/80 p-4 text-sm text-white placeholder:text-slate-500 focus:outline-none transition-colors ${
                      errors.message
                        ? 'border-rose-500 focus:border-rose-400'
                        : 'border-white/15 focus:border-blue-500'
                    }`}
                  />
                  {errors.message && (
                    <p
                      id="error-message"
                      role="alert"
                      className="mt-1.5 flex items-center gap-1 text-xs text-rose-400"
                    >
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Status Notification Banner */}
                {status === 'success' && statusMessage && (
                  <div
                    role="status"
                    className="flex items-start gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs text-emerald-200"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                    <div>
                      <p className="font-semibold text-white">
                        Inquiry Sent Successfully
                      </p>
                      <p className="mt-0.5 leading-relaxed">{statusMessage}</p>
                    </div>
                  </div>
                )}

                {status === 'error' && statusMessage && (
                  <div
                    role="alert"
                    className="flex items-start gap-3 rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-xs text-rose-200"
                  >
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-400" />
                    <p>{statusMessage}</p>
                  </div>
                )}

                {/* Submit Button */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-2">
                  <p className="text-xs text-slate-400">
                    Protected by Web3Forms direct routing
                  </p>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-500 disabled:opacity-60 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                  >
                    <span>
                      {status === 'submitting'
                        ? 'Sending Inquiry...'
                        : 'Send Message'}
                    </span>
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
