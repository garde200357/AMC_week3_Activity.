import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView>
    
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
});

export default TextInputExample;