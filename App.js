import React from 'react';

import {StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.contenedor}>
      <View style={styles.caja1}></View>
      <View style={styles.caja2}></View>
      <View style={styles.caja3}></View>
      <View style={styles.caja4}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: 'cornflowerblue',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  caja1: {
    backgroundColor: 'navy',
    padding: 20,
  },
  caja2: {
    backgroundColor: 'yellow',
    padding: 20,
  },
  caja3: {
    backgroundColor: 'green',
    padding: 20,
  },
  caja4: {
    backgroundColor: 'teal',
    padding: 20,
  },
});

export default App;
