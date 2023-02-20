import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Box, Button, Grid, Typography } from "@mui/material";

function Item({ project }: any) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  // const shineX = us(scrollYProgress, [0, 1], ["-200vw", "200vw"]);

  return (
    <section>
      <Grid
        container
        ref={ref}
        sx={{
          zIndex: 99999,
          px: 3,
        }}
      >
        <Grid
          item
          xs={5}
          sx={{
            position: "sticky",
            top: "40%",
            width: "auto",
            height: "100%",
            display: "block",
            pr: 4,
            mr: "auto",
          }}
        >
          <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
          />
          <Typography variant="h2" sx={{ my: 2 }}>
            {project.name}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 100 }}>
            {project.description}
          </Typography>
          <Button
            href={project.url}
            sx={{ gap: 2, borderRadius: 999, mt: 2 }}
            variant="contained"
            size="large"
            disableElevation
          >
            Visit site <span className="material-symbols-outlined">east</span>
          </Button>
        </Grid>
        <Grid
          item
          xs={7}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <picture>
            <img
              src={project.logo}
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "28px",
              }}
            />
          </picture>
        </Grid>
      </Grid>
    </section>
  );
}

export function Features() {
  const projects = [
    {
      name: "Dysperse",
      description:
        "Dysperse is a radically different unified productivity platform filled with features such as kanban boards, checklists, agendas, inventory tracking, & more.",
      url: "https://dysperse.com",
      logo: "/screenshots/dysperse.png",
    },
    {
      name: "Popvote",
      description:
        "Popvote is a lightweight polling app for students, teachers, and offices, with content filtering, realtime updates, file uploads, and more.",
      url: "https://popvote.ml",
      image: "/screenshots/popvote.png",
    },
  ];
  return (
    <Box
      sx={{
        background: "var(--bg-color)",
      }}
    >
      {projects.map((project) => (
        <Item project={project} />
      ))}
    </Box>
  );
}
