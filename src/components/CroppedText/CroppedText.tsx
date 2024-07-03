import React, { useState } from 'react';
import * as styles from './CroppedText.module.scss';

const exampleText =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi aperiam consequatur dolorem et eveniet\n' +
  '      quae? Asperiores blanditiis consequatur eaque fuga hic in nihil omnis, praesentium qui quis sint, ut!';

type TCroppedText = {
  opened?: boolean;
};
export const CroppedText: React.FC<TCroppedText> = ({ opened = true }) => {
  const [text, setText] = useState('123');

  return opened ? <div className={styles.croppedTextContainer}>{exampleText}</div> : null;
};
