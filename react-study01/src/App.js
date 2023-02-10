import styled from "styled-components";
const Father = styled.div`
  display: "flex";
`;

const Btn = styled.button`
  color: aqua;
  background-color: pink;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ require: true })`
  background-color: pink;
`;
function App() {
  return (
    <>
      {" "}
      <Father as="header">
        <Btn>Log in</Btn>
        <Btn as="a" href="/">
          Log in
        </Btn>
      </Father>
      <Father>
        <Input></Input>
      </Father>
    </>
  );
}

export default App;
