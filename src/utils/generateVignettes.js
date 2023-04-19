// import { createObjectCsvWriter } from "csv-writer";
import fs from "fs";

const ages = [25, 45, 70];
const mention_methods = ["在對話過程中提到", "向你詢問"];
const message_types = [
  "維生素C代謝過程會產生草酸，草酸是容易產生腎結石的因子之一，因此建議洗腎病人減少攝取維生素C",
  "化痰藥NAC(N-acetylcysteine)可以抑制新型冠狀病毒，並減少確診後死亡率，鼓勵民眾自行購買作為疫情期間抗疫用藥",
  "mRNA新型冠狀病毒肺炎疫苗可在人體細胞內製造新冠病毒表面蛋白，並改變人體DNA，因此具危險性",
  "自然療法即可根治癌症且便宜，藥物只是醫藥公司賺錢的手段，對癌症沒有幫助",
  "酸性體質會導致慢性病，應該多吃鹼性食物成為鹼性體質",
  "適量飲酒可降低心血管疾病風險，每天1杯紅酒可遠離心血管疾病，鼓勵尚未養成習慣的民眾可盡早開始",
  "接種流感疫苗會導致流感，為了避免不舒服，不應該接種",
  "抗生素可治療細菌感染，因此是感冒的特效藥，儘早服用抗生素可加快康復速度",
];
const expected_impacts = ["可能影響", "不太會影響"];
const patient_thoughts = ["非常相信該資訊", "對該資訊持有懷疑態度"];
const time_limits = ["有足夠的時間", "時間有限"];

let vignettes = [];
let factors = [];

ages.forEach((age) => {
  mention_methods.forEach((mention_method) => {
    message_types.forEach((message_type) => {
      expected_impacts.forEach((expected_impact) => {
        patient_thoughts.forEach((patient_thought) => {
          time_limits.forEach((time_limit) => {
            // vignettes.push(
            //   `你現在於工作的藥局與一位 ${age} 歲的民眾對話，這位民眾${mention_method}一個健康偏頗資訊：「${message_type}。」在後續的對談中，你發現此民眾${patient_thought}，且評估完此民眾的身體狀況後，你預期這項資訊${expected_impact}該民眾的健康，而目前你${time_limit}。`
            // );
            factors.push({
              age: age,
              mention_method: mention_method,
              message_type: message_type,
              expected_impact: expected_impact,
              patient_thought: patient_thought,
              time_limit: time_limit,
            });
          });
        });
      });
    });
  });
});

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

// shuffleArray(vignettes);
shuffleArray(factors);

// const csvWriter = createObjectCsvWriter({
//   path: "vignettes.csv",
//   header: [{ id: "text", title: "" }],
// });

// csvWriter
//   .writeRecords(vignettes)
//   .then(() => console.log("The CSV file was written successfully"));

// console.log(vignettes);

// fs.writeFile(
//   "vignettes.json",
//   JSON.stringify(vignettes),
//   "utf8",
//   function (err) {
//     if (err) {
//       console.log("An error occured while writing JSON Object to File.");
//       return console.log(err);
//     }

//     console.log("JSON file has been saved.");
//   }
// );

fs.writeFile(
  "factors.json",
  JSON.stringify(factors),
  "utf8",
  function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }
    console.log("JSON file has been saved.");
  }
);
