import type { Metadata } from "next";
import { showrooms, site } from "@/data/site";
import { LegalPage, type LegalSection } from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects the personal data you share through our website, WhatsApp and phone.`,
};

const office = showrooms[0];

const sections: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <p>
          {site.name} (“we”, “us”) sells, installs and services tea &amp; coffee vending machines and supplies beverage premixes in Guntur and Vijayawada,
          Andhra Pradesh. Our registered office is at {office.address.join(", ")}.
        </p>
        <p>
          This policy explains what personal data we collect when you use this website or contact us, why we collect it, and the choices you have. It is
          written to follow the Digital Personal Data Protection Act, 2023 and the Information Technology Act, 2000.
        </p>
      </>
    ),
  },
  {
    id: "what-we-collect",
    title: "What we collect",
    body: (
      <>
        <p>We only collect what we need to answer you and look after your machine:</p>
        <ul>
          <li>
            <strong>Enquiry details</strong> — your name, mobile number, city, what you need (demo, purchase, rental, service), the machine you are
            interested in and any message you write.
          </li>
          <li>
            <strong>Conversations</strong> — messages you send us on WhatsApp, calls and emails, including details such as your address for a demo or
            installation.
          </li>
          <li>
            <strong>Customer records</strong> — if you buy, rent or take an AMC: billing name and address, GSTIN if you give one, machine serial number and
            service history.
          </li>
          <li>
            <strong>Basic technical data</strong> — our web server keeps short-lived logs (IP address, browser type, pages requested) to keep the site
            secure and working.
          </li>
        </ul>
        <p>We do not collect card or bank details on this website, and we do not ask for sensitive personal data such as health or biometric information.</p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use it",
    body: (
      <ul>
        <li>To reply to your enquiry, arrange a demo and send you a quotation.</li>
        <li>To deliver, install and service your machine, and to supply premixes and consumables.</li>
        <li>To issue invoices and keep the records required by tax and food-safety law.</li>
        <li>To send service reminders (descaling, AMC renewal) — you can ask us to stop at any time.</li>
        <li>To keep this website secure and fix problems.</li>
      </ul>
    ),
  },
  {
    id: "whatsapp",
    title: "WhatsApp and third-party services",
    body: (
      <>
        <p>
          When you submit the enquiry form, your details are placed in a WhatsApp message to our business number ({site.phone}). Nothing is sent until you
          press send in WhatsApp. WhatsApp is operated by Meta, and its own privacy policy applies to messages on its platform.
        </p>
        <p>
          Our showroom maps are provided by Google Maps, and our footer links to Instagram and YouTube. These services may set their own cookies or collect
          data when you use them; please see their privacy policies.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    body: (
      <p>
        This website does not use advertising or analytics cookies. Embedded Google Maps may set cookies when the map loads. If we add analytics in future,
        we will update this policy first.
      </p>
    ),
  },
  {
    id: "sharing",
    title: "Who we share it with",
    body: (
      <>
        <p>We never sell your personal data. We share it only when needed:</p>
        <ul>
          <li>with machine manufacturers or their authorised partners, for warranty registration and repairs;</li>
          <li>with our own technicians and delivery staff, to reach you for a demo, installation or service visit;</li>
          <li>with accountants and tax authorities, for invoicing and GST;</li>
          <li>when the law, a court or a government authority requires it.</li>
        </ul>
      </>
    ),
  },
  {
    id: "retention",
    title: "How long we keep it",
    body: (
      <p>
        Enquiries that don’t turn into a purchase are deleted within 12 months. Customer, invoice and service records are kept for as long as you use our
        services and then for the period required by tax law (generally 8 years). Server logs are kept for no more than 90 days.
      </p>
    ),
  },
  {
    id: "security",
    title: "How we protect it",
    body: (
      <p>
        The website is served over HTTPS, and access to customer records is limited to staff who need it. No system is perfectly secure, so if we ever
        learn of a breach that affects you, we will tell you and the Data Protection Board as the law requires.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <p>You can ask us to:</p>
        <ul>
          <li>tell you what personal data we hold about you and how we use it;</li>
          <li>correct or update it;</li>
          <li>delete it, unless we must keep it by law (for example, invoices);</li>
          <li>stop using it for reminders or offers — withdrawing consent is as easy as giving it;</li>
          <li>nominate someone to exercise these rights on your behalf.</li>
        </ul>
        <p>We will respond within 30 days. If you are unhappy with our answer, you may complain to the Data Protection Board of India.</p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: <p>Our services are meant for adults and businesses. We do not knowingly collect data from anyone under 18.</p>,
  },
  {
    id: "contact",
    title: "Contact & grievances",
    body: (
      <>
        <p>For any privacy question, request or complaint, contact our grievance officer:</p>
        <p>
          <strong>{site.name}</strong>
          <br />
          {office.address.join(", ")}
          <br />
          Email: <a href={`mailto:${site.email}`}>{site.email}</a>
          <br />
          Phone / WhatsApp: <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
        </p>
        <p>If we change this policy, we will update the date at the top of this page.</p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      href="/privacy"
      title={
        <>
          Your privacy, <em className="text-brass-deep">respected</em>
        </>
      }
      intro="What we collect when you enquire, call or WhatsApp us — and how we keep it safe."
      updated={site.policiesUpdated}
      sections={sections}
    />
  );
}
