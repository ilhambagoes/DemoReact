/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput
} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text style={{ fontSize: 25, textAlign: 'center', marginTop: 12 }}>Seol In Ah</Text>
      <View>
        <Text style={{ textAlign: 'justify', marginHorizontal: 12 }}>
          Seol In-Ah, juga dikenal sebagai Seorina,
          adalah aktris asal Korea Selatan yang paling dikenal karena perannya
          sebagai peran pendukung dalam dua serial televisi populer Mr. Queen dan Business Proposal
        </Text>
        <Image
          source={{ uri: 'https://assets.pikiran-rakyat.com/crop/0x202:1080x881/x/photo/2022/03/11/4171911473.jpg' }}
          style={{ width: 200, height: 200, marginVertical: 12, marginHorizontal: 12, alignSelf: 'center' }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginHorizontal: 12,
          paddingStart: 12
        }}
        placeholder="Pendapat tentang Seol In Ah ?"
      />
    </ScrollView>
  );
};

export default App;