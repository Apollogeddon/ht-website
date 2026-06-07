export const SITE_TITLE = "Harnessing Talent";
export const SITE_DESCRIPTION =
  "Management consultancy helping businesses achieve success through the best utilisation of their people resources.";
export const SITE_LANG = "en";

export const DATE_LOCALE = "en-au";
export const DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const THEME_STORAGE_KEY = "theme";

export const ROUTES = {
  HOME: import.meta.env.BASE_URL,
  SOLUTIONS: `${import.meta.env.BASE_URL}solutions`,
  BLOG: `${import.meta.env.BASE_URL}blog`,
  TESTIMONIALS: `${import.meta.env.BASE_URL}testimonials`,
  CONTACT: `${import.meta.env.BASE_URL}contact`,
  POLICIES: `${import.meta.env.BASE_URL}policies`,
  PROFILES: `${import.meta.env.BASE_URL}profiles`,
};

export const CONTACT_INFO = {
  email: "tina@harnessingtalent.com.au",
  phone: "0412 857 639",
  location: "Adelaide, SA",
  location_full: "Adelaide, South Australia",
};

export const NAVIGATION = [
  { label: "Home", href: ROUTES.HOME },
  { label: "Solutions", href: ROUTES.SOLUTIONS },
  { label: "Blog Posts", href: ROUTES.BLOG },
  { label: "Testimonials", href: ROUTES.TESTIMONIALS },
  {
    label: "About Us",
    href: ROUTES.PROFILES,
    children: [
      { label: "Profiles", href: ROUTES.PROFILES },
      { label: "Policies", href: ROUTES.POLICIES },
      { label: "Contact", href: ROUTES.CONTACT },
    ],
  },
];

export const QUOTES = [
  {
    text: "I have far more respect for the person with a single idea who gets there than for the person with a thousand ideas who does nothing.",
    author: "Thomas Edison",
  },
  {
    text: "Insanity is doing the same thing over and over again and expecting different results.",
    author: "Albert Einstein",
  },
  {
    text: "The right people in your organisation are your most important asset.",
    author: "Jim Collins",
  },
  {
    text: "Doing the right thing is more important than doing the thing right.",
    author: "Peter Drucker",
  },
];

export const HOME_TESTIMONIAL = {
  quote:
    "Tina gave me a much clearer understanding of what makes good organisations work well — I'm very glad I asked for her help!",
  author: "Sara Blunt",
  role: "CEO, Kalyra Communities",
};

export const TRUSTED_ORGS = ["Kalyra Communities"];

export const PRINCIPAL_CONSULTANT = {
  name: "Tina Hudson",
  role: "Principal Consultant",
  bio: "Tina is a seasoned human resources and organizational design professional with extensive experience in helping businesses optimize their people resources.",
  linkedin: "",
};

export const SOLUTIONS = [
  {
    slug: "strategic-people-partner",
    title: "Strategic People Partner",
    description: "Develop strategic people plans to align with business strategy and foster high-performing cultures.",
    features: [
      "Trusted advice to senior executives on HR matters",
      "Analyzing talent pools for workforce and succession planning",
      "Identifying gaps in organizational and employee capabilities",
    ],
    body: "[Placeholder — content to be supplied]",
  },
  {
    slug: "organisation-analysis",
    title: "Organisation Analysis",
    description: "Deliver human resources strategic plans that support organizational effectiveness.",
    features: [
      "Link people initiatives with business objectives",
      "Manage human resource costs effectively",
      "Align structure with strategic priorities",
    ],
    body: "[Placeholder — content to be supplied]",
  },
  {
    slug: "strategy-into-action",
    title: "Strategy into Action",
    description:
      "Translating your high-level business goals into practical, day-to-day employee activities and metrics.",
    features: ["Performance management systems", "KPI development", "Change management support"],
    body: "[Placeholder — content to be supplied]",
  },
  {
    slug: "improving-accountability",
    title: "Improving Accountability",
    description:
      "Drive accountability through careful job design, clarifying roles and authorities to improve performance management.",
    features: ["Job description review", "Decision rights framework", "Performance review processes"],
    body: "[Placeholder — content to be supplied]",
  },
  {
    slug: "the-right-people-in-the-right-jobs",
    title: "The Right People in the Right Jobs",
    description: "Ensuring you have the right talent in critical roles to drive business success.",
    features: ["Capability assessment", "Recruitment framework", "Succession planning"],
    body: "[Placeholder — content to be supplied]",
  },
  {
    slug: "hr-leadership-network",
    title: "HR Leadership Network",
    description: "Connecting HR leaders and providing them with the tools and support they need to drive change.",
    features: ["Networking opportunities", "Best practice sharing", "Leadership development"],
    body: "[Placeholder — content to be supplied]",
  },
];

export const HOME_ABOUT_US = {
  eyebrow: "About Us",
  title: "About Harnessing Talent",
  paragraphs: ["[Placeholder — content to be supplied from old site]"],
};

export const HOME_SOLUTIONS_EXPERTISE = {
  eyebrow: "Solutions & Expertise",
  title: "Our Solutions & Expertise",
  paragraphs: ["[Placeholder — content to be supplied from old site]"],
};

export const WHY_CHOOSE_US = {
  eyebrow: "Why Choose Us",
  title: "Why Choose Us?",
  paragraphs: [
    "We take time to understand the business need and believe that creating the best people and organisation design solutions means doing more and going further.",
    "We support leaders through the use of diagnostic tools, delivery of practical solutions and the provision of honest advice.",
    "We don't just think about your business for today – we also focus on tomorrow – how you can get the best out of your people both now and in the future.",
  ],
};

export const SOLUTIONS_INTRO =
  "We take a forward-looking approach to help businesses get the best out of their people both now and in the future.";

export const SOLUTIONS_CONTENT = {
  title: "Solutions",
  eyebrow: "What We Offer",
};

export const WE_CAN_HELP = {
  title: "We Can Help",
  description: "Get in touch to find out how Harnessing Talent can help your organisation thrive.",
  primaryLabel: "Contact Us",
};

export const FOOTER_SECTIONS = {
  contact: "Contact Details",
  services: "Services & Insights",
  company: "Company",
  copyright: "All rights reserved.",
};

export const UI_LABELS = {
  readMore: "Read more",
  backToBlog: "Back to all posts",
  photoPlaceholder: "Photo",
  imagePlaceholder: "Business Success Image",
};

export const BLOG_CONTENT = {
  title: "Blog Posts",
  searchPlaceholder: "Search articles...",
  noResults: "No articles found matching your search.",
};

export const CONTACT_PAGE = {
  title: "Contact Us",
  subtitle: "Ready to improve your business performance through people? Get in touch with us today.",
  labels: {
    email: "Email",
    phone: "Phone",
    location: "Location",
  },
  form: {
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email Address",
    message: "Message",
    submit: "Send Message",
  },
};

export const TESTIMONIALS_CONTENT = {
  title: "Testimonials",
  description: "Hear what our clients say about working with Harnessing Talent.",
};

export const HOME_CTA = {
  title: "Ready to unlock the potential of your people?",
  description: "Let's have a conversation about what's holding your organisation back — and how to fix it.",
  primaryLabel: "Start the conversation",
  secondaryLabel: "Explore our solutions",
};

export const POLICIES_CONTENT = {
  title: "Our Policies",
  privacyTitle: "Privacy Policy",
  sections: [
    {
      title: "Purpose of the Policy",
      content:
        "This policy outlines our ongoing obligations to you in respect of how we manage your Personal Information.",
    },
    {
      title: "Policy Statement",
      content:
        "We respect the rights and privacy of all individuals and are committed to complying with the Privacy Act and the Australian Privacy Principles.",
    },
    {
      title: "The kinds of personal information we collect and hold",
      content:
        "We collect and hold personal information that is reasonably necessary for the proper performance of our functions and activities as a management consultancy.",
    },
    {
      title: "How we collect personal information",
      content:
        "We collect personal information in a number of ways, including correspondence, by telephone and email, via our website, and from third parties.",
    },
    {
      title: "How we use your personal information",
      content:
        "We collect your Personal Information for the primary purpose of providing our services to you, providing information to our clients and marketing.",
    },
    {
      title: "Sensitive information",
      content:
        "Sensitive information is defined in the Privacy Act to include information or opinion about such things as an individual's racial or ethnic origin, political opinions, membership of a political association, religious or philosophical beliefs, membership of a trade union or other professional body, criminal record or health information.",
    },
    {
      title: "Disclosure of personal information",
      content: "Your Personal Information may be disclosed in a number of circumstances including the following:",
      list: ["Third parties where you consent to the use or disclosure; and", "Where required or authorised by law."],
    },
    {
      title: "How we store your personal information",
      content:
        "Your Personal Information is stored in a manner that reasonably protects it from misuse and loss and from unauthorized access, modification or disclosure.",
    },
    {
      title: "Access to your personal information",
      content:
        "You may access the Personal Information we hold about you and to update and/or correct it, subject to certain exceptions. If you wish to access your Personal Information, please contact us in writing.",
    },
  ],
};
