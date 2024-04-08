import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
// import React from "react"; меняем это на то, что ниже
import React, {useState} from "react";
// import {Image} from "expo-image";  // второй вариант добавить картинки.

const Home = () => {
  const [height, setHeight] = useState(""); // height - текущее значение, setHeight - - подставляемое значение, useState - переменная состояния
  const [weight, setWeight] = useState("");
  const [BMI, setBMI] = useState(0.0);
  const re = /^\d+$/; //регулярное выражение

  React.useEffect(() => {   //отрабатывает код внутри себя тогда когда изменяются значения в его квадратных скобках, если там пусто - то он отрабатывает 1 раз в самом начале перед рендером экрана
    setHeight("");
  }, []);

  const handlerCalcBMI = () => {
    const currentWeight = parseInt(weight); 
    const currentHeight = parseInt(height);
    if (isNaN(currentWeight) || isNaN(currentHeight)) { //проверка, что вычисляться будут числа
      return;
    }

    // const heightMetrs = currentHeight / 100;
    setBMI(Number((currentWeight / ((currentHeight * currentHeight)/10000)).toFixed(1)));
  };


  return (
    <View style={styles.container}>
      <Text style = {styles.titleText}>BMI Calculator</Text>
      
      <View style = {styles.inputContainer}>
      <TextInput 
      value={height}
      onChangeText={(value) => {
        if(! re.exec(value)) value = "" //если это не re, то сбрасывается на пустую строку .exec - выполняет поиск по строке, используя шаблон регулярного выражения
        setHeight(value);
      }}
      style = {styles.input} 
      placeholder="Height - M" 
      placeholderTextColor = {"rgba(90, 90, 150, 1)"}
      keyboardType="number-pad"
      />
      <TextInput 
       value={weight}
       onChangeText={(value) => {
        if(! re.exec(value)) value = ""
         setWeight(value);
       }}
      style = {styles.input} 
      placeholder="Weight - KG" 
      placeholderTextColor = {"rgba(90, 90, 150, 1)"}
      keyboardType="number-pad"
      />
      </View>

      <View style = {styles.line}/>

      {/* <View style={styles.ResultStyleYellow}> */}
      <View
          style={[
            styles.ResultStyleYellow,
            BMI <= 18.5 && BMI >= 1 && { opacity: 1 }, //условие, что если BMI меньше 18,5 и при этом больше 1 то, будет желтый насыщенный
          ]}
        >
      <Image
              style={styles.imageYellow} 
              source={require('./assets/yellow.png')}
              />  
      <Text style={styles.textResultYellow}> Under 18 </Text> 
      <Text style={styles.textResultYellow1}> Under Weight</Text> 
      </View>

     
      <View
          style={[styles.ResultStyleGreen, 
          BMI > 18.5 && BMI < 25 && { opacity: 1 }]}
        >
      <Image
              style={styles.imageGreen} 
              source={require('./assets/green.png')}
              />  
      <Text style={styles.textResultGreen}> 18.5 - 25 </Text> 
      <Text style={styles.textResultGreen1}> Normal Weight</Text> 
      </View>


      <View style={[styles.ResultStyleRed, BMI >= 25 && { opacity: 1 }]}>
      <Image
              style={styles.imageRed} 
              source={require('./assets/red.png')}
              />  
      <Text style={styles.textResultRed}> Above 25 </Text> 
      <Text style={styles.textResultRed1}> Over Weight</Text> 
      </View>

      <TouchableOpacity style={styles.goButton} onPress={() => {
        handlerCalcBMI();
        }} 
       > 
        <Text style={styles.goButtonText}>Go</Text> 
        </TouchableOpacity>

        <Text style={styles.BMIText}>{BMI}</Text>
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

  BMIText: {
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
    opacity: 0.3,
  },

  textResultYellow: {
    color: "rgba(50, 47, 1, 1)",
    fontWeight: "500",
    fontSize: 13,
    paddingTop: 50,
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
     opacity: 0.3,
  },

  textResultGreen: {
    color: "rgba(50, 47, 1, 1)",
    fontWeight: "500",
    fontSize: 13,
    // paddingTop: 120,
    padding: 20,
   },
   textResultGreen1: {
    color: "rgba(50, 47, 1, 1)",
    fontWeight: "500",
    fontSize: 13,
    padding: 3,
   },

   ResultStyleRed: {
    borderWidth: 1,
    backgroundColor: "rgba(219, 38, 23, 1)",
    height: 250,
    width: 100,
    position: 'absolute',
    top: 520,
    left: 270,
    opacity: 0.3,
    borderRadius: 10,
  },

  textResultRed: {
    color: "rgba(50, 47, 1, 1)",
    fontWeight: "500",
    fontSize: 13,
    // paddingTop: 80,
    padding: 20,
   },
   textResultRed1: {
    color: "rgba(50, 47, 1, 1)",
    fontWeight: "500",
    fontSize: 13,
    padding: 4,
    paddingLeft: 10,
   },
   line: {
    width: "100%",
    backgroundColor: "white",
    height: 1,
    opacity: 0.5,
    marginTop: 100,
   },

   imageYellow: {
    marginTop: 18,  
   },

   imageGreen: {
    marginTop: 10,   
   },

   imageRed: {
    marginTop: 10,   
   }

});
export default Home;