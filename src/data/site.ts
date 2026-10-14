import type { Showroom } from "@/lib/types";

/**
 * Business identity — edit this one file to rebrand the whole site.
 * All values below are POC placeholders.
 */
export const site = {
  name: "Sainaath Traders",
  telugu: "సాయినాథ్ ట్రేడర్స్",
  tagline: "Coffee vending machines, sales & service in Guntur & Vijayawada",
  description:
    "Sainaath Traders — sales, installation and service of tea & coffee vending and bean-to-cup machines, plus premixes, across Guntur and Vijayawada since 1999.",
  url: "https://www.example.com",
  phone: "+91 85006 29777",
  whatsapp: "918500629777",
  /** Person who handles demo bookings. */
  demoContact: { name: "Suresh", phone: "+91 85006 29777" },
  email: "sainaathtraders@gmail.com",
  established: "1999",
  /** From the client's FSSAI licence (Form C) — needed for premix / beverage sales. */
  fssaiLicence: "10119007000084",
  /** Effective date shown on /privacy and /terms. */
  policiesUpdated: "14 October 2026",
  // No Facebook page supplied — add one here and it appears in the footer.
  social: {
    instagram: "https://instagram.com/rajavarapuniranjan",
    youtube: "https://youtube.com/@sainaathtraders",
  } as Partial<Record<"instagram" | "facebook" | "youtube", string>>,
} as const;

export const showrooms: Showroom[] = [
  {
    city: "Guntur",
    telugu: "గుంటూరు",
    // From the client's FSSAI licence (Form C) — registered office & premises.
    address: ["D.No. 8/19/1/214, 4th Lane", "Ambedkar Nagar, Guntur", "Andhra Pradesh 522001"],
    phone: "+91 85006 29777",
    hours: "Mon – Sat · 10:00 am – 8:30 pm",
    // Door numbers don't geocode reliably, so the map searches the street + area.
    mapQuery: "4th Lane, Ambedkar Nagar, Guntur, Andhra Pradesh 522001",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=4th+Lane%2C+Ambedkar+Nagar%2C+Guntur%2C+Andhra+Pradesh+522001",
  },
  {
    city: "Vijayawada",
    telugu: "విజయవాడ",
    address: ["Chandra Mouli Puram, Sriram Nagar", "Benz Circle, Vijayawada", "Andhra Pradesh 520010"],
    phone: "+91 85006 29777",
    hours: "Mon – Sat · 10:00 am – 8:30 pm",
    // Plus code from the client's pin (FMW2+WMC) so the embed lands on the exact spot.
    mapQuery: "FMW2+WMC Benz Circle, Vijayawada, Andhra Pradesh 520010",
    mapUrl: "https://maps.app.goo.gl/6NFsLpsHBoCtRWm17",
  },
];

export const navLinks = [
  { href: "/machines", label: "Machines" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Visit Us" },
] as const;
