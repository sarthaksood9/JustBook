import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const TabBtn = ({ w, pv, ph, mt, mb, text, bg, color }) => {
    const styles = StyleSheet.create({
        completeListingButton: {
            borderWidth: 1,
            borderColor: '#000',
            borderRadius: 8.7,
            paddingVertical: pv,
            paddingHorizontal: ph,
            marginTop: 10,
            alignItems: 'center',
            width: `${w}%`,
            marginTop:mt,
            marginBottom:mb,
            backgroundColor:bg,
            color:color

        },
        buttonText: {
            fontSize: 16,
        },
    })
    return (
        <TouchableOpacity style={styles.completeListingButton}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

export default TabBtn

