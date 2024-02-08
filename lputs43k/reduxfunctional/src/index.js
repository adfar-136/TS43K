import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './CountRedux/store';
import storee from './ColorStore/store';
import storeee from './TodoCountStore/store';
import storeeee from './thunkStore/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    {/* <Provider store={storee}>
      <Provider store={store}> */}
      <Provider store={storeeee}>
      <App />
      </Provider>
       
      {/* </Provider>
    
    </Provider> */}
    
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
