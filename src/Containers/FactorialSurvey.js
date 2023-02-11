import { Paper } from "@mui/material";
import Question from "../Components/Question";
import Title from "../Components/Title";

export default function FactorialSurvey({
  title,
  intro,
  vignette,
  questions,
  formValues,
  startIndex,
  handleInputChange,
}) {
  return (
    <Paper style={{ margin: "25px", padding: "10px" }}>
      <Title title={title} vignette={vignette} supplmentary={intro} />
      {questions.map((question, i) => (
        <Question
          key={i}
          question={question}
          formValues={formValues}
          index={startIndex + i}
          handleInputChange={handleInputChange}
        />
      ))}
    </Paper>
  );
}
