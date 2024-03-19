
interface paramsAPI {
  artist: string
  country: string
}

const API_KEY = '591cfdab34dc890c5bdd539660d20060'

const getTopTracksURL = async ({artist}: paramsAPI) => {
  try{
    const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${artist}&api_key=${API_KEY}&format=json`)
    
      if(!response.ok) {
        throw new Error('No data')
      }
      
      return await response.json()
  }catch(error){
    console.log(error)
  }
}

const getTopTracksByCountry = async ({country}: paramsAPI) => {
  try{
    const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${country}&api_key=${API_KEY}&format=json`)
    
      if(!response.ok) {
        throw new Error('No data')
      }
      
      return await response.json()
  }catch(error){
    console.log(error)
  }
}


const getTopArtistsByCountry = async ({country}: paramsAPI) => {
  try{
    const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${country}&api_key=${API_KEY}&format=json`)
    
      if(!response.ok) {
        throw new Error('No data')
      }
      
      return await response.json()
  }catch(error){
    console.log(error)
  }
}

const getDataAboutArtist = ({artist}: paramsAPI) => {
  
}

export {getTopTracksURL, getTopArtistsByCountry, getTopTracksByCountry, getDataAboutArtist}