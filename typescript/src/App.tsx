import styled from "styled-components";
const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

function App() {
  const onClick = (event: React.MouseEvent<HTMLElement>) => {};
  return (
    <Container>
      <H1>Hello</H1>
      <form>
        <button onClick={onClick}>click me</button>
      </form>
    </Container>
  );
}

export default App;
