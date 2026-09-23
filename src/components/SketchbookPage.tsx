import type { ReactNode } from "react";

type SketchbookPageProps = {
    title?: ReactNode;
    children: ReactNode;
    /** extra doodle nodes positioned inside the page card */
    doodles?: ReactNode;
};

/**
 * A sketchbook-shaped card: off-white "page" on the beige desk, with a
 * left-edge spiral binding rendered via CSS (see `.sketchbook::before`),
 * a subtle rotation, and paper-shadow. Wrap any intro content in this.
 */
export default function SketchbookPage({
    title,
    children,
    doodles,
}: SketchbookPageProps) {
    return (
        <article className="sketchbook">
            {title && <h1 className="sketchbookTitle">{title}</h1>}
            {children}
            {doodles}
        </article>
    );
}
