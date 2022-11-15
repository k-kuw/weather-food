import React from 'react';
import ReactDOM from 'react-dom/client';
import WeatherInfo from './views/gatheredComponents/WeatherInfo';
import {Provider} from 'react-redux'
import store from './redux/store'
import FoodInfo from './views/gatheredComponents/FoodInfo';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <p>hello</p>
    <WeatherInfo />
    <FoodInfo />
    </Provider>
  </React.StrictMode>
);
