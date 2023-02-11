import { Paper, Typography } from "@mui/material";
import RowRadioButtonsGroup from "./RowRadioButtonsGroup";

export default function NormalQuestion({
  question,
  value = "",
  formValues,
  index,
  handleInputChange,
}) {
  return (
    <Paper style={{ margin: "25px", padding: "10px" }}>
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
              index={index}
              handleInputChange={handleInputChange}
            />
          </div>
        ))
      }
      
    </Paper>
  );
}
