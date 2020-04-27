import React, { useState } from 'react'
import { StyleSheet, View ,ScrollView, RefreshControl, FlatList, Text} from 'react-native'
import { Searchbar } from 'react-native-paper'
import LottieView from 'lottie-react-native'

import Header from '../components/Header'
import useCountriesData from '../hooks/useCountriesData'
import Countrycard from '../components/CountryCard'

function Countries() {
  const [countriesData,lastUpdate,countriesFilteredData,setCountriesFilteredData,covidAPI] = useCountriesData()
  const [refreshStatus,setRefreshStatus] = useState(false)
  const [searchTerm,setSearchTerm] = useState('')

  const updateData = ()=>{
    setRefreshStatus(true)
    covidAPI()
    setRefreshStatus(false)
  }

  const onChangeSearchTerm =(newSearchTerm)=>{
    setSearchTerm(newSearchTerm)
  }
  const onSearchTermSubmit =()=>{
    setCountriesFilteredData(countriesData)

    let  data = countriesData
    const searchResults = ()=>{
      return data.filter(countryItem=>{
        return (countryItem.Country.toLowerCase().match(searchTerm.toLowerCase()))
      })
    }
    setCountriesFilteredData(searchResults)
    //autoreset list
    if(searchTerm===''){
      setCountriesFilteredData(countriesData)
    }
  }

  return (
    <>
        <Header titleText='COVID-19 Tracker' />
        <View>
        {countriesData.length==0 ?
            <View style={styles.loading}>
              <LottieView style={styles.lottie} source={require('../animations/load.json')} autoPlay loop />
              <Text style={styles.title}>Loading</Text>
            </View>
            :
            <View style={styles.container}>
              <Searchbar
                style={styles.searchBarStyles}
                placeholder="Search Countries"
                onChangeText={onChangeSearchTerm}
                value={searchTerm}
                onEndEditing={onSearchTermSubmit}
              />
              <Text style={styles.lastUpdateText}>Last updated {lastUpdate}</Text>
              <FlatList
                style={styles.listStyle}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshStatus}
                    onRefresh={updateData}
                    title="Pull to Update Data!"
                  />
                }
                data={countriesFilteredData}
                keyExtractor={item=>item.CountryCode}
                renderItem={({item})=>{return <Countrycard country={item}/>}}
              />
            </View>}
        </View>
    </>
  )
}

const styles = StyleSheet.create({
  loading:{
    flex:1,
    alignItems:"center",
  },
  container: {
    paddingBottom:80,
  },
  title: {
    fontSize: 20,
  },
  lastUpdateText:{
    fontSize:16,
    textAlign:"center",
  },
  searchBarStyles:{
    marginHorizontal:10,
    marginVertical:10,
  },
  listStyle:{
    paddingBottom:200,
  },
  lottie: {
    height:300,
    width:300,
  },
})

export default Countries