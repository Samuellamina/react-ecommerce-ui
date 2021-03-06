import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500px;
`;

const Announcements = () => {
  return <Container>Super Deal! Get 30% Off Now!</Container>;
};

export default Announcements;
