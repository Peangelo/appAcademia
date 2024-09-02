import { StyleSheet, Text, View } from 'react-native';

export default function New() {
  return (
    <View style={styles.container}>
      <Text  style={styles.title}>📍SEGUNDA-FEIRA
MOBILIDADE DE OMBRO E QUADRIL 
🟡AQUECIMENTO
2 ROUNDS
1 Shuttle run
10 Med ball push up
2 Shuttle run
15 Tall med ball clean
3 Shuttle Run
20 Med ball sit up

🟡FORÇA - SQUAT CLEAN 
A cada 1'20 (7 ROUNDS):
No 1° e 2° round: 5x (50% 60%)
No 3° e 4° round: 3x (70% 75%)
No 5° e 6° round: 2x (80% 85%)
No 7° round: 1x (90%)

🟡TÉCNICA
HAND REALESE PUSH UP 

🟡WOD (w)
FOR TIME: (Cap 14’)
3 ROUNDS 
12 Kb oh lunge (24/16)
9 Hand release push up
6 Clean*

*Add 5% no Clean 

3 ROUNDS 
12 Kb oh lunge (24/16)
9 Hand release push up
6 Clean* 

*Sc: Barbell (progression) 
*Rx: Barbell (60% e 65%)
</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title:{

    fontSize: 22,
    fontWeight: 'bold'
  }
});
