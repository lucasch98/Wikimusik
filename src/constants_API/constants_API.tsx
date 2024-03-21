
/*export interface paramsAPI {
  //artist: string
  //country: string
  searchAPI: string
}*/

const API_KEY_LASTFM = '591cfdab34dc890c5bdd539660d20060'

const getTopTracksURL = async (searchAPI: string) => {
  try{
    const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${searchAPI}&api_key=${API_KEY_LASTFM}&format=json`)

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

const getDataAboutArtist = async (searchAPI: string) => {
  try{
    interface dataAPI {
      bandName: string,
      url_band_lastFM: string,
      listeners_on_lastFM: string,
      artist_similars: string []
    }
    const dataAPI {
     

    }
    const url_artist_last_fm = `https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${searchAPI}&api_key=${API_KEY_LASTFM}&format=json`;

    const response = await fetch(url_artist_last_fm)
    if(!response.ok) {
      throw new Error('Error in the request to Spotify API')
    }

    console.log(await response.json())
    //return await response.json()
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

