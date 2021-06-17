import React from 'react';
import {View, Text} from 'react-native';

import {Container, Top, Logo, Title} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '../../assets/Nubank_Logo.png';

function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Jônatas</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color={'#FFF'} />
    </Container>
  );
}

export default Header;
