const request=require('request')

const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic3ZuYWdlbmRyYTAwNyIsImEiOiJjazZkYWtoZnoxZzgxM2xwa2VzOWdoam16In0.LV9LfF3jvyW0M1N_Ie1GBA'
    request({url,json:true},(error,{body})=>{
if(error){
callback('Unable to connect location services',undefined)
}
else if(body.features.length===0){
callback('!Unable to find Location services Try another search')
}
else{
    callback(undefined,{
        latitude:body.features[0].center[1],
        longitude:body.features[0].center[0],
        location:body.features[0].place_name        


    })
   }
    })
}
module.exports=geocode;