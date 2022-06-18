import React, { useState } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';


const slides = [
  {
    key: '1',
    title: 'Fabrica de Aplicativos',
    text: 'Sei lá irmão essa discrição é um text ta ligado, paralelepipedo',
    image: require('./src/assets/1.jpg')
  },
  {
    key: '2',
    title: '100% NA PRÁTICA',
    text: 'Sei lá irmão essdda discrição é um text ta ligado, paralelepipedo',
    image: require('./src/assets/1.jpg')
  },
  {
    key: '3',
    title: 'CURSO FOCADO NO MERCADO',
    text: 'Seidwadwa lá irmão essdda discrição é um text ta ligado, paralelepipedo',
    image: require('./src/assets/1.jpg')
  }
]

export default function App() {
  const [showHome, setShowHome] = useState(false);

  function renderSlides({ item }) {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={item.image}
          style={{
            resizeMode: 'cover',
            height: '73%',
            width: '100%'
          }} />
        <Text
          style={{
            paddingTop: 25,
            paddingBottom: 10,
            fontSize: 23,
            fontWeight: 'bold',
            color: '#009CFF',
            alignSelf: 'center'
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: '#b5b5b5',
            paddingHorizontal: 25,
            fontSize: 15
          }}>{item.text}</Text>
      </View>
    )
  }
  if (showHome) {
    return <Text>Entrou na HOME </Text>
  } else {
    return (
      <AppIntroSlider
        renderItem={renderSlides}
        data={slides}
        activeDotStyle={{
          backgroundColor: '#009CFF',
          width: 30
        }}
        renderNextButton={() => { }}
        renderDoneButton={() => <Text style={{ fontSize: 20 }}>Acessar!</Text>}
        onDone={() => alert('Entrou no APP')}
      />
    );
  }
}

