import NumberBox from './NumberBox'
import { StyleSheet } from "react-native";

export default function Row({numVals}:{numVals:number[]}) {
    return (
        <div style={styles.row}> 
            {numVals.map((numVal) => <NumberBox numVal={numVal}/>)}
        </div>
    )
}


const styles = StyleSheet.create({
    row: {
       display: 'flex'
    }
});