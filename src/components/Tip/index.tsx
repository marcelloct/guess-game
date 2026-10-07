import tipIcon from '../../assets/lightbulb.svg';
import styles from './styles.module.css';

type Props = {
  tip: string;
};

export function Tip({ tip }: Props) {
  return (
    <div className={styles.tip}>
      <img src={tipIcon} alt="tip icon" />

      <div>
        <h3>Tip:</h3>
        <p>{tip}</p>
      </div>
    </div>
  );
}
