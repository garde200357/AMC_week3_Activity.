import React from 'react';
import {StyleSheet, TextInput,View,Image,} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaProvider style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'row',
        },
      ]}>
  
      <SafeAreaView>
    <View style={{flex: 1}} >
    
        <Image
          source={{
            uri: 'https://th.bing.com/th/id/R.517aca2a65ebdb191e6f7de2dc3a42f1?rik=hksE2fjwuhX70g&riu=http%3a%2f%2fwww.onewheaton.com%2funtold%2fwp-content%2fuploads%2f2015%2f02%2fapples2.jpg&ehk=46CMLUj0sQwwMwRpDJAwl8EGzCBAHgfZfUoYIKlMwOo%3d&risl=&pid=ImgRaw&r=0',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      </SafeAreaView>
      <SafeAreaView style={{flex: 1}}>
        <TextInput
          style={styles.input}
          
          placeholder="NAME:"
          keyboardType="text"
        />
        <TextInput
          style={styles.input}
          placeholder="AGE::"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="ADDRESS::"
          keyboardType="text"
        />
        <TextInput
          style={styles.input}
          placeholder="SCHOOL:"
          keyboardType="text"
        />
        <TextInput
          style={styles.input}
          
          placeholder="COURSE:"
          keyboardType="text"
        />
        <TextInput
          style={styles.input}
          
          placeholder="EMAIL:"
          keyboardType="email"
        />
        <TextInput
          style={styles.input}

          placeholder="CONTACT NUMBER:"
          keyboardType="tel"
        />
        <TextInput
        editable
          multiline
          numberOfLines={5}
          maxLength={40}
          placeholder="ABOUT ME:"
          style={styles.textInput}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textInput: {
    height: 100,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    padding: 20,
  },
});

export default TextInputExample;