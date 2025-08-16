import React, { useState } from 'react';

import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


const App = () => {

const [peso, setPeso] = useState(0);

const [altura, setAltura] = useState(0);

const [imc, setImc] = useState(0);


const calcularIMC = () => {

const alturaMetros = altura / 100; // Convertendo de centímetros para metros

const imcCalculado = peso / (alturaMetros * alturaMetros);

setImc(imcCalculado); // Arredondando para duas casas decimais

};


return (

<View style={styles.container}>

<View style={styles.inputContainer}>

<TextInput

style={styles.input}

value={peso.toString()}

onChangeText={(texto) => setPeso(parseFloat(texto))}

placeholder="Peso (kg)"

keyboardType="numeric"

/>

<TextInput

style={styles.input}

value={altura.toString()}

onChangeText={(texto) => setAltura(parseFloat(texto))}

placeholder="Altura (cm)"

keyboardType="numeric"

/>

<Button title="Calcular IMC" onPress={calcularIMC} />

</View>


{imc && (

<View style={styles.card}>

<Text style={styles.cardText}>Peso: {peso} kg</Text>

<Text style={styles.cardText}>Altura: {altura} cm</Text>

<Text style={styles.cardText}>IMC: {imc}</Text>

</View>

)}

</View>

);

};


const styles = StyleSheet.create({

container: {

flex: 1,

justifyContent: 'center',

alignItems: 'center',

},

inputContainer: {

width: '80%',

},

input: {

height: 40,

borderColor: 'gray',

borderWidth: 1,

marginBottom: 10,

padding: 10,

},

card: {

marginTop: 20,

padding: 20,

borderColor: 'gray',

borderWidth: 1,

borderRadius: 10,

},

cardText: {

fontSize: 16,

marginBottom: 5,

},

});


export default App;