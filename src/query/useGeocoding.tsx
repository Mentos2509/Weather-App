import React from 'react'
import axios from 'axios'





function getGeocoding (locationName: string){
    return axios.get('https://geocoding-api.open-meteo.com/v1/search')
}

function useGeocoding() {
  return (
    <div>
      
    </div>
  )
}

export default useGeocoding
