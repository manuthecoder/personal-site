import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Box, Button, Grid, Typography } from "@mui/material";

function Item({ project }: any) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

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
            padding: 0,
            mr: "auto",
          }}
        >
          <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
          />
          <Typography variant="h2">{project.name}</Typography>
          <Typography variant="h6">{project.description}</Typography>
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
          className="item"
          sx={{
            textAlign: "right",
          }}
        >
          <picture>
            <img src="/screenshots/dysperse.png" height="100%" />
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
    },
    {
      name: "Popvote",
      description: "Popvote is a _____",
      url: "https://popvote.ml",
    },
    {
      name: "IHS FlexTime revamp",
      description: "Revamp of upcoming FlexTime app for IHS",
      url: "https://flextime.vercel.app",
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
