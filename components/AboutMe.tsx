// import "./styles.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { Box, Typography } from "@mui/material";

export function AboutMe() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["-200px end", "-200px start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0, 1.06]);

  return (
    <Box sx={{ zIndex: 999, position: "relative" }}>
      <Typography
        variant="h3"
        className="font-serif"
        sx={{ px: { xs: 3, sm: 5 }, my: 10, mb: 0 }}
      >
        About me
      </Typography>
      <Box
        sx={{
          p: { xs: 3, sm: 5 },
          pt: 0,
          mt: -3,
          "& u": {
            position: "relative",
            display: "inline-flex",
            flexDirection: "column",
            textDecoration: "none",
            fontWeight: "600",
          },
          "& .progress-bar": {
            height: "41px",
            ml: -0.5,
            mt: -1,
            background: "#000",
            zIndex: -1,
            mt: "-41px",
            top: 0,
            left: 0,
            borderRadius: 1,
          },
        }}
        ref={ref}
      >
        <Typography variant="h4" sx={{ mt: 3 }}>
          I&apos;m a full-stack software enthusiast experienced with{" "}
          <u>
            React
            <motion.div className="progress-bar" style={{ scaleX: scale }} />
          </u>
          ,{" "}
          <u>
            TypeScript
            <motion.div className="progress-bar" style={{ scaleX: scale }} />
          </u>
          ,{" "}
          <u>
            SQL
            <motion.div className="progress-bar" style={{ scaleX: scale }} />
          </u>
          , and a few more.
        </Typography>
      </Box>
    </Box>
  );
}
