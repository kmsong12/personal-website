import Doodle from "@/components/Doodle";
import HashScroll from "@/components/HashScroll";
import SketchbookPage from "@/components/SketchbookPage";

export default function Home() {
  return (
    <>
      <HashScroll />

      <section id="about">
        <SketchbookPage
          title="Hi, I'm Joshua."
          doodles={
            <>
              <Doodle
                src="/doodles/robot.svg"
                top={14}
                right={36}
                width={48}
                rotate={8}
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
            I study robotics at Princeton, with a focus on manipulation,
            controls, and physical robotic systems.
          </p>
          <p>
            Outside the lab I sculpt, doodle, and animate — this site is the
            sketchbook.
          </p>
        </SketchbookPage>
      </section>

      <section id="experience">
        <SketchbookPage title="Experience">
          <p>Coming soon — recent roles and research.</p>
        </SketchbookPage>
      </section>

      <section id="projects">
        <SketchbookPage title="Projects">
          <p>Coming soon — selected work.</p>
        </SketchbookPage>
      </section>

      <section id="education">
        <SketchbookPage title="Education">
          <p>Coming soon — degrees, coursework, and side-quests.</p>
        </SketchbookPage>
      </section>
    </>
  );
}
