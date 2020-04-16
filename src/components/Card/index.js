import React, { useState, useEffect }from 'react';
import { View, Text, Image, Animated, TouchableOpacity } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

import Menu from '../../components/Menu';
import Tabs from '../../components/Tabs';

export default function Card() {
  const [ showEye, setShowEye ] = useState(false);
  const [ eyeIcon, setEyeIcon ] = useState("eye-off");
  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        }
      }
    ],
    { useNativeDriver: true },
  );

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState ==  State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100)  {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }
        Animated.timing(translateY, {
          toValue: opened ? 400 : 0,
          duration: 200,
          useNativeDriver: true,
        }).start(() => {
          offset = opened ? 400 : 0;
          translateY.setOffset(offset);
          translateY.setValue(0);
        });
    }
  }

  function _renderEye() {
    setShowEye(!showEye);

    if (showEye) {
      setEyeIcon("eye");
    } else {
      setEyeIcon("eye-off");
    }
  }

  useEffect(() => {

  },[]);

  return (
    <>
    <View style={styles.content}>
      <Menu translateY={translateY}/>
      <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={onHandlerStateChanged}
      >
        <Animated.View style={
          [{
            transform: [{
              translateY: translateY.interpolate({
                inputRange: [-350, 0, 400],
                outputRange: [-50, 0, 400],
                extrapolate: 'clamp',
              }),
            }]
          },
          styles.card ]
        }>

          <View style={styles.cardHeard}>
            <View style={styles.cardHeardConta}>
              <Feather name="dollar-sign" size={28} color="#666" />
              <Text style={styles.tituloConta} >Conta</Text>
            </View>
            <TouchableOpacity onPress={_renderEye} >
              <Feather name={eyeIcon} size={28} color="#666" />
            </TouchableOpacity>
          </View>
          <View style={styles.cardContent} >
            <Text style={styles.titulo} >Saldo disponível</Text>
            { showEye ? <Text style={styles.descricao} >R$ 175.418,32</Text> : <View style={styles.saldoOculto} ></View> }
          </View>
          <View style={styles.cardFooter} >
            <Text style={styles.annotation} >
              Transferência de R$ 60,00 recebida de Jorge Wendell Queiros Santos hoje às 08:00h
            </Text>
          </View>
        </Animated.View>
      </PanGestureHandler>
    </View>
    <Tabs translateY={translateY} />
    </>
  )
}
