import { useRef } from "react";
import { useTransform, motion, useScroll } from "framer-motion";
import { Chip, Divider, Box, Button, Grid, Typography } from "@mui/material";
import { Masonry } from "@mui/lab";

function Item({ project }: any) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  return (
    <Grid
      item
      xs={6}
      sx={{
        p: 1,
      }}
    >
      <Box
        sx={{
          background: "hsla(240,11%,25%,0.6)",
          p: 2,
          borderRadius: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <picture>
            <img
              alt="Project logo"
              src={project.logo}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "70px",
              }}
            />
          </picture>
          <Typography variant="h4" sx={{ my: 2, textDecoration: "underline" }}>
            {project.name}
          </Typography>
        </Box>
        <Typography sx={{ fontWeight: 100 }}>{project.description}</Typography>
        {project.labels.map((label) => (
          <Chip
            label={label}
            key={label}
            sx={{
              color: "#fff",
              mr: 1,
              mt: 1,
              background: "rgba(255,255,255,.1)",
            }}
          />
        ))}
        <Button
          target="_blank"
          href={project.url}
          sx={{
            gap: 2,
            borderRadius: 999,
            mt: 2,
            background: "#39ff14!important",
            color: "#000",
            ...(project.deprecated && {
              color: "#aaa !important",
              background: "rgba(255,255,255,.1)!important",
            }),
          }}
          variant="contained"
          size="large"
          fullWidth
          disabled={project.deprecated}
          disableElevation
        >
          {!project.deprecated ? (
            <>
              Visit site <span className="material-symbols-outlined">east</span>
            </>
          ) : (
            <>
              <span className="material-symbols-outlined">close</span>
              Deprecated
            </>
          )}
        </Button>
      </Box>
    </Grid>
  );
}

export function Features() {
  const projects = [
    {
      name: "Dysperse",
      description:
        "Dysperse is a radically different unified productivity platform filled with features such as kanban boards, checklists, agendas, inventory tracking, & more.",
      url: "https://dysperse.com",
      labels: ["Tools", "Productivity"],
      logo: "/screenshots/dysperse.png",
    },
    {
      name: "Availability",
      description:
        "Availability, by Dysperse, helps you find the best time for a group to get together. It is a free survey tool that is quick & easy to use.",
      url: "https://dysperse.com",
      labels: ["Utilities", "Scheduling", "Productivity"],
      logo: "/screenshots/dysperse.png",
    },
    {
      name: "Popvote",
      description:
        "Popvote is a lightweight polling app for students, teachers, and offices, with content filtering, realtime updates, file uploads, and more.",
      url: "https://popvote.ml",
      labels: ["Education", "Productivity"],
      logo: "/screenshots/popvote.png",
    },
    {
      name: "SchoolNerd",
      description:
        "Before its sunset, SchoolNerd was a redesign of the Google Classroom LMS platform with extended customization features",
      url: "https://popvote.ml",
      labels: ["Education", "HackOR 2021 Winner"],
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Round_Landmark_School_Icon_-_Transparent.svg/1024px-Round_Landmark_School_Icon_-_Transparent.svg.png",
      deprecated: true,
    },
  ];
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["-50px end", "-50px start"],
  });
  const scaleFromTopCenter = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <Box sx={{ position: "relative", p: { xs: 3, sm: 5 } }} ref={ref}>
      <Divider sx={{ borderColor: "hsla(240,11%,30%,0.5)" }} />
      <Typography variant="h3" className="font-serif" sx={{ my: 10, mb: 5 }}>
        My projects
      </Typography>
      <motion.div
        style={{
          opacity: scrollYProgress,
          scale: scaleFromTopCenter,
        }}
      >
        <Masonry columns={{ xs: 1, sm: 2 }} spacing={0}>
          {projects.map((project) => (
            <Item project={project} key={project.name} />
          ))}
        </Masonry>
      </motion.div>
    </Box>
  );
}
