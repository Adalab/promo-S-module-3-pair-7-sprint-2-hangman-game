//import "../styles/components/letters"

const ErrorLetters = ({word, userLetters}) => {
    
    const renderErrorLetters = () => {
        /*filtersLetter = userLetters.filter((letter) => (
        !word.includes(letter)
        ))
        return filtersLetter.map ((filterLetter, index) => {
            return <li key={index} className="letter">{filterLetter}</li>
        })
        */
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