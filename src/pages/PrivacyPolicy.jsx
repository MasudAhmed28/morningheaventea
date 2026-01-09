import LegalLayout from "./LegalLayout";

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy">
      <Section title="Your Privacy Matters">
        We respect your privacy and are committed to protecting the personal
        information you share with us.
      </Section>

      <Section title="Information We Collect">
        When you submit an enquiry, we may collect your name, email address,
        phone number, and message.
      </Section>

      <Section title="How We Use Your Information">
        Your information is used only to respond to your enquiry and improve our
        customer service. We never sell or share your data.
      </Section>

      <Section title="Data Protection">
        We take reasonable security measures to protect your data, but no method
        of transmission over the internet is completely secure.
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
