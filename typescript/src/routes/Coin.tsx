import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
interface RouteParams {
  coinId: string;
}
const Container = styled.div`
  padding: 0px 20px;
`;
const Title = styled.h1`
  font-size: 60px;
  color: ${(props) => props.theme.accentColor};
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Loader = styled.span`
  text-align: center;
  display: block;
`;
const Coin = () => {
  const { coinId } = useParams<RouteParams>();
  const [loading, setLoading] = useState(true);
  return (
    <Container>
      <Header>
        <Title>{coinId}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
    </Container>
  );
};

export default Coin;
