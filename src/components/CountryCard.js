import React from 'react'
import { View, StyleSheet,Text,TouchableOpacity } from 'react-native'
import { Title } from 'react-native-paper'

function CountryCard({ country }) {
    return (
        <View style={[styles.container]}>
          

            <View style={styles.cardHeaderStyle}>
                <Title style={styles.titleCountryStyle}>{country.Country}</Title>
            </View>


            <Text style={styles.detailsHeaderStyle}>Cases Till Date</Text>
            <View style={styles.cardDetailStyle}>

              <View style={styles.detailBlockStyle}>
                <Title style={styles.titleStyle}>Confirmed</Title>
                <Text style={styles.countStyle}>{country.TotalConfirmed}</Text>
              </View>
              <View style={styles.detailBlockStyle}>
                <Title style={styles.titleStyle}>Recoveries</Title>
                <Text style={styles.countStyle}>{country.TotalRecovered}</Text>
              </View>
              <View style={styles.detailBlockStyle}>
                <Title style={styles.titleStyle}>Deaths</Title>
                <Text style={styles.countStyle}>{country.TotalDeaths}</Text>
              </View>

            </View>



            <Text style={styles.detailsHeaderStyle}>New Cases Today</Text>
            <View style={styles.cardDetailAltStyle}>

              <View style={styles.detailBlockStyle}>
                <Title style={styles.titleStyle}>Confirmed</Title>
                <Text style={styles.countStyle}>{country.NewConfirmed}</Text>
              </View>
              <View style={styles.detailBlockStyle}>
                <Title style={styles.titleStyle}>Recoveries</Title>
                <Text style={styles.countStyle}>{country.NewRecovered}</Text>
              </View>
              <View style={styles.detailBlockStyle}>
                <Title style={styles.titleStyle}>Deaths</Title>
                <Text style={styles.countStyle}>{country.NewDeaths}</Text>
              </View>

            </View>
        </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      borderTopWidth:10,
      borderColor:"#2C3A47",
      borderRadius:10,
      backgroundColor:"#2C3A47",
      flexDirection:"column",
      marginVertical:10,
      marginHorizontal:10,
      flex:1,
      elevation: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,  
    },
    titleStyle: {
      color: '#EAB543',
      fontSize:20,
      textAlign:"center",
      marginHorizontal:20,
      borderRadius:10,
    },
    titleCountryStyle: {
      color: '#ffffff',
      fontSize:24,
      textAlign:"center",
      marginVertical:6,
    },
    cardHeaderStyle:{
      backgroundColor:"#F97F51",
    },
    flagStyle:{
      height:40,
      width:40

    },
    cardDetailStyle:{
      flexDirection:"row",
    },
    cardDetailAltStyle:{
      flexDirection:"row",
      paddingBottom:10,
    },
    detailBlockStyle:{
      flex:1,
    },
    countStyle: {
        color: '#dcdde1',
        fontSize:18,
        fontWeight:"bold",
        textAlign:"center",
        marginHorizontal:20,
      },
      detailsHeaderStyle:{
        color:"#ffffff",
        marginHorizontal:10,
        marginVertical:4,
        fontSize:16,
        textAlign:"center"
      }
  })
  
  export default CountryCard