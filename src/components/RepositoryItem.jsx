import React from 'react'
import { View, StyleSheet} from 'react-native'
import StyledText from './StyledText.jsx'

const RepositoryStats = props =>{
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View>
            <StyledText textAlignCenter='center' fontWeight='bold'>Stars</StyledText>
            <StyledText align='center'>{props.stargazersCount}</StyledText>
        </View>
        <View>
            <StyledText textAlignCenter='center' fontWeight='bold'>Forks</StyledText>
            <StyledText align='center'>{props.forksCount}</StyledText>
        </View>
        <View>
            <StyledText textAlignCenter='center' fontWeight='bold'>Reviews</StyledText>
            <StyledText align='center'>{props.reviewCount}</StyledText>
        </View>
        <View>
            <StyledText align='center' fontWeight='bold'>Rating</StyledText>
            <StyledText align='center'>{props.ratingAverage}</StyledText>
        </View>            
        </View>
    )
}

const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
                    <StyledText fontSize='subheading' fontWeight='bold'>{props.fullName}</StyledText>
                    <StyledText bold >description: {props.description}</StyledText>
                    <StyledText blue>language: {props.language}</StyledText>
                    <RepositoryStats {...props} />
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