import { Header } from './components/Header';
import { Tip } from './components/Tip';
import { Letter } from './components/Letter';
import { LettersUsed } from './components/LettersUsed';
import { Input } from './components/Input';
import { Button } from './components/Button';
import styles from './app.module.css';

import './global.css';

export function App() {
  function handleRestart() {
    alert('restart');
  }
  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestart} />
        <Tip tip={'hfbsafbasuby'} />

        <div className={styles.word}>
          <Letter value="R" />
          <Letter value="R" />
          <Letter value="R" />
          <Letter value="R" />
          <Letter value="R" />
          <Letter value="R" />
          <Letter value="R" />
          <Letter value="R" />
        </div>

        <h4>Guess:</h4>
        <div className={styles.flex}>
          <Input autoFocus maxLength={1} placeholder="?" />
          <Button content={'Confirm'} />
        </div>

        <LettersUsed />
      </main>
    </div>
  );
}
