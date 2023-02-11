import { Paper } from "@mui/material";
import NormalQuestion from "../Components/NormalQuestion";
import Title from "../Components/Title";

export default function NormalPart({
  title,
  intro,
  questions,
  formValues,
  startIndex,
  handleInputChange,
}) {
  return (
    <Paper style={{ margin: "25px", padding: "10px" }}>
      <Title title={title} intro={intro} style={{ fontWeight:  "bold" }}/>
      {questions.map((question, i) => (
        <NormalQuestion
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
