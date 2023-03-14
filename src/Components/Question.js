import { Paper, Typography } from "@mui/material";
import RowRadioButtonsGroup from "./RowRadioButtonsGroup";

export default function Question({
  question,
  value = "",
  formValues,
  index,
  handleInputChange,
  startAnnotation,
  endAnnotation,
}) {
  return (
    <Paper style={{ margin: "10px", padding: "10px" }}>
      <Typography variant="body1" style={{ fontWeight: "bold", padding: "0px 0" }}>
        {question.description}
      </Typography>
      <RowRadioButtonsGroup
        options={question.options}
        value={value}
        formValues={formValues}
        index={index}
        handleInputChange={handleInputChange}
        startAnnotation={startAnnotation}
        endAnnotation={endAnnotation}
      />
    </Paper>
  );
}
