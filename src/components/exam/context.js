import React, { createContext, useState } from "react";

export const AppContext = createContext({});

export default ({ children, value, onChange }) => {
  const { course, practice, test_name } = value;
  // console.log("V", value);
  const questions = value.job_questions ? value.job_questions : value.questions;

  const [index, setIndex] = useState(0);
  const [step, setStep] = useState("1");
  const [values, setValues] = useState([]);
  const [result, setResult] = useState(false);
  const [start, setStart] = useState(false);
  const [time, setTime] = useState({ minutes: questions.length, seconds: "00" });

  const next = (v) => {
    setIndex(index + 1 > questions.length - 1 ? questions.length - 1 : index + 1);
    if (v) return setAnswer(v);
    if (!values.find((e) => e.id === questions[index].id)) setAnswer({ id: questions[index].id, answer: null });
  };

  const prev = () => {
    setIndex(index - 1 <= 0 ? 0 : index - 1);
  };

  const setAnswer = (v) => {
    const existing = values.find((e) => e.id === v.id);
    if (!existing) return setValues([...values, v]);
    const arr = values.filter((e) => e.id !== v.id);
    existing.answer = v.answer || existing.answer;
    existing.marked = v.marked;
    // const arr = values.filter((e) => e.id !== v.id);
    arr.push(existing);
    setValues(arr);
  };

  async function submit() {
    const data = values.map((e) => {
      return {
        question_id: e.id,
        user_answer: e.answer,
        correct_answer: questions.find((n) => n.id === e.id).correct_option,
        status: (e.answer && e.marked && "markedAndAnswered") || (e.marked && "marked") || (!e.answer && "notAnswered") || (e.answer && "answered"),
      };
    });

    const totalMarks = data.filter((n) => n.user_answer === n.correct_answer).length;
    const accuracy = (totalMarks / questions.length) * 100;
    const timeTaken = `${questions.length - time.minutes - 1}:${60 - time.seconds}`;

    const obj = {};
    obj.job_id = value.job_id;
    obj.user_id = value.user_id;
    obj.total_marks = questions.length;
    obj.obtained_marks = totalMarks;
    obj.accuracy = accuracy;
    obj.test_type = "mock_test";
    obj.time = timeTaken;
    obj.data = data;
    setResult(true);
    setStart(false);

    onChange(obj);
  }

  return (
    <AppContext.Provider
      value={{
        index,
        next,
        prev,
        step,
        setStep,
        questions,
        course,
        practice,
        test_name,
        values,
        setValues: (v) => setAnswer(v),
        result,
        submit,
        start,
        setStart,
        time,
        setTime,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
