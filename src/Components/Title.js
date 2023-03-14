import { Typography, useMediaQuery } from "@mui/material";

export default function Title({ title, intro, vignette, supplmentary }) {
  const matches = useMediaQuery("(min-width:1024px)");
  return (
    <>
      <Typography
        variant={matches ? "h4" : "h5"}
        style={{ padding: "20px 0 0 0", textAlign: "center" }}
      >
        {title}
      </Typography>
      {intro && (
        <Typography variant="subtitle" style={{ padding: "20px" }}>
          {intro}
        </Typography>
      )}
      {vignette && (
        <Typography
          variant={matches ? "h6" : "subtitle1"}
          style={{ padding: "2%" }}
        >
          {vignette}
        </Typography>
      )}
      {supplmentary && (
        <Typography
          variant={matches ? "subtitle" : "subtitle2"}
          style={{ padding: "2%" }}
        >
          {supplmentary}
        </Typography>
      )}
    </>
  );
}
