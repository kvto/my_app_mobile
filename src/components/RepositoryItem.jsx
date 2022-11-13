import React from 'react'
import { Image, View, StyleSheet, Platform} from 'react-native'
import theme from '../theme.js'
import RepositoryStats from './RepositoryStats.jsx'
import StyledText from './StyledText.jsx'

const RepositoryItemHeader = ({ownerAvatarUrl, fullName, description, language}) =>(
    <View style={{flexDirection:'row', paddingBottom: 2}}>
        <View style={{paddingRight: 10}}>
    <Image style={styles.image} source={{ uri: ownerAvatarUrl}}/>        
        </View>
    <View style={{ flex:1}}>
     <StyledText fontWeight='bold'>{fullName}</StyledText>
    <StyledText color='secondary' >{description}</StyledText>
    <StyledText style={styles.language}>{language}</StyledText>   
    </View>
    </View>
    
)

const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
        <RepositoryItemHeader {...props} />
    <RepositoryStats {...props} />
     </View>
)

const styles = StyleSheet.create({
    container:{
        padding: 20, 
        paddingVertical: 5
    },
    language:{
        padding:4,
        color: theme.colors.white,
        backgroundColor: Platform.select({
            android: theme.colors.primary,
            ios: 'orange',
            default: 'purple'
        }),
        alignSelf: 'flex-start',
        borderRadius: 4,
        overflow: 'hidden',
        marginVertical:4
    },
    image : {
        width:48,
        height:48,
        borderRadius: 4
    }
})


export default RepositoryItem