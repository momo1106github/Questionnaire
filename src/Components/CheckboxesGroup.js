import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { useRef } from "react";

export default function CheckboxesGroup({
  options,
  customInputs,
  setCustomInputs,
  setCheckboxInputs,
}) {
  const textfieldRef = useRef();
  const matches = useMediaQuery("(min-width:1024px)");

  const onClick = () => {
    console.log(
      "clicked " +
        textfieldRef.current.children[0].children[0].focus
    );
    textfieldRef.current.children[0].children[0].disabled =
      !textfieldRef.current.children[0].children[0].disabled;
    if (
      document.activeElement !==
      textfieldRef.current.children[0].children[0]
    ) {
      textfieldRef.current.children[0].children[0].focus();
    } else {
      textfieldRef.current.children[0].children[0].blur();
    }
  }
  const handleChange = (e) => {
    const { name, checked } = e.target;
    const [index, value] = name.split(".");
    console.log(index, value, checked);
    setCheckboxInputs((checkboxInputs) => {
      const new_checkboxInputs = [...checkboxInputs];
      if (checked) {
        new_checkboxInputs[index][value] = checked;
      } else {
        delete new_checkboxInputs[index][value];
      }
      console.log(new_checkboxInputs);
      return new_checkboxInputs;
    });
  };

  return (
    <FormControl>
      <FormGroup row={matches}>
        {options.map((option, i) => {
          if (option.label === "其他") {
            const customInputIndex = option.value.split(".")[0];
            return (
              <FormControlLabel
                style={{ paddingRight: "5px" }}
                key={i}
                value={option.value}
                control={
                  <Checkbox
                    name={option.value}
                    onClick={onClick}
                  />
                }
                label={
                  <>
                    {option.label + "： "}
                    <TextField
                      disabled={true}
                      size="small"
                      value={customInputs[customInputIndex]}
                      onChange={(e) => {
                        setCustomInputs((customInputs) => {
                          const new_customInputs = [...customInputs];
                          new_customInputs[customInputIndex] = e.target.value;
                          console.log(new_customInputs);
                          return new_customInputs;
                        });
                      }}
                      ref={textfieldRef}
                    />
                  </>
                }
                onChange={handleChange}
              />
            );
          } else
            return (
              <FormControlLabel
                style={{ paddingRight: "20px" }}
                key={i}
                control={<Checkbox name={option.value} />}
                label={option.label}
                onChange={handleChange}
              />
            );
        })}
      </FormGroup>
    </FormControl>
  );
}
