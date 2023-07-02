/* eslint-disable no-case-declarations */
import { QuizProvider, useQuiz } from "./context/QuizContext.jsx";
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
  Footer,
  Timer,
} from "./components/index.js";

const App = () => {
  const { questions, status } = useQuiz();
  return (
    <QuizProvider>
      <div className='app'>
        <Header />
        <Main>
          {status === "loading" && <Loader />}
          {status === "error" && <Error />}
          {status === "ready" && questions.length > 0 && <StartScreen />}
          {status === "active" && (
            <>
              <Progress />
              <Questions />
              <Footer>
                <Timer onTimer={handleTimer} timeRemaining={timeRemaining} />
                {hasAnswered && (
                  <NextButton
                    onClick={handleNextQuestion}
                    index={index}
                    totalQuestions={totalQuestions}
                    onFinish={handleFinishScreen}
                  />
                )}
              </Footer>
            </>
          )}
          {status === "finished" && (
            <FinishScreen
              points={points}
              totalPoints={totalPoints}
              highScore={highScore}
              onRestart={handleRestartQuiz}
            />
          )}
        </Main>
      </div>
    </QuizProvider>
  );
};

export default App;
