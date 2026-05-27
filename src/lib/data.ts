export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Creatives", href: "#creatives" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const;

export const creatives = [
  {
    id: "01",
    title: "Brand Identity",
    category: "Visual Systems",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
  },
  {
    id: "02",
    title: "Campaign Design",
    category: "Advertising",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
  },
  {
    id: "03",
    title: "Merchandising",
    category: "Product Experience",
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e09adf70?w=800&q=80",
  },
  {
    id: "04",
    title: "Digital Presence",
    category: "Web & Social",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
  },
  {
    id: "05",
    title: "Packaging",
    category: "Retail Impact",
    image:
      "https://images.unsplash.com/photo-1607083206869-4caa2a7f3f62?w=800&q=80",
  },
  {
    id: "06",
    title: "Event Activation",
    category: "Experiential",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
  },
] as const;

export const experiences = [
  {
    number: "01",
    title: "Strategic Discovery",
    description:
      "We immerse ourselves in your brand, audience, and goals—building a creative foundation that ensures every deliverable is intentional and on-message.",
  },
  {
    number: "02",
    title: "Concept to Craft",
    description:
      "From mood boards to final production, our in-house team handles design, prototyping, and refinement with meticulous attention to every detail.",
  },
  {
    number: "03",
    title: "Flawless Execution",
    description:
      "On-time delivery backed by quality assurance. We manage production, logistics, and follow-through so your brand shows up exactly as promised.",
  },
  {
    number: "04",
    title: "Lasting Partnership",
    description:
      "Dedicated support before, during, and after every project. We grow with your brand and adapt as your needs evolve.",
  },
] as const;

export const services = [
  {
    id: "branding",
    label: "Branding",
    title: "Brand Strategy & Identity",
    description:
      "Define your market position with memorable visual systems, voice guidelines, and brand architecture that sets you apart.",
    features: [
      "Logo & visual identity",
      "Brand guidelines",
      "Tone of voice",
      "Market positioning",
    ],
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799314346d?w=1200&q=80",
  },
  {
    id: "advertising",
    label: "Advertising",
    title: "Campaigns & Creative Production",
    description:
      "High-impact campaigns across print, digital, and out-of-home—crafted to captivate audiences and drive measurable results.",
    features: [
      "Campaign concepting",
      "Art direction",
      "Copywriting",
      "Multi-channel rollout",
    ],
    image:
      "https://images.unsplash.com/photo-1557804506-669a77944c8d?w=1200&q=80",
  },
  {
    id: "merchandising",
    label: "Merchandising",
    title: "Custom Merchandise & Products",
    description:
      "Transform ideas into tangible brand experiences with premium promotional products, packaging, and retail-ready solutions.",
    features: [
      "Product sourcing",
      "Custom manufacturing",
      "Packaging design",
      "Quality control",
    ],
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=1200&q=80",
  },
  {
    id: "digital",
    label: "Digital",
    title: "Web, Social & Digital Marketing",
    description:
      "Modern digital experiences that convert—from responsive websites to social content and performance-driven marketing.",
    features: [
      "Website design",
      "Social media assets",
      "SEO optimization",
      "Analytics & reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
  },
] as const;

export const stats = [
  { value: "15+", label: "Years in Business" },
  { value: "500+", label: "Projects Delivered" },
  { value: "200+", label: "Brands Served" },
  { value: "100%", label: "On-Time Delivery" },
] as const;

export const testimonials = [
  {
    quote:
      "Etrolley transformed our brand presence. Every piece they delivered exceeded expectations—from concept to final product.",
    author: "María González",
    role: "Marketing Director, Andina Foods",
  },
  {
    quote:
      "Their team understood our vision immediately. Professional, creative, and always on deadline. A true strategic partner.",
    author: "Carlos Mendoza",
    role: "CEO, Nova Retail Group",
  },
  {
    quote:
      "The merchandising quality is outstanding. Our promotional products have become conversation starters at every event.",
    author: "Ana Lucía Torres",
    role: "Brand Manager, Café del Valle",
  },
] as const;

export const faqs = [
  {
    question: "What services does Etrolley offer?",
    answer:
      "We provide full-service advertising and merchandising solutions including brand identity, campaign production, custom merchandise, packaging, and digital marketing—all managed by our in-house creative team.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. While based in Colombia, we partner with national and international brands, managing production and logistics for seamless global delivery.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Timelines vary by scope. Standard projects run 2–4 weeks; complex campaigns may take 6–8 weeks. We provide clear milestones at kickoff and keep you updated throughout.",
  },
  {
    question: "How do I get started?",
    answer:
      "Schedule a free consultation through our contact form. We'll discuss your goals, budget, and timeline to build a customized proposal tailored to your brand.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    text: "Analyze your brand, audience, and objectives to define a clear creative direction.",
  },
  {
    step: "02",
    title: "Design",
    text: "Develop concepts, refine visuals, and align every asset with your brand identity.",
  },
  {
    step: "03",
    title: "Produce",
    text: "Execute with precision—managing production, quality checks, and timelines.",
  },
  {
    step: "04",
    title: "Deliver",
    text: "Ship on schedule with full support and documentation for seamless rollout.",
  },
] as const;
