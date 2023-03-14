import { useEffect, useState } from 'react';
import '../styles/App.scss';
import callToApi from '../services/api';
import Header from './Header';
import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';

function App() {
  let [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setLastLetter] = useState('');
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  let filtersLetter  = [];

  useEffect(() => {
    callToApi().then((response) => {
      setWord(response)
    })
  }, [])

  const handleLetter = (event) => {
    const letterValue = event.target.value;
    const includesLetter = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g ;
    console.log(letterValue.search(includesLetter));
    if(letterValue.search(includesLetter)!== -1) {
      setLastLetter(letterValue);
      setUserLetters([...userLetters,letterValue]);
    }
  }

const letrasFalladas= userLetters.filter(l => !word.includes(l));
console.log(letrasFalladas.length);
  return  (
    <div className="page">
      <Header />
      <main className="main">
        <section>
          <SolutionLetters word={word} userLetters={userLetters} />
          <ErrorLetters word={word} userLetters={userLetters} />
          <form className="form">
            <label className="title" htmlFor="last-letter">Escribe una letra:</label>
            <input
              autocomplete="off"
              className="form__input"
              maxlength="1"
              type="text"
              name="last-letter"
              id="last-letter"
              onChange = {handleLetter}
              value = {lastLetter}
            />
          </form>
        </section>
        <Dummy numberOfErrors={letrasFalladas.length} />
      </main>
    </div>
  );
}

export default App;
