import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './header';
import TodoItem from './todoItem';
import Form from './todoForm';


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
    }
  
    const addItem = (text, date) => {
      setTodos((prevTodos)=>{
        return [
          {text: text, date: date, key: Math.random().toString()},
          ...prevTodos
        ]
      })
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
  