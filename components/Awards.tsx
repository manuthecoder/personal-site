import { Divider, Typography, Box } from "@mui/material";
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

export function Awards() {
  const ref: any = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["100px end", "-200px start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <Box
      sx={{
        px: { xs: 3, sm: 5 },
        my: 5,
        mb: 10,
        position: "relative",
        textAlign: "center",
      }}
      ref={ref}
    >
      <Divider sx={{ borderColor: "hsla(240,11%,30%,0.5)", my: 5 }} />
      <Typography variant="h3" className="font-serif" sx={{ mb: 2 }}>
        Awards &amp; events I&apos;ve participated in
      </Typography>
      {[
        "AFA CyberPatriot 2022 Semifinal round qualifier",
        "AFA CyberPatriot 2021 Participant",
        <>
          HackOR 2021 1<sup>st</sup> place
        </>,
        "CyberCup 2021 Participant",
      ].map((event, index) => (
        <motion.div style={{ scale }} key={index}>
          <Box
            sx={{
              display: "inline-flex",
              p: 1,
              px: 5,
              mb: 2,
              borderRadius: 5,
              background: "hsla(240,11%,20%, 0.5)",
            }}
          >
            <Typography variant="h6">{event}</Typography>
          </Box>
        </motion.div>
      ))}
    </Box>
  );
}
