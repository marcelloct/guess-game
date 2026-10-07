import { Letter } from '../Letter';
import styles from './styles.module.css';

export function LettersUsed() {
  return (
    <div className={styles.lettersUsed}>
      <h5>Letters Used:</h5>
      <div>
        <Letter value="x" size="small" color="correct" />
        <Letter value="x" size="small" color="wrong" />
      </div>
    </div>
  );
}
