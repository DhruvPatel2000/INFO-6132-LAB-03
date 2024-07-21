import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TransactionDetail({ route }) {
  const { transaction } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.amount}>${transaction.amount.toFixed(2)}</Text>
      <Text style={styles.name}>{transaction.name}</Text>
      <Text style={styles.location}>London, ON</Text>
      <Text style={styles.date}>Transaction Date: Mar 14, 2024</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 22,
    marginBottom: 8,
  },
  amount: {
    fontSize: 24,
    color: 'green',
    marginBottom: 8,
  },
  location: {
    fontSize: 18,
    color: 'grey',
    marginBottom: 8,
  },
  date: {
    fontSize: 18,
    color: 'grey',
    marginBottom: 16,
  },
  details: {
    fontSize: 16,
  },
});
