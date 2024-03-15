import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: '#1A202C',
        fontFamily: 'Arial',
      },
    },
  },
});

export default theme;