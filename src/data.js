export const questionnaire_title = "台灣藥師、藥學生應對健康偏頗資訊之行為探討";
export const questionnaire_intro = `
各位藥師、同學們，您好，
此問卷目的在於了解台灣藥師面對病人提及健康偏頗或有誤資訊時的應對行為，並探討相關因素之影響。
我們非常誠摯地邀請您填寫問卷，整份問卷約需花費您10分鐘的時間。本研究已通過臺北醫學大學暨附屬醫院聯合人體研究倫理委員會核准，您的資料將視為機密且身分將被保密，若您在研究過程中有任何對本研究之疑慮，可隨時要求修正、刪除資料，亦可選擇退出研究，感謝您的協助。
問卷填寫完成後，若您有意願領取數位禮券，請留下您常用的email，經研究人員確認為有效問卷後，將依前200名填寫順序寄送。

臺北醫學大學藥學系碩士班
學生：藍詩函
指導教授：張雅惠 副教授

如需額外相關資訊或有任何問題，歡迎與我們聯繫。
聯絡人：藍詩函
聯絡電話：(02)2736-1661 #6177
Email: m301110033@tmu.edu.tw
`;

export const num_personal_info = 14;
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
      { value: "3.其他", label: "其他" },
    ],
  },
  {
    description: "4. 藥師執業經驗",
    options: [
      { value: "0-2年", label: "0-2年" },
      { value: "3-5年", label: "3-5年" },      
      { value: "6-10年", label: "6-10年" },
      { value: "11-15年", label: "11-15年" },
      { value: "16年以上", label: "16年以上" },
      { value: "尚未取得證書", label: "尚未取得證書" },
      { value: "已取得證書但尚未執登", label: "已取得證書但尚未執登" },
    ],
  },
  {
    description: "5. 目前執業場所",
    options: [
      { value: "醫院", label: "醫院" },
      { value: "社區藥局", label: "社區藥局" },
      { value: "診所", label: "診所" },
      { value: "尚未取得證書", label: "尚未取得證書" },
      { value: "已取得證書但尚未執登", label: "已取得證書但尚未執登" },
      { value: "5.其他", label: "其他" },
    ],
  },
  {
    description: "6. 醫療機構實習經驗  *註：志工不包含在內",
    options: [
      { value: "6.無", label: "無" },
      { value: "6.醫院", label: "醫院" },
      { value: "6.社區藥局", label: "社區藥局" },
      { value: "6.診所", label: "診所" },
      { value: "6.其他", label: "其他" },
    ],
  },
  {
    description: "7. 醫療機構工讀經驗  *註：志工不包含在內",
    options: [
      { value: "7.無", label: "無" },
      { value: "7.醫院", label: "醫院" },
      { value: "7.社區藥局", label: "社區藥局" },
      { value: "7.診所", label: "診所" },
      { value: "7.其他", label: "其他" },
    ],
  },
  {
    description: "8. 經常使用之社群媒體",
    options: [
      { value: "8.Facebook", label: "Facebook" },
      { value: "8.Instagram", label: "Instagram" },
      { value: "8.LINE", label: "LINE" },
      { value: "8.Twitter", label: "Twitter" },
      { value: "8.Youtube", label: "Youtube" },
      { value: "8.Tiktok", label: "Tiktok" },
      { value: "8.Blog", label: "Blog" },
      { value: "8.LinkedIn", label: "LinkedIn" },
      { value: "8.其他", label: "其他" },
    ],
  },
  {
    description: "9. 平均每天使用社群媒體的時間",
    options: [
      { value: "每天<30分鐘", label: "每天<30分鐘" },
      { value: "每天30分鐘-1小時(不包含1小時)", label: "每天30分鐘-1小時(不包含1小時)" },
      { value: "每天1-2小時(不包含2小時)", label: "每天1-2小時(不包含2小時)" },
      { value: "每天2-3小時(不包含3小時)", label: "每天2-3小時(不包含3小時)" },
      { value: "每天3小時以上", label: "每天3小時以上" },
    ],
  },
  {
    description: "10. 平均每個月於社群媒體上發表或分享健康相關資訊的次數",
    options: [
      { value: "每月0次", label: "每月0次" },
      { value: "每月1-2次", label: "每月1-2次" },
      { value: "每月3-5次", label: "每月3-5次" },
      { value: "每月6-10次", label: "每月6-10次" },
      { value: "每月>10次", label: "每月>10次" },
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
  "經常使用之社群媒體",
  "每天社群媒體使用時間",
  "每個月分享次數",
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
  "Part5_1",
  "Part5_2",
  "Part5_3",
  "Part5_4",
  "Part5_5",
  "Part5_6",
  "Part6_S1",
  "Part6_S1_1",
  "Part6_S1_2",
  "Part6_S1_3",
  "Part6_S1_4",
  "Part6_S1_5",
  "Part6_S2",
  "Part6_S2_1",
  "Part6_S2_2",
  "Part6_S2_3",
  "Part6_S2_4",
  "Part6_S2_5",
  "Part6_S3",
  "Part6_S3_1",
  "Part6_S3_2",
  "Part6_S3_3",
  "Part6_S3_4",
  "Part6_S3_5",
  "Part6_S4",
  "Part6_S4_1",
  "Part6_S4_2",
  "Part6_S4_3",
  "Part6_S4_4",
  "Part6_S4_5",
  "Part6_S5",
  "Part6_S5_1",
  "Part6_S5_2",
  "Part6_S5_3",
  "Part6_S5_4",
  "Part6_S5_5",
];

export const num_part1 = 8;
export const part1_questions = [
  {
    description:
      "1. 我認為與病人釐清偏頗或有誤的健康資訊：請勾選最符合您想法的敘述",
    sub_questions: [
      {
        text: "(1)",
        options: [
          { value: "非常簡單", label: "非常簡單" },
          { value: "簡單", label: "簡單" },
          { value: "普通", label: "普通" },
          { value: "困難", label: "困難" },
          { value: "非常困難", label: "非常困難" },
        ],
      },
      {
        text: "(2)",
        options: [
          { value: "非常有意義", label: "非常有意義" },
          { value: "有意義", label: "有意義" },
          { value: "普通", label: "普通" },
          { value: "無意義", label: "無意義" },
          { value: "非常無意義", label: "非常無意義" },
        ],
      },
      {
        text: "(3)",
        options: [
          { value: "非常有趣", label: "非常有趣" },
          { value: "有趣", label: "有趣" },
          { value: "普通", label: "普通" },
          { value: "不有趣", label: "不有趣" },
          { value: "非常不有趣", label: "非常不有趣" },
        ],
      },
      {
        text: "(4)",
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
    description:
      "2. 我認為在社群媒體釐清偏頗或有誤的健康資訊：請勾選最符合您想法的敘述",
    sub_questions: [
      {
        text: "(1)",
        options: [
          { value: "非常簡單", label: "非常簡單" },
          { value: "簡單", label: "簡單" },
          { value: "普通", label: "普通" },
          { value: "困難", label: "困難" },
          { value: "非常困難", label: "非常困難" },
        ],
      },
      {
        text: "(2)",
        options: [
          { value: "非常有意義", label: "非常有意義" },
          { value: "有意義", label: "有意義" },
          { value: "普通", label: "普通" },
          { value: "無意義", label: "無意義" },
          { value: "非常無意義", label: "非常無意義" },
        ],
      },
      {
        text: "(3)",
        options: [
          { value: "非常有趣", label: "非常有趣" },
          { value: "有趣", label: "有趣" },
          { value: "普通", label: "普通" },
          { value: "不有趣", label: "不有趣" },
          { value: "非常不有趣", label: "非常不有趣" },
        ],
      },
      {
        text: "(4)",
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
      "1. 以下這些人對於「我應該與病人釐清偏頗或有誤的健康資訊」之同意程度：",
    sub_questions: [
      {
        text: "(1) 我的親朋好友",
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
        text: "(4) 我的病人/顧客",
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
      "2. 以下這些人對於「我應該在社群媒體釐清偏頗或有誤的健康資訊」之同意程度：",
    sub_questions: [
      {
        text: "(1) 我的親朋好友",
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
        text: "(4) 我的病人/顧客",
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
        text: "1. 我覺得我是藥學專業領域的一份子。",
        options: [
          { value: "非常同意", label: "非常同意" },
          { value: "同意", label: "同意" },
          { value: "普通", label: "普通" },
          { value: "不同意", label: "不同意" },
          { value: "非常不同意", label: "非常不同意" },
        ],
      },
      {
        text: "2. 我覺得我與藥學專業領域的其他成員有緊密的關係。",
        options: [
          { value: "非常同意", label: "非常同意" },
          { value: "同意", label: "同意" },
          { value: "普通", label: "普通" },
          { value: "不同意", label: "不同意" },
          { value: "非常不同意", label: "非常不同意" },
        ],
      },
      {
        text: "3. 我經常羞於承認自己是藥學專業領域的一份子。",
        options: [
          { value: "非常同意", label: "非常同意" },
          { value: "同意", label: "同意" },
          { value: "普通", label: "普通" },
          { value: "不同意", label: "不同意" },
          { value: "非常不同意", label: "非常不同意" },
        ],
      },
      {
        text: "4. 我發現我會對自己是藥學專業領域的一份子找理由。",
        options: [
          { value: "非常同意", label: "非常同意" },
          { value: "同意", label: "同意" },
          { value: "普通", label: "普通" },
          { value: "不同意", label: "不同意" },
          { value: "非常不同意", label: "非常不同意" },
        ],
      },
      {
        text: "5. 我會試圖隱瞞我是藥學專業領域的一份子。",
        options: [
          { value: "非常同意", label: "非常同意" },
          { value: "同意", label: "同意" },
          { value: "普通", label: "普通" },
          { value: "不同意", label: "不同意" },
          { value: "非常不同意", label: "非常不同意" },
        ],
      },
      {
        text: "6. 我很高興自己是藥學專業領域的一份子。",
        options: [
          { value: "非常同意", label: "非常同意" },
          { value: "同意", label: "同意" },
          { value: "普通", label: "普通" },
          { value: "不同意", label: "不同意" },
          { value: "非常不同意", label: "非常不同意" },
        ],
      },
      {
        text: "7. 我可以跟藥學專業領域的其他成員產生共鳴。",
        options: [
          { value: "非常同意", label: "非常同意" },
          { value: "同意", label: "同意" },
          { value: "普通", label: "普通" },
          { value: "不同意", label: "不同意" },
          { value: "非常不同意", label: "非常不同意" },
        ],
      },
      {
        text: "8. 身為藥學專業領域的一份子對我來說很重要。",
        options: [
          { value: "非常同意", label: "非常同意" },
          { value: "同意", label: "同意" },
          { value: "普通", label: "普通" },
          { value: "不同意", label: "不同意" },
          { value: "非常不同意", label: "非常不同意" },
        ],
      },
      {
        text: "9. 我覺得我與藥學專業領域的其他成員有共同的特質。",
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
        text: "1. 我能夠在病人提及健康相關資訊時，判斷該資訊的真實性。",
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
        text: "7. 我能夠在社群媒體釐清健康偏頗或有誤資訊。",
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
        text: "1. 我經常遇到病人/顧客提及健康偏頗或有誤資訊。",
        options: [
          { value: "非常同意", label: "非常同意" },
          { value: "同意", label: "同意" },
          { value: "普通", label: "普通" },
          { value: "不同意", label: "不同意" },
          { value: "非常不同意", label: "非常不同意" },
        ],
      },
      {
        text: "2. 我經常和病人/顧客討論健康偏頗或有誤資訊。",
        options: [
          { value: "非常同意", label: "非常同意" },
          { value: "同意", label: "同意" },
          { value: "普通", label: "普通" },
          { value: "不同意", label: "不同意" },
          { value: "非常不同意", label: "非常不同意" },
        ],
      },
      {
        text: "3. 我經常與同事/同學分享自己與病人/顧客討論健康偏頗或有誤資訊的經驗。",
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
  "請依照此情境，填寫您會做出下列行為的可能性(5代表非常可能；-5代表非常不可能)";
export const factorial_survey_questions = [
  {
    // 1
    description: "1. 我會和此民眾說明該資訊有偏頗或有誤。",
    options: [
      { value: 5, label: 5 },
      { value: 4, label: 4 },
      { value: 3, label: 3 },
      { value: 2, label: 2 },
      { value: 1, label: 1 },
      { value: 0, label: 0 },
      { value: -1, label: -1 },
      { value: -2, label: -2 },
      { value: -3, label: -3 },
      { value: -4, label: -4 },
      { value: -5, label: -5 },
    ],
  },
  {
    // 2
    description: "2. 我會詳細地和此民眾釐清健康偏頗或有誤資訊。",
    options: [
      { value: 5, label: 5 },
      { value: 4, label: 4 },
      { value: 3, label: 3 },
      { value: 2, label: 2 },
      { value: 1, label: 1 },
      { value: 0, label: 0 },
      { value: -1, label: -1 },
      { value: -2, label: -2 },
      { value: -3, label: -3 },
      { value: -4, label: -4 },
      { value: -5, label: -5 },
    ],
  },
  {
    // 3
    description: "3. 我會避免和此民眾談論此資訊。",
    options: [
      { value: 5, label: 5 },
      { value: 4, label: 4 },
      { value: 3, label: 3 },
      { value: 2, label: 2 },
      { value: 1, label: 1 },
      { value: 0, label: 0 },
      { value: -1, label: -1 },
      { value: -2, label: -2 },
      { value: -3, label: -3 },
      { value: -4, label: -4 },
      { value: -5, label: -5 },
    ],
  },
  {
    // 4
    description:
      "4. 我會額外在公開的網路社團、群組上釐清此健康偏頗或有誤資訊。",
    options: [
      { value: 5, label: 5 },
      { value: 4, label: 4 },
      { value: 3, label: 3 },
      { value: 2, label: 2 },
      { value: 1, label: 1 },
      { value: 0, label: 0 },
      { value: -1, label: -1 },
      { value: -2, label: -2 },
      { value: -3, label: -3 },
      { value: -4, label: -4 },
      { value: -5, label: -5 },
    ],
  },
  {
    // 5
    description: "5. 我會製作相關健康資訊的文宣，並張貼於社群媒體或公開場合。",
    options: [
      { value: 5, label: 5 },
      { value: 4, label: 4 },
      { value: 3, label: 3 },
      { value: 2, label: 2 },
      { value: 1, label: 1 },
      { value: 0, label: 0 },
      { value: -1, label: -1 },
      { value: -2, label: -2 },
      { value: -3, label: -3 },
      { value: -4, label: -4 },
      { value: -5, label: -5 },
    ],
  },
];
