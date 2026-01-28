export const CLASSES = {
	layout: {
		body: "bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans min-h-screen flex flex-col transition-colors duration-300",
		header: "border-b sticky top-0 z-50 transition-colors duration-300",
		headerBrand:
			"text-2xl font-bold text-brand-50 hover:text-white transition-colors",
		footer:
			"bg-neutral-300 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-400 py-12 border-t border-neutral-400 dark:border-neutral-800 transition-colors duration-300 text-center",
		section: "py-20 transition-colors duration-300",
		sectionWhite:
			"py-20 bg-white dark:bg-neutral-950 transition-colors duration-300",
		sectionMuted:
			"py-20 bg-neutral-100 dark:bg-neutral-800 transition-colors duration-300",
		sectionDark: "py-20 bg-brand-500 text-white transition-colors duration-300",
		container: "container mx-auto px-12 lg:px-32",
		containerNarrow: "max-w-4xl mx-auto px-12 lg:px-32",
		containerArticle: "max-w-3xl mx-auto px-12 lg:px-32",
		pagePadding: "py-20",
		headerContainer:
			"container mx-auto px-4 py-4 flex justify-between items-center",
		headerLogo: "h-12 w-auto",
		hero: "bg-brand-50 dark:bg-[var(--hero-dark-bg)] py-20 lg:py-32 transition-colors duration-300",
		grid2: "grid grid-cols-1 lg:grid-cols-2 gap-16",
		grid3: "grid grid-cols-1 md:grid-cols-3 gap-8",
		grid4: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
		stackLarge: "space-y-12",
		stackMedium: "space-y-8",
		stackSmall: "space-y-4",
		navHorizontal: "flex space-x-8",
		navVertical: "space-y-2",
		aboutHeader:
			"bg-neutral-50 dark:bg-neutral-800 py-20 border-b border-neutral-100 dark:border-neutral-900",
	},
	typography: {
		h1: "text-4xl lg:text-6xl font-extrabold text-neutral-900 dark:text-white leading-tight",
		h1Page:
			"text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white leading-tight",
		h1Medium:
			"text-4xl font-extrabold text-neutral-900 dark:text-white leading-tight",
		h2: "text-3xl font-bold text-neutral-900 dark:text-white",
		h2Page: "text-2xl font-bold text-neutral-900 dark:text-white",
		h2Centered: "text-3xl font-bold text-neutral-900 dark:text-white mb-12",
		h3: "text-xl font-bold text-neutral-900 dark:text-white",
		lead: "text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed",
		body: "text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed",
		link: "text-brand-600 dark:text-brand-400 hover:underline transition-colors",
		action:
			"text-brand-500 dark:text-brand-400 font-bold flex items-center gap-1 group-hover:gap-2 transition-all",
		navLink:
			"text-brand-100/70 hover:text-white font-medium transition-all duration-200",
		navLinkActive: "text-white font-bold border-b-2 border-brand-400 pb-1",
		date: "text-sm text-neutral-500 dark:text-neutral-400",
		roleBadge:
			"text-brand-600 dark:text-brand-400 font-bold mb-8 uppercase tracking-widest text-xs",
		footerHeading:
			"text-lg font-bold mb-4 text-neutral-900 dark:text-neutral-200",
		footerLink:
			"hover:text-brand-600 dark:hover:text-brand-400 transition-colors",
		footerText:
			"text-neutral-700 dark:text-neutral-500 text-sm leading-relaxed",
		listItem: "flex items-start gap-2 text-neutral-600 dark:text-neutral-400",
		listItemLabel:
			"text-neutral-700 dark:text-neutral-300 leading-tight font-medium",
		copyright:
			"border-t border-neutral-400 dark:border-neutral-800 mt-12 pt-8 text-center text-neutral-600 dark:text-neutral-600 text-sm",
	},
	prose: {
		base: "prose prose-lg prose-neutral dark:prose-invert max-w-none prose-headings:text-neutral-900 dark:prose-headings:text-white prose-a:text-brand-600 dark:prose-a:text-brand-400",
	},
	button: {
		base: "rounded-lg font-bold transition-colors duration-200 px-8 py-4",
		primary: "bg-brand-500 text-white hover:bg-brand-600",
		secondary:
			"bg-white dark:bg-neutral-800 text-brand-600 dark:text-brand-400 border border-brand-500 dark:border-brand-400 hover:bg-brand-50 dark:hover:bg-neutral-700",
	},
	form: {
		label:
			"block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1",
		input:
			"w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all",
		grid: "grid grid-cols-1 md:grid-cols-2 gap-6",
	},
	card: {
		base: "bg-white dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 rounded-2xl shadow-sm transition-all duration-300 p-8",
		padded: "p-10",
		hover: "hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
		highlight:
			"bg-brand-50 dark:bg-neutral-800 p-10 rounded-3xl transition-colors duration-300",
	},
	visual: {
		quote:
			"bg-brand-500 text-white p-6 rounded-xl italic shadow-lg dark:shadow-none",
		iconBox:
			"w-12 h-12 bg-brand-100 dark:bg-neutral-700 rounded-lg flex items-center justify-center transition-colors",
		iconBoxRound:
			"w-12 h-12 bg-brand-100 dark:bg-neutral-800 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300",
		imagePlaceholder:
			"bg-neutral-100 dark:bg-neutral-700 rounded-3xl border-2 border-dashed border-neutral-300 dark:border-neutral-600 flex items-center justify-center",
		placeholderText: "text-neutral-600 dark:text-neutral-400 font-bold",
		avatarPlaceholder:
			"w-32 h-32 bg-neutral-100 dark:bg-neutral-700 rounded-full border-4 border-white dark:border-neutral-600 shadow-md flex-shrink-0 flex items-center justify-center",
		avatarAccent:
			"absolute -bottom-2 -right-2 bg-brand-500 w-8 h-8 rounded-full border-4 border-white dark:border-neutral-900",
		checkIcon:
			"h-5 w-5 text-brand-500 dark:text-brand-400 mt-0.5 flex-shrink-0",
		checkIconWrapper: "mt-1 bg-brand-50 dark:bg-neutral-800 p-1 rounded-full",
		accentLine: "h-1 w-12 bg-brand-500 rounded-full",
		testimonialQuoteIcon:
			"absolute top-8 left-8 w-10 h-10 text-brand-100 dark:text-neutral-700 transform -translate-x-1/2 -translate-y-1/2",
		themeToggle:
			"text-neutral-500 hover:text-brand-600 focus:outline-none dark:text-neutral-400 dark:hover:text-brand-500 rounded-lg text-sm p-2.5 ml-4",
	},
	blog: {
		searchWrapper: "relative w-full md:w-64",
		searchIcon:
			"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
		searchIconSvg: "w-4 h-4 text-neutral-500 dark:text-neutral-400",
		postItem: "group post-item",
		postTitle:
			"text-2xl font-bold text-neutral-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors mb-4",
	},
};
