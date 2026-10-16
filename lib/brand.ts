/**
 * The brand lives here. Change the name once and the whole site follows.
 * Every value marked PLACEHOLDER must be replaced with real details before launch.
 */
export const brand = {
  name: "Punjab Da Milk",
  /** Prefix for batch codes on bottle caps, e.g. PDM-0824 */
  batchPrefix: "PDM",
  tagline: "Punjab ke khet se seedha aapki rasoi tak — 100% Pure, Untouched & Lab-Tested",
  shortTagline: "Punjab ke khet se seedha aapki rasoi tak",

  // PLACEHOLDER: real WhatsApp business number, digits only with country code
  whatsapp: "910000000000",
  // PLACEHOLDER
  phoneDisplay: "+91 00000 00000",
  domain: "punjabdamilk.com",
  siteUrl: "https://punjabdamilk.com",
  // Works only after a mailbox is set up for the domain (e.g. Zoho Mail or Google Workspace)
  email: "hello@punjabdamilk.com",
  // PLACEHOLDER: 14-digit FSSAI licence number
  fssai: "1XXXXXXXXXXXXX",
  // PLACEHOLDER
  farmAddress: "Farm No. __, Village ______, Tehsil ______, District ______, Punjab 14XXXX",
  // PLACEHOLDER: only publish once you have real reviews to back it
  rating: "4.9",
  families: "10,000+",
  // PLACEHOLDER: add full profile links (e.g. "https://instagram.com/punjabdamilk"). Empty ones are hidden.
  social: {
    instagram: "",
    facebook: "",
    youtube: "",
  },
  deliveryCutoff: "7:00 AM",
  trialPrice: 99,
} as const;

export const waLink = (text: string) =>
  `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(text)}`;

export const inr = (n: number) => "₹" + n.toLocaleString("en-IN");
