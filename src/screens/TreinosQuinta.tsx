import { StyleSheet, Text, View } from 'react-native';

export default function TreinosQuinta() {
  return (
    <View style={styles.container}>
      <Text  style={styles.title}>Ola, dona Paula. Aqui ficam os treinos de Quinta</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  title:{

    fontSize: 22,
    fontWeight: 'bold'
  }
});
