import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style = {styles.titleText}>BMI Calculator</Text>
      
      <View style = {styles.inputContainer}>
      <TextInput 
      style = {styles.input} 
      placeholder="Height - M" 
      placeholderTextColor = {"rgba(90, 90, 150, 1)"}
      keyboardType="number-pad"
      />
      <TextInput 
      style = {styles.input} 
      placeholder="Weight - KG" 
      placeholderTextColor = {"rgba(90, 90, 150, 1)"}
      keyboardType="number-pad"
      />
      </View>

      <View style={styles.ResultStyleYellow}>
      <Text style={styles.textResultYellow}> Under 18 </Text> 
      <Text style={styles.textResultYellow1}> Under Weight</Text> 
      </View>

      <View style={styles.ResultStyleGreen}>
      <Text style={styles.textResultGreen}> 18.5 - 25 </Text> 
      <Text style={styles.textResultGreen1}> Normal Weight</Text> 
      </View>

      <View style={styles.ResultStyleRed}>
      <Text style={styles.textResultRed}> Above 25 </Text> 
      <Text style={styles.textResultRed1}> Over Weight</Text> 
      </View>


      <TouchableOpacity style={styles.goButton} onPress={() => {
        console.log("Вычисляю")
        }}> 
        <Text style={styles.goButtonText}>Go</Text> 
        </TouchableOpacity>

        <Text style={styles.BMITet}>0.00</Text>
     </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(50, 50, 50, 1)",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    color: "rgba(180, 168, 45, 1)",
    fontSize: 25,
    position: 'absolute',
    top: 50,
  },

  inputContainer: {
    flexDirection: "row", 
    gap: 50, 
    marginTop: 50,
    position: 'absolute',
    top: 100,
   },

  input: {
   borderWidth: 1, 
   borderRadius: 10,
   height: 60,
   width: 130,
   padding: 10,
   color: "white",
  },

  goButton: {
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingVertical: 7,
    marginTop: 30,
    borderRadius: 10,
    position: 'absolute',
    top: 250,
  },
  goButtonText: {
    fontWeight: "500",
    fontSize: 16,
  },

  BMITet: {
    color: "rgba(180, 168, 45, 1)",
    fontSize: 35,
    marginTop: 50,
    position: 'absolute',
    top: 320,
  },

  ResultStyleYellow: {
    borderWidth: 1,
    backgroundColor: "rgba(249, 231, 6, 1)",
    height: 250,
    width: 100,
    position: 'absolute',
    top: 520,
    left: 20,
    borderRadius: 10,
  },

  textResultYellow: {
    color: "rgba(50, 47, 1, 1)",
    fontWeight: "500",
    fontSize: 13,
    paddingTop: 120,
    padding: 20,
   },
   textResultYellow1: {
    color: "rgba(50, 47, 1, 1)",
    fontWeight: "500",
    fontSize: 13,
    padding: 6,
   },

   ResultStyleGreen: {
    borderWidth: 1,
    backgroundColor: "rgba(73, 201, 26, 1)",
    height: 250,
    width: 100,
    position: 'absolute',
    top: 520,
    left: 145,
    
    borderRadius: 10,
  },

  textResultGreen: {
    color: "rgba(50, 47, 1, 1)",
    fontWeight: "500",
    fontSize: 13,
    paddingTop: 120,
    padding: 20,
   },
   textResultGreen1: {
    color: "rgba(50, 47, 1, 1)",
    fontWeight: "500",
    fontSize: 11,
    padding: 6,
   },

   ResultStyleRed: {
    borderWidth: 1,
    backgroundColor: "rgba(219, 38, 23, 1)",
    height: 250,
    width: 100,
    position: 'absolute',
    top: 520,
    left: 270,
    
    borderRadius: 10,
  },

  textResultRed: {
    color: "rgba(50, 47, 1, 1)",
    fontWeight: "500",
    fontSize: 13,
    paddingTop: 120,
    padding: 20,
   },
   textResultRed1: {
    color: "rgba(50, 47, 1, 1)",
    fontWeight: "500",
    fontSize: 13,
    padding: 6,
    paddingLeft: 10,
   },

});
export default Home;