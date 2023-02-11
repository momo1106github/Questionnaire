import { Typography } from "@mui/material";
import { questionnaire_intro, questionnaire_title } from "../data";
import Title from "./Title";

export default function IntroPage() {
  return (
    <>
      <Title title={questionnaire_title} />
      <Typography variant="subtitle1" style={{ whiteSpace: "pre-line" }}>
        {questionnaire_intro}
      </Typography>
    </>
  );
}
