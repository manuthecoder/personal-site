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

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

export function ParallaxTextItem({
  children,
  baseVelocity = 100,
}: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <Typography className="font-serif" variant="h3">
          {children}{" "}
        </Typography>
        <Typography className="font-serif" variant="h3">
          {children}{" "}
        </Typography>
        <Typography className="font-serif" variant="h3">
          {children}{" "}
        </Typography>
        <Typography className="font-serif" variant="h3">
          {children}{" "}
        </Typography>
      </motion.div>
    </div>
  );
}

export function ParallaxText() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["-200px end", "-200px start"],
  });

  return (
    <Box sx={{ zIndex: 999, position: "relative" }}>
      <Typography
        variant="h3"
        className="font-serif"
        sx={{ px: 5, my: 10, mb: 0 }}
      >
        About me
      </Typography>
      <Box
        sx={{
          p: { xs: 3, sm: 5 },
          pt: 0,
          mt: -3,
          // textAlign: "center",
          "& u": {
            display: "inline-flex",
            flexDirection: "column",
            textDecoration: "none",
            fontWeight: "600",
          },
        }}
        ref={ref}
      >
        <Typography variant="h4" sx={{ mt: 3 }}>
          I&apos;m a full-stack software enthusiast experienced with{" "}
          <u>
            React
            <motion.div
              className="progress-bar"
              style={{ scaleX: scrollYProgress }}
            />
          </u>
          ,{" "}
          <u>
            TypeScript
            <motion.div
              className="progress-bar"
              style={{ scaleX: scrollYProgress }}
            />
          </u>
          ,{" "}
          <u>
            SQL
            <motion.div
              className="progress-bar"
              style={{ scaleX: scrollYProgress }}
            />
          </u>
          , and a few more.
        </Typography>
      </Box>
    </Box>
  );
}
