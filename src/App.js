import "./App.css";
import { useState, useEffect } from "react";
import { Button, Container, Paper } from "@mui/material";

import NormalPart from "./Containers/NormalPart";
import FactorialSurvey from "./Containers/FactorialSurvey";
import all_factors from "./factors.json";
import configData from "./config.json";
import ThanksPage from "./Components/ThanksPage";
import IntroPage from "./Components/IntroPage";
import {
  col_names,
  factorial_survey_intro,
  factorial_survey_questions,
  num_factorial_survey,
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
import { useCookies } from "react-cookie";

function format_time(s) {
  return new Date(s * 1e3).toISOString().slice(-13, -5);
}

function mapNumToChinese(num) {
  switch (num) {
    case 1:
      return "一";
    case 2:
      return "二";
    case 3:
      return "三";
    case 4:
      return "四";
    case 5:
      return "五";
    default:
      return "";
  }
}

function get_vignette_with({
  age,
  mention_method,
  message_type,
  patient_thought,
  expected_impact,
  time_limit,
}) {
  return `你現在於工作的藥局與一位 ${age} 歲的民眾對話，這位民眾${mention_method}一個健康偏頗資訊：「${message_type}。」\
  在後續的對談中，你發現此民眾${patient_thought}，且評估完此民眾的身體狀況後，你預期這項資訊${expected_impact}該民眾的健康，\
  而目前你${time_limit}。`;
}

function get_styled_vignette_with(
  situation,
  {
    age,
    mention_method,
    message_type,
    patient_thought,
    expected_impact,
    time_limit,
  }
) {
  return (
    <p>
      <span style={{ fontWeight: "bold" }}>
        情境{mapNumToChinese(situation)}：
      </span>{" "}
      你現在於工作的藥局與一位 <span style={{ fontWeight: "bold" }}>{age}</span>{" "}
      歲的民眾對話，這位民眾
      <span style={{ fontWeight: "bold" }}>{mention_method}</span>
      一個健康偏頗資訊：「
      <span style={{ fontWeight: "bold" }}>{message_type}</span>
      。」在後續的對談中，你發現此民眾
      <span style={{ fontWeight: "bold" }}>{patient_thought}</span>
      ，且評估完此民眾的身體狀況後，你預期這項資訊
      <span style={{ fontWeight: "bold" }}>{expected_impact}</span>
      該民眾的健康，而目前你
      <span style={{ fontWeight: "bold" }}>{time_limit}</span>。
    </p>
  );
}

function App() {
  const [cookies, setCookies] = useCookies(["formValues"]);

  const [factors, setFactors] = useState([]);
  const [counter, setCounter] = useState();
  const [formValues, setFormValues] = useState({});

  const [page, setPage] = useState(12);
  const [endPage, setEndPage] = useState(12);

  const [ip, setIp] = useState();

  const [customInputs, setCustomInputs] = useState(
    Array(num_personal_info - 3 + 1).fill("")
  );
  const [checkboxInputs, setCheckboxInputs] = useState(
    Array(num_personal_info - 3 + 1).fill().map(x => ({}))
  );

  const handleInputChange = (e) => {
    
    // if (e.target.checked) {
    //   const { name, checked } = e.target;
    //   console.log("name:", name, ", checked:", checked);
    //   setFormValues(formValues => {
    //     const newFormValues = {...formValues};
    //     if (!newFormValues[name]) {
    //       newFormValues[name] = []
    //     } else newFormValues[name].push()

    //   })
    // } else {
      const { name, value } = e.target;
      console.log("name:", name, ", value:", value);
      setFormValues({
        ...formValues,
        [name === "" ? "Email" : name]: value,
      });
      console.log(formValues)
    // }
    
    

    // console.log(formValues);
  };

  const checkAllSelected = (startIndex, count) => {
    for (let i = startIndex; i < startIndex + count; i++) {
      if (!(col_names[i] in formValues)) return false;
    }
    return true;
  };

  const handleNextPage = (e) => {
    e.preventDefault();
    console.log(formValues);
    if (
      (page === 2 && !checkAllSelected(num_personal_info, num_part1)) ||
      (page === 3 &&
        !checkAllSelected(num_personal_info + num_part1, num_part2)) ||
      (page === 4 &&
        !checkAllSelected(
          num_personal_info + num_part1 + num_part2,
          num_part3
        )) ||
      (page === 5 &&
        !checkAllSelected(
          num_personal_info + num_part1 + num_part2 + num_part3,
          num_part4
        )) ||
      (page === 6 &&
        !checkAllSelected(
          num_personal_info + num_part1 + num_part2 + num_part3 + num_part4,
          num_part5
        )) ||
      (page === 7 &&
        !checkAllSelected(
          num_personal_info +
            num_part1 +
            num_part2 +
            num_part3 +
            num_part4 +
            num_part5 +
            1,
          num_factorial_survey
        )) ||
      (page === 8 &&
        !checkAllSelected(
          num_personal_info +
            num_part1 +
            num_part2 +
            num_part3 +
            num_part4 +
            num_part5 +
            (1 + num_factorial_survey) +
            1,
          num_factorial_survey
        )) ||
      (page === 9 &&
        !checkAllSelected(
          num_personal_info +
            num_part1 +
            num_part2 +
            num_part3 +
            num_part4 +
            num_part5 +
            2 * (1 + num_factorial_survey) +
            1,
          num_factorial_survey
        )) ||
      (page === 10 &&
        !checkAllSelected(
          num_personal_info +
            num_part1 +
            num_part2 +
            num_part3 +
            num_part4 +
            num_part5 +
            3 * (1 + num_factorial_survey) +
            1,
          num_factorial_survey
        )) ||
      (page === 11 &&
        !checkAllSelected(
          num_personal_info +
            num_part1 +
            num_part2 +
            num_part3 +
            num_part4 +
            num_part5 +
            4 * (1 + num_factorial_survey) +
            1,
          num_factorial_survey
        ))
    ) {
      alert("請將選項作答完畢");
    } else {
      setCookies("formValues", formValues);
      localStorage.setItem("page", page + 1);
      setPage((page) => page + 1);
    }
  };

  const checkPersonalInfoSelected = () => {
    if (!checkAllSelected(3, 3)) {
      alert("請填寫 生理性別/年齡/最高學歷");
      return false;
    }
    if (!checkAllSelected(6, 1)) {
      alert("請填寫 藥師執業經驗");
      return false;
    }
    if (!checkAllSelected(7, 1)) {
      alert("請填寫 目前執業場所");
      return false;
    }
    if (!checkAllSelected(8, 1)) {
      alert("請填寫 醫療機構實習經驗");
      return false;
    }
    if (!checkAllSelected(9, 1)) {
      alert("請填寫 醫療機構工讀經驗");
      return false;
    }
    if (!checkAllSelected(10, 1)) {
      alert("請填寫 經常使用之社群媒體");
      return false;
    }
    if (!checkAllSelected(11, 1)) {
      alert("請填寫 平均每天使用社群媒體的時間");
      return false;
    }
    if (!checkAllSelected(12, 1)) {
      alert("請填寫 平均每個月於社群媒體上發表或分享健康相關資訊的次數");
      return false;
    }
    return true;
  };

  const updateFormValues = () => {
    for (let i = 0; i < checkboxInputs.length-1; i++) {
      if (Object.keys(checkboxInputs[i]).length > 0) {
        formValues[col_names[i + 3 - 1]] = []
        for (const option in checkboxInputs[i]) {
          formValues[col_names[i + 3 - 1]].push(option)
        }
      }
    }
    console.log(formValues);
    for (const key in formValues) {
      if (formValues[key].includes(".")) {
        const index = formValues[key].split(".")[0];
        formValues[key] =  "其他: " + customInputs[index];
      }
    }
    console.log(formValues);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formValues);

    updateFormValues();

    if (!checkPersonalInfoSelected()) {
      return;
    }
    
    // localStorage.setItem("page", page + 1);
    // setPage(page + 1);

    

    // setCookies("formValues", formValues);
    
    const formData = new FormData();
    for (const key in formValues) {
      formData.append(key, formValues[key]);
    }
    formData.append("Part6_S1", get_vignette_with(factors[0]));
    formData.append("Part6_S2", get_vignette_with(factors[1]));
    formData.append("Part6_S3", get_vignette_with(factors[2]));
    formData.append("Part6_S4", get_vignette_with(factors[3]));
    formData.append("Part6_S5", get_vignette_with(factors[4]));

    const timestamp = localStorage.getItem("timestamp");
    formData.append("Timestamp", new Date(Date(timestamp)).toLocaleString());
    const duration = (Date.now() - timestamp) / 1000;
    formData.append("Duration", format_time(duration));
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
    if (localStorage.getItem("timestamp") === null) {
      localStorage.setItem("timestamp", Date.now());
    }

    if (localStorage.getItem("page") !== null) {
      setPage(parseInt(localStorage.getItem("page")));
    } else {
      setPage(1);
    }

    if (localStorage.getItem("counter") !== null) {
      setCounter(parseInt(localStorage.getItem("counter")));
    } else {
      fetch(configData.counterUrl, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          setCounter(...data[0]);
          localStorage.setItem("counter", ...data[0]);
        })
        .then(() => {
          const counterFormData = new FormData();
          counterFormData.append(
            "counter",
            parseInt(localStorage.getItem("counter")) + 5
          );
          fetch(configData.counterUrl, {
            method: "POST",
            body: counterFormData,
          }).then((res) => {
            // console.log(res);
            console.log("COUNTER SUCCESSFULLY UPDATED!");
          });
        })
        .catch((err) => console.log(err));
    }

    fetch("https://geolocation-db.com/json/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setIp(data.IPv4);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    // console.log("counter  =", counter);
    if (counter) {
      const new_factors = [];
      for (let i = 0; i < 5; i++) {
        new_factors.push(all_factors[counter + i]);
      }
      setFactors(new_factors);
    }
  }, [counter]);

  useEffect(() => {
    if (cookies.formValues) {
      setFormValues(cookies.formValues);
    }
  }, [cookies.formValues]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <Container style={{ background: "#cfe8fc" }}>
      <Paper style={{ margin: "2%", padding: "2%" }}>
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
                  vignette={get_styled_vignette_with(1, factors[0] ?? [])}
                  intro={factorial_survey_intro}
                  questions={factorial_survey_questions}
                  formValues={formValues}
                  startIndex={
                    num_personal_info +
                    num_part1 +
                    num_part2 +
                    num_part3 +
                    num_part4 +
                    num_part5 +
                    1
                  }
                  handleInputChange={handleInputChange}
                />
              );
            case 8:
              return (
                <FactorialSurvey
                  title="第六部分"
                  vignette={get_styled_vignette_with(2, factors[1] ?? [])}
                  intro={factorial_survey_intro}
                  questions={factorial_survey_questions}
                  formValues={formValues}
                  startIndex={
                    num_personal_info +
                    num_part1 +
                    num_part2 +
                    num_part3 +
                    num_part4 +
                    num_part5 +
                    1 +
                    num_factorial_survey +
                    1
                  }
                  handleInputChange={handleInputChange}
                />
              );
            case 9:
              return (
                <FactorialSurvey
                  title="第六部分"
                  vignette={get_styled_vignette_with(3, factors[2] ?? [])}
                  intro={factorial_survey_intro}
                  questions={factorial_survey_questions}
                  formValues={formValues}
                  startIndex={
                    num_personal_info +
                    num_part1 +
                    num_part2 +
                    num_part3 +
                    num_part4 +
                    num_part5 +
                    2 * (1 + num_factorial_survey) +
                    1
                  }
                  handleInputChange={handleInputChange}
                />
              );
            case 10:
              return (
                <FactorialSurvey
                  title="第六部分"
                  vignette={get_styled_vignette_with(4, factors[3] ?? [])}
                  intro={factorial_survey_intro}
                  questions={factorial_survey_questions}
                  formValues={formValues}
                  startIndex={
                    num_personal_info +
                    num_part1 +
                    num_part2 +
                    num_part3 +
                    num_part4 +
                    num_part5 +
                    3 * (1 + num_factorial_survey) +
                    1
                  }
                  handleInputChange={handleInputChange}
                />
              );
            case 11:
              return (
                <FactorialSurvey
                  title="第六部分"
                  vignette={get_styled_vignette_with(5, factors[4] ?? [])}
                  intro={factorial_survey_intro}
                  questions={factorial_survey_questions}
                  formValues={formValues}
                  startIndex={
                    num_personal_info +
                    num_part1 +
                    num_part2 +
                    num_part3 +
                    num_part4 +
                    num_part5 +
                    4 * (1 + num_factorial_survey) +
                    1
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
                  customInputs={customInputs}
                  setCustomInputs={setCustomInputs}
                  checkboxInputs={checkboxInputs}
                  setCheckboxInputs={setCheckboxInputs}
                  updateFormValues={updateFormValues}
                />
              );
            case 13:
              return <ThanksPage />;
            default:
              return null;
          }
        })()}
      </Paper>
      {page <= endPage ? (
        <>
          <Button
            onClick={() => {
              localStorage.setItem("page", page - 1);
              setPage((page) => page - 1);
            }}
            size="large"
            style={{
              left: "45%",
              margin: "20px 10px",
              transform: "translate(-50%, -50%)",
            }}
            disabled={page === 1}
          >
            上一頁
          </Button>
          <Button
            onClick={handleNextPage}
            size="large"
            style={{
              left: "45%",
              margin: "20px 10px",
              transform: "translate(-50%, -50%)",
            }}
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
          style={{
            left: "45%",
            margin: "20px 10px",
            transform: "translate(-50%, -50%)",
          }}
        >
          提交
        </Button>
      ) : null}
    </Container>
  );
}

export default App;
