import React from 'react'
import { View, StyleSheet,Text } from 'react-native'
import { Title } from 'react-native-paper'

function SummaryCard({ title,count,color }) {
    return (
        <View style={[styles.container,{borderTopColor:color}]}>
          <Title style={styles.titleStyle}>{title}</Title>
          <Text style={styles.countStyle}>{count}</Text>
        </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      borderTopWidth:10,
      borderRadius:10,
      backgroundColor:"#353b48",
      flexDirection:"column",
      marginVertical:10,
      marginHorizontal:10,
      flex:1,
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,  
    },
    titleStyle: {
      color: '#ffffff',
      fontSize:26,
      textAlign:"left",
      marginHorizontal:20,
      marginTop:12,
    },
    countStyle: {
        color: '#dcdde1',
        fontSize:36,
        fontWeight:"bold",
        textAlign:"right",
        marginHorizontal:20,
        marginBottom:12,
      }
  })
  
  export default SummaryCard