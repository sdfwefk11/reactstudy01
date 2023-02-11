import styled, { keyframes } from "styled-components";
const Father = styled.div`
  display: "flex";
`;

const rotationAnimation = keyframes`
  0%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50%{
    border-radius: 100px;
  }
  100%{
    transform:rotate(360deg);
    border-radius: 0px;
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: cyan;
  display: flex;
  animation: ${rotationAnimation} 1s linear infinite;
  justify-content: center;
  align-items: center;
  span {
    font-size: 50px;
    &:hover {
      font-size: 100px;
    }
    &:active {
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Father>
      <Box>
        <span>A</span>
      </Box>
    </Father>
  );
}

export default App;
