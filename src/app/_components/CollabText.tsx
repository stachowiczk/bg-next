import React from "react";
import styles from "./components.module.css";
import { join } from "path";
import fs from "fs";
import { CONTENTS_PATH } from "../lib/constants";
import markdownToHtml from "../lib/mdToHtml";
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
