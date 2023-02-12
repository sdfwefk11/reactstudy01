import styled, { keyframes } from "styled-components";
const Father = styled.div`
  display: "flex";
`;

const rotationAnimation = keyframes`
  0%{
    transform: rotate(0deg);
    border-radius: 0px;
  }
  25%{
    transform: rotate(72deg);
    border-radius: 25px;
  }
  50%{
    transform: rotate(144deg);
    border-radius: 50px;
  }
  75%{
    border-radius: 75px;
  }
  100%{
    transform:rotate(360deg);
    border-radius: 100px;
  }
`;

const Alpa = styled.span`
  font-size: 50px;
`;

const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: cyan;
  display: flex;
  animation: ${rotationAnimation} 2s cubic-bezier(0.5, -0.41, 0.51, 1.18)
    infinite alternate;
  justify-content: center;
  align-items: center;
  ${Alpa} {
    &:hover {
      font-size: 75px;
    }
  }
`;

function App() {
  return (
    <Father>
      <Box>
        <Alpa as="p">E</Alpa>
      </Box>
    </Father>
  );
}

export default App;
