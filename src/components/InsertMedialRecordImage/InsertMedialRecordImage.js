import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, Modal } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import { InsertMedicalRecordContent, InsertMedicalRecordImageContainer } from "../Container/Style";
import { InsertMedicalRecordImageProfile } from "./Style";
import Icon from 'react-native-vector-icons/FontAwesome';

export function InsertMedicalRecordImage() {
    const cameraRef = useRef(null);
    const [tipoCamera, setTipoCamera] = useState(Camera.Constants.Type.front);
    const [photo, setPhoto] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    async function capturePhoto() {
        if (cameraRef.current) {
            const options = { quality: 0.5, base64: true };
            const data = await cameraRef.current.takePictureAsync(options);
            setPhoto(data.uri);
            setOpenModal(false); // Fecha o modal após capturar a foto
        }
    }

    useEffect(() => {
        (async () => {
            const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
            if (cameraStatus !== 'granted') {
                alert('Sorry, we need camera permissions to make this work');
            }
        })();
    }, []);

    return (
        <InsertMedicalRecordImageContainer>
            {photo ? (
                <TouchableOpacity onPress={() => setOpenModal(true)}>
                    <Image source={{ uri: photo }} style={styles.capturedImage} />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.container} onPress={() => setOpenModal(true)}>
                    <Text>Clique para adicionar uma foto</Text>
                </TouchableOpacity>
            )}
            <Modal animationType="slide" transparent={false} visible={openModal}>
                <View style={styles.modalContainer}>
                    <Camera
                        ref={cameraRef}
                        type={tipoCamera}
                        style={styles.camera}
                        ratio={'16:9'}
                    >
                        <View style={styles.viewFlip}>
                            <TouchableOpacity style={styles.btnFlip} onPress={() => setTipoCamera(tipoCamera === CameraType.front ? CameraType.back : CameraType.front)}>
                                <Icon name="refresh" size={35} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    </Camera>

                    <View style={styles.modalActions}>
                        <TouchableOpacity style={styles.btnCancel} onPress={() => setOpenModal(false)}>
                            <Icon name="times" size={20} color="#121212" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnCaptura} onPress={capturePhoto}>
                            <Icon name="camera" size={20} color="#121212" />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </InsertMedicalRecordImageContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
        width: '100%',
        height: '80%',
        borderRadius: 10
    },
    viewFlip: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    btnFlip: {
        padding: 15,
    },
    modalActions: {
        margin: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        flexDirection: "row",
        gap: 30,
        marginBottom: 40
    },
    btnCancel: {
        width: 50,
        height: 50,
        borderWidth: 2,
        borderColor: '#121212', 
        borderRadius: 10, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnCaptura: {
        width: 50,
        height: 50,
        borderWidth: 2, 
        borderColor: '#121212', 
        borderRadius: 10, 
        alignItems: 'center',
        justifyContent: 'center',
    },
    capturedImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});
