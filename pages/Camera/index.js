import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

export default function Cameras() {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <Camera style={{ flex: 1 }} type={type}>

            <View
                style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    flexDirection: 'row',
                }}>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        alignSelf: 'flex-end',
                        alignItems: 'center',
                    }}
                    onPress={() => {
                        setType(
                            type === Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                : Camera.Constants.Type.back
                        );
                    }}>
                    <Text style={{ fontSize: 32, marginBottom: 30, color: 'white' }}>Mudar Câmera</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        alignSelf: 'flex-end',
                        alignItems: 'center',
                    }}>
                    <Text style={{ fontSize: 32, marginBottom: 30, color: 'white' }}>Tirar foto</Text>
                </TouchableOpacity>
            </View>
        </Camera>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        marginTop: StatusBar.currentHeight || 0
    },
})