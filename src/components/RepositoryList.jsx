import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import repositories from '../data/repositories';
import RepositoryItem from './RepositoryItem';

const RepositoryList = () =>{
    const [repositories, setRepositories] = useState([])
    
    return(
        <FlatList 
        data={repositories}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({item: repo}) => (
        <RepositoryItem {... repo} />
            )}
        />
        )
}

export default RepositoryList