import { WORDS, type Challenge } from './utils/words';

import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Tip } from './components/Tip';
import { Letter } from './components/Letter';
import { LettersUsed, type LettersUsedProps } from './components/LettersUsed';
import { Input } from './components/Input';
import { Button } from './components/Button';

import styles from './app.module.css';
import './global.css';

export function App() {
  const [score, setScore] = useState(0);
  const [rightLetters, setRightLetters] = useState(0);
  const [letter, setLetter] = useState('');
  const [lettersUsed, setLettersUsed] = useState<LettersUsedProps[]>([]);
  const [challenge, setChallenge] = useState<Challenge | null>(null);

  const ATTEMPTS_MARGIN = 3;

  function handleRestart() {
    const isConfirmed = window.confirm('Restart the game?');

    if (isConfirmed) startGame();
  }

  function handleConfirm() {
    if (!challenge) return;

    if (!letter.trim()) return alert('Type a letter');

    const value = letter.toUpperCase();
    const exists = lettersUsed.find(
      (letter) => letter.value.toUpperCase() === value
    );

    if (exists)
      return (setLetter(''), alert(`You already choose the letter: ${value}`));

    const hits = challenge.word
      .toUpperCase()
      .split('')
      .filter((char) => char === value).length;

    const correct = hits > 0;
    const currentScore = rightLetters + hits;

    setLettersUsed((prevState) => [...prevState, { value, correct }]);
    setRightLetters(currentScore);
    setLetter('');
  }

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length);
    const randomWord = WORDS[index];
    setChallenge(randomWord);
    setScore(0);
    setRightLetters(0);
    setLetter('');
    setLettersUsed([]);
  }

  function endGame(message: string) {
    alert(message);
    startGame();
  }

  useEffect(() => {
    setTimeout(() => {
      startGame();
    });
  }, []);

  useEffect(() => {
    if (!challenge) return;

    setTimeout(() => {
      if (rightLetters === challenge.word.length) {
        const incrementScore = score + 1;
        setScore(incrementScore);
        return endGame('You guess the word!');
      }

      const attemptsLimit = challenge.word.length + ATTEMPTS_MARGIN;
      if (lettersUsed.length === attemptsLimit) {
        return endGame("You didn't guess the word!");
      }
    }, 200);
  }, [rightLetters, lettersUsed.length]);

  if (!challenge) return;

  return (
    <div className={styles.container}>
      <main>
        <Header
          current={lettersUsed.length}
          max={challenge.word.length + ATTEMPTS_MARGIN}
          onRestart={handleRestart}
        />
        <Tip tip={challenge.tip} />

        <div className={styles.word}>
          {challenge.word.split('').map((letter, index) => {
            const letterUsed = lettersUsed.find(
              (used) => used.value.toUpperCase() === letter.toUpperCase()
            );
            return (
              <Letter
                key={index}
                value={letterUsed?.value}
                color={letterUsed?.correct ? 'correct' : 'default'}
              />
            );
          })}
        </div>

        <h4>Guess:</h4>
        <div className={styles.flex}>
          <Input
            autoFocus
            maxLength={1}
            placeholder="?"
            value={letter}
            onChange={(e) => setLetter(e.target.value)}
          />
          <Button content={'Confirm'} onClick={handleConfirm} />
          {/* <span>Score: {score}</span> */}
        </div>

        <LettersUsed data={lettersUsed} />
      </main>
    </div>
  );
}
