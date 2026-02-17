export const products = [
  {
    id: "organic-tomato",
    name: "Organic Tomato",
    price: 40,
    unit: "kg",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAbMz5Zy7le7dv-XIN2bQHWdE4SwbxHE7haGoabiWcZGePL2fEoi4eYWzc3fTs94hKuIce4mVNv8pXPMrwcYy7C6u83RlQzjbIGCaIOJbTUZXehO4vu0KxJ8bjzr0fViLK1kWpU7s8rgkoeFFw02eb0NdMEwWOrqWBtr3AQDItlkDQAVT5hI6ei9S9DHsRmIuP_9hj4GLzYh8kJkXtUaYxbqje-tCqXExDu2Mu78q3EZYNjyDVGWCEArkgEO-Hd-LzA1IDcAeglnuoj",
    description: "Juicy, naturally ripened tomatoes grown without synthetic pesticides."
  },
  {
    id: "fresh-spinach",
    name: "Fresh Spinach",
    price: 20,
    unit: "bunch",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDurpRIy_1GDEhZMj5PvLPFhAJN1U3T5HPEYk3K-oxcnSfKf9i95sDo7RTZ8mCZLFMv_BxvB2lNx70S2NOoPRkG9wx0CIXaN2HeSys79fmKoSioTmyCbXnTUz6tmcGWCHpvdf7ZLGr4SEWPtVeV1bOhPG14nfpQ1TXdfJFZbLvOHBhXoVDRGXq01xBEJPGjtBTVWJuNWp1BRbUCqRhYdquanXxatEUTqfWPGpjUMu_9CZ7zTF8VXB6BWge9bXrWaIoPC0a5i39Ykhyo",
    description: "Tender leafy greens rich in iron and harvested fresh each morning."
  },
  {
    id: "raw-cow-milk",
    name: "Raw Cow Milk",
    price: 70,
    unit: "L",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBWq7swMIi41ChhzSMvM-5rg04wUwedy3VoUQPqQ-xzhzZiYdUwgn95ClisUIbSLjNrz5XbkzPfOCdSNFbH1hbT9XvxS5AsxtxOR4lmLFVRSM26sOb1NCyt7utuAdrL1d6ogpkGl2qwd4G-LCYdSyMsRGRIsZAGod3fRTuiR9jLOnVdlX48VTfA73X3-cVSQ8wz20KpqsaDm5Ph78o4AqchyMC3l2HtUr0iAVMIzMKVbWk8HML2yiwlzdGtOe2HIk9S6mh3_faRANu5",
    description: "Creamy raw milk sourced from grass-fed cows on local dairy farms."
  },
  {
    id: "kashmiri-apple",
    name: "Kashmiri Apple",
    price: 120,
    unit: "kg",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAdAehAxmlqGQt0cgf3NP34eX_VII9tAa1e7dn8a2i96HyMjxI11-yiJdJn_3rySTMIa404QKSOqW9pZxkvzGId7tAsG1uiANeEDNa83aSicin_P8OjUhuidaA46LXvNk-Z7Djwq1EX_mQJa3s4FLv9bTXHd2ATaGwy-T5x11Up8R_aqrdsY4dK-3Gte1no03i62QVc4nUoRdeBQMGqTmo3FQAc6YybFs6G0-YtZtSZlEfuAeAEip8uzIXCRDtjf9f_wVGLZ3TyLW3i",
    description: "Crisp mountain apples known for their sweet taste and natural aroma."
  }
];

export function formatPrice(value) {
  return `₹${value.toFixed(2)}`;
}
