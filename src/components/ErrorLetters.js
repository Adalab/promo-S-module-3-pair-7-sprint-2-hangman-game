//import "../styles/components/letters"

const ErrorLetters = ({ lettersWrong }) => {

  const renderErrorLetters = () => {
    return (
      lettersWrong
        // .filter((letterWrong) => {
        //   return !letterWrong.includes(lettersWrong)
        // })


        .map((letterWrong, index) => {
          return <li key={index} className="letter">{letterWrong}</li>
        }))
  }
  return (
    <div className="error">
      <h2 className="title">Letras falladas:</h2>
      <ul className="letters">
        {renderErrorLetters()}
      </ul>
    </div>
  )
}
export default ErrorLetters