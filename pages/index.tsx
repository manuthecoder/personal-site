import { ParallaxText } from "@/components/ParallaxText";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@mui/material";
import { Twitter, Github, Instagram, Linkedin } from "feather-icons-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Features } from "../components/Features";

function Header() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const [hideContainer, setHideContainer] = useState(false);
  const [showSubheading, setShowSubheading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSubheading(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Listen for scroll events and update the state variable accordingly
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setHideContainer(true);
      } else {
        setHideContainer(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Use the scrollYProgress to animate the box shadow effect
  const boxShadow = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      "inset 0px 0px 0px 5px hsla(240, 11%, 15%, 0.3), inset 0px 0px 0px 5px hsla(240, 11%, 15%, 0.3)",
      "inset 0px 0px 0px 5px hsla(240, 11%, 15%, 0.4), inset 0px 0px 0px 5px hsla(240, 11%, 15%, 0.4)",
      "inset 0px 0px 0px 5px hsla(240, 11%, 15%, 0.4), inset 0px 0px 0px 5px hsla(240, 11%, 15%, 0.4)",
      "inset 0px 0px 0px 5px hsla(240, 11%, 15%, 0.4), inset 0px 0px 0px 5px hsla(240, 11%, 15%, 0.4)",
      "inset 0px 0px 0px 5px hsla(240, 11%, 15%, 0.4), inset 0px 0px 0px 5px hsla(240, 11%, 15%, 0.4)",
      "inset 0px 0px 0px 5px hsla(240, 11%, 15%, 0.4), inset 0px 0px 0px 5px hsla(240, 11%, 15%, 0.4)",
    ]
  );
  // Use the scrollYProgress to animate the x and y position of the shine effect
  const shineX = useTransform(scrollYProgress, [0, 1], ["-200vw", "200vw"]);

  return (
    <>
      <div className="wrapper" ref={ref}>
        <motion.div className={`container ${hideContainer && "hidden"}`}>
          <motion.div
            className="item"
            style={{
              boxShadow: boxShadow,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <motion.div
              style={{
                width: "500px",
                height: "300vh",
                position: "absolute",
                top: "-100vh",
                rotate: 45,
                left: "-100vw",
                background:
                  "linear-gradient(90deg, hsla(240, 11%, 10%, 0) 0%, #fff, 50%, hsla(240, 11%, 90%, 0) 100%)",
                opacity: 0.8,
                x: shineX,
              }}
            />
            <Box
              className="intro-content"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <Typography variant="h1" className="font-heading">
                @_manu.codes
              </Typography>
              <Typography
                sx={{
                  color: "hsl(240, 11%, 70%)",
                  mt: 1,
                }}
              >
                High school software enthusiast
              </Typography>
              <Box
                sx={{
                  position: "absolute",
                  bottom: "20px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  userSelect: "none",
                  mt: 2,
                  transition: "all .2s",
                  width: "70px",
                  height: "70px",
                  display: "flex",
                  ...(!showSubheading && {
                    opacity: 0,
                    filter: "blur(10px)",
                    mb: -4,
                  }),
                }}
              >
                <Image
                  className="animate-spin"
                  draggable={false}
                  src="/curved.png"
                  width={200}
                  height={200}
                  style={{
                    width: "70px",
                    height: "70px",
                  }}
                  alt="Scroll to read more"
                />
                <span
                  className="material-symbols-outlined animate-bounce"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                  }}
                >
                  south
                </span>
              </Box>
            </Box>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

function Navbar() {
  const trigger = useScrollTrigger({
    threshold: typeof window !== "undefined" ? window.innerHeight : 0,
    disableHysteresis: true,
  });

  const buttonStyles = {
    textTransform: "none",
    "&:hover": {
      background: "rgba(255,255,255,.1)",
    },
    borderRadius: 999,
    px: 2,
    transition: "none",
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        backdropFilter: "blur(10px)",
        transition: "all .2s",
        top: !trigger ? "-100px" : "20px",
        ...(!trigger && {
          opacity: 0,
        }),
        background: "hsla(240,11%,20%,0.9)",
        borderRadius: 4,
        m: "20px",
        zIndex: 999999,
        width: "calc(100vw - 40px)",
      }}
      elevation={0}
    >
      <Toolbar
        sx={{
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{ fontWeight: 500, flexGrow: 1 }}
          className="font-heading"
          variant="h6"
        >
          @_manu.codes
        </Typography>
        <Button color="inherit" sx={buttonStyles}>
          Projects
        </Button>
        <Button color="inherit" sx={buttonStyles}>
          Contact
        </Button>
        <Button color="inherit" sx={buttonStyles}>
          Blog
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default function Page() {
  return (
    <>
      <Header />
      <Navbar />
      <ParallaxText />
      <Features />
    </>
  );
}
