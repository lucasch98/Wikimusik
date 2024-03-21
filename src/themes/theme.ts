import { extendTheme } from '@chakra-ui/react';
import '../index.css'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: '#1A202C',
        fontFamily: 'Poppins',
        color: 'white'
      },
    },
  },
});

export default theme;