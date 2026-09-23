// Central site configuration. Swap these values (and the files in /public
// that they point to) without touching JSX/CSS.

export const SITE = {
  name: "Joshua Song",
  affiliation: "Princeton University",
  location: "Princeton, NJ",

  // Drop your headshot at public/avatar/joshua.jpg (or change the path).
  // Placeholder SVG shipped so the layout renders on a fresh clone.
  avatar: "/avatar/placeholder.svg",

  // Navbar wordmark. See public/brand/README.md for the swap workflow.
  wordmark: {
    src: "/brand/wordmark.svg",
    width: 40,
    height: 40,
    alt: "JS",
  },

  summary:
    "Robotics researcher interested in manipulation, controls, and physical robotic systems. Occasional sculptor, doodler, and animator.",

  socials: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/in/",
    email: "mailto:you@princeton.edu",
  },
} as const;

export type NavItem = { href: string; label: string };

// About / Experience / Projects / Education are stacked sections on the home
// page — their hrefs are hash anchors. Sketchbook and Misc are separate routes.
export const NAV_ITEMS: NavItem[] = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#education", label: "Education" },
  { href: "/sketchbook", label: "Sketchbook" },
  { href: "/misc", label: "Misc" },
];
