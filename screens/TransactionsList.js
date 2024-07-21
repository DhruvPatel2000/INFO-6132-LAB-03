import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const transactions = [
  { id: '1', name: 'Starbucks', amount: 12.00 },
  { id: '2', name: 'Apple Store', amount: 101.00 },
  { id: '3', name: 'Sephora', amount: 120.00 },
  { id: '4', name: 'Shoppers Drug Mart', amount: 12.00 },
  { id: '5', name: 'Pizza Hut', amount: 24.00 },
  { id: '6', name: 'Cheesecake Factory', amount: 45.00 },
  { id: '7', name: 'Nike', amount: 250.00 },
  { id: '8', name: 'Tim Hortons', amount: 7.89 },
  { id: '9', name: 'Whole Foods', amount: 78.00 },
  { id: '10', name: 'Cineplex', amount: 42.50 },
];

export default function TransactionsList({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
          >
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.rightSection}>
              <Text style={styles.amount}>${item.amount.toFixed(2)}</Text>
              <Text style={styles.arrow}>➔</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  amount: {
    fontSize: 18,
    color: 'green',
    marginRight: 10,
  },
  arrow: {
    fontSize: 16,
    color: '#ccc',
  },
});
