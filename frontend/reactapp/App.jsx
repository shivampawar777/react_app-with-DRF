import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {useState, useEffect} from 'react';
import axios from 'axios';


export default function App() {
  const [students, setStudents] = useState([])
  useEffect(()=>{
    async function getAllStudent() {
      try {
        const students = await axios.get('http://10.0.2.2:8000/api/student/')
        console.log(students.data)
        setStudents(students.data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllStudent()
  }, [])
  return (
    <View style={styles.container}>
     <FlatList
     data={students}
     renderItem={({item})=><Text style={{fontSize:28, padding:20}}>{item.full_name}, {item.email}, {item.age}, {item.address}</Text>}
     />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});