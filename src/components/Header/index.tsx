import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

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
      <TouchableOpacity>
        <Icon name="keyboard-arrow-down" size={20} color={'#FFF'} />
      </TouchableOpacity>
    </Container>
  );
}

export default Header;
