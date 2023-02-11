import { createObjectCsvWriter } from "csv-writer";
import fs from "fs";

const ages = [25, 45, 70];
const mention_methods = ["在對話過程中提到", "向你詢問問題"];
const message_types = [
  "維他命 D 會造成阿茲海默症，為了避免失智，要減少攝取維他命 D",
  "乙醯半胱胺酸(N-acetylcysteine)可以抑制新型冠狀病毒，照三餐吃可以殺死病毒且康復得更快",
  "新型冠狀病毒肺炎疫苗會改變人類DNA，會導致嚴重疾病，不應該接種",
  "藥物治療是藥商與醫院賺錢的手段，蔬菜和水果即可治療癌症，吃藥反而使身體狀況更差",
  "酸性體質導致慢性病，應該多吃鹼性食物成為鹼性體質；飲酒有益心血管系統，可以藉由喝酒強化心血管，遠離心血管疾病",
  "飲酒有益心血管系統，可以藉由喝酒強化心血管，遠離心血管疾病",
  "接種流感疫苗會導致流感，為了避免不舒服，不應該接種",
  "抗生素可以治好感冒，不論是什麼原因引起的感冒，都必須吃抗生素",
];
const expected_impacts = ["可能影響", "將嚴重影響"];
const patient_thoughts = ["非常相信該訊息", "對訊息持有懷疑態度"];
const time_limits = ["有足夠的時間", "時間有限"];

let vignettes = [];

ages.forEach((age) => {
  mention_methods.forEach((mention_method) => {
    message_types.forEach((message_type) => {
      expected_impacts.forEach((expected_impact) => {
        patient_thoughts.forEach((patient_thought) => {
          time_limits.forEach((time_limit) => {
            vignettes.push(
              `你現在正在與一位 ${age} 歲的民眾對話，這位民眾${mention_method}提到一個健康偏頗資訊：「${message_type}」在後續的對談中，你發現此民眾${patient_thought}，且評估完此病人的健康狀況後，你預期這項資訊${expected_impact}該病人的健康，而目前你${time_limit}。`
            );
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

shuffleArray(vignettes);

// const csvWriter = createObjectCsvWriter({
//   path: "vignettes.csv",
//   header: [{ id: "text", title: "" }],
// });

// csvWriter
//   .writeRecords(vignettes)
//   .then(() => console.log("The CSV file was written successfully"));

// console.log(vignettes);

fs.writeFile(
  "vignettes.json",
  JSON.stringify(vignettes),
  "utf8",
  function (err) {
    if (err) {
      console.log("An error occured while writing JSON Object to File.");
      return console.log(err);
    }

    console.log("JSON file has been saved.");
  }
);
