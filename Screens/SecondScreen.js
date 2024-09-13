import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useTheme } from '../Contexts/ThemeContext';
import ThemeSwitch from '../Customs/SwitchTheme';

const SecondScreen = ({ navigation }) => {
    const { colors, isDarkMode } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <Text style={[styles.text, { color: colors.text }]}>SecondScreen</Text>
            <ThemeSwitch />
            <Button
                title="Second"
                color={isDarkMode ? '#4B0082' : '#D8BFD8'}
                onPress={() => navigation.navigate('FirstScreen')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default SecondScreen;
