import styled,{keyframes} from 'styled-components';

export const LoaderContainer = styled.div`
  background: linear-gradient(to right, #240b36, #c31432);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  opacity: 0.7;
  transition: opacity 0.5s;
`;

const Big = keyframes`
  0% {
    transform: scale(0)
  }

  50% {
    transform: scale(1.5)
  }

  100% {
    transform: scale(0)
  }
`

export const Circle = styled.div`
  position: absolute;
  height: 50px;
  width: 50px;
  background: #eee;
  opacity: 0.8;
  border-radius: 50%;
  animation: ${Big} 2s ease-in-out infinite;
  animation-delay: ${props => props.delay};
`;

