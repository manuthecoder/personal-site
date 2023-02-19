import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

function Item({ project }: any) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  return (
    <section>
      <div
        ref={ref}
        style={{
          display: "flex",
          position: "relative",
          width: "100vw",
        }}
      >
        <figure className="progress">
          <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
            <motion.circle
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="indicator"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
        </figure>
        <div
          className="item"
          style={{
            width: "100%",
          }}
        >
          {JSON.stringify(project)}
        </div>
      </div>
    </section>
  );
}

export function Features() {
  const projects = [
    {
      name: "Dysperse",
      url: "https://dysperse.com",
    },
    {
      name: "Popvote",
      url: "https://popvote.ml",
    },
    {
      name: "IHS FlexTime revamp",
      url: "https://flextime.vercel.app",
    },
  ];
  return (
    <>
      {projects.map((project) => (
        <Item project={project} />
      ))}
    </>
  );
}
