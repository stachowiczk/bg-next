import React from 'react';
import styles from './components.module.css';
import { join } from 'path';
import fs from 'fs';
import { CONTENTS_PATH } from '../lib/constants';
import markdownToHtml from '../lib/mdToHtml';
type Props = {
    content: string;
};

export async function CollabText({ content }: Props) {

    const contentMd = join(process.cwd(), `${CONTENTS_PATH}/${content}.md`);
    const contentString = fs.readFileSync(contentMd, 'utf-8');
    const htmlContent = await markdownToHtml(contentString);
  return (
    <div className={styles.container}>
        <div dangerouslySetInnerHTML={{__html: htmlContent}}></div>

    </div>
  );
}