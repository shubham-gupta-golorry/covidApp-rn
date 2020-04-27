import React, { useState } from 'react'
import { StyleSheet, View ,ScrollView, RefreshControl} from 'react-native'
import { Text } from 'react-native-paper'
import LottieView from 'lottie-react-native'

import Header from '../components/Header'
import useGlobalSummary from '../hooks/useGlobalSummary'
import SummaryCard from '../components/SummaryCard'

function Home() {
  const [summary,lastUpdate,covidAPI] = useGlobalSummary()
  const [refreshStatus,setRefreshStatus] = useState(false)

  const updateData = ()=>{
    console.log("refreshed")
    setRefreshStatus(true)
    covidAPI()
    setRefreshStatus(false)
  }

  return (
    <>
        <Header titleText='COVID-19 Tracker' />
        <View>
        {Object.getOwnPropertyNames(summary).length==0 ?
            <View style={styles.loading}>
              <LottieView style={styles.lottie} source={require('../animations/load.json')} autoPlay loop />
              <Text style={styles.title}>Loading</Text>
            </View>
            :
            <View style={styles.CardContainer}>
              <ScrollView
                refreshControl={
                  <RefreshControl
                    refreshing={refreshStatus}
                    onRefresh={updateData}
                    title="Pull to Update Data!"
                  />
                }
              >
                <Text style={styles.lastUpdateText}>Last updated {lastUpdate}</Text>
                <SummaryCard title="Total Confirmed Cases" count={summary.TotalConfirmed} color="#f0932b" ></SummaryCard>
                <SummaryCard title="Total Recoveries" count={summary.TotalRecovered} color="#27ae60" ></SummaryCard>
                <SummaryCard title="Total Deaths" count={summary.TotalDeaths} color="#eb4d4b" ></SummaryCard>
                <SummaryCard title="New Confirmed Cases" count={summary.NewConfirmed} color="#ffbe76" ></SummaryCard>
                <SummaryCard title="New Recoveries" count={summary.NewRecovered} color="#2ecc71" ></SummaryCard>
                <SummaryCard title="New Deaths" count={summary.NewDeaths} color="#ff7979" ></SummaryCard>
              </ScrollView>
            </View>}
        </View>
    </>
  )
}

const styles = StyleSheet.create({
  lottie: {
    height:300,
    width:300,
  },
  CardContainer: {
    paddingBottom:80,
  },
  title: {
    fontSize: 20,
  },
  lastUpdateText:{
    fontSize:16,
    textAlign:"center",
    marginTop:10,
  },
  loading:{
    flex:1,
    alignItems:"center",
  }
})

export default Home