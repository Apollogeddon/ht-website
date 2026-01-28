export const SITE_TITLE = "Harnessing Talent";
export const SITE_DESCRIPTION =
	"Management consultancy helping businesses achieve success through the best utilisation of their people resources.";
export const SITE_LANG = "en";
export const SITE_LOGO = `${import.meta.env.BASE_URL}harnessing-talent-logo.png`;

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
	ABOUT: `${import.meta.env.BASE_URL}about`,
	CONTACT: `${import.meta.env.BASE_URL}contact`,
	POLICIES: `${import.meta.env.BASE_URL}policies`,
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
	{ label: "About Us", href: ROUTES.ABOUT },
];

export const COMPANY_VALUES = [
	{
		title: "Value to Customers",
		description:
			"Listening well and delivering outcomes that resolve problems and improve performance.",
	},
	{
		title: "Integrity and Respect",
		description:
			"Highest levels of integrity, ethical behavior, and valuing diversity.",
	},
	{
		title: "Practical Solutions",
		description:
			"Delivering results that are easy to implement with significant impact.",
	},
];

export const PRINCIPAL_CONSULTANT = {
	name: "Tina Hudson",
	role: "Principal Consultant",
	bio: "Tina is a seasoned human resources and organizational design professional with extensive experience in helping businesses optimize their people resources.",
};

export const SOLUTIONS = [
	{
		title: "Strategic People Partner",
		description:
			"Develop strategic people plans to align with business strategy and foster high-performing cultures.",
		features: [
			"Trusted advice to senior executives on HR matters",
			"Analyzing talent pools for workforce and succession planning",
			"Identifying gaps in organizational and employee capabilities",
		],
	},
	{
		title: "Organisation Analysis",
		description:
			"Deliver human resources strategic plans that support organizational effectiveness.",
		features: [
			"Link people initiatives with business objectives",
			"Manage human resource costs effectively",
			"Align structure with strategic priorities",
		],
	},
	{
		title: "Strategy into Action",
		description:
			"Translating your high-level business goals into practical, day-to-day employee activities and metrics.",
		features: [
			"Performance management systems",
			"KPI development",
			"Change management support",
		],
	},
	{
		title: "Improving Accountability",
		description:
			"Drive accountability through careful job design, clarifying roles and authorities to improve performance management.",
		features: [
			"Job description review",
			"Decision rights framework",
			"Performance review processes",
		],
	},
	{
		title: "The Right People in the Right Jobs",
		description:
			"Ensuring you have the right talent in critical roles to drive business success.",
		features: [
			"Capability assessment",
			"Recruitment framework",
			"Succession planning",
		],
	},
	{
		title: "HR Leadership Network",
		description:
			"Connecting HR leaders and providing them with the tools and support they need to drive change.",
		features: [
			"Networking opportunities",
			"Best practice sharing",
			"Leadership development",
		],
	},
];

export const HOME_SERVICES = [
	{
		title: "Engagement",
		description:
			"Improve employee engagement and trust through practical people-related processes.",
	},
	{
		title: "Performance",
		description:
			"Maximise workforce performance by building organizational structures aligned with strategy.",
	},
	{
		title: "Strategic Results",
		description:
			"Reduce costs, drive growth, and strengthen long-term organizational health.",
	},
];

export const HERO_CONTENT = {
	title: "Business success through people",
	description:
		"At Harnessing Talent, we help businesses achieve success through the best utilisation of their people resources. We work with you to improve employee engagement and trust through practical, outcome-focused solutions.",
	primaryButton: "Get in Touch",
	secondaryButton: "Our Solutions",
};

export const WHY_CHOOSE_US = {
	title: "Why Choose Us?",
	paragraphs: [
		"We take time to understand the business need and believe that creating the best people and organisation design solutions means doing more and going further.",
		"We support leaders through the use of diagnostic tools, delivery of practical solutions and the provision of honest advice.",
	],
	quote:
		"We don’t just think about your business for today – we also focus on tomorrow – how you can get the best out of your people both now and in the future.",
};

export const COMPANY_OVERVIEW = {
	title: "Company Overview",
	description: `${SITE_TITLE} helps organizations maximize workforce performance by building organizational structures and people processes aligned with business strategies. We aim to reduce costs, drive growth, and strengthen both short-term performance and long-term organizational health.`,
	points: [
		"Analyze and review organizational structure to ensure effective work completion.",
		"Link people processes to strategy, focusing management attention on strategic priorities.",
		"Drive accountability through careful job design and role clarity.",
		"Realize people's potential by ensuring they are in the right roles at the right time.",
	],
};

export const SOLUTIONS_INTRO =
	"We take a forward-looking approach to help businesses get the best out of their people both now and in the future.";

export const SOLUTIONS_CONTENT = {
	title: "Solutions",
};

export const HOME_CONTENT = {
	howWeHelp: "How We Can Help",
};

export const ABOUT_CONTENT = {
	title: "About Us",
	intro:
		"Helping organizations maximize workforce performance through strategic people processes and organizational design.",
	valuesTitle: "Our Values",
	profilesTitle: "Our Profiles",
	contactLabel: "Contact:",
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
	subtitle:
		"Ready to improve your business performance through people? Get in touch with us today.",
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
};

export const POLICIES_CONTENT = {
	title: "Our Policies",
	privacyTitle: "Privacy Policy",
	privacyEnquiries: "Privacy Enquiries",
	privacyEnquiriesText:
		"If you have any queries or complaints about our Privacy Policy please contact us at:",
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
			content:
				"Your Personal Information may be disclosed in a number of circumstances including the following:",
			list: [
				"Third parties where you consent to the use or disclosure; and",
				"Where required or authorised by law.",
			],
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
