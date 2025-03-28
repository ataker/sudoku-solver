import { Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Row from './Row'

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Row numVals={[4,2,1,0]}/>
      <Row numVals={[3,1,0,8]}/>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </SafeAreaView>
  );
}
