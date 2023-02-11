import "./App.css";
import { useState, useEffect } from "react";
import { Button, Container } from "@mui/material";

import NormalPart from "./Containers/NomalPart";
import FactorialSurvey from "./Containers/FactorialSurvey";
import vignettes from "./vignettes.json";
import configData from "./config.json";
import ThanksPage from "./Components/ThanksPage";
import IntroPage from "./Components/IntroPage";
import {
  factorial_survey_intro,
  factorial_survey_questions,
  num_part1,
  num_part2,
  num_part3,
  num_part4,
  num_part5,
  num_personal_info,
  part1_questions,
  part2_questions,
  part3_questions,
  part4_questions,
  part5_questions,
  personal_info_questions,
} from "./data";
import PersonalInfo from "./Containers/PersonalInfo";

function format_time(s) {
  return new Date(s * 1e3).toISOString().slice(-13, -5);
}

function App() {
  const [counter, setCounter] = useState();
  const [formValues, setFormValues] = useState({});

  const [page, setPage] = useState(1);
  const [endPage, setEndPage] = useState(12);

  const [timestamp, setTimestamp] = useState();
  const [ip, setIp] = useState();

  const handleInputChange = (e) => {
    console.log(formValues);
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(formValues);

    setPage(page + 1);

    const formData = new FormData();
    for (const key in formValues) {
      formData.append(key, formValues[key]);
    }

    formData.append("Timestamp", new Date(timestamp).toLocaleString());
    const duration = (Date.now() - new Date(timestamp)) / 1000;
    formData.append("Duration", format_time(duration));
    console.log(ip);
    formData.append("IP", ip);

    // for (const key of formData.entries()) {
    //   console.log(key[0] + ", " + key[1]);
    // }

    fetch(configData.scriptUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        // console.log(res);
        console.log("SUCCESSFULLY SUBMITTED");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setTimestamp(Date.now());

    fetch(configData.counterUrl, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCounter(...data[0]);
      })
      .catch((err) => console.log(err));

    fetch("https://geolocation-db.com/json/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.IPv4);
        setIp(data.IPv4);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (counter !== undefined && localStorage.getItem("counter") == null) {
      localStorage.setItem("counter", counter);
      const counterFormData = new FormData();
      console.log("counter = ", counter);
      counterFormData.append("counter", counter + 1);
      fetch(configData.counterUrl, {
        method: "POST",
        body: counterFormData,
      })
        .then((res) => {
          // console.log(res);
          console.log("SUCCESSFULLY UPDATED!");
        })
        .catch((err) => console.log(err));
    }
  }, [counter]);

  return (
    <Container style={{ background: "#cfe8fc" }}>
      {(() => {
        switch (page) {
          case 1:
            return <IntroPage />;
          case 2:
            return (
              <NormalPart
                title="第一部分"
                questions={part1_questions}
                formValues={formValues}
                handleInputChange={handleInputChange}
                startIndex={num_personal_info}
              />
            );
          case 3:
            return (
              <NormalPart
                title="第二部分"
                questions={part2_questions}
                formValues={formValues}
                handleInputChange={handleInputChange}
                startIndex={num_personal_info + num_part1}
              />
            );
          case 4:
            return (
              <NormalPart
                title="第三部分"
                questions={part3_questions}
                formValues={formValues}
                handleInputChange={handleInputChange}
                startIndex={num_personal_info + num_part1 + num_part2}
              />
            );
          case 5:
            return (
              <NormalPart
                title="第四部分"
                questions={part4_questions}
                formValues={formValues}
                handleInputChange={handleInputChange}
                startIndex={
                  num_personal_info + num_part1 + num_part2 + num_part3
                }
              />
            );
          case 6:
            return (
              <NormalPart
                title="第五部分"
                questions={part5_questions}
                formValues={formValues}
                handleInputChange={handleInputChange}
                startIndex={
                  num_personal_info +
                  num_part1 +
                  num_part2 +
                  num_part3 +
                  num_part4
                }
              />
            );
          case 7:
            return (
              <FactorialSurvey
                title="第六部分"
                vignette={"情境一：" + vignettes[counter]}
                intro={factorial_survey_intro}
                questions={factorial_survey_questions}
                formValues={formValues}
                startIndex={
                  num_personal_info +
                  num_part1 +
                  num_part2 +
                  num_part3 +
                  num_part4 +
                  num_part5
                }
                handleInputChange={handleInputChange}
              />
            );
            case 8:
            return (
              <FactorialSurvey
                title="第六部分"
                vignette={"情境二：" + vignettes[counter+1]}
                intro={factorial_survey_intro}
                questions={factorial_survey_questions}
                formValues={formValues}
                startIndex={
                  num_personal_info +
                  num_part1 +
                  num_part2 +
                  num_part3 +
                  num_part4 +
                  num_part5
                }
                handleInputChange={handleInputChange}
              />
            );
            case 9:
            return (
              <FactorialSurvey
                title="第六部分"
                vignette={"情境三：" + vignettes[counter+2]}
                intro={factorial_survey_intro}
                questions={factorial_survey_questions}
                formValues={formValues}
                startIndex={
                  num_personal_info +
                  num_part1 +
                  num_part2 +
                  num_part3 +
                  num_part4 +
                  num_part5
                }
                handleInputChange={handleInputChange}
              />
            );
            case 10:
            return (
              <FactorialSurvey
                title="第六部分"
                vignette={"情境四：" + vignettes[counter+3]}
                intro={factorial_survey_intro}
                questions={factorial_survey_questions}
                formValues={formValues}
                startIndex={
                  num_personal_info +
                  num_part1 +
                  num_part2 +
                  num_part3 +
                  num_part4 +
                  num_part5
                }
                handleInputChange={handleInputChange}
              />
            );
            case 11:
            return (
              <FactorialSurvey
                title="第六部分"
                vignette={"情境五：" + vignettes[counter+4]}
                intro={factorial_survey_intro}
                questions={factorial_survey_questions}
                formValues={formValues}
                startIndex={
                  num_personal_info +
                  num_part1 +
                  num_part2 +
                  num_part3 +
                  num_part4 +
                  num_part5
                }
                handleInputChange={handleInputChange}
              />
            );
          case 12:
            return (
              <PersonalInfo
                title="基本資料"
                questions={personal_info_questions}
                formValues={formValues}
                handleInputChange={handleInputChange}
                startIndex={3}
              />
            );
          case 13:
            return <ThanksPage />;
          default:
            return null;
        }
      })()}
      {page <= endPage ? (
        <>
          <Button
            onClick={() => {
              setPage((page) => page - 1);
            }}
            size="large"
            style={{ left: "45%", marginBottom: "50px" }}
            disabled={page === 1}
          >
            上一頁
          </Button>
          <Button
            onClick={() => {
              setPage((page) => page + 1);
            }}
            size="large"
            style={{ left: "45%", marginBottom: "50px" }}
            disabled={page === endPage}
          >
            下一頁
          </Button>
        </>
      ) : null}
      {page === endPage ? (
        <Button
          variant="contained"
          onClick={handleSubmit}
          size="large"
          style={{ left: "45%", marginBottom: "50px" }}
        >
          提交
        </Button>
      ) : null}
    </Container>
  );
}

export default App;
