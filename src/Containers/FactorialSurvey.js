import Question from "../Components/Question";
import Title from "../Components/Title";

export default function FactorialSurvey({
  title,
  intro,
  vignette,
  questions,
  formValues,
  startIndex,
  handleInputChange,
}) {
  return (
    <>
      <Title title={title} vignette={vignette} supplmentary={intro} />
      {questions.map((question, i) => (
        <Question
          key={i}
          question={question}
          formValues={formValues}
          index={startIndex + i}
          handleInputChange={handleInputChange}
          startAnnotation="非常不可能"
          endAnnotation="非常可能"
        />
      ))}
    </>
  );
}
