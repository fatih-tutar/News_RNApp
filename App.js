import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/components/navigation/AppNavigator';

export default function App() {
  return (
    <NavigationContainer>
        <AppNavigator/>        
    </NavigationContainer>
  );
}