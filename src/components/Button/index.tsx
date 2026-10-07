import styles from './styles.module.css';

type Props = React.ComponentProps<'button'> & {
  content: string;
};

export function Button({ content, ...rest }: Props) {
  return (
    <button type="button" className={styles.btn} {...rest}>
      {content}
    </button>
  );
}
