import React from 'react';
import './App.css';
import Test from "./Test";
import { Provider } from "mobx-react";
import RootStores from './stores/RootStores';

function App() {
  return (
    <Provider
    rootstore={new RootStores()}
    >
      <Test
      />
    </Provider>

  );
}

export default (App);