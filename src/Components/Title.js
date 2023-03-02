import { Typography } from "@mui/material";

export default function Title({ title, intro, vignette, supplmentary }) {
  return (
    <>
      <Typography variant="h3" style={{ padding: "20px", textAlign: "center" }}>
        {title}
      </Typography>
      {intro && (
        <Typography variant="subtitle" style={{ padding: "20px" }}>
          {intro}
        </Typography>
      )}
      {vignette && (
        <Typography variant="h6" style={{ padding: "2%" }}>
          {vignette}
        </Typography>
      )}
      {supplmentary && (
        <Typography variant="subtitle" style={{ padding: "20px" }}>
          {supplmentary}
        </Typography>
      )}
    </>
  );
}
