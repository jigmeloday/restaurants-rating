import React from 'react';
import './App.css';
import CoreRoutes from './core/route';
import { Provider } from 'react-redux';
import { store } from './store/redux.store';

function App() {
  return (
   <div>
     <Provider store={store}>
         <CoreRoutes />
     </Provider>
   </div>
  );
}

export default App;
