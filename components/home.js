import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './header';
import TodoItem from './todoItem';


export default function Home({ navigation }) {
    const [todos, setTodos] = useState([
      { text: "buy coffe", date: "24.08.2020", key: '1'},
      { text: "buy bread", date: "24.08.2020", key: '2'},
      { text: "buy bananas", date: "24.08.2020", key: '3'}
    ]);
  
    const delItem = (key) => {
      setTodos((prevTodos)=>{
        return prevTodos.filter(todo => todo.key != key)
      })
      storeItems()
    }
  
    const addItem = (text, date) => {
      setTodos((prevTodos)=>{
        return [
          {text: text, date: date, key: Math.random().toString()},
          ...prevTodos
        ]
      })
      storeItems()
    }

    const storeItems = async () => {
      const jsonData = JSON.stringify(todos)
      await AsyncStorage.setItem('todosList', jsonData)
    }

    const getItems = async () => {
      const todoList = await AsyncStorage.getItem('todosList')

      if(todoList !== null){
        setTodos((prevTodos)=>{
          return JSON.parse(todoList)
        })
      }
    }

    return (
      <View style={styles.container}>
        <Header navigation={navigation} addItem={addItem}/>
        <View style={styles.content}>
          <View style={styles.list}>
            <FlatList 
              data={todos}
              renderItem={({item})=>(
                <TodoItem item={item} delItem={delItem}/>
              )}
            />
          </View>
        </View>
        {/* <Button onPress={()=>{console.log(todos)}} title="read"/> */}
      </View>
    );
}
  
const styles = StyleSheet.create({
container: {
    flex: 1,
    backgroundColor: '#fff',
},
content: {
    paddingTop: 20,
    flex: 1,
},

list: {
    flex: 1,
    marginTop: 20,
}
});
  