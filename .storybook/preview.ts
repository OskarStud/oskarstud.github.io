import type { Preview } from "@storybook/react";
import { ThemeDecorator } from '../src/stories/config/storybook/ThemeDecorator';
import '../src/index.scss';

const preview: Preview = {
    parameters: {
      actions: { argTypesRegex: "^on[A-Z].*" },
      controls: {
        matchers: {
          color: /(background|color)$/i,
          date: /Date$/,
        },
      },

    },
    decorators: [ThemeDecorator],
  };

export default preview;
