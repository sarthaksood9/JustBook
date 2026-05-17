import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Modal,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Animated,
    Easing,
    KeyboardAvoidingView,
    Button,
    Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { useDispatch } from 'react-redux';
import { addNoteToWishlistItem } from '../redux/WishList/actions';

const BottomDrawer = ({ setNotes, val, id, modalVisible, setModalVisible, slideAnim }) => {
    const [text, setText] = useState(val);

    const closeDrawer = () => {
        Animated.timing(slideAnim, {
            toValue: 300,
            duration: 300,
            useNativeDriver: true,
            easing: Easing.ease,
        }).start(() => setModalVisible(false));
    };

    const dispatch = useDispatch();

    const handleSave = () => {
        dispatch(addNoteToWishlistItem(id, text));
        setNotes(text);
        closeDrawer();
    };

    const handleClear = () => {
        setText("")
    };

    const handleTextChange = (inputText) => {
        setText(inputText);
    };

    return (
        <View style={styles.container}>
            <Modal
                visible={modalVisible}
                transparent
                animationType="none"
            >
                <View style={styles.modalBackground}>
                    {<TouchableOpacity style={styles.overlay} onPress={closeDrawer} />}

                    <KeyboardAvoidingView behavior='position'>
                        <Animated.View
                            style={[
                                styles.drawerContainer,
                                {
                                    transform: [{ translateY: slideAnim }],
                                },
                            ]}
                        >
                            <Icon name="cross" onPress={closeDrawer} size={20} style={styles.icon} />

                            <Text style={styles.title}>Add note</Text>

                            <View style={styles.containerI}>
                                <TextInput
                                    style={styles.textArea}
                                    multiline={true}
                                    numberOfLines={6}
                                    value={text}
                                    onChangeText={handleTextChange}
                                    placeholder="Type your message here (max 250 words)..."
                                />
                                <Text style={styles.wordCounter} />
                            </View>

                            <View style={styles.btnView}>
                                <Pressable onPress={handleClear}>
                                    <Text style={styles.clearBtn}>Clear</Text>
                                </Pressable>
                                <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
                                    <Text style={styles.saveButtonText}>Save</Text>
                                </TouchableOpacity>
                            </View>
                        </Animated.View>
                    </KeyboardAvoidingView>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c21b1b',
    },
    openButton: {
        backgroundColor: '#1E90FF',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    overlay: {
        flex: 1,
    },
    drawerContainer: {
        height: 280,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 15,
        textAlign: "center"
    },
    icon: {
        position: "absolute",
        top: 15.6,
        left: 13,
        zIndex: 10
    },
    containerI: {
        position: "relative",
        borderBottomColor: "gray",
        borderBottomWidth: 0.2,
        paddingBottom: 22,
        width: "100%"
    },
    textArea: {
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        textAlignVertical: 'top',
        borderRadius: 10,
        backgroundColor: "rgb(235, 235, 235);"
    },
    wordCounter: {
        marginTop: 10,
        textAlign: 'right',
        color: 'gray',
        position: "absolute",
        bottom: 29,
        left: 10,
        fontSize: 13,
        fontWeight: "700"
    },
    btnView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 22
    },
    clearBtn: {
        fontSize: 18,
        fontWeight: "600",
        textDecorationLine: "underline"
    },
    saveButton: {
        paddingHorizontal: 19,
        paddingVertical: 15,
        borderRadius: 8,
        backgroundColor: "black"
    },
    saveButtonText: {
        color: "white"
    }
});

export default BottomDrawer;
