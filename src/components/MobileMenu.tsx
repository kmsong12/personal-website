import Link from "next/link";
import { NAV_ITEMS } from "@/lib/site";

type MobileMenuProps = {
    closeMenu: () => void;
};

export default function MobileMenu({ closeMenu }: MobileMenuProps) {
    return (
        <div className="mobileMenu">
            {NAV_ITEMS.map((item) => (
                <Link key={item.href} href={item.href} onClick={closeMenu}>
                    {item.label}
                </Link>
            ))}
        </div>
    );
}
