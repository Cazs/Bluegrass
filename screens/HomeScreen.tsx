import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Submitted: ', { fullName, email, mobileNumber, password });
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <ThemedView style={{ alignItems: 'flex-start', top: 100 }}>
          <ThemedText type="title">Welcome to</ThemedText>
          <ThemedText type="subtitle">Pantry by Marble</ThemedText>
          <ThemedText>Sign up for easy payment, collection</ThemedText>
          <ThemedText>and much more</ThemedText>
        </ThemedView>
      }>
      <ThemedView id="registration-form" style={styles.formContainer}>
        <ThemedText type="title">Create an Account</ThemedText>
        
        <View style={styles.inputContainer}>
          <ThemedText>Full Name</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="Enter Full Name"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

        <View style={styles.inputContainer}>
          <ThemedText>Email</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="Enter Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <ThemedText>Mobile Number</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="Enter Mobile Number"
            value={mobileNumber}
            onChangeText={setMobileNumber}
            keyboardType="phone-pad"
          />
        </View>

        <View style={styles.inputContainer}>
          <ThemedText>Password</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="Enter Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <Button title="Sign Up" onPress={handleSubmit} />
        
        <View style={styles.accountContainer}>
          <ThemedText>Have an account?</ThemedText>
          <TouchableOpacity onPress={() => console.log("Navigate to login")}>
            <ThemedText style={styles.linkText}>Login</ThemedText>
          </TouchableOpacity>
        </View>

        {/* Horizontal rules with "or" */}
        <View style={styles.hrContainer}>
          <View style={styles.hr} />
          <ThemedText style={styles.orText}>or</ThemedText>
          <View style={styles.hr} />
        </View>

        {/* Explore our app button */}
        <Button title="Explore our app" onPress={() => navigation.navigate('Explore')} />
        
        <HelloWave />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
  },
  accountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  linkText: {
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
  hrContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  hr: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    flex: 1,
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
});
