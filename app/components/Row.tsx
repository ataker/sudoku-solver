import NumberBox from './NumberBox'
import { NumberBoxProps } from './NumberBox'
import { StyleSheet, View } from "react-native";


export default function Row({numVals}:{numVals:NumberBoxProps[]}) {
  const border = numVals[0].rowNum  === 2 || numVals[0].rowNum === 5 ? styles.borderBottom : '';
  return (
    <View style={[styles.row, border]}> 
      {numVals.map((numVal, index) => 
        <NumberBox 
          numVal={numVal.numVal} 
          possibleValues={numVal.possibleValues}
          crossedValues={numVal.crossedValues} 
          seededValue={numVal.seededValue}
          rowNum={numVal.rowNum}
          colNum={index}
          key={index}
        />
      )}
    </View>
  )
}


const styles = StyleSheet.create({
  row: {
    display: 'flex',
    flexDirection: 'row'
  },

  borderBottom: {
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',

  },
});