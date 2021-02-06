import React from 'react';
import styled from 'styled-components/native'
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';

import First from './src/Screens/First'
import Second from './src/Screens/Second'

import {reducer} from './src/Store'

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default function App() {
  return (
    <Provider store={store}>
      <Container>
        <First />
        <Second />
      </Container>
    </Provider>
  );
}