import React from "react";
import fs from "fs";
import { CollabText } from "../../_components/CollabText";
import { join } from "path";
import markdownToHtml from "../../lib/mdToHtml";
import { CONTENTS_PATH } from "../../lib/constants";

const content = join(process.cwd(), `${CONTENTS_PATH}/konsultacje.md`);

const contentString = fs.readFileSync(content, "utf-8");

const htmlContent = await markdownToHtml(contentString);

export default function Collab() {
  return <CollabText content={htmlContent} />;
}
