import React from 'react';
import styles from './components.module.css';
type Props = {
    content: string;
};

export function CollabText({ content }: Props) {
  return (
    <div className={styles.container}>
        <div dangerouslySetInnerHTML={{__html: content}}></div>

    </div>
  );
}