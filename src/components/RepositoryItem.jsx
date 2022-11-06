import React from 'react'
import { View, Text, StyleSheet} from 'react-native'


const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
                    <Text style={styles.strong}>id: {props.id}</Text>
                    <Text>fullName: {props.fullName}</Text>
                    <Text>description: {props.description}</Text>
                    <Text>language: {props.language}</Text>
                    <Text>stars: {props.stargazersCount}</Text>
                    <Text>forks: {props.forksCount}</Text>
                    <Text>reviews: {props.reviewCount}</Text>
                    <Text>rating: {props.ratingAverage}</Text>
                </View>
)

const styles = StyleSheet.create({
    container:{
        padding: 20, 
        paddingBottom: 5, 
        paddingTop: 5
    },
    strong:{
        color: '#09f',
        fontWeight: 'bold', 
        marginBottom: 5
    }
})


export default RepositoryItem