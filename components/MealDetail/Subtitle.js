import { View, Text, StyleSheet } from "react-native";

function Subtitle({children}){ 
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitleContainer: {
        padding: 6,
        margin: 4,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
        marginHorizontal: 12
    }
})

export default Subtitle;