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
    if (v) 
    {
      return setAnswer(v);
    }
    if (!values.find((e) => e.id === questions[index].id)) 
    {
      setAnswer({ id: questions[index].id, answer: null });
    }
  };

  const prev = () => {
    setIndex(index - 1 <= 0 ? 0 : index - 1);
  };

  const setAnswer = (v) => {

    let id = v.id;
    let value = v.answer;


    let answer = "";
    let ans = questions.filter((n) => n.id === id);
    if(ans[0])
    {
      ans = ans[0];
    }

    if(ans)
    {
      if(ans.option1 == value)
      {
        answer = "A";
      }
      else if(ans.option2 == value)
      {
        answer = "B";
      }
      else if(ans.option3 == value)
      {
        answer = "C";
      }
      else if(ans.option4 == value)
      {
        answer = "D";
      }
    }

    v.answer_key = answer;

    //console.log(v);

    const existing = values.find((e) => e.id === v.id);
    if (!existing) 
      return setValues([...values, v]);

    //console.log(existing);

    const arr = values.filter((e) => e.id !== v.id);

    existing.answer = v.answer || existing.answer;
    existing.marked = v.marked;
    existing.answer_key = v.answer_key;

    //console.log(existing);

    // const arr = values.filter((e) => e.id !== v.id);
    arr.push(existing);
    setValues(arr);
  };

  async function submit() {

    let _obtained_marks = 0;
    let wrong = 0;
    let un_answeered = 0;
    const data = values.map((e) => {

      un_answeered++;
      //console.log(e);
      let correct = questions.find((n) => n.id === e.id).correct_option;
      //console.log(correct);
      if(correct == e.answer_key)
      {
      //  console.log("Equsl : " + _obtained_marks);
        _obtained_marks++;
      }
      else
      {
        wrong++;
      }
      return {
        question_id: e.id,
        user_answer: e.answer,
        answer_key : e.answer_key,
        correct_answer: correct,
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
    obj.obtained_marks = _obtained_marks;
    obj.accuracy = accuracy;
    obj.un_answered = obj.total_marks - un_answeered;
    obj.wrong = wrong;

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
