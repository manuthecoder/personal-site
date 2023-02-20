import { ParallaxText } from "./ParallaxText";
import { Typography, Button, Box, Divider } from "@mui/material";

export function Footer() {
  const buttonStyles = {
    px: 2,
    color: "#fff",
    transition: "none",
    border: "1px solid",
    borderColor: "hsla(240, 11%, 40%, 0.4)",
    mx: 1,
    my: 1,
    "&:hover": {
      background: "hsla(240, 11%, 40%, 0.1)",
      borderColor: "hsla(240, 11%, 40%, 0.6)",
    },
    borderRadius: 99,
    gap: 2,
  };
  return (
    <Box sx={{ py: 5, background: "hsla(240,11%,13%,0.9)" }}>
      <ParallaxText baseVelocity={0.25}>Manu G &nbsp;&bull;</ParallaxText>
      <ParallaxText baseVelocity={-0.05}>
        Full stack software enthusiast &nbsp;&bull;
      </ParallaxText>
      <Box
        sx={{
          textAlign: "center",
          mt: 5,
          color: "#fff",
        }}
      >
        {[
          "Instagram|https://instagram.com/__manu.codes",
          "Twitter|https://twitter.com/getdysperse",
          "Discord|https://discord.com/invite/9EJSxkJhnQ",
          "LinkedIn|https://linkedin.com/in/manu-codes",
          "GitHub|https://github.com/manuthecoder",
          "YouTube|https://www.youtube.com/@manu-codes6571",
          "Stack Overflow|https://stackoverflow.com/users/14715255/manu-g",
          "Codepen|https://codepen.io/manuthecoder",
          "CodeSandbox|https://codesandbox.io/u/ManuTheCoder_1789",
          "DEV.to|https://dev.to/__manucodes",
          "Email|mailto:manuthecoder@icloud.com",
        ].map((social) => (
          <Button
            key={social}
            sx={buttonStyles}
            color="inherit"
            size="small"
            target="_blank"
            href={social.split("|")[1]}
          >
            {social.split("|")[0]}
            <span className="material-symbols-outlined">chevron_right</span>
          </Button>
        ))}
        <Typography sx={{ mt: 5, opacity: 0.6 }}>
          &copy; Copyright {new Date().getFullYear()}
        </Typography>
      </Box>
    </Box>
  );
}
