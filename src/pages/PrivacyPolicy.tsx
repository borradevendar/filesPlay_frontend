import React, { useState } from "react";

export default function PrivacyPolicyPage() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const fileName = "privacy policy.docx";

  const toggle = (key: string) =>
    setOpenSection(openSection === key ? null : key);

  const Section: React.FC<{
    id: string;
    title: string;
    children: React.ReactNode;
  }> = ({ id, title, children }) => (
    <div className="bg-white dark:bg-slate-900 shadow-sm rounded-2xl p-6 border border-slate-100 dark:border-slate-800">
      <button
        className="w-full flex items-start justify-between gap-4"
        onClick={() => toggle(id)}
        aria-expanded={openSection === id}
      >
        <div className="text-left">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
        </div>
        <div className="flex items-center">
          <svg
            className={`w-5 h-5 transform transition-transform duration-200 ${
              openSection === id ? "rotate-180" : "rotate-0"
            } text-slate-400`}
            viewBox="0 0 20 20"
            fill="none"
          >
            <path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>

      <div
        className={`mt-4 text-sm leading-7 text-slate-700 dark:text-slate-300 transition-all duration-200 overflow-hidden ${
          openSection === id ? "max-h-[1000px] print:max-h-full" : "max-h-0 print:max-h-full"
        }`}
      >
        {children}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">Privacy Policy For Files Play</h1>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-2xl text-sm font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 hover:shadow-sm transition"
            >
              Print
            </button>
          </div>
        </header>

        <div className="grid gap-6">
          <Section id="overview" title="Overview">
            <p>
              Files Play respects your privacy. This policy explains the types of information we collect, how we use
              it, and the choices you have. It is written for readability and aligned with app-store requirements.
            </p>
          </Section>

          <Section id="collection" title="Information We Collect">
            <ul className="list-disc ml-5">
              <li>
                <strong>Information you provide:</strong> Email (collected automatically when you sign in using Google/GitHub/Apple login).
              </li>
              <li>
                <strong>Device & usage data:</strong> Device model, OS, app usage, and crash logs to improve the app.
              </li>
              <li>
                <strong>Files you upload:</strong> Files are processed temporarily for conversion and deleted after processing.
              </li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">Files Play does <strong>not</strong> collect payments, contacts, calendars, or location data.</p>
          </Section>

          <Section id="use" title="How We Use Information">
            <p>
              We use collected information to provide and improve the app, respond to support requests, and to maintain
              security and performance. We do not use personal data for targeted advertising without explicit consent.
            </p>
          </Section>

          <Section id="files" title="File Handling & Storage">
            <p>
              Files uploaded for conversion are processed securely and removed automatically after conversion. We do not
              retain or share the content of files for any purpose other than completing the conversion you requested.
            </p>
          </Section>

          <Section id="sharing" title="Information Sharing">
            <p>
              We do not sell your data. We may share limited technical information with trusted third-party services
              such as crash reporters or cloud providers, under strict confidentiality obligations.
            </p>
          </Section>

          <Section id="security" title="Security">
            <p>
              We implement reasonable measures such as encrypted communications, access controls, and automated file
              deletion to protect your information.
            </p>
          </Section>

          <Section id="rights" title="Your Rights">
            <p>
              You may request access, correction, or deletion of your data. Contact us at the email below to exercise
              these rights.
            </p>
          </Section>

          <Section id="children" title="Children & Eligibility">
            <p>
              Files Play is not intended for children under 13. We do not knowingly collect personal information from
              children.
            </p>
          </Section>

          <Section id="changes" title="Changes to this Policy">
            <p>
              We may update this policy from time to time. We will post changes in the app and update the effective
              date. Substantive changes will be announced via the app or email when possible.
            </p>
          </Section>

          <Section id="contact" title="Contact Us">
            <p>
              For questions or requests, reach out to us at:
            </p>
            <p className="mt-2 text-sm font-medium">filesplay.contact@gmail.com</p>
          </Section>
        </div>
      </div>
    </div>
  );
}
