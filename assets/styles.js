import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container : {
        flex: 1,
        marginHorizontal: 20,
    },
    inputContainer : {
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop: 50,
    },
    input : {
        borderColor:'#CCC',
        borderWidth: 0.2,
        borderRadius: 5,
        paddingLeft: 10,
        width:"80%"
    },
    outputContainer : {
        marginTop: 10,
        padding : 10,
        fontWeight: 'bold',
        backgroundColor:'gray',
        color:"white"
    },
    textList : {
        color:'white'
    }
});