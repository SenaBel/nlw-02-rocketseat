import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';

import PageHeader from '../../components/PageHeader';
;
import styles from './styles'
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import AsyncStorage from '@react-native-community/async-storage';
import {useFocusEffect} from '@react-navigation/native';

const Favorites = () => {
    //estado para os favoritos
      const [favorites, setFavorites] = useState([])
        //função para listar os favoritos
        function loadFavorites(){
            AsyncStorage.getItem('favorites').then(res => {
                if(res) {
                    const favoritedTeachers =  JSON.parse(res)
                    setFavorites(favoritedTeachers);          
                }
            })
        }

        useFocusEffect(
            React.useCallback(() => {
              loadFavorites();
            }, [])
          )

    return (
        <View style={styles.container}>
            <PageHeader title="Meus Proffys Favoritos"/>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
               {favorites.map((teacher: Teacher) => {
                   return (
                       <TeacherItem key ={teacher.id} teacher={teacher} favorited={true}/>
                   )
               })} 
            </ScrollView>

        </View>
    );
};

export default Favorites;