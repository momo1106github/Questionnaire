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
      {question.description && (
        <Typography
          variant="body1"
          style={{ fontWeight: "bold", padding: "0 0 15px 0" }}
        >
          {question.description}
        </Typography>
      )}
      {question.sub_questions.map((q, j) => (
        <div key={j} style={{ padding: "15px 0" }}>
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
