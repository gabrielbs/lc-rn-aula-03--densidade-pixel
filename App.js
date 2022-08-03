import React from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import LottieView from 'lottie-react-native';
import { Dimensions, Image, PixelRatio, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const card = require('./assets/lastDigitsCard.png')

export default function App() {
  const [loaded] = useFonts({
    EduVICWANTBeginner: require('./assets/fontes/EduVICWANTBeginner-Regular.ttf'),
    EduVICWANTBeginnerBold: require('./assets/fontes/EduVICWANTBeginner-Bold.ttf'),
  });

  const animation = React.useRef(null);

  const dimensoes = {
    largura: Dimensions.get('window').width, // quantidade em medidas "react native"
    altura: Dimensions.get('window').height, // quantidade em medidas "react native"
  };

  const pixelRatio = PixelRatio.get()

  const larguraFisica = dimensoes.largura * pixelRatio;
  const alturaFisica = dimensoes.altura * pixelRatio;


  if (!loaded) return null

  return (
    <View style={styles.container}>
      <Image source={card} style={styles.img} />
      
      {/* <Text>dimensoes: {JSON.stringify(dimensoes)}</Text>
      <Text>Pixel Ratio: {JSON.stringify(pixelRatio)}</Text>
      <Text>larguraFisica: {JSON.stringify(larguraFisica)}</Text>
      <Text>alturaFisica: {JSON.stringify(alturaFisica)}</Text> */}
      
      {/* <View style={{
          width: '100%',
          height: 10,
          position: 'absolute',
          top: dimensoes.altura - 10,
          backgroundColor: '#f00',
        }}
      /> */}

      {/* <Text style={styles.content}>Lorem ipsum dolor sit amet</Text>
      <Text style={styles.contentBold}>Nulla gravida mi ac eros finibus mattis</Text> */}

      {/* <LottieView
        ref={animation}
        autoPlay
        style={{
          width: 200,
          height: 120,
        }}
        source={require('./assets/112545-wumpus-hi.json')}
      /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  img: {
    width: '70%',
    height: undefined,
    aspectRatio: 1.25,
  },
  content: {
    fontFamily: 'EduVICWANTBeginner',
    fontSize: 50
  },
  contentBold: {
    fontFamily: 'EduVICWANTBeginnerBold',
    fontSize: 50
  }
});
