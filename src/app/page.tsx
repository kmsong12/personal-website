import Doodle from "@/components/Doodle";
import SketchbookPage from "@/components/SketchbookPage";

export default function Home() {
  return (
    <SketchbookPage
      title="Hi, I'm Joshua."
      doodles={
        <>
          <Doodle
            src="/doodles/star.svg"
            top={16}
            right={40}
            width={44}
            rotate={12}
          />
          <Doodle
            src="/doodles/arrow.svg"
            bottom={20}
            right={64}
            width={90}
            rotate={-8}
          />
          <Doodle
            src="/doodles/squiggle.svg"
            bottom={-14}
            left={80}
            width={120}
            rotate={-3}
          />
        </>
      }
    >
      <p>
        I study robotics at Princeton, with a focus on manipulation, controls,
        and physical robotic systems.
      </p>
      <p>
        Outside the lab I sculpt, doodle, and animate — this site is the
        sketchbook.
      </p>
    </SketchbookPage>
  );
}
