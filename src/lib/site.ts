// Central site configuration. Swap these values (and the files in /public
// that they point to) without touching JSX/CSS.

export const SITE = {
  name: "Joshua Song",
  affiliation: "Princeton University",
  location: "Princeton, NJ",

  // Drop your headshot at public/avatar/joshua.jpg (or change the path).
  // Placeholder SVG shipped so the layout renders on a fresh clone.
  avatar: "/avatar/placeholder.svg",

  summary:
    "Robotics researcher interested in manipulation, controls, and physical robotic systems. Occasional sculptor, doodler, and animator.",

  socials: {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/in/",
    email: "mailto:you@princeton.edu",
  },
} as const;

export type NavItem = { href: string; label: string };

export const NAV_ITEMS: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/sketchbook", label: "Sketchbook" },
  { href: "/misc", label: "Misc" },
];
