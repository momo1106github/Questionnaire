import NormalQuestion from "../Components/NormalQuestion";
import Title from "../Components/Title";

export default function NormalPart({
  title,
  intro,
  questions,
  formValues,
  startIndex,
  handleInputChange,
}) {
  const sub_questions_len = [];
  for (let i in questions) {
    sub_questions_len.push(
      questions[i].sub_questions ? questions[i].sub_questions.length : 1
    );
  }

  return (
    <>
      <Title title={title} intro={intro} style={{ fontWeight: "bold" }} />
      {questions.map((question, i) => (
        <NormalQuestion
          key={i}
          question={question}
          formValues={formValues}
          index={
            startIndex +
            sub_questions_len.slice(0, i).reduce((a, b) => a + b, 0)
          }
          handleInputChange={handleInputChange}
        />
      ))}
    </>
  );
}
