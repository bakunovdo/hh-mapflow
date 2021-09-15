import React from 'react';
import ReactDOM from 'react-dom';

import { ChakraProvider } from '@chakra-ui/react';

import { Application } from './app/index';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider resetCSS>
      <Application />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
