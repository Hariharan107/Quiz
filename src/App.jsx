import { useEffect, useReducer } from "react";
import {
  Header,
  Main,
  Loader,
  Error,
  StartScreen,
  Questions,
} from "./components/index.js";
const initialState = {
  questions: [],
  status: "loading",
  index: 0,
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
    default:
      return state;
  }
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, index } = state;
  const totalQuestions = questions.length;
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
  return (
    <div className='app'>
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && questions.length > 0 && (
          <StartScreen totalQuestions={totalQuestions} startQuiz={startQuiz} />
        )}
        {status === "active" && <Questions questions={questions[index]} />}
      </Main>
    </div>
  );
};

export default App;
