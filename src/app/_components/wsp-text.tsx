import styles from "./components.module.css";
type Props = {
  content: string;
};

export function CollabText({ content }: Props) {
  return (
    <div className={styles.container__blog} style={{marginTop: "20vh"}}>
      <div className={styles.blog__post} dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
}
