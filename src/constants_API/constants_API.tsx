import { DataAPIProps } from "../components/CardData/CardData"

/*export interface paramsAPI {
  //artist: string
  //country: string
  searchAPI: string
}*/

const getTopTracksURL = async (searchAPI: string) => {
  try{
    const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${searchAPI}&api_key=${import.meta.env.VITE_API_KEY_LASTFM}&format=json`)

      if(!response.ok) {
        throw new Error('No data')
      }
      
      return await response.json()
  }catch(error){
    console.log(error)
  }
}

/*
const getTopTracksByCountry = async ({country}: paramsAPI) => {
  try{
    const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${country}&api_key=${API_KEY_LASTFM}&format=json`)
    
      if(!response.ok) {
        throw new Error('No data')
      }
      
      return await response.json()
  }catch(error){
    console.log(error)
  }
}
*/

/*
const getTopArtistsByCountry = async ({country}: paramsAPI) => {
  try{
    const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${country}&api_key=${API_KEY_LASTFM}&format=json`)
    
      if(!response.ok) {
        throw new Error('No data')
      }
      
      return await response.json()
  }catch(error){
    console.log(error)
  }
}
*/
export interface propDataAPI {
  bandName: string,
  url_band_lastFM: string,
  listeners_on_lastFM: string
  artist_similars: [],
}

const dataAPI: DataAPIProps = {
  bandName: '',
  url_band_lastFM: '',
  listeners_on_lastFM: '',
  artist_similars: [],
}

const getDataAboutArtist = async (searchAPI: string) => {
  try{
    //console.log("as: ", process.env.API_KEY_LASTFM)
    const url_artist_last_fm = `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${searchAPI}&api_key=${import.meta.env.VITE_API_KEY_LASTFM}&format=json`;

    const response = await fetch(url_artist_last_fm)
    if(!response.ok) {
      throw new Error('Error in the request to Spotify API')
    }

    const data = await response.json()
    if(data["results"]["artistmatches"]["artist"].length !== 0) {//Hubo matches de artistas
      dataAPI.bandName = data["results"]["artistmatches"]["artist"][0]["name"]
      dataAPI.url_band_lastFM = data["results"]["artistmatches"]["artist"][0]["url"]
      dataAPI.listeners_on_lastFM = data["results"]["artistmatches"]["artist"][0]["listeners"]
      dataAPI.artist_similars = []
    }else{
      alert("No se encontraron coincidencias para su banda")
    }
    console.log(dataAPI)
    return dataAPI
  }catch(error){
    console.log("Error: " + error)
  }
}



export {
  getTopTracksURL,
  //getTopArtistsByCountry,
  //getTopTracksByCountry,
  getDataAboutArtist
}

