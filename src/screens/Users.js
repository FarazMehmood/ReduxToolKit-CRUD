import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../redux/UserSlice';

const Users = () => {
  const navigation = useNavigation();
  const users = useSelector(state => state.user);
  const dispatch = useDispatch();
  console.log(users);
  return (
    <View style={{ flex: 1 }}>
   <View>
   <Text style={{justifyContent:'center',alignSelf:'center',color:'green', fontSize:20, marginTop:20}}> REDUX TOOLKIT</Text>
   <Text style={{fontSize:20, paddingLeft:30, marginTop:20}}>USER: </Text>
   </View>
      <FlatList
        data={users.data}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: '90%',
                padding: 10,
                borderWidth: 1,
                alignSelf: 'center',
                marginTop: 20,
                borderRadius: 10,
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <View>
                <Text>{'Name: ' + item.name}</Text>
                <Text>{'Email: ' + item.email}</Text>
                <Text>{'Mobile: ' + item.mobile}</Text>
                <Text>{'Address: ' + item.address}</Text>
              </View>
              <View style={{ marginRight: 10 }}>
                <Text
                  style={{
                    padding: 5,
                    borderWidth: 1,
                    borderColor: 'blue',
                    color: 'blue',
                  }}
                  onPress={() => {
                    navigation.navigate('AddUser', {
                      type: 'edit',
                      data: item,
                      index: index,
                    });
                  }}>
                  Edit
                </Text>
                <Text
                  style={{
                    padding: 5,
                    borderWidth: 1,
                    borderColor: 'red',
                    color: 'red',
                    marginTop: 10,
                  }}
                  onPress={() => {
                    dispatch(deleteUser(index));
                  }}>
                  Delete
                </Text>
              </View>
            </View>
          );
        }}
      />


      <TouchableOpacity
        activeOpacity={1}
      
        onPress={() => {
          navigation.navigate('AddUser', { type: 'add' });
        }}>
        <Image
          source={require("../assests/add-user.png")}
          resizeMode="contain"
          style={{
           width: "100%", height: 70, 
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Users;
