import React from 'react';
import styled from 'styled-components/native';
import { useDispatch } from 'react-redux'
import { actions } from '../../Store';

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Margin = styled.View`
  padding: 24px;
`;

const Button = styled.TouchableOpacity`
  height: 48px;
  width: 48px;
  background-color: #3aa;
  justify-content: center;
  align-items: center;
`

const Text = styled.Text`
  font-size: 48px;
`

const First = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Button onPress={() => dispatch(actions.decrement(1))} >
        <Text>-</Text>
      </Button>
      <Margin />
      <Button onPress={() => dispatch(actions.increment(1))} >
        <Text>+</Text>
      </Button>
    </Container>
  );
};

export default First;