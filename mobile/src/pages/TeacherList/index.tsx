import React, { useState } from 'react';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { View, Image, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import {Feather} from '@expo/vector-icons'

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem'

import styles from './styles'
import api from '../../services/api';


const TeacherList = () => {

    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    // criando os estados para pegar o que está sendo digitado no input
    const [teachers, setTeachers] = useState([])
    const [subject, setSubject] = useState('');
    const [week_day, setWeek_day] = useState('');
    const [time, setTime] = useState('');

    function handleToggleFiltersVisible(){
        setIsFiltersVisible(!isFiltersVisible)
    }

    async function handleFiltersSubmit(){
        const res = await api.get('classes', {
            params: {
                subject, 
                week_day, 
                time
            }
        });
       setIsFiltersVisible(false);
        setTeachers(res.data)
    }

    return (
        <View style={styles.container}>
            <PageHeader 
                title="Proffys Disponíveis" 
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={20} color='#fff' />
                    </BorderlessButton>
                )} 

            >
            {isFiltersVisible && (

               <View style={styles.searchForm}>
                    <Text style={styles.label}>Matéria</Text>
                    <TextInput 
                        style={styles.input}
                        value={subject}
                        onChangeText={text => setSubject(text) }
                        placeholder="Qual a matéria?"
                        placeholderTextColor="#c1bccc"
                        
                    />

                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia da Semana</Text>
                            <TextInput 
                                style={styles.input}
                                value={week_day}
                                onChangeText={text => setWeek_day(text) }
                                placeholder="Qual dia?"
                                placeholderTextColor="#c1bccc"
                            />
                        </View>

                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Horario</Text>
                            <TextInput 
                                style={styles.input}
                                value={time}
                                onChangeText={text => setTime(text) }
                                placeholder="Qual Horario?"
                                placeholderTextColor="#c1bccc"
                            />
                        </View>
                    </View>

                    <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Pesquisar</Text>
                    </RectButton>

                </View>
               )}
            </PageHeader>

            <ScrollView 
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {teachers.map((teacher: Teacher) => {
                   return  <TeacherItem key={teacher.id} teacher={teacher}/>
                })}
             
            </ScrollView>

        </View>
    );
};

export default TeacherList;