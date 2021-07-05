import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Animated, TouchableOpacity} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

import {Header} from '../../components';
import {Tabs} from '../../components';
import {Menu} from '../../components';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  HideDescription,
  Annotation,
  SafeAreaView,
} from './styles';
import {useState} from 'react';

function HomeScreen() {
  let offset = 0;
  const translateY = new Animated.Value(0);
  const [isVisible, setIsVisible] = useState(true);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const {translationY} = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 390 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 390 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }
  function onHandlerHideDescription() {
    setIsVisible(!isVisible);
  }
  return (
    <SafeAreaView>
      <Container>
        <Header />

        <Content>
          <Menu translateY={translateY} />

          <PanGestureHandler
            onGestureEvent={animatedEvent}
            onHandlerStateChange={onHandlerStateChanged}>
            <Card
              style={{
                transform: [
                  {
                    translateY: translateY.interpolate({
                      inputRange: [-350, 0, 390],
                      outputRange: [-50, 0, 390],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              }}>
              <CardHeader>
                <Icon name="attach-money" size={28} color={'#665'} />
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={onHandlerHideDescription}>
                  <Icon name="visibility-off" size={28} color={'#665'} />
                </TouchableOpacity>
              </CardHeader>
              <CardContent>
                <Title>Saldo disponível</Title>
                {isVisible && <Description>R$ 304,52</Description>}
                {!isVisible && <HideDescription />}
              </CardContent>
              <CardFooter>
                <Annotation>
                  Tranferência enviada de R$ 50,00 de Jonatas Santos para Jorge
                  Santos ontem às 18:45h.
                </Annotation>
              </CardFooter>
            </Card>
          </PanGestureHandler>
        </Content>

        <Tabs translateY={translateY} />
      </Container>
    </SafeAreaView>
  );
}
export default HomeScreen;
