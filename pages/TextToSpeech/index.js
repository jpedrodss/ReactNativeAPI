import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import * as Speech from 'expo-speech';
import { TextInput } from 'react-native-gesture-handler';

export default function TextToSpeech() {
    const [text, setText] = useState('');
    
    const speak = () => {        
        Speech.speak(text)
    }

    return (
        <View style={StyleSheet.container}>
            <TextInput value={text} onChangeText={t => setText(t)}/>
        <Button title="Clique para falar" onPress={() => speak()} />
        <Text>Text to Speech</Text>
        </View>
    )
}