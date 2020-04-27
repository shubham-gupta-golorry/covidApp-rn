import {useState,useEffect} from 'react'
import moment from 'moment'
import API from '../api'

export default ()=>{
    const [summary,setSummary]=useState({})
    const [lastUpdate,setLastUpdate]=useState('')

    
    const covidAPI = async ()=>{
        try{
            const response = await API.get('/summary')
            setSummary(response.data.Global)
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

    return [summary,lastUpdate,covidAPI]
}
