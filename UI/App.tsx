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
  TextInput,
  StyleSheet,
  Button,
  ToastAndroid
} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text style={styles.title}>Seol In Ah</Text>
      <View>
        <Text style={styles.description}>
          Seol In-Ah, juga dikenal sebagai Seorina,
          adalah aktris asal Korea Selatan yang paling dikenal karena perannya
          sebagai peran pendukung dalam dua serial televisi populer Mr. Queen dan Business Proposal
        </Text>
        <Image
          source={{ uri: 'https://assets.pikiran-rakyat.com/crop/0x202:1080x881/x/photo/2022/03/11/4171911473.jpg' }}
          style={styles.image}
        />
      </View>
      <TextInput
        style={styles.textInput}
        placeholder="Pendapat tentang Seol In Ah ?"
      />
      <View
        style={styles.buttonView}>
        <Button
          title="Pindah ke halaman 2"
          onPress={() =>
            showToastWithGravity()
          }
        />
      </View>
    </ScrollView>
  );
};

const showToastWithGravity = () => {
  ToastAndroid.showWithGravity(
    'Still Development',
    ToastAndroid.SHORT,
    ToastAndroid.CENTER,
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 12,
    fontSize: 25,
    textAlign: 'center',
  },
  description: {
    marginHorizontal: 12,
    textAlign: 'justify'
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 12,
    marginHorizontal: 12,
    alignSelf: 'center'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 12,
    paddingStart: 12
  },
  buttonView: {
    marginTop: 12,
    marginHorizontal: 12
  }
})

export default App;