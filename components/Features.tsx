import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Chip, Divider, Box, Button, Typography } from "@mui/material";

function Item({ project, index }: any) {
  const ref: any = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  return (
    <Box
      sx={{
        background: `linear-gradient(hsl(240,11%,${
          4 * (index == 1 ? 1 : index - 1)
        }%), hsl(240,11%,${4 * index}%))`,
        p: 2,
        position: "sticky",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        top: 0,
        height: "100vh",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "20px",
          width: "100%",
          zIndex: 999999,
        }}
      >
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress, transformOrigin: "center" }}
        />
      </Box>
      <Box
        sx={{
          border: { sm: "1px solid" },
          borderColor: { sm: "hsl(240,11%,20%)" },
          borderRadius: 3,
          p: 2,
          py: 4,
        }}
        ref={ref}
      >
        <Box sx={{ gap: 2, textAlign: "center" }}>
          <picture>
            <img
              alt="Project logo"
              src={project.logo}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "70px",
              }}
            />
          </picture>
          <Typography
            variant="h2"
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              m: 5,
              fontSize: { xs: "30px", sm: "50px" },
              color: "hsl(240,11%,60%)",
            }}
            className="font-heading"
          >
            {index} out of 4
          </Typography>
          <motion.div
            style={{
              opacity: scrollYProgress,
            }}
          >
            <Typography variant="h4" sx={{ my: 2 }}>
              {project.name}
            </Typography>
          </motion.div>
        </Box>
        <Box
          sx={{
            maxWidth: "calc(100vw - 20px)",
            width: "500px",
            mt: 3,
            px: 5,
            textAlign: "center",
          }}
        >
          <Typography sx={{ fontWeight: 100 }}>
            {project.description}
          </Typography>
          {project.labels.map((label: any) => (
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
          <br />
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
            disabled={project.deprecated}
            disableElevation
          >
            {!project.deprecated ? (
              <>
                Visit site{" "}
                <span className="material-symbols-outlined">east</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined">close</span>
                Deprecated
              </>
            )}
          </Button>
        </Box>
      </Box>
    </Box>
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
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Typography
        variant="h3"
        className="font-serif"
        sx={{
          p: { xs: 3, sm: 5 },
          borderBottom: "1px solid hsl(240,11%,9%)",
          background: "linear-gradient(transparent, hsl(240,11%,4%))",
          pb: 0,
        }}
      >
        My projects
      </Typography>
      {projects.map((project, index) => (
        <Item project={project} key={project.name} index={index + 1} />
      ))}
    </Box>
  );
}
