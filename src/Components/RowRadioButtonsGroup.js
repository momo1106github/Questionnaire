import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { col_names } from "../data";
import { Typography, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function RowRadioButtonsGroup({
  options,
  formValues,
  index,
  handleInputChange,
  startAnnotation,
  endAnnotation,
  customInputs,
  setCustomInputs,
}) {
  const matches = useMediaQuery("(min-width:1024px)");
  return (
    <FormControl>
      {!matches && (
        <Typography variant="body2" style={{ paddingTop: "5px" }}>
          {startAnnotation}
        </Typography>
      )}
      <RadioGroup
        style={{ paddingBottom: endAnnotation ? "15px" : "0px" }}
        row={matches}
        aria-labelledby="row-radio-buttons-group-label"
        name={col_names[index]}
        value={formValues[col_names[index]] ?? ""}
        onChange={handleInputChange}
      >
        {options.map((option, i) => {
          if (option.label === "其他") {
            const customInputIndex = option.value.split(".")[0];
            return (
              <FormControlLabel
                style={{ paddingRight: "5px" }}
                key={i}
                value={option.value}
                control={<Radio required />}
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
                          return new_customInputs;
                        });
                      }}
                    />
                  </>
                }
              />
            );
          } else
            return (
              <FormControlLabel
                style={{ paddingRight: "5px" }}
                key={i}
                value={option.value}
                control={<Radio required />}
                label={option.label}
                // labelPlacement="bottom"
              />
            );
        })}
      </RadioGroup>
      <div style={{ display: "flex" }}>
        {matches && (
          <Typography
            variant="body2"
            style={{ position: "absolute", bottom: "0%" }}
          >
            {startAnnotation}
          </Typography>
        )}
        <Typography
          variant="body2"
          style={{
            position: "absolute",
            right: matches ? "0%" : "",
            bottom: "0%",
          }}
        >
          {endAnnotation}
        </Typography>
      </div>
    </FormControl>
  );
}
