import React from 'react';
import QRCode from 'react-native-qrcode-svg';
import {
  Container,
  Code,
  Nav,
  Navitem,
  NavText,
  SignOutbutton,
  SignoutText,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

function Menu() {
  return (
    <Container>
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

      <SignOutbutton>
        <SignoutText>SAIR DO APP</SignoutText>
      </SignOutbutton>
    </Container>
  );
}

export default Menu;
