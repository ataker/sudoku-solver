import { Text, StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";

export interface NumberBoxProps {
  numVal?: number;
  possibleValues: number[];
  crossedValues: number[];
  seededValue: boolean;
  rowNum: number;
  colNum?: number;
}

export default function NumberBox({numVal, possibleValues, crossedValues, seededValue, rowNum, colNum = 0}:NumberBoxProps) {
  const [possibleVals, setPossibleVals] = useState(possibleValues);
  if (possibleVals !== possibleValues) {
    setPossibleVals(possibleValues);
  }
  
  const POSSIBLE_NUMBERS = [1,2,3,4,5,6,7,8,9];
  const border = colNum === 2 || colNum === 5 ? styles.borderRight : '';

  if (numVal) {
    return (
      <Text style={[styles.numBox, styles.filledBox, seededValue? styles.seededValue : '', border]}>{numVal}</Text>
    );
  }

  const tileColor = (rowNum + colNum) % 2 === 0 ? styles.tile1 : styles.tile2;

  const itemVals:PossValProps[] = POSSIBLE_NUMBERS.map((num) => {
    return {
      val: num,
      possible: possibleValues.indexOf(num) !== -1,
      crossed: crossedValues.indexOf(num) !== -1,
    }
  });

  type PossValProps = {val: number, possible?: boolean, crossed?: boolean};
  const PossVal = ({val, possible, crossed}: PossValProps) => {
    const text = possible || crossed ? val : ' '
    const crossedStyle = crossed ? styles.crossedValue : '';
    return (  
      <Text style={[styles.possibleVal, crossedStyle]}>{text}</Text>
    )
  }
  ;
  return (
    <View style={[styles.numBox, tileColor, border]}>
      <FlatList 
        renderItem={({item}) => <PossVal val={item.val} possible={item.possible} crossed={item.crossed} />}
        data = {itemVals}
        numColumns={3}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  numBox: {
    height: 75,
    width: 75,
    display: 'flex',
    flexDirection:'row',
    flex: 3,
    marginHorizontal: "auto",
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },

  possibleVal: {
    flex: 1,
    maxWidth: "32%",
    alignItems: 'center',
  },

  filledBox: {
    textAlign: 'center',
    fontSize: 60,
  },

  crossedValue: {
    textDecorationLine: 'line-through',
    color: '#faa'
  },

  borderRight: {
    borderRightWidth: 2
  },

  seededValue: {
    backgroundColor: '#BBB',
  },
  
  tile1: {
    backgroundColor: '#BDD',
  },
  
  tile2: {
    backgroundColor: '#CFF',
  },
});