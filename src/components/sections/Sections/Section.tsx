import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
}

function Section({ children }: Props) {
  return <section className={styles.entry}>{children}</section>;
}

export default Section;
