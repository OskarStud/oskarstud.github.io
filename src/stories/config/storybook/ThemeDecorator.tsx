// import 'src/app/styles/index.scss';
import React, { FC } from 'react';
import { ThemeProvider } from '../../../app/theme/ThemeProvider';

export const ThemeDecorator = (Story: FC) => {
  return (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  );
};
