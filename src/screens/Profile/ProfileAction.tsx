import React, { useEffect, useRef, useState } from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ActivityIndicator,
    Platform,
    Modal,
    ImageBackground,
} from 'react-native'
import Icon from '@app/components/Icon/Icon';
import { useNavigation } from '@react-navigation/native';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import ImagePicker from 'react-native-image-crop-picker';
import { ColorCustom } from '@app/utils/colors';
import assets from '@app/utils/assets';

function ProfileAction({ name, image }) {
    const [loading, setLoading] = useState(false)
    const [visilble, setVisilble] = useState(false)
    const navigation = useNavigation()
    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            compressImageMaxWidth: 300,
            compressImageMaxHeight: 300,
            cropping: true,
            compressImageQuality: 0.7
        }).then(image => {
            setVisilble(false)
        });
    }
    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 300,
            cropping: true,
            compressImageQuality: 0.7
        }).then(image => {
            setVisilble(false)
        });
    }
    return (
        <View style={styles.action}>
            <Modal visible={visilble}>
                <ImageBackground style={styles.panel} source={assets.Images.appBackground}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.panelTitle}>Upload Photo</Text>
                        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
                    </View>
                    <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
                        <Text style={styles.panelButtonTitle}>Take Photo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
                        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.panelButton} onPress={() => setVisilble(false)}>
                        <Text style={styles.panelButtonTitle}>Cancel</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </Modal>
            <TouchableOpacity style={styles.actionBtn} >
                <View style={styles.actionIcon}>
                    <Icon
                        size={29}
                        name="settings"
                        color="#a5a5a5"
                        style={{
                            alignSelf: 'center',
                        }}
                    />
                </View>
                <Text style={styles.actionText}>Log out</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionBtn} onPress={() => setVisilble(true)}>
                <View
                    style={styles.mediaIcon}
                >
                    {loading ? (
                        <ActivityIndicator size={35} color="#fff" />
                    ) : (
                        <Icon
                            size={30}
                            name="camera"
                            color="#fff"
                            style={{
                                alignSelf: 'center',
                            }}
                        />
                    )}
                </View>
                <Text style={styles.actionText}>Add picture</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionBtn} onPress={() => navigation.navigate('EditProfile', { name, image })}>
                <View style={styles.actionIcon}>
                    <Icon
                        size={29}
                        name="pencil"
                        color="#a5a5a5"
                        style={{
                            alignSelf: 'center',
                        }}
                    />
                </View>
                <Text style={styles.actionText}>Change information</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    loading: {
        marginTop: 5,
    },
    action: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        marginVertical: 20,
    },
    actionBtn: {
        width: '33.333333%',
        alignItems: 'center',
    },
    mediaIcon: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: 90,
        height: 90,
        borderRadius: 100,
        marginBottom: 10,
        backgroundColor: 'red'
    },
    actionIcon: {
        backgroundColor: 'white',
        marginBottom: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: 70,
        height: 70,
        borderRadius: 100,

        shadowColor: '#677',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.32,
        shadowRadius: 10.46,
    },
    actionText: {
        color: '#999',
        fontWeight: '600',
        textTransform: 'uppercase',
        fontSize: 12,
    },
    container: {
        flex: 1,
    },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginTop: 10,
    },
    panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        justifyContent:'center',
        flex:1
    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: { width: -1, height: -3 },
        shadowRadius: 2,
        shadowOpacity: 0.4,
        // elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle: {
        fontSize: 27,
        height: 35,
    },
    panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
    },
    panelButton: {
        padding: 13,
        borderRadius: 37,
        backgroundColor: ColorCustom.REGISTER_BUTTON,
        alignItems: 'center',
        marginVertical: 7,
        height:55
    },
    panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
})

export default ProfileAction;