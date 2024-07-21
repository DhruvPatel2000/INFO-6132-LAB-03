import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import TransactionsList from './screens/TransactionsList';
import TransactionDetail from './screens/TransactionDetail';
import Summary from './screens/Summary';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TransactionsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="TransactionsList" 
        component={TransactionsList} 
        options={{ title: 'Transactions List', headerStyle: { backgroundColor: '#4682B4' }, headerTintColor: '#fff' }} 
      />
      <Stack.Screen
        name="TransactionDetail"
        component={TransactionDetail}
        options={{ title: 'Transaction Detail', headerStyle: { backgroundColor: '#4682B4' }, headerTintColor: '#fff' }}
      />
    </Stack.Navigator>
  );
}

function SummaryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Summary"
        component={Summary}
        options={{ title: 'Summary', headerStyle: { backgroundColor: '#4682B4' }, headerTintColor: '#fff' }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,  // Hide the header in the tab navigator
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Transactions') {
              iconName = 'list-outline';
            } else if (route.name === 'Summary') {
              iconName = 'stats-chart-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#4682B4',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen 
          name="Transactions"
          component={TransactionsStack} 
          options={{ tabBarLabel: 'Transactions' }}
        />
        <Tab.Screen 
          name="Summary"
          component={SummaryStack} 
          options={{ tabBarLabel: 'Summary' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
