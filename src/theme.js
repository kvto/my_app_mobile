import { Platform } from "react-native"


const theme = {
    appBar:{
        primary: '#24292e',
        secondary: '#555',
        textPrimary: '#fff',
    },
    colors:{
        textPrimary: '#24292e',
        textSecondary: '#586069',
        primary: '#0366d6',
        white: '#fff'
    },
    fontSizes: {
        body: 14,
        subheading: 16
    },
    fonts: {
        main: Platform.select({
            ios: 'Arial',
            android: 'System',
            default: 'Roboto'
        })
    },
    fontWeights: {
        normal: '400',
        bold: '700'
    }
}

export default theme