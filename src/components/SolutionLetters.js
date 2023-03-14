//import "../styles/components/letters"

const SolutionLetters = ({word, userLetters}) => {
    const renderSolutionLetters = () => {
        const wordLetters = word.split('');
        return wordLetters.map((wordLetter, index) => 
            <li key={index} className="letter">{ userLetters.includes(wordLetter) && wordLetter}</li>  
    )
    }

    return (
        <div className="solution">
            <h2 className="title">Solución:</h2>
            <ul className="letters">
              {renderSolutionLetters()}
            </ul>
          </div>
    )
}

export default SolutionLetters