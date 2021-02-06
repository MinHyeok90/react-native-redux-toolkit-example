import React from 'react';
import styled from 'styled-components/native';
import { useSelector } from "react-redux";

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Label = styled.Text``

interface Props {}

const Second = ({}: Props) => {
    const rootState = useSelector(state => state);
    return (
        <Container> 
            <Label>{rootState.count}</Label>
        </Container>
    );
};

export default Second;