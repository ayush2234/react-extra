export const qBank = [
  {
    id: 1,
    question: "What is the capital of Haryana?",
    options: ["Yamunanagar", "Panipat", "Gurgaon", "Chandigarh"],
    answer: "Chandigarh",
  },
  {
    id: 2,
    question: "What is the capital of Punjab?",
    options: ["Patiala", "Ludhiana", "Amritsar", "Chandigarh"],
    answer: "Chandigarh",
  },
  {
    id: 3,
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Delhi",
  },
  {
    id: 4,
    question: "What is the capital of Uttarakhad?",
    options: ["Roorkee", "Haridwar", "Dehradun", "Nanital"],
    answer: "Dehradun",
  },
  {
    id: 5,
    question: "What is capital of Uttar Pradesh?",
    options: ["GB Nagar", "Lucknow", "Prayagraj", "Agra"],
    answer: "Lucknow",
  },
];

export const shuffle = () => {
  const shuffledQuestionBank = qBank.map((question) => {
    const shuffledOptions = [...question.options]; // Copy options array to avoid mutation
    question.options.forEach((option, i) => {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      let temp = shuffledOptions[i];
      shuffledOptions[i] = shuffledOptions[randomIndex];
      shuffledOptions[randomIndex] = temp;
    });
    return { ...question, options: shuffledOptions };
  });
  console.log(shuffledQuestionBank);
  return shuffledQuestionBank;
};