import { useEffect, useState } from 'react';
import '../styles/App.scss';
import callToApi from '../services/api';
import Header from './Header';
import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';
import ErrorLetters from './ErrorLetters';
import Form from './Form';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import Instructions from './Instructions';
import Options from './Options';

function App() {
  const [lastLetter, setLastLetter] = useState('');
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([])

  useEffect(() => {
    callToApi().then((response) => {
      setWord(response)
    })
  }, [])

  const handleLetter = (value) => {

    const includesLetter = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g;
    console.log(value.search(includesLetter));
    if (value.search(includesLetter) !== -1) {
      setLastLetter(value);
      setUserLetters([...userLetters, value]);
    }
  }

  const lettersWrong = userLetters.filter(userLetter => !word.includes(userLetter));



  return (
    <div className="page">
      <Header />

      <main className="main">
        <Routes>
          {/* <Route path="/" element={}></Route> */}
          <Route path="/instructions" element={<Instructions></Instructions>} ></Route>
          <Route path="/options" element={<Options></Options>} ></Route>
        </Routes>

        <section>
          <Routes>
            <Route path="/" element={
              <>
              <SolutionLetters word={word} userLetters={userLetters} />
              <ErrorLetters lettersWrong={lettersWrong} />
              <Form
                handleOnChange={handleLetter}
                valueInput={lastLetter}>
              </Form>
              </>
            }>
            </Route>
          </Routes>
        </section>
        <Dummy numberOfErrors={lettersWrong.length} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
