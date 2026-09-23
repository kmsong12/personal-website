import Image from "next/image";
import Link from "next/link";

import { NAV_ITEMS, SITE } from "@/lib/site";
import { EmailIcon, GitHubIcon, LinkedInIcon } from "./SocialIcons";

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebarInner">
                <div className="avatarWrap">
                    <Image
                        className="avatar"
                        src={SITE.avatar}
                        alt={`${SITE.name} avatar`}
                        width={112}
                        height={112}
                        priority
                    />
                </div>

                <h2 className="sidebarName">{SITE.name}</h2>
                <p className="sidebarAffil">{SITE.affiliation}</p>
                <p className="sidebarLocation">{SITE.location}</p>

                <div className="socialRow">
                    <a
                        href={SITE.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        <GitHubIcon />
                    </a>
                    <a
                        href={SITE.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                    >
                        <LinkedInIcon />
                    </a>
                    <a href={SITE.socials.email} aria-label="Email">
                        <EmailIcon />
                    </a>
                </div>

                <hr className="sidebarDivider" />

                <ul className="sidebarNav">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href}>{item.label}</Link>
                        </li>
                    ))}
                </ul>

                <hr className="sidebarDivider" />

                <p className="sidebarSummary">{SITE.summary}</p>
            </div>
        </aside>
    );
}
