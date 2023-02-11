import { Paper, TextField, Typography } from "@mui/material";
import Question from "../Components/Question";
import Title from "../Components/Title";

export default function PersonalInfo({
  questions,
  value,
  formValues,
  startIndex,
  handleInputChange,
}) {
  return (
    <Paper style={{ margin: "25px", padding: "10px" }}>
      <Title title="基本資料"/>
      {questions.map((question, i) => (
        <Question
          key={i}
          question={question}
          formValues={formValues}
          index={startIndex + i}
          handleInputChange={handleInputChange}
        />
      ))}
      <Paper style={{ margin: "25px", padding: "10px" }}>
      <Typography style={{ fontWeight: "bold" }}>8. 請留下您常用的 email，經研究人員確認為有效問卷後，將寄送電子商品 券於此 email。此 email 僅作為電子商品券之發放使用。</Typography>
      <TextField fullWidth variant="standard"></TextField>

      </Paper>
    </Paper>
  );
}
