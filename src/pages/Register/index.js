import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import axios from 'axios';
export default function Register({ navigation }) {
  const [name, setName] = useState('');
  const [senha, setSenha] = useState('');

  function handleRegister() {
    if (!name || !senha) {
      Alert.alert('Campos obrigatórios', 'Por favor, preencha os campos nome e senha.');
      return;
    }
  
    const data = {
      usuario: name,
      senha: senha,
    };
  
    axios.post('endereço ip:3000/cadastro', data)
      .then((response) => {
        Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
        // Lógica para redirecionar o usuário para a próxima tela
      })
      .catch((error) => {
        Alert.alert('Erro', 'Ocorreu um erro ao cadastrar o usuário.');
        console.error(error);
      });
  }

  return (
    <View style={styles.container}>
      <Animatable.View delay={500} animation={'fadeInLeft'} style={styles.containerHeader}>
        <Text style={styles.message}>Cadastre-se</Text>
      </Animatable.View>

      <Animatable.View animation={'fadeInUp'} style={styles.containerForm}>
        <Text style={styles.title}>Nome</Text>
        <TextInput placeholder='Digite seu nome' style={styles.input} value={name} onChangeText={setName} />

        <Text style={styles.title}>Senha</Text>
        <TextInput placeholder='Digite uma senha' style={styles.input} value={senha} secureTextEntry={true} onChangeText={setSenha} />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38a69d',
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
    paddingTop: '5%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#38a69d',
    borderRadius: 4,
    paddingVertical: 8,
    width: '100%',
    marginTop: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});