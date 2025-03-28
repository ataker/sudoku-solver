import { Text, StyleSheet } from "react-native";



export default function NumberBox({numVal}:{numVal?:number}) {
    const handleClick = (event: Event) => {
        console.log(event)
    }

    const text = numVal ? numVal.toString() : '';
    return (
        <Text onClick={handleClick} style={styles.numBox}>{text}</Text>
    )
}

const styles = StyleSheet.create({
    numBox: {
        height: 75,
        width: 75,
        borderWidth: 1,
        textAlign: 'center',
        fontSize: 25,
    }
});