import React from 'react'
import { LoaderContainer, Circle } from './Loader.styles';

const Loader = () => {
  return (
    <LoaderContainer>
      <Circle delay='0.25s' />
      <Circle  />
    </LoaderContainer>
)
}

export default Loader
