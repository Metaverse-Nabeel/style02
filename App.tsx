/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
        <FancyCards />
        <FancyCards />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
