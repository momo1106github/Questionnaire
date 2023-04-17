import { Paper, TextField, Typography } from "@mui/material";
import Question from "../Components/Question";
import Title from "../Components/Title";
import { col_names, num_personal_info } from "../data";

export default function PersonalInfo({
  questions,
  formValues,
  startIndex,
  handleInputChange,
}) {
  return (
    <>
      <Title title="基本資料" />
      {questions.map((question, i) => (
        <Question
          key={i}
          question={question}
          formValues={formValues}
          index={startIndex + i}
          handleInputChange={handleInputChange}
        />
      ))}
      <Paper style={{ margin: "10px", padding: "10px" }}>
        <Typography style={{ fontWeight: "bold" }}>
          8. 若您有意願領取數位禮券，請留下您常用的email，經研究人員確認為有效問卷後，將依前200名填寫順序寄送。
        </Typography>
        <TextField
          value={formValues[col_names[num_personal_info - 1]]??""}
          fullWidth
          variant="standard"
          onChange={handleInputChange}
        />
      </Paper>
    </>
  );
}
