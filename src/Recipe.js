import { StyleSheet, Text, View } from 'react-native';

const Recipe = () => {

    return (
        <View style={styles.container}>
            <Text>Recipes app</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
});

export default Recipe;