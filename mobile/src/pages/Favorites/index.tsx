import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import PageHeader from '../../components/PageHeader';
;
import styles from './styles'

const Favorites = () => {
    return (
        <View style={styles.container}>
            <PageHeader title="Meus Proffys Favoritos"/>
        </View>
    );
};

export default Favorites;