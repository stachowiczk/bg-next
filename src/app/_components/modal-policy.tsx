import styles from "./components.module.css";
import { POLITYKA } from "./contents/polityka-prywatnosci";
import { REGULAMIN } from "./contents/regulamin";

type Props = {
  show: boolean;
  onClose: () => void;
  type: string;
};

export const ModalPolicy = ({ show, onClose, type }: Props) => {
  if (!show) {
    return null;
  }

  const onChildClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (

    <div className={styles.modal__backdrop} onClick={onClose}>
      <div className={styles.modal__container} onClick={onChildClick}>
        <button onClick={onClose} className={styles.modal__close}>
          X
        </button>
        {type === "polityka-prywatnosci" ? (
            <div className={styles.modal__content}
                dangerouslySetInnerHTML={{ __html: POLITYKA }}>
                </div> ) : <div className={styles.modal__content}
                dangerouslySetInnerHTML={{ __html: REGULAMIN }}>
                </div>}
      </div>
    </div>
  );
};
