export const colors = {
  heading: "text-gray-900 dark:text-gray-100",
  overline: "text-gray-400 dark:text-gray-500",
  caption: "text-gray-500 dark:text-gray-400",
  redText: "text-red-700 dark:text-red-500",
  paneText: "text-gray-50 dark:text-gray-700",
  paneBg: "bg-gray-900 dark:bg-gray-100",
  link: " text-red-700 dark:text-red-500",
  linkVisited: " visited:text-red-900 dark:visited:text-red-700",
};

let section = "mt-12 sm:mt-14 md:mt-16";
export const spaces = {
  section,
  heading: "mb-4 mt-12",
  headingSection: `${section} mb-4`,
};

export const typo = {
  overline: `text-sm uppercase tracking-widest ${colors.overline}`,
  h1: `text-4xl sm:text-5xl md:text-6xl font-semibold ${colors.heading}`,
  h2: `text-3xl sm:text-4xl md:text-5xl font-semibold ${colors.heading}`,
  h3: `text-2xl sm:text-3xl md:text-4xl font-semibold ${colors.heading}`,
  h4: `text-xl max-w-sm:text-2xl md:text-3xl font-semibold ${colors.heading}`,
  subTitle: `text-base font-semibold font-semibold ${colors.heading}`,
  subTitle2: `text-sm font-semibold font-semibold ${colors.heading}`,
  caption: `text-xs ${colors.caption}`,
  link: `hover:underline ${colors.link} ${colors.linkVisited}`,
};
