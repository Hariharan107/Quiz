/* eslint-disable no-case-declarations */
import { useEffect, useReducer } from "react";
import {
  Header,
  Main,
  Loader,
  Error,
  StartScreen,
  Questions,
  NextButton,
  Progress,
  FinishScreen,
} from "./components/index.js";
const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "startQuiz":
      return {
        ...state,
        status: "active",
      };
    case "answer":
      const question = state.questions[state.index];
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case "nextQuestion":
      return {
        ...state,
        index: state.index++,
        answer: null,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highScore:
          state.highScore > state.points ? state.highScore : state.points,
      };
    default:
      return state;
  }
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, index, answer, points, highScore } = state;
  const totalQuestions = questions.length;
  const totalPoints = questions.reduce((prev, cur) => prev + cur.points, 0);

  const hasAnswered = answer !== null;
  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await fetch("http://localhost:3001/questions");
        const data = await response.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (error) {
        dispatch({ type: "dataFailed" });
        console.log(error);
      }
    };
    fetchQuiz();
  }, []);
  const startQuiz = () => {
    dispatch({ type: "startQuiz" });
  };
  const handleAnswer = (answer) => {
    dispatch({ type: "answer", payload: answer });
  };
  const handleNextQuestion = () => {
    dispatch({ type: "nextQuestion" });
  };
  const handleFinishScreen = () => {
    dispatch({ type: "finish" });
  };
  return (
    <div className='app'>
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && questions.length > 0 && (
          <StartScreen totalQuestions={totalQuestions} startQuiz={startQuiz} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              totalQuestions={totalQuestions}
              points={points}
              totalPoints={totalPoints}
              hasAnswered={hasAnswered}
            />
            <Questions
              questions={questions[index]}
              onAnswer={handleAnswer}
              answer={answer}
            />
            {hasAnswered && (
              <NextButton
                onClick={handleNextQuestion}
                index={index}
                totalQuestions={totalQuestions}
                onFinish={handleFinishScreen}
              />
            )}
          </>
        )}
        {status === "finished" && (
          <FinishScreen points={points} totalPoints={totalPoints} highScore={highScore}/>
        )}
      </Main>
    </div>
  );
};

export default App;
