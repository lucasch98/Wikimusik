/*export interface paramsAPI {
  //artist: string
  //country: string
  searchAPI: string
}*/

export interface propTopTracks {
  name: string;
  listeners: string;
  playcount: string;
  url: string;
}

const getTopTracksURL = async (searchAPI: string) => {
  try{
    const response = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${searchAPI}&api_key=${import.meta.env.VITE_API_KEY_LASTFM}&format=json`)

      if(!response.ok) {
        throw new Error('No data')
      }

      const dataAPI = await response.json()
      const newTracks: propTopTracks[] = []; //Creo un array y me quedo con las ultimas pistas
      if(dataAPI["toptracks"]["track"].length !== 0) {
        for(let i=0; i<3; i++) {
          newTracks.push({
            name: dataAPI["toptracks"]["track"][i]["name"],
            listeners: dataAPI["toptracks"]["track"][i]["listeners"],
            playcount: dataAPI["toptracks"]["track"][i]["playcount"],
            url: dataAPI["toptracks"]["track"][i]["url"],
          })
        }
      }
      
      console.log("TopTracks: ", newTracks)
      return newTracks
  }catch(error){
    console.log(error)
  }
}

export interface propAlbum {
  name: string;
  playcount: string;
  url: string;
  image: string;
}

const getTopAlbums = async (searchAPI: string) => {
  await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${searchAPI}&api_key=${import.meta.env.VITE_API_KEY_LASTFM}&format=json`)
  .then(response => response.json())
  .then(data => {
    const albumAPI: propAlbum[] = [];
    if(data["topalbums"]["album"].length !== 0){
      for(let i=0; i<3;i++){
        albumAPI.name = data["topalbums"]["album"][0]["name"]
        albumAPI.playcount = data["topalbums"]["album"][0]["playcount"]
        albumAPI.image = data["topalbums"]["album"][0]["image"][3]
        albumAPI.url = data["topalbums"]["album"][0]["url"]
      }
    }
  }
  )

  return albumAPI
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

export interface DataAPIProps {
  bandName: "",
  url_band_lastFM: "",
  listeners_on_lastFM: "",
  artist_similars: string[]
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
  getDataAboutArtist,
  getTopAlbums
}

