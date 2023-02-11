import { Paper, Typography } from "@mui/material";
import RowRadioButtonsGroup from "./RowRadioButtonsGroup";

export default function Question({
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
      <RowRadioButtonsGroup
        options={question.options}
        value={value}
        formValues={formValues}
        index={index}
        handleInputChange={handleInputChange}
      />
    </Paper>
  );
}
