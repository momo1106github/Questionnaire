import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { col_names } from "../data";

export default function RowRadioButtonsGroup({
  options,
  formValues,
  index,
  handleInputChange,
}) {
  //   console.log(col_names[index], formValues[col_names[index]]);
  return (
    <FormControl>
      {/* <FormLabel>Gender</FormLabel> */}
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
            control={<Radio required={true} />}
            label={option.label}
            // labelPlacement="bottom"
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
