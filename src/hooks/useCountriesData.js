import {useState,useEffect} from 'react'
import moment from 'moment'
import API from '../api'

export default ()=>{
    const [countriesData,setCountriesData]=useState([])
    const [countriesFilteredData,setCountriesFilteredData]=useState([])
    const [lastUpdate,setLastUpdate]=useState('')

    
    const covidAPI = async ()=>{
        try{
            const response = await API.get('/summary')
            let rawData = response.data.Countries
            const filteredData =()=>{
                return rawData.filter(country=>{
                    return country.TotalConfirmed !== 0
                })
            }
            setCountriesData(filteredData)
            setCountriesFilteredData(filteredData)
             
            let myTimeStamp = moment(response.data.Date).startOf('hour').fromNow();
            setLastUpdate(myTimeStamp)
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        covidAPI()
    },[])

    return [countriesData,lastUpdate,countriesFilteredData,setCountriesFilteredData,covidAPI]
}
