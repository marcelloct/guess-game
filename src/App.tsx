import { Header } from './components/Header';
import styles from './app.module.css';

import './global.css';
import './app.module.css';

export function App() {
  function handleRestart() {
    alert('restart');
  }
  return (
    <div className={styles.container}>
      <main>
        <Header current={5} max={10} onRestart={handleRestart} />
      </main>
    </div>
  );
}
