import NumberBox from './NumberBox'
import { StyleSheet } from "react-native";

export default function Row({numVals}:{numVals:any[]}) {
  return (
  <div style={styles.row}> 
    {numVals.map((numVal, index) => <NumberBox numVal={numVal} key={index}/>)}
  </div>
  )
}


const styles = StyleSheet.create({
  row: {
    display: 'flex'
  }
});