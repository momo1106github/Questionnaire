export const questionnaire_title = "台灣藥師、藥學生應對健康偏頗資訊之行為探討";
export const questionnaire_intro = `
各位藥師、同學們，您好，
此問卷目的在於了解台灣藥師面對病人提及健康偏頗或有誤資訊時的應對行為，並探討相關因素之影響。
我們非常誠摯地邀請您填寫問卷，整份問卷約需花費您 10 分鐘的時間。本研究已通過臺北醫學大學暨附屬醫院聯合人體研究倫理委
員會核准，您的資料將視為機密且身分將被保密，若您在研究過程中有任何對本研究之疑慮，可隨時要求修正、刪除資料，亦可選擇
退出研究，感謝您的協助。
問卷填寫完成後，請留下 Email，填寫順序為前 200 名者，經研究人員確認為有效問卷後，我們將寄送星巴克星享飲料券一份。

臺北醫學大學藥學系碩士班
學生：藍詩函
指導教授：張雅惠 副教授

如需額外相關資訊或有任何問題，歡迎與我們聯繫。
聯絡人：藍詩函
聯絡電話：(02)2736-1661 #6177
Email: m301110033@tmu.edu.tw
`;

export const num_personal_info = 11;
export const personal_info_questions = [
  {
    description: "1. 生理性別",
    options: [
      { value: "男性", label: "男性" },
      { value: "女性", label: "女性" },
    ],
  },
  {
    description: "2. 年齡",
    options: [
      { value: "20-24歲", label: "20-24歲" },
      { value: "25-34歲", label: "25-34歲" },
      { value: "35-44歲", label: "35-44歲" },
      { value: "45-54歲", label: "45-54歲" },
      { value: "55-64歲", label: "55-64歲" },
      { value: "65歲以上", label: "65歲以上" },
    ],
  },
  {
    description: "3. 最高學歷",
    options: [
      { value: "目前仍就讀藥學系中", label: "目前仍就讀藥學系中" },
      { value: "藥學士", label: "藥學士" },
      { value: "臨床藥學士/Pharm. D", label: "臨床藥學士/Pharm. D" },
      { value: "碩士", label: "碩士" },
      { value: "博士", label: "博士" },
      { value: "其他", label: "其他" },
    ],
  },
  {
    description: "4. (僅藥師填寫)藥師執業經驗",
    options: [
      { value: "未滿1年", label: "未滿1年" },
      { value: "1-2年", label: "1-2年" },
      { value: "3-5年", label: "3-5年" },
      { value: "6-10年", label: "6-10年" },
      { value: "11-15年", label: "11-15年" },
      { value: "16年以上", label: "16年以上" },
    ],
  },
  {
    description: "5. (僅藥師填寫)目前執業場所",
    options: [
      { value: "醫院", label: "醫院" },
      { value: "社區藥局", label: "社區藥局" },
      { value: "診所", label: "診所" },
      { value: "其他", label: "其他" },
    ],
  },
  {
    description: "6. (僅藥學生填寫)醫療機構實習經驗  *註：志工不包含在內",
    options: [
      { value: "無", label: "無" },
      { value: "醫院", label: "醫院" },
      { value: "社區藥局", label: "社區藥局" },
      { value: "診所", label: "診所" },
      { value: "其他", label: "其他" },
    ],
  },
  {
    description: "7. (僅藥學生填寫)醫療機構工讀經驗  *註：志工不包含在內",
    options: [
      { value: "無", label: "無" },
      { value: "醫院", label: "醫院" },
      { value: "社區藥局", label: "社區藥局" },
      { value: "診所", label: "診所" },
      { value: "其他", label: "其他" },
    ],
  },
];

export const col_names = [
  "Timestamp",
  "Duration",
  "IP",
  "生理性別",
  "年齡",
  "最高學歷",
  "藥師執業經驗",
  "目前職業場所",
  "醫療機構實習經驗",
  "醫療機構工讀經驗",
  "Email",
  "Part1_Q1_1",
  "Part1_Q1_2",
  "Part1_Q1_3",
  "Part1_Q1_4",
  "Part1_Q2_1",
  "Part1_Q2_2",
  "Part1_Q2_3",
  "Part1_Q2_4",
  "Part2_Q1_1",
  "Part2_Q1_2",
  "Part2_Q1_3",
  "Part2_Q1_4",
  "Part2_Q1_5",
  "Part2_Q2_1",
  "Part2_Q2_2",
  "Part2_Q2_3",
  "Part2_Q2_4",
  "Part2_Q2_5",
  "Part3_1",
  "Part3_2",
  "Part3_3",
  "Part3_4",
  "Part3_5",
  "Part3_6",
  "Part3_7",
  "Part3_8",
  "Part3_9",
  "Part4_1",
  "Part4_2",
  "Part4_3",
  "Part4_4",
  "Part4_5",
  "Part4_6",
  "Part4_7",
  "Part4_8",
  "Part4_9",
  "Part5_1",
  "Part5_2",
  "Part5_3",
  "Part5_4",
  "Part5_5",
  "Part4_6",
  "Part6_scenario1_1",
  "Part6_scenario1_2",
  "Part6_scenario1_3",
  "Part6_scenario1_4",
  "Part6_scenario1_5",
  "Part6_scenario2_1",
  "Part6_scenario2_2",
  "Part6_scenario2_3",
  "Part6_scenario2_4",
  "Part6_scenario2_5",
  "Part6_scenario3_1",
  "Part6_scenario3_2",
  "Part6_scenario3_3",
  "Part6_scenario3_4",
  "Part6_scenario3_5",
  "Part6_scenario4_1",
  "Part6_scenario4_2",
  "Part6_scenario4_3",
  "Part6_scenario4_4",
  "Part6_scenario4_5",
  "Part6_scenario5_1",
  "Part6_scenario5_2",
  "Part6_scenario5_3",
  "Part6_scenario5_4",
  "Part6_scenario5_5",
];

export const num_part1 = 8;
export const part1_questions = [
  {
    description: "1. 我認為與病人釐清偏頗或有誤的健康資訊：",
    sub_questions: [
      {
        text: "(1) 簡單程度",
        options: [
          { value: "非常簡單", label: "非常簡單" },
          { value: "簡單", label: "簡單" },
          { value: "普通", label: "普通" },
          { value: "困難", label: "困難" },
          { value: "非常困難", label: "非常困難" },
        ],
      },
      {
        text: "(2) 意義程度",
        options: [
          { value: "非常有意義", label: "非常有意義" },
          { value: "有意義", label: "有意義" },
          { value: "普通", label: "普通" },
          { value: "無意義", label: "無意義" },
          { value: "非常無意義", label: "非常無意義" },
        ],
      },
      {
        text: "(3) 有趣程度",
        options: [
          { value: "非常有趣", label: "非常有趣" },
          { value: "有趣", label: "有趣" },
          { value: "普通", label: "普通" },
          { value: "不有趣", label: "不有趣" },
          { value: "非常不有趣", label: "非常不有趣" },
        ],
      },
      {
        text: "(4) 愉快程度",
        options: [
          { value: "非常愉快", label: "非常愉快" },
          { value: "愉快", label: "愉快" },
          { value: "普通", label: "普通" },
          { value: "不愉快", label: "不愉快" },
          { value: "非常不愉快", label: "非常不愉快" },
        ],
      },
    ],
  },
  {
    description: "2. 我認為在社群媒體或公開場合釐清偏頗或有誤的健康資訊：",
    sub_questions: [
      {
        text: "(1) 簡單程度",
        options: [
          { value: "非常簡單", label: "非常簡單" },
          { value: "簡單", label: "簡單" },
          { value: "普通", label: "普通" },
          { value: "困難", label: "困難" },
          { value: "非常困難", label: "非常困難" },
        ],
      },
      {
        text: "(2) 意義程度",
        options: [
          { value: "非常有意義", label: "非常有意義" },
          { value: "有意義", label: "有意義" },
          { value: "普通", label: "普通" },
          { value: "無意義", label: "無意義" },
          { value: "非常無意義", label: "非常無意義" },
        ],
      },
      {
        text: "(3) 有趣程度",
        options: [
          { value: "非常有趣", label: "非常有趣" },
          { value: "有趣", label: "有趣" },
          { value: "普通", label: "普通" },
          { value: "不有趣", label: "不有趣" },
          { value: "非常不有趣", label: "非常不有趣" },
        ],
      },
      {
        text: "(4) 愉快程度",
        options: [
          { value: "非常愉快", label: "非常愉快" },
          { value: "愉快", label: "愉快" },
          { value: "普通", label: "普通" },
          { value: "不愉快", label: "不愉快" },
          { value: "非常不愉快", label: "非常不愉快" },
        ],
      },
    ],
  },
];

export const num_part2 = 10;
export const part2_questions = [
  {
    description:
      "1. 對於與病人釐清偏頗或有誤的健康資訊，以下這些我身旁的人認為我應該這麼做：",
    sub_questions: [
      {
        text: "(1) 我的親朋好友們",
        options: [
          { value: "非常同意", label: "非常同意" },
          { value: "同意", label: "同意" },
          { value: "普通", label: "普通" },
          { value: "不同意", label: "不同意" },
          { value: "非常不同意", label: "非常不同意" },
        ],
      },
      {
        text: "(2) 我的主管",
        options: [
          { value: "非常同意", label: "非常同意" },
          { value: "同意", label: "同意" },
          { value: "普通", label: "普通" },
          { value: "不同意", label: "不同意" },
          { value: "非常不同意", label: "非常不同意" },
        ],
      },
      {
        text: "(3) 我的同事/同學",
        options: [
          { value: "非常同意", label: "非常同意" },
          { value: "同意", label: "同意" },
          { value: "普通", label: "普通" },
          { value: "不同意", label: "不同意" },
          { value: "非常不同意", label: "非常不同意" },
        ],
      },
      {
        text: "(4) 我的病人/客戶",
        options: [
          { value: "非常同意", label: "非常同意" },
          { value: "同意", label: "同意" },
          { value: "普通", label: "普通" },
          { value: "不同意", label: "不同意" },
          { value: "非常不同意", label: "非常不同意" },
        ],
      },
      {
        text: "(5) 社會大眾",
        options: [
          { value: "非常同意", label: "非常同意" },
          { value: "同意", label: "同意" },
          { value: "普通", label: "普通" },
          { value: "不同意", label: "不同意" },
          { value: "非常不同意", label: "非常不同意" },
        ],
      },
    ],
  },
  {
    description:
      "2. 對於在社群媒體或公開場合釐清偏頗或有誤的健康資訊，以下這些我身旁的人認為我應該這麼做：",
    sub_questions: [
      {
        text: "(1) 我的親朋好友們",
        options: [
          { value: "非常同意", label: "非常同意" },
          { value: "同意", label: "同意" },
          { value: "普通", label: "普通" },
          { value: "不同意", label: "不同意" },
          { value: "非常不同意", label: "非常不同意" },
        ],
      },
      {
        text: "(2) 我的主管",
        options: [
          { value: "非常同意", label: "非常同意" },
          { value: "同意", label: "同意" },
          { value: "普通", label: "普通" },
          { value: "不同意", label: "不同意" },
          { value: "非常不同意", label: "非常不同意" },
        ],
      },
      {
        text: "(3) 我的同事/同學",
        options: [
          { value: "非常同意", label: "非常同意" },
          { value: "同意", label: "同意" },
          { value: "普通", label: "普通" },
          { value: "不同意", label: "不同意" },
          { value: "非常不同意", label: "非常不同意" },
        ],
      },
      {
        text: "(4) 我的病人/客戶",
        options: [
          { value: "非常同意", label: "非常同意" },
          { value: "同意", label: "同意" },
          { value: "普通", label: "普通" },
          { value: "不同意", label: "不同意" },
          { value: "非常不同意", label: "非常不同意" },
        ],
      },
      {
        text: "(5) 社會大眾",
        options: [
          { value: "非常同意", label: "非常同意" },
          { value: "同意", label: "同意" },
          { value: "普通", label: "普通" },
          { value: "不同意", label: "不同意" },
          { value: "非常不同意", label: "非常不同意" },
        ],
      },
    ],
  },
];

export const num_part3 = 9;
export const part3_questions = [
  {
    description: "",
    sub_questions: [
      {
        text: "1. 我是醫藥專業領域的一員。",
        options: [
          { value: "非常同意", label: "非常同意" },
          { value: "同意", label: "同意" },
          { value: "普通", label: "普通" },
          { value: "不同意", label: "不同意" },
          { value: "非常不同意", label: "非常不同意" },
        ],
      },
      {
        text: "2. 我與醫藥專業的人員有緊密的關係。",
        options: [
          { value: "非常同意", label: "非常同意" },
          { value: "同意", label: "同意" },
          { value: "普通", label: "普通" },
          { value: "不同意", label: "不同意" },
          { value: "非常不同意", label: "非常不同意" },
        ],
      },
      {
        text: "3. 我經常羞於承認自己是醫藥專業領域的一員。",
        options: [
          { value: "非常同意", label: "非常同意" },
          { value: "同意", label: "同意" },
          { value: "普通", label: "普通" },
          { value: "不同意", label: "不同意" },
          { value: "非常不同意", label: "非常不同意" },
        ],
      },
      {
        text: "4. 我發現我會因為身為醫藥專業領域的一員而找藉口。",
        options: [
          { value: "非常同意", label: "非常同意" },
          { value: "同意", label: "同意" },
          { value: "普通", label: "普通" },
          { value: "不同意", label: "不同意" },
          { value: "非常不同意", label: "非常不同意" },
        ],
      },
      {
        text: "5. 我會嘗試隱瞞我是醫藥專業領域的一員。",
        options: [
          { value: "非常同意", label: "非常同意" },
          { value: "同意", label: "同意" },
          { value: "普通", label: "普通" },
          { value: "不同意", label: "不同意" },
          { value: "非常不同意", label: "非常不同意" },
        ],
      },
      {
        text: "6. 我很高興自己是醫藥專業領域的一員。",
        options: [
          { value: "非常同意", label: "非常同意" },
          { value: "同意", label: "同意" },
          { value: "普通", label: "普通" },
          { value: "不同意", label: "不同意" },
          { value: "非常不同意", label: "非常不同意" },
        ],
      },
      {
        text: "7. 我可以很認同醫藥專業領域的一員。",
        options: [
          { value: "非常同意", label: "非常同意" },
          { value: "同意", label: "同意" },
          { value: "普通", label: "普通" },
          { value: "不同意", label: "不同意" },
          { value: "非常不同意", label: "非常不同意" },
        ],
      },
      {
        text: "8. 成為醫藥專業領域的一員對我來說很重要。",
        options: [
          { value: "非常同意", label: "非常同意" },
          { value: "同意", label: "同意" },
          { value: "普通", label: "普通" },
          { value: "不同意", label: "不同意" },
          { value: "非常不同意", label: "非常不同意" },
        ],
      },
      {
        text: "9. 我認為我與醫藥專業領域的其他成員有共同的特質。",
        options: [
          { value: "非常同意", label: "非常同意" },
          { value: "同意", label: "同意" },
          { value: "普通", label: "普通" },
          { value: "不同意", label: "不同意" },
          { value: "非常不同意", label: "非常不同意" },
        ],
      },
    ],
  },
];

export const num_part4 = 8;
export const part4_questions = [
  {
    description: "您對於親自執行下列行為的信心程度為何：",
    sub_questions: [
      {
        text: "1. 我能夠在病人病人提及健康資訊時，判斷該資訊的真實性。",
        options: [
          { value: "非常有信心", label: "非常有信心" },
          { value: "有信心", label: "有信心" },
          { value: "普通", label: "普通" },
          { value: "沒有信心", label: "沒有信心" },
          { value: "完全沒有信心", label: "完全沒有信心" },
        ],
      },
      {
        text: "2. 我能夠在與病人對話的過程中，發現病人潛在的健康偏頗觀念。",
        options: [
          { value: "非常有信心", label: "非常有信心" },
          { value: "有信心", label: "有信心" },
          { value: "普通", label: "普通" },
          { value: "沒有信心", label: "沒有信心" },
          { value: "完全沒有信心", label: "完全沒有信心" },
        ],
      },
      {
        text: "3. 我能夠向病人釐清健康偏頗或有誤資訊。",
        options: [
          { value: "非常有信心", label: "非常有信心" },
          { value: "有信心", label: "有信心" },
          { value: "普通", label: "普通" },
          { value: "沒有信心", label: "沒有信心" },
          { value: "完全沒有信心", label: "完全沒有信心" },
        ],
      },
      {
        text: "4. 我能夠透過對話讓病人重視健康偏頗或有誤資訊帶來的危害。",
        options: [
          { value: "非常有信心", label: "非常有信心" },
          { value: "有信心", label: "有信心" },
          { value: "普通", label: "普通" },
          { value: "沒有信心", label: "沒有信心" },
          { value: "完全沒有信心", label: "完全沒有信心" },
        ],
      },
      {
        text: "5. 我能夠在與病人討論健康偏頗或有誤資訊時顧及對方的感受。",
        options: [
          { value: "非常有信心", label: "非常有信心" },
          { value: "有信心", label: "有信心" },
          { value: "普通", label: "普通" },
          { value: "沒有信心", label: "沒有信心" },
          { value: "完全沒有信心", label: "完全沒有信心" },
        ],
      },
      {
        text: "6. 我能夠辨識社群媒體上散布的健康偏頗或有誤資訊。",
        options: [
          { value: "非常有信心", label: "非常有信心" },
          { value: "有信心", label: "有信心" },
          { value: "普通", label: "普通" },
          { value: "沒有信心", label: "沒有信心" },
          { value: "完全沒有信心", label: "完全沒有信心" },
        ],
      },
      {
        text: "7. 我能夠在社群媒體或公開場合釐清健康偏頗或有誤資訊。",
        options: [
          { value: "非常有信心", label: "非常有信心" },
          { value: "有信心", label: "有信心" },
          { value: "普通", label: "普通" },
          { value: "沒有信心", label: "沒有信心" },
          { value: "完全沒有信心", label: "完全沒有信心" },
        ],
      },
      {
        text: "8. 我能夠製作文宣，向大眾釐清健康偏頗或有誤資訊。",
        options: [
          { value: "非常有信心", label: "非常有信心" },
          { value: "有信心", label: "有信心" },
          { value: "普通", label: "普通" },
          { value: "沒有信心", label: "沒有信心" },
          { value: "完全沒有信心", label: "完全沒有信心" },
        ],
      },
    ],
  },
];

export const num_part5 = 6;
export const part5_questions = [
  {
    description: "",
    sub_questions: [
      {
        text: "1. 我經常遇過病人提及的健康偏頗資訊或有誤資訊。",
        options: [
          { value: "非常同意", label: "非常同意" },
          { value: "同意", label: "同意" },
          { value: "普通", label: "普通" },
          { value: "不同意", label: "不同意" },
          { value: "非常不同意", label: "非常不同意" },
        ],
      },
      {
        text: "2. 我經常和病人討論健康偏頗或有誤資訊。",
        options: [
          { value: "非常同意", label: "非常同意" },
          { value: "同意", label: "同意" },
          { value: "普通", label: "普通" },
          { value: "不同意", label: "不同意" },
          { value: "非常不同意", label: "非常不同意" },
        ],
      },
      {
        text: "3. 我經常與同儕、同事分享自己與病人討論健康偏頗或有誤資訊的經驗。",
        options: [
          { value: "非常同意", label: "非常同意" },
          { value: "同意", label: "同意" },
          { value: "普通", label: "普通" },
          { value: "不同意", label: "不同意" },
          { value: "非常不同意", label: "非常不同意" },
        ],
      },
      {
        text: "4. 我經常在社群媒體上討論健康偏頗或有誤資訊。",
        options: [
          { value: "非常同意", label: "非常同意" },
          { value: "同意", label: "同意" },
          { value: "普通", label: "普通" },
          { value: "不同意", label: "不同意" },
          { value: "非常不同意", label: "非常不同意" },
        ],
      },
      {
        text: "5. 我經常發現散播於社群媒體上的健康偏頗或有誤資訊。",
        options: [
          { value: "非常同意", label: "非常同意" },
          { value: "同意", label: "同意" },
          { value: "普通", label: "普通" },
          { value: "不同意", label: "不同意" },
          { value: "非常不同意", label: "非常不同意" },
        ],
      },
      {
        text: "6. 我經常製作健康資訊文宣，向大眾釐清現有的健康偏頗或有誤資訊。",
        options: [
          { value: "非常同意", label: "非常同意" },
          { value: "同意", label: "同意" },
          { value: "普通", label: "普通" },
          { value: "不同意", label: "不同意" },
          { value: "非常不同意", label: "非常不同意" },
        ],
      },
    ],
  },
];

export const num_factorial_survey = 5;
export const factorial_survey_intro =
  "請依照此情境，填寫您會做出下列行為的可能性(-5~5分，-5代表非常不可能；5代表非常可能)";
export const factorial_survey_questions = [
  {
    // 1
    description: "1. 我會和此病人簡單說明該資訊有偏頗或有誤。",
    options: [
      { value: -5, label: -5 },
      { value: -4, label: -4 },
      { value: -3, label: -3 },
      { value: -2, label: -2 },
      { value: -1, label: -1 },
      { value: 0, label: 0 },
      { value: 1, label: 1 },
      { value: 2, label: 2 },
      { value: 3, label: 3 },
      { value: 4, label: 4 },
      { value: 5, label: 5 },
    ],
  },
  {
    // 2
    description: "2. 我會詳細地和此病人釐清健康偏頗或有誤資訊。",
    options: [
      { value: -5, label: -5 },
      { value: -4, label: -4 },
      { value: -3, label: -3 },
      { value: -2, label: -2 },
      { value: -1, label: -1 },
      { value: 0, label: 0 },
      { value: 1, label: 1 },
      { value: 2, label: 2 },
      { value: 3, label: 3 },
      { value: 4, label: 4 },
      { value: 5, label: 5 },
    ],
  },
  {
    // 3
    description: "3. 我會避免和此病人談論此資訊。",
    options: [
      { value: -5, label: -5 },
      { value: -4, label: -4 },
      { value: -3, label: -3 },
      { value: -2, label: -2 },
      { value: -1, label: -1 },
      { value: 0, label: 0 },
      { value: 1, label: 1 },
      { value: 2, label: 2 },
      { value: 3, label: 3 },
      { value: 4, label: 4 },
      { value: 5, label: 5 },
    ],
  },
  {
    // 4
    description:
      "4. 我會額外在公開的網路社團、群組上釐清此健康偏頗或有誤資訊。",
    options: [
      { value: -5, label: -5 },
      { value: -4, label: -4 },
      { value: -3, label: -3 },
      { value: -2, label: -2 },
      { value: -1, label: -1 },
      { value: 0, label: 0 },
      { value: 1, label: 1 },
      { value: 2, label: 2 },
      { value: 3, label: 3 },
      { value: 4, label: 4 },
      { value: 5, label: 5 },
    ],
  },
  {
    // 5
    description: "5. 我會製作相關健康資訊的文宣，並張貼於社群媒體或公開場合。",
    options: [
      { value: -5, label: -5 },
      { value: -4, label: -4 },
      { value: -3, label: -3 },
      { value: -2, label: -2 },
      { value: -1, label: -1 },
      { value: 0, label: 0 },
      { value: 1, label: 1 },
      { value: 2, label: 2 },
      { value: 3, label: 3 },
      { value: 4, label: 4 },
      { value: 5, label: 5 },
    ],
  },
];

// export const col_names = ["Email", "Timestamp",	"Duration",	"IP",
// "Attitude_Q1", "Attitude_Q2", "Attitude_Q3", "Attitude_Q4", "Attitude_Q5", "Attitude_Q6", "Attitude_Q7", "Attitude_Q8", "Attitude_Q9", "Attitude_Q10",
// "SubjectiveNorm_Q1", "SubjectiveNorm_Q2", "SubjectiveNorm_Q3", "SubjectiveNorm_Q4", "SubjectiveNorm_Q5", "SubjectiveNorm_Q6", "SubjectiveNorm_Q7", "SubjectiveNorm_Q8", "SubjectiveNorm_Q9", "SubjectiveNorm_Q10",
// "ProfessionalIdentity_Q1", "ProfessionalIdentity_Q2", "ProfessionalIdentity_Q3", "ProfessionalIdentity_Q4", "ProfessionalIdentity_Q5", "ProfessionalIdentity_Q6", "ProfessionalIdentity_Q7", "ProfessionalIdentity_Q8", "ProfessionalIdentity_Q9",
// "Self-efficacy_Q1", "Self-efficacy_Q2", "Self-efficacy_Q3", "Self-efficacy_Q4",	"Self-efficacy_Q5", "Self-efficacy_Q6",	"Self-efficacy_Q7",	"Self-efficacy_Q8",	"Self-efficacy_Q9",
// "PastExperience_Q1",	"PastExperience_Q2",	"PastExperience_Q3",	"PastExperience_Q4",	"PastExperience_Q5",	"PastExperience_Q6",	"PastExperience_Q7",	"PastExperience_Q8",	"PastExperience_Q9",
// "Vignette",	"FactorialVignette_Q1",	"FactorialVignette_Q2", "FactorialVignette_Q3",	"FactorialVignette_Q4",	"FactorialVignette_Q5"];

// export const num_attitude_questions = 10;
// export const attitude_questions = [
//   { // 1
//     description: "1. 我認為與病人討論健康偏頗資訊，並分享正確知識",
//     options: [
//       { value: "非常簡單", label: "非常簡單" },
//       { value: "簡單", label: "簡單" },
//       { value: "普通", label: "普通" },
//       { value: "困難", label: "困難" },
//       { value: "非常困難", label: "非常困難" }
//     ]
//   },
//   { // 2
//     description: "2. 我認為討論病人提及的健康偏頗資訊",
//     options: [
//       { value: "非常有意義", label: "非常有意義" },
//       { value: "有意義", label: "有意義" },
//       { value: "普通", label: "普通" },
//       { value: "無意義", label: "無意義" },
//       { value: "非常無意義", label: "非常無意義" }
//     ]
//   },
//   { // 3
//     description: "3. 我認為應對病人提及的健康偏頗資訊",
//     options: [
//       { value: "非常有趣", label: "非常有趣" },
//       { value: "有趣", label: "有趣" },
//       { value: "普通", label: "普通" },
//       { value: "不有趣", label: "不有趣" },
//       { value: "非常不有趣", label: "非常不有趣" }
//     ]
//   },
//   { // 4
//     description: "4. 我認為應對病人提及的健康偏頗資訊",
//     options: [
//       { value: "非常愉快", label: "非常愉快" },
//       { value: "愉快", label: "愉快" },
//       { value: "普通", label: "普通" },
//       { value: "不愉快", label: "不愉快" },
//       { value: "非常不愉快", label: "非常不愉快" }
//     ]
//   },
//   { // 5
//     description: "5. 我認為應對病人提及的健康偏頗資訊",
//     options: [
//       { value: "非常必要", label: "非常必要" },
//       { value: "必要", label: "必要" },
//       { value: "普通", label: "普通" },
//       { value: "不必要", label: "不必要" },
//       { value: "非常不必要", label: "非常不必要" }
//     ]
//   },
//   { // 6
//     description: "6. 我認為在社群媒體或公開場合討論健康偏頗資訊，並分享正確知識：",
//     options: [
//       { value: "非常簡單", label: "非常簡單" },
//       { value: "簡單", label: "簡單" },
//       { value: "普通", label: "普通" },
//       { value: "困難", label: "困難" },
//       { value: "非常困難", label: "非常困難" }
//     ]
//   },
//   { // 7
//     description: "7. 我認為在社群媒體或公開場合討論健康偏頗資訊，並分享正確知識：",
//     options: [
//       { value: "非常有意義", label: "非常有意義" },
//       { value: "有意義", label: "有意義" },
//       { value: "普通", label: "普通" },
//       { value: "無意義", label: "無意義" },
//       { value: "非常無意義", label: "非常無意義" }
//     ]
//   },
//   { // 8
//     description: "8. 我認為在社群媒體或公開場合討論健康偏頗資訊，並分享正確事實與知識",
//     options: [
//       { value: "非常有趣", label: "非常有趣" },
//       { value: "有趣", label: "有趣" },
//       { value: "普通", label: "普通" },
//       { value: "不有趣", label: "不有趣" },
//       { value: "非常不有趣", label: "非常不有趣" }
//     ]
//   },
//   { // 9
//     description: "9. 我認為在社群媒體或公開場合討論健康偏頗資訊，並分享正確事實與知識",
//     options: [
//       { value: "非常愉快", label: "非常愉快" },
//       { value: "愉快", label: "愉快" },
//       { value: "普通", label: "普通" },
//       { value: "不愉快", label: "不愉快" },
//       { value: "非常不愉快", label: "非常不愉快" }
//     ]
//   },
//   { // 10
//     description: "10. 我認為在社群媒體或公開場合討論健康偏頗資訊，並分享正確事實與知識",
//     options: [
//       { value: "非常必要", label: "非常必要" },
//       { value: "必要", label: "必要" },
//       { value: "普通", label: "普通" },
//       { value: "不必要", label: "不必要" },
//       { value: "非常不必要", label: "非常不必要" }
//     ]
//   },
// ]

// export const num_subjective_norm_questions = 10;
// export const subjective_norm_questions = [
//   { // 1
//     description: "1. 我的親朋好友們認為我應該與病人討論(澄清、釐清)健康偏頗資訊(誤導、假消息)",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
//   { // 2
//     description: "2. 我的親朋好友們認為我應該在社群媒體或公開場合討論健康偏頗資訊",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
//   { // 3
//     description: "3. 我的主管認為我應該應對病人提及的健康偏頗資訊",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
//   { // 4
//     description: "4. 我的主管認為我應該在社群媒體或公開場合討論健康偏頗資訊",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
//   { // 5
//     description: "5. 我的同事/同學認為我應該應對病人提及的健康偏頗資訊",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
//   { // 6
//     description: "6. 我的同事/同學認為我應該在社群媒體或公開場合討論健康偏頗資訊之正確事實",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
//   { // 7
//     description: "7. 我的病人/客戶認為我應該應對病人提及的健康偏頗資訊",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
//   { // 8
//     description: "8. 我的病人/客戶認為我應該在社群媒體或公開場合討論健康偏頗資訊之正確事實",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
//   { // 9
//     description: "9. 社會大眾認為我應該應對病人提及的健康偏頗資訊",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
//   { // 10
//     description: "10. 社會大眾認為我應該在社群媒體或公開場合討論健康偏頗資訊之正確事實",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
// ];

// export const professional_identity_intro = "Ref: Investigating the factors influencing professional identity of first-year health and social care students (Adams, 2006) (*為原版英文)"
// export const num_professional_identity_questions = 9;
// export const professional_identity_questions = [
//   { // 1
//     description: "1. 我是藥學專業(醫藥專業)的一份子\n *I feel like I am a member of this profession.",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
//   { // 2
//     description: "2. 我與藥學專業(醫藥專業)的人員有緊密的關係\n *I feel I have strong ties with members of this profession.",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
//   { // 3
//     description: "3. 我經常羞於承認自己是藥學專業(醫藥專業)的一份子(反向)\n *I am often ashamed to admit that I am studying for this profession.",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
//   { // 4
//     description: "4. 我發現我會因為身為醫療專業人員而找藉口(反向)\n *I find myself making excuses for belonging to this profession",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
//   { // 5
//     description: "5. 我會嘗試隱瞞我是醫療專業人員的角色(反向)\n *I try to hide that I am studying to be part of this profession.",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
//   { // 6
//     description: "6. 我很高興自己是醫療專業人 員\n *I am pleased to belong to this profession.",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
//   { // 7
//     description: "7. 我可以很認同醫療專業領域的成員\n *I can identify positively with members of this profession.",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
//   { // 8
//     description: "8. 成為醫療專業領域的一員對我來說很重要\n *Being a member of this profession is important to me.",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
//   { // 9
//     description: "9. 我認為我與醫療專業領域的其他成員有共同的特質\n *I feel I share characteristics with other members of the profession.",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
// ];

// export const num_self_efficacy_questions = 9;
// export const self_efficacy_intro = "部分參考: Axboe, M.K., Christensen, K.S., Kofoed, PE. et al. Development and validation of a self-efficacy questionnaire (SE-12) measuring the clinical communication skills of health care professionals. BMC Med Educ 16, 272 (2016)"
// export const self_efficacy_questions = [
//   { // 1
//     description: "1. 我能夠在病人提及健康相關資訊時，判斷該資訊的真實性",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
//   { // 2
//     description: "2. 我能夠在與病人對話的過程中，發現病人潛在的健康偏頗觀念",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
//   { // 3
//     description: "3. 我能夠在病人提及健康偏頗資訊時，向病人說明該訊息有偏誤",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
//   { // 4
//     description: "4. 我能夠在病人提及健康偏頗資訊時，說明正確事實與知識",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
//   { // 5
//     description: "5. 我能夠透過對話讓病人重視健康偏頗資訊帶來的危害",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
//   { // 6
//     description: "6. 我能夠在與病人討論健康偏頗資訊時顧及對方的感受",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
//   { // 7
//     description: "7. 我能夠辨識社群媒體上散布的健康偏頗資訊",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
//   { // 8
//     description: "8. 我能夠在社群媒體或公開場合討論健康偏頗資訊之正確事實",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
//   { // 9
//     description: "9. 我能夠製作文宣，提醒大眾健康偏頗資訊之正確事實",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
// ];

// export const num_past_experience_questions = 9;
// export const past_experience_questions = [
//   { // 1
//     description: "1. 我曾經遇過病人提及的健康偏頗資訊",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
//   { // 2
//     description: "2. 我曾經和病人討論健康偏頗資訊",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
//   { // 3
//     description: "3. 我曾經與同儕、同事分享自己應對病人提及之健康偏頗資訊的經驗",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
//   { // 4
//     description: "4. 我曾經在社群媒體上討論健康偏頗資訊",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
//   { // 5
//     description: "5. 我曾經發現散播於社群媒體上的健康資訊有偏誤",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
//   { // 6
//     description: "6. 我曾經製作健康資訊文宣，提醒大眾現有的健康偏頗資訊",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
//   { // 7
//     description: "7. 我能夠辨識社群媒體上散布的健康偏頗資訊",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
//   { // 8
//     description: "8. 我曾經在發現病人有健康偏頗觀念時，沒有做出提醒",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
//   { // 9
//     description: "9. 我能夠製作文宣，提醒大眾健康偏頗資訊之正確事實",
//     options: [
//       { value: "非常同意", label: "非常同意" },
//       { value: "同意", label: "同意" },
//       { value: "普通", label: "普通" },
//       { value: "不同意", label: "不同意" },
//       { value: "非常不同意", label: "非常不同意" }
//     ]
//   },
// ];

// export const vignette = `你現在正在與一位 25 歲的民眾對話，
// 這位民眾在對話過程中提到一個健康偏頗資訊：「維他命 D 會造成阿茲海默症，為了避免失智，要減少攝取維他命D。」
// 在後續的對談中，你發現此民眾非常相信該訊息，也預期這項資訊可能影響該病人的健康，而目前你有足夠的時間。`
