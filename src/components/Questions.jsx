import Options from "./Options";
const Questions = ({ questions: { question, options } }) => {
  return (
    <div>
      <h4>{question}</h4>
      <div className='options'>
        <Options options={options} key={options} />
      </div>
    </div>
  );
};

export default Questions;
