import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { col_names } from "../data";
import { Typography } from "@mui/material";

export default function RowRadioButtonsGroup({
  options,
  formValues,
  index,
  handleInputChange,
  startAnnotation,
  endAnnotation,
}) {
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby="row-radio-buttons-group-label"
        name={col_names[index]}
        value={formValues[col_names[index]] ?? ""}
        onChange={handleInputChange}
      >
        {options.map((option, i) => (
          <FormControlLabel
            key={i}
            value={option.value}
            control={<Radio required />}
            label={option.label}
            // labelPlacement="bottom"
          />
        ))}
      </RadioGroup>
      <div style={{ display: "flex" }}>
        <Typography variant="body2">{startAnnotation}</Typography>
        <Typography
          variant="body2"
          style={{ position: "absolute", right: "0px" }}
        >
          {endAnnotation}
        </Typography>
      </div>
    </FormControl>
  );
}
