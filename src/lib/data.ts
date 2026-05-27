export const navLinks = [
  { label: "Home", href: "#home", active: true },
  { label: "Services", href: "#services" },
  { label: "Prices", href: "#prices" },
  { label: "About Us", href: "#about", hasDropdown: true },
  { label: "Contact Us", href: "#contact" },
] as const;

export const creativeSteps = [
  {
    number: "01",
    icon: "gear",
    text: "Select the package that matches your needs",
    position: "left-top",
  },
  {
    number: "02",
    icon: "megaphone",
    text: "Pick a design that is in line with your brand.",
    position: "left-bottom",
  },
  {
    number: "03",
    icon: "save",
    text: "Enter your store details and finalize the payment process.",
    position: "center-top",
  },
  {
    number: "04",
    icon: "target",
    text: "Now that your store is ready for sale, add your products",
    position: "right-bottom",
  },
] as const;

export const differentSlides = [
  {
    number: "01",
    title: "Easy online store with your brand name",
    description:
      "Get your business name up and running right away, without any complexity or technical expertise.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
  },
  {
    number: "02",
    title: "Professional designs ready to launch",
    description:
      "Browse ready-made designs and choose the one that suits your brand at no additional charge.",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
  },
  {
    number: "03",
    title: "Secure payment and quick setup",
    description:
      "Fill out basic information and complete payment in a quick and secure manner.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
  },
  {
    number: "04",
    title: "Full support for your store growth",
    description:
      "Our support services help you integrate your store and find everything in one place.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
  },
] as const;

export const services = [
  {
    title: "Marketing",
    description: "Now that your store is ready for sale, add your products",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    title: "Photography",
    description: "Now that your store is ready for sale, add your products",
    image:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&q=80",
  },
  {
    title: "Support",
    description: "Now that your store is ready for sale, add your products",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
  },
  {
    title: "Social Media",
    description: "Now that your store is ready for sale, add your products",
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7a162?w=600&q=80",
  },
] as const;

export const clients = [
  { name: "Store Name", bg: "#3d2a5c", label: "Gazelle" },
  { name: "Store Name", bg: "#000000", label: "URBAN" },
  { name: "Store Name", bg: "#8b7355", label: "YARNISTA" },
  { name: "Store Name", bg: "#c41e3a", label: "tokyo" },
  { name: "Store Name", bg: "#1a365d", label: "COLLECTION" },
  { name: "Store Name", bg: "#2d6a6a", label: "Brand" },
] as const;

export const partners = [
  "myFatoorah",
  "pass",
  "SADAD",
  "JEYAAD",
  "E-Commerce",
] as const;

export const designCategories = [
  { title: "Health & Beauty", emoji: "🚚" },
  { title: "Perfumes", emoji: "🧴" },
  { title: "Electronics", emoji: "⚡" },
  { title: "Flowers", emoji: "💐" },
  { title: "Outfits", emoji: "👗" },
] as const;

export const footerLinks = {
  quick: [
    { label: "Terms & Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
  siteMap: [
    { label: "Home", href: "#home", active: true },
    { label: "Services", href: "#services" },
    { label: "Prices", href: "#prices" },
    { label: "About Us", href: "#about" },
    { label: "Contact Us", href: "#contact" },
  ],
  social: ["Instagram", "Facebook", "YouTube", "TikTok"],
} as const;

export const contactInfo = {
  phone: "(+974)50988700",
  emails: ["info@etrolley.net", "sales@etrolley.net"],
  address: "Qatar - Doha - Khalifa City",
} as const;
