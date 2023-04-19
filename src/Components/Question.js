import {
  Paper,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import CheckboxesGroup from "./CheckboxesGroup";
import RowRadioButtonsGroup from "./RowRadioButtonsGroup";

export default function Question({
  question,
  value = "",
  formValues,
  index,
  handleInputChange,
  startAnnotation,
  endAnnotation,
  customInputs,
  setCustomInputs,
  checkboxInputs,
  setCheckboxInputs,
  multipleChoices,
  updateFormValues,
}) {
  return (
    <Paper style={{ margin: "10px", padding: "10px" }}>
      <Typography
        variant="body1"
        style={{ fontWeight: "bold", padding: "0px 0" }}
      >
        {question.description}
      </Typography>
      {multipleChoices ? (
        <CheckboxesGroup
          options={question.options}
          handleInputChange={handleInputChange}
          customInputs={customInputs}
          setCustomInputs={setCustomInputs}
          checkboxInputs={checkboxInputs}
          setCheckboxInputs={setCheckboxInputs}
          updateFormValues={updateFormValues}
        />
      ) : (
        <RowRadioButtonsGroup
          options={question.options}
          value={value}
          formValues={formValues}
          index={index}
          handleInputChange={handleInputChange}
          startAnnotation={startAnnotation}
          endAnnotation={endAnnotation}
          customInputs={customInputs}
          setCustomInputs={setCustomInputs}
          updateFormValues={updateFormValues}
        />
      )}
    </Paper>
  );
}
