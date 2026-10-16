import { brand } from "./brand";

/* PLACEHOLDER: every price, fat value and lab number in this file is sample data. */

export type MilkType = "cow" | "buffalo";

export const milkPrices: Record<MilkType, { name: string; short: string; perLitre: number }> = {
  cow: { name: "A2 Sahiwal Cow Milk", short: "A2 Cow", perLitre: 110 },
  buffalo: { name: "Murrah Buffalo Milk", short: "Buffalo", perLitre: 90 },
};

/* Stock photos from Unsplash (free licence). Replace with real photos of your own farm when you have them. */
const u = (id: string, w: number) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero: { src: u("1527153857715-3908f2ae5e81", 1600), alt: "Cows grazing on a green farm pasture at sunrise" },
  milkPour: { src: u("1550583724-b2692b85b150", 800), alt: "Fresh creamy milk being poured into a glass" },
  farm: { src: u("1500595046743-cd271d694d30", 800), alt: "Clean, open farm where our cattle are raised" },
};

export type Visual = "cow" | "buffalo" | "ghee" | "paneer" | "dahi";

export const products: {
  id: string;
  name: string;
  visual: Visual;
  pack: string;
  fat: string;
  price: number;
  unit: string;
  deposit: string;
  note: string;
  tag?: string;
  image?: { src: string; alt: string };
}[] = [
  {
    id: "a2-cow",
    name: "Farm Fresh A2 Sahiwal Cow Milk",
    visual: "cow",
    pack: "1 L glass bottle",
    fat: "3.8 – 4.5%",
    price: milkPrices.cow.perLitre,
    unit: "per litre",
    deposit: "₹50 refundable bottle deposit",
    note: "Light, naturally sweet and easy on the stomach. The one kids ask for.",
    tag: "Lab Tested A2",
    image: { src: u("1528750997573-59b89d56f4f7", 600), alt: "Glass bottle of fresh A2 desi cow milk" },
  },
  {
    id: "buffalo",
    name: "Rich Full-Cream Buffalo Milk",
    visual: "buffalo",
    pack: "1 L glass bottle",
    fat: "6.5 – 7.5%",
    price: milkPrices.buffalo.perLitre,
    unit: "per litre",
    deposit: "₹50 refundable bottle deposit",
    note: "Thick malai on top, made for kadak chai, kheer and home-set dahi.",
    tag: "Best Seller",
    image: { src: u("1563636619-e9143da7973b", 600), alt: "Full-cream desi buffalo milk in glass bottles" },
  },
  {
    id: "ghee",
    name: "Traditional Bilona Cow Ghee",
    visual: "ghee",
    pack: "500 ml clay pot",
    fat: "99.5% milk fat",
    price: 1450,
    unit: "per 500 ml",
    deposit: "No deposit, the pot is yours",
    note: "Curd hand-churned with a wooden bilona, slow-cooked on a wood fire.",
    tag: "Traditional Bilona",
    image: { src: u("1628088062854-d1870b4553da", 600), alt: "Golden bilona cow ghee in a jar" },
  },
  {
    id: "paneer",
    name: "Fresh Malai Paneer & White Makhan",
    visual: "paneer",
    pack: "200 g, leaf-wrapped",
    fat: "~22%",
    price: 140,
    unit: "per 200 g",
    deposit: "₹30 deposit on steel box",
    note: "Pressed fresh on the morning of delivery, with hand-churned white makhan on request.",
    tag: "Made on order",
    image: { src: u("1559561853-08451507cbe7", 600), alt: "Soft fresh paneer cubes and white butter" },
  },
  {
    id: "dahi",
    name: "Probiotic Farm Curd (Dahi)",
    visual: "dahi",
    pack: "400 g clay kulhad",
    fat: "~4%",
    price: 80,
    unit: "per 400 g",
    deposit: "No deposit, kulhad is compostable",
    note: "Set overnight in clay with live cultures. Thick, mildly tangy.",
  },
  {
    id: "lassi",
    name: "Punjabi Sweet Lassi in Kulhad",
    visual: "dahi",
    pack: "300 ml clay kulhad",
    fat: "~3.5%",
    price: 60,
    unit: "per kulhad",
    deposit: "No deposit, kulhad is compostable",
    note: "Churned thick from our own dahi with a little malai on top. Pind wali lassi.",
    tag: "New",
    image: { src: u("1571006682832-72c084e5b98f", 600), alt: "Thick sweet lassi served in a clay kulhad" },
  },
];

export const journey = [
  {
    time: "04:00 AM",
    title: "Milking with care",
    body: "Our happy, grass-fed Sahiwal cows and Murrah buffaloes are milked in clean, closed steel lines. No hormone or oxytocin injections, ever.",
    icon: "sprout",
  },
  {
    time: "05:00 AM",
    title: "Chilled to 4°C",
    body: "The milk is chilled straight away to 4°C. Cold keeps it fresh and preserves natural nutrients without boiling or chemicals.",
    icon: "snow",
  },
  {
    time: "06:00 AM",
    title: "26+ purity tests",
    body: "Our on-farm lab checks every batch for fat, SNF, added water, urea, starch, detergent and more. A failed batch never leaves the farm.",
    icon: "shield",
  },
  {
    time: "07:00 AM",
    title: "Ringing your doorbell",
    body: "Sterilised glass bottles reach your door before your morning chai. Yesterday's empties go back with the delivery partner.",
    icon: "truck",
  },
] as const;

export type Batch = {
  product: string;
  milkedAt: string;
  chilledAt: string;
  dispatchTemp: number;
  fat: number;
  fatRange: [number, number];
  snf: number;
  snfRange: [number, number];
  lab: string;
  analyst: string;
};

const P = brand.batchPrefix;

/* PLACEHOLDER: demo batches. Connect to your real lab system before launch. */
export const batches: Record<string, Batch> = {
  [`${P}-0824`]: {
    product: "A2 Sahiwal Cow Milk",
    milkedAt: "16 Oct 2026, 4:05 AM",
    chilledAt: "4:22 AM",
    dispatchTemp: 3.8,
    fat: 4.2,
    fatRange: [3.5, 5],
    snf: 8.7,
    snfRange: [8.5, 9.5],
    lab: "on-farm lab, Block A",
    analyst: "Lab team (sample)",
  },
  [`${P}-0825`]: {
    product: "Murrah Buffalo Milk",
    milkedAt: "16 Oct 2026, 4:10 AM",
    chilledAt: "4:28 AM",
    dispatchTemp: 3.6,
    fat: 7.1,
    fatRange: [6, 8],
    snf: 9.3,
    snfRange: [9, 10],
    lab: "on-farm lab, Block A",
    analyst: "Lab team (sample)",
  },
  [`${P}-0901`]: {
    product: "A2 Sahiwal Cow Milk",
    milkedAt: "15 Oct 2026, 4:02 AM",
    chilledAt: "4:19 AM",
    dispatchTemp: 3.9,
    fat: 4.4,
    fatRange: [3.5, 5],
    snf: 8.9,
    snfRange: [8.5, 9.5],
    lab: "on-farm lab, Block A",
    analyst: "Lab team (sample)",
  },
};

export const adulterantTests = [
  "Detergent",
  "Urea",
  "Starch",
  "Added water",
  "Neutralisers (soda)",
  "Hydrogen peroxide",
  "Formalin",
  "Antibiotic residue",
];

/* PLACEHOLDER: sample reviews. Replace with real customer reviews (with their permission) before promoting the site. */
export const testimonials = [
  {
    name: "Harpreet Kaur",
    role: "Mother of two, Ludhiana",
    quote: "Bachche pehli baar khud doodh maang ke peete hain. Upar itni moti malai aati hai, bilkul ghar ka doodh.",
    kind: "video" as const,
    tone: "from-forest to-forest-600",
  },
  {
    name: "Arjun Malhotra",
    role: "Strength coach, Gurugram",
    quote: "Switched my morning shake to A2. No bloating, and the batch report on every cap means I know exactly what's in it.",
    kind: "video" as const,
    tone: "from-earth to-ghee-dark",
  },
  {
    name: "Clinical nutritionist",
    role: "Chandigarh (name pending)",
    quote: "I recommend glass-bottled, lab-tested milk to my patients. Seeing FAT and SNF per batch is rare in India.",
    kind: "video" as const,
    tone: "from-forest-600 to-ghee",
  },
  {
    name: "Simran Gill",
    role: "New mom, Mohali",
    quote: "Delivery has never been late. 6:40 AM, every single day, even in the January fog.",
    kind: "text" as const,
  },
  {
    name: "Rajiv & Anita Sood",
    role: "Retired couple, Panchkula",
    quote: "We paused for our Shimla trip from the app in two taps, and it restarted the day we got back.",
    kind: "text" as const,
  },
  {
    name: "Kabir Sethi",
    role: "Home baker, Delhi",
    quote: "The bilona ghee smells like my nani's kitchen. My customers can taste the difference in the pinni.",
    kind: "text" as const,
  },
];

export const faqs = [
  {
    q: "How do glass bottle returns and recycling work?",
    a: "Rinse the empty bottle and leave it outside your door. Your delivery partner picks it up when dropping tomorrow's milk. Each bottle carries a ₹50 refundable deposit, added once with your first order and returned in full when you stop the subscription. Returned bottles are washed, sterilised and reused, so no plastic ever reaches your home.",
  },
  {
    q: "What time will my milk arrive?",
    a: `Every morning before ${brand.deliveryCutoff}, in time for your morning chai. If a delivery is ever late, message us on WhatsApp and we will sort it out.`,
  },
  {
    q: "How is this different from plastic pouch milk?",
    a: "Pouch milk is usually pooled from many villages, travels for one to three days, and may be standardised or made partly from milk powder. Ours comes from our own herd, reaches you within hours of milking, never touches plastic, and every batch has a public lab report.",
  },
  {
    q: "Can I pause my subscription when going on vacation?",
    a: "Yes. Pause from WhatsApp or your account before 9 PM and the next morning's delivery stops. Pick a return date and it restarts on its own. There are no charges for paused days.",
  },
  {
    q: "Where in Punjab / NCR do you deliver?",
    a: "We currently deliver across Ludhiana, Chandigarh tricity (Mohali, Panchkula, Zirakpur) and parts of Gurugram and South Delhi. Check your pin code in the footer below. We open new areas every month.",
  },
  {
    q: "What does A2 milk mean?",
    a: "Indian breeds like Sahiwal produce milk with only the A2 type of beta-casein protein. Many people find it easier to digest than milk from cross-bred cows.",
  },
  {
    q: "Do I need to boil the milk?",
    a: "Yes. Our milk is raw and chilled, not pasteurised, so please boil it once before drinking, just as you would with milk from a village dairy.",
  },
];

/* PLACEHOLDER: replace with your real serviceable pin codes */
export const pincodes: Record<string, string> = {
  "141001": "Ludhiana",
  "141002": "Ludhiana",
  "141012": "Ludhiana",
  "160017": "Chandigarh",
  "160022": "Chandigarh",
  "160062": "Mohali",
  "134109": "Panchkula",
  "140603": "Zirakpur",
  "122001": "Gurugram",
  "122002": "Gurugram",
  "110017": "New Delhi",
};
