import LegalLayout from "./LegalLayout";

export default function TermsAndConditions() {
  return (
    <LegalLayout title="Terms & Conditions">
      <Section title="Acceptance of Terms">
        By accessing this website, you agree to comply with these terms and
        conditions.
      </Section>

      <Section title="Website Usage">
        This website is for informational purposes only. Product availability
        and content may change without notice.
      </Section>

      <Section title="Intellectual Property">
        All content, branding, logos, and designs belong to Morning Heaven Tea
        and may not be reused without permission.
      </Section>

      <Section title="Limitation of Liability">
        We are not responsible for any damages arising from the use of this
        website.
      </Section>

      <FooterNote />
    </LegalLayout>
  );
}

/* Helper Components */
const Section = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold text-green-900 mb-2">
      {title}
    </h2>
    <p className="text-gray-700 leading-relaxed">
      {children}
    </p>
  </div>
);

const FooterNote = () => (
  <p className="text-sm text-gray-500 mt-12">
    Last updated: {new Date().getFullYear()}
  </p>
);
