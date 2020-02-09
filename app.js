const request=require('request')
const url='https://api.darksky.net/forecast/cdd2fc4ea25c6ce7dc1a219fde893fdd/17.436265499999998,78.4321834?units=si'

request({url:url,json:true},(err,response)=>{
    // const data=JSON.parse(res.body)
    // console.log(data.currently);
    // console.log(response.body.currently)
    if(err){
        console.log('! Unable to connnect Weather Service')
    }
    else if(response.body.error){
        console.log('!Unable to find location')
    }
    else{
    console.log(response.body.daily.data[0].summary+' It is Currently '+response.body.currently.temperature+' degrees out. There is a '+response.body.currently.precipProbability +'% chance to rain')
    }
})

const geocodeURL='https://api.mapbox.com/geocoding/v5/mapbox.places/hyderabad.json?access_token=pk.eyJ1Ijoic3ZuYWdlbmRyYTAwNyIsImEiOiJjazZkYWtoZnoxZzgxM2xwa2VzOWdoam16In0.LV9LfF3jvyW0M1N_Ie1GBA'

request({url:geocodeURL,json:true},(error,response)=>{
    if(error){
    console.log('! Unable to connect Geocode Service');
}

else{
    const latitude=response.body.features[0].center[0]
    const longitude=response.body.features[0].center[1]
    console.log(latitude,longitude) 
}
})