export interface NavLink {
  id: string;
  label: string;
  href: string;
}


export const navLinks: NavLink[] = [
  {
    id: "home",
    label: "Home",
    href: "#home",
  },
  {
    id: "community",
    label: "Community",
    href: "#community",
  },
  {
    id: "generate",
    label: "Generate",
    href: "#generate",
  },
  {
    id: "pricing",
    label: "Pricing",
    href: "#pricing",
  },
];