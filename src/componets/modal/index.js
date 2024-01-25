import {View, Text, StyleSheet, TouchableOpacity, Pressable} from "react-native"

import * as Clipboard from 'expo-clipboard'
import useStorage from '../../hooks/useStorage'




export function ModalPassword({password, handleClose}){

    const {saveItem } = useStorage();

    async function handleCopePassword(){
       await Clipboard.setStringAsync(password);
       await saveItem("@pass", password)


        alert("Copiado com Sucesso")
        handleClose();

       

    }
 
    return(
        <View style={styles.conainer}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha Gerada</Text>
                <Pressable style={styles.innerPassword} onLongPress={handleCopePassword}  >
                    <Text style={styles.text}  >
                        {password}
                    </Text>
                </Pressable>

                <View style={styles.buttonArea}>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={handleClose} >Voltar</Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={[styles.button, styles.buttonSave]} onPress={handleCopePassword} >
                        <Text style={styles.buttonTextText}>SALVAR SENHA</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </View>
    )

}

const styles = StyleSheet.create({

    conainer:{
       backgroundColor: "rgba(24, 24, 24, 0.6)",
       flex:1,
       alignItems:'center',
       justifyContent: 'center',
    },
    content:{
        backgroundColor: "#fff",
        width:"85%",
        paddingTop: 24,
        paddingBottom: 24,
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 8,
    },

    title:{
        fontSize:20,
        fontWeight: "bold",
        marginBottom:24,
        color: "#000",

    },
    innerPassword:{
        backgroundColor: "#8e8e8e",
        width: "90%",
        padding: 14,
        borderRadius: 8,
    },
    text:{
        color:"#000",
        textAlign: "center"
    },

    buttonArea:{
        flexDirection:"row",
        width: '90%',
        marginTop: 8,
        alignItems:"center",
        justifyContent: "space-between",
    },
    button:{
        flex: 1,
        alignItems: "center",
        marginTop: 14,
        marginBottom: 14,
        padding: 8,
    
    },

    buttonSave:{
        backgroundColor:"blue",
        
    },

    buttonTextText:{
        color: "#fff",
    }




})