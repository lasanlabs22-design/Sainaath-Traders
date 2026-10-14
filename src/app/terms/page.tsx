import type { Metadata } from "next";
import Link from "next/link";
import { showrooms, site } from "@/data/site";
import { LegalPage, type LegalSection } from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms for using the ${site.name} website and for buying, renting and servicing coffee vending machines and premixes.`,
};

const office = showrooms[0];

const sections: LegalSection[] = [
  {
    id: "about",
    title: "About these terms",
    body: (
      <>
        <p>
          These terms apply to this website and to the machines, premixes and services supplied by {site.name}, {office.address.join(", ")}. By using the
          website or placing an order, you agree to them.
        </p>
        <p>
          Anything agreed in writing in your quotation, invoice, rental or AMC agreement takes priority over these general terms if the two differ.
        </p>
      </>
    ),
  },
  {
    id: "website",
    title: "Using this website",
    body: (
      <ul>
        <li>Product descriptions, specifications, capacities and images are for guidance and may differ slightly from the unit supplied. Please confirm details with us before you buy.</li>
        <li>Machine images are taken from manufacturer and brand material and are for illustration only.</li>
        <li>Brand names and logos (such as NESCAFÉ, BRU, Tata, Godrej and others) belong to their respective owners. Listing them does not imply that we are those companies.</li>
        <li>Do not copy content from this website for commercial use without our permission.</li>
      </ul>
    ),
  },
  {
    id: "enquiries",
    title: "Enquiries, quotations and orders",
    body: (
      <>
        <p>
          Submitting the enquiry form or messaging us on WhatsApp is a request for information — it is not an order. An order is confirmed only when we
          issue a written quotation or invoice and you accept it, with any advance payment we ask for.
        </p>
        <p>Machine prices are given on request. Quotations are valid for 15 days unless stated otherwise, and GST is charged as applicable.</p>
      </>
    ),
  },
  {
    id: "demos",
    title: "Free demos",
    body: (
      <p>
        Showroom and on-site demos are free and carry no obligation to buy. We schedule on-site demos in Guntur, Vijayawada and nearby areas subject to
        availability. Please ensure a suitable power point and water source at the demo location.
      </p>
    ),
  },
  {
    id: "payment-delivery",
    title: "Payment, delivery and installation",
    body: (
      <ul>
        <li>Payment terms are as stated on your quotation or invoice. Ownership of a purchased machine passes to you once it is paid for in full.</li>
        <li>Delivery and installation dates are estimates; we will keep you informed of any delay.</li>
        <li>You are responsible for providing a stable power supply, water connection or bottle, and safe access for our technicians.</li>
        <li>Please check the machine on delivery and tell us about any visible damage within 48 hours.</li>
      </ul>
    ),
  },
  {
    id: "warranty",
    title: "Warranty, service and AMC",
    body: (
      <>
        <ul>
          <li>New machines carry the manufacturer’s warranty, as stated on the invoice or warranty card. We handle warranty claims on your behalf.</li>
          <li>Warranty does not cover damage from misuse, voltage fluctuation, hard or unfiltered water, unauthorised repairs, or use of incompatible premixes.</li>
          <li>Out-of-warranty repairs, spares and visits are charged as quoted. Annual Maintenance Contracts (AMC) cover the visits and parts listed in the AMC agreement.</li>
        </ul>
      </>
    ),
  },
  {
    id: "rentals",
    title: "Rentals",
    body: (
      <p>
        Rented machines remain our property. Monthly rent, minimum period, premix commitments, security deposit and notice period are set out in your rental
        agreement. Please do not move, open or repair a rented machine yourself; tell us and we will attend.
      </p>
    ),
  },
  {
    id: "premixes",
    title: "Premixes and consumables",
    body: (
      <>
        <p>
          Beverage premixes, coffee and tea are supplied under our FSSAI licence no. {site.fssaiLicence}. Store them in a cool, dry place and use them
          before the date printed on the pack.
        </p>
        <p>
          For hygiene reasons, opened or partly used packs cannot be returned. Sealed packs that are damaged or past their date on delivery will be
          replaced if you tell us within 48 hours.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <p>
        We take care to supply reliable machines and good service, but to the extent the law allows, we are not liable for indirect losses such as loss of
        business or profit caused by a machine breakdown. Our total liability for any claim is limited to the amount you paid for the product or service
        concerned. Nothing in these terms limits your rights under the Consumer Protection Act, 2019.
      </p>
    ),
  },
  {
    id: "privacy",
    title: "Privacy",
    body: (
      <p>
        How we handle your personal data is explained in our <Link href="/privacy">Privacy Policy</Link>.
      </p>
    ),
  },
  {
    id: "law",
    title: "Governing law and disputes",
    body: (
      <p>
        These terms are governed by the laws of India. We will always try to resolve a problem with you directly first; any dispute that cannot be resolved
        will be subject to the courts at Guntur, Andhra Pradesh.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact us",
    body: (
      <p>
        <strong>{site.name}</strong>
        <br />
        {office.address.join(", ")}
        <br />
        Email: <a href={`mailto:${site.email}`}>{site.email}</a>
        <br />
        Phone / WhatsApp: <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms & Conditions"
      href="/terms"
      title={
        <>
          Terms &amp; <em className="text-brass-deep">conditions</em>
        </>
      }
      intro="The simple rules for using our website and for buying, renting and servicing machines with us."
      updated={site.policiesUpdated}
      sections={sections}
    />
  );
}
