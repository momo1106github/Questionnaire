import { Paper, Typography } from "@mui/material";
import RowRadioButtonsGroup from "./RowRadioButtonsGroup";

export default function NormalQuestion({
  question,
  formValues,
  index,
  handleInputChange,
}) {
  return (
    <Paper style={{ margin: "4%", padding: "2%" }}>
      <Typography variant="body1" style={{ fontWeight: "bold" }}>
        {question.description}
      </Typography>
      {question.sub_questions.map((q, j) => (
        <div key={j}>
          <Typography variant="body1">{q.text}</Typography>
          <RowRadioButtonsGroup
            options={q.options}
            value={""}
            formValues={formValues}
            index={index + j}
            handleInputChange={handleInputChange}
          />
        </div>
      ))}
    </Paper>
  );
}
