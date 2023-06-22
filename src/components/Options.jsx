
const Options = ({options}) => {
  return (
    <>
      {options.map((option) => (
          <button key={option} className='btn btn-option'>
            {option}
          </button>
        ))}
    </>
  )
}

export default Options
