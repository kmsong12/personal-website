import Link from "next/link";

type MobileMenuProps = {
    closeMenu: () => void;
};

export default function MobileMenu({ closeMenu }: MobileMenuProps) {
    return (
        <div className="mobileMenu">
        <Link href="/work" onClick={closeMenu}>
            Work
        </Link>
        <Link href="/sketchbook" onClick={closeMenu}>
            Sketchbook
        </Link>
        <Link href="/misc" onClick={closeMenu}>
            Misc
        </Link>
        <Link href="/about" onClick={closeMenu}>
            About
        </Link>
        </div>
  );
}