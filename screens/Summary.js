import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const transactions = [
  { id: '1', name: 'Nike', amount: 250.00, date: '2023-07-01' },
  { id: '2', name: 'Tim Hortons', amount: 7.89, date: '2023-07-02' },
];

const calculateSummary = (transactions) => {
  let balance = transactions.reduce((sum, transaction) => sum + transaction.amount, 0).toFixed(2);
  let highSpending = transactions.reduce((prev, current) => (prev.amount > current.amount) ? prev : current, transactions[0]);
  let lowSpending = transactions.reduce((prev, current) => (prev.amount < current.amount) ? prev : current, transactions[0]);

  return {
    balance: balance,
    highSpending: highSpending,
    lowSpending: lowSpending,
    transactionCount: transactions.length,
  };
};

export default function Summary() {
  const summary = calculateSummary(transactions);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Transactions</Text>
        <Text style={styles.value}>{summary.transactionCount}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Balance</Text>
        <Text style={styles.value}>${summary.balance}</Text>
      </View>
      <View>
        <Text style={styles.label}>High Spending</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.name}>{summary.highSpending.name}</Text>
        <Text style={styles.amount}>${summary.highSpending.amount.toFixed(2)}</Text>
      </View>
      <View>
        <Text style={styles.label}>Low Spending</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.name}>{summary.lowSpending.name}</Text>
        <Text style={styles.amount}>${summary.lowSpending.amount.toFixed(2)}</Text>
      </View>
    </View>
  );

  // return (
  //   <View style={styles.container}>
  //     <FlatList
  //       data={summaryData}
  //       keyExtractor={(item) => item.id}
  //       renderItem={({ item }) => (
  //         <View style={styles.row}>
  //           <Text style={styles.label}>{item.label}</Text>
  //           <Text style={styles.value}>{item.value}</Text>
  //         </View>
  //       )}
  //     />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    // paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  label: {
    fontSize: 18,
  },
  name: {
    fontSize: 18,
  },
  value: {
    fontSize: 18,
    color: 'green',
  },
  amount: {
    fontSize: 18,
    color: 'green',
  },
});