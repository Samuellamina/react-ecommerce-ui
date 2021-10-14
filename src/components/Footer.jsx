import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>WOM.</Logo>
        <Desc>
          Respect forming clothes do in he. Course so piqued no an by appear.
          Themselves reasonable pianoforte so motionless he as difficulty be.
          Abode way begin ham there power whole. Do unpleasing indulgence
          impossible to conviction.
        </Desc>
        <SocialContainer>
          <SocialIcon color="#385999">
            <Facebook />
          </SocialIcon>

          <SocialIcon color="#e4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#55acee">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="#e60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful liNKS</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>
          <ContactItem>
            <Room style={{ marginRight: "10px" }} /> 6155 Rodeo Drive, Los
            Angeles, California
          </ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: "10px" }} /> +1 234 81 65 44
          </ContactItem>
          <ContactItem>
            <MailOutline style={{ marginRight: "10px" }} />
            contact@wom.com
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Title>
      </Right>
    </Container>
  );
};

export default Footer;
