import { WORDS, type Challenge } from './utils/words';

import { Header } from './components/Header';
import { Tip } from './components/Tip';
import { Letter } from './components/Letter';
import { LettersUsed, type LettersUsedProps } from './components/LettersUsed';
import { Input } from './components/Input';
import { Button } from './components/Button';
import styles from './app.module.css';

import './global.css';
import { useEffect, useState } from 'react';

export function App() {
  const [attempts, setAttempts] = useState(0);
  const [letters, setLetters] = useState('');
  const [lettersUsed, setLettersUsed] = useState<LettersUsedProps[]>([]);
  const [challenge, setChallenge] = useState<Challenge | null>(null);

  function handleRestart() {
    alert('restart');
  }

  function startGame() {
    const index = Math.floor(Math.random() * WORDS.length);
    const randomWord = WORDS[index];
    setChallenge(randomWord);
    setAttempts(0);
    setLetters('');
  }

  useEffect(() => {
    startGame();
  }, []);
  if (!challenge) return;

  return (
    <div className={styles.container}>
      <main>
        <Header current={attempts} max={10} onRestart={handleRestart} />
        <Tip tip={'hfbsafbasuby'} />

        <div className={styles.word}>
          {challenge.word.split('').map(() => (
            <Letter value="" />
          ))}
        </div>

        <h4>Guess:</h4>
        <div className={styles.flex}>
          <Input autoFocus maxLength={1} placeholder="?" />
          <Button content={'Confirm'} />
        </div>

        <LettersUsed data={lettersUsed} />
      </main>
    </div>
  );
}
