import React, {useEffect, useMemo, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Splash} from '../components';
import RootStackScreen from './root.stack';

const Router = () => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    setInitialized(true);
  }, []);

  const Router = useMemo(() => {
    if (!initialized) return <Splash />;

    return (
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    );
  }, [initialized]);

  return Router;
};

export default Router;
