import './config/ReactotronConfig';
import React from 'react';
import {Provider} from 'react-redux';

import store from './store';

import Routes from './routes';
import {setNavigator} from './services/navigation';

const App = () => (
  <Provider store={store}>
    <Routes ref={setNavigator} />
    {/* pega a referencia que é gerada dentro da rota que é 
    criada, aonde ele pega esse valor e chama a função setnavigator que é passado
     pro navigator */}
  </Provider>
);

export default App;
