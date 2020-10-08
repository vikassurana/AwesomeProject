import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'
import { ToastModule } from "./modules"
import Boilerplate from 'react-native-android-library'
 
export default class App extends Component {
  render() {
    return (
	<>
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This is a test 
        </Text>
        <Button
          onPress={ ()=> ToastModule.toastMe("this will be the toast message", ToastModule.SHORT)}
          title="Click to toast"
          color="#841584"
        />
      </View>
	  <View style={styles.container}>
        <Text style={styles.welcome}>
          This is second test 
        </Text>
        <Button
          onPress={ ()=> ToastModule.authenticateUser("testclaim111520187", "DOE")}
          title="Click to authenticate"
          color="#841584"
        />
      </View>
	  <View style={styles.container}>
        <Text style={styles.welcome}>
          This is third test 
        </Text>
        <Button
          onPress={ ()=> Boilerplate.show('Boilerplate runs fine', Boilerplate.LONG)}
          title="Click to Test"
          color="#841584"
        />
      </View>
	  <View style={styles.container}>
        <Text style={styles.welcome}>
          This is library test 
        </Text>
        <Button
          onPress={ ()=> Boilerplate.authenticateUser("testclaim111520187", "DOE")}
          title="Click to authenticate"
          color="#841584"
        />
      </View>
	  <View style={styles.container}>
        <Text style={styles.welcome}>
          This is photo test 
        </Text>
        <Button
          onPress={ ()=> Boilerplate.capture()}
          title="Click to capture"
          color="#841584"
        />
      </View>
	  </>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})