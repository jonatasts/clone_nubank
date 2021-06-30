import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation,
} from './styles';

function HomeScreen() {
  return (
    <Container>
      <Header />
      <Content>
        <Menu />

        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color={'#665'} />
            <Icon name="visibility-off" size={28} color={'#665'} />
          </CardHeader>
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 304,52</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Tranferência enviada de R$ 50,00 de Jonatas Santos para Jorge
              Santos ontem às 18:45h.
            </Annotation>
          </CardFooter>
        </Card>
      </Content>
      <Tabs />
    </Container>
  );
}
export default HomeScreen;
