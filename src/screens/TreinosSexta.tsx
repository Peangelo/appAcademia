import { StyleSheet, Text, View } from 'react-native';

export default function TreinosSexta() {
  return (
    <View style={styles.container}>
      <Text  style={styles.title}>Ola, dona Paula. Aqui ficam os treinos de Sexta</Text>
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
