import React from 'react';

import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Code,
  Nav,
  Navitem,
  NavText,
  SignOutbutton,
  SignOutbuttonText,
} from './styles';

function Menu({translateY}) {
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 150],
          outputRange: [0, 1],
        }),
      }}>
      <Code>
        <QRCode
          value="https://jonatassantos.vercel.app/"
          size={80}
          color="#FFF"
          backgroundColor="#8B10AE"
        />
      </Code>

      <Nav>
        <Navitem>
          <Icon name="help-outline" size={20} color={'#FFF'} />
          <NavText>Me ajuda</NavText>
        </Navitem>

        <Navitem>
          <Icon name="person-outline" size={20} color={'#FFF'} />
          <NavText>Perfil</NavText>
        </Navitem>

        <Navitem>
          <Icon name="credit-card" size={20} color={'#FFF'} />
          <NavText>Configurar cartão</NavText>
        </Navitem>

        <Navitem>
          <Icon name="smartphone" size={20} color={'#FFF'} />
          <NavText>Configuraçōes do app</NavText>
        </Navitem>
      </Nav>

      <SignOutbutton onPress={() => {}}>
        <SignOutbuttonText>SAIR DO APP</SignOutbuttonText>
      </SignOutbutton>
    </Container>
  );
}

export default Menu;
