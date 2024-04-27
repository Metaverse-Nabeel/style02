/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';

export class FancyCards extends Component {
    render() {
        return (
            <View>
                <Text style={styles.headingText}>Trending Places</Text>
                <View style={[styles.card, styles.cardElevated]}>
                    <Image source={require('../assets/images/hawaMahal.jpg')} style={styles.cardImage} />
                    <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>Hawa Mahal</Text>
                        <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
                        <Text style={styles.cardDesc}>The Hawa Mahal is a palace in the city of Jaipur, India. Built from red and pink sandstone, it is on the edge of the City Palace. </Text>
                        <Text style={styles.cardFooter}>12 mins away</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default FancyCards;

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    card: {
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,

    },
    cardElevated: {
        backgroundColor: '#fff',
        color: '#000',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        },
    },
    cardImage: {
        height: 180,
        width: 350,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardTitle: {
        color: '#000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    cardLabel: {
        color: '#000',
        fontSize: 14,
        marginBottom: 6,
    },
    cardDesc: {
        color: '#000',
        fontSize: 12,
        marginBottom: 6,
        marginTop: 6,
        flexShrink: 1,
    },
    cardFooter: {
        color: '#000',
        fontSize: 10,
    },
});
