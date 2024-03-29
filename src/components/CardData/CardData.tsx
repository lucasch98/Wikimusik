import { useEffect, useState } from "react"
import { getDataAboutArtist } from "../../constants_API/constants_API"

interface props {
  searchAPI: string,
  isLoading: boolean,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  showModal: boolean
  setBandAPI: DataAPIProps
}

export interface DataAPIProps {
  bandName: "",
  url_band_lastFM: "",
  listeners_on_lastFM: "",
  artist_similars: string[]
}

function CardData ({searchAPI, isLoading, setLoading, showModal} : props) {
  
  const [responseAPI, setResponseAPI] = useState<DataAPIProps>();

   useEffect(() => {
    fetchData()
  })

  const fetchData = async () => {
    if(showModal) {
      console.log(import.meta.env.VITE_API_KEY_LASTFM)
      const dataFromAPI = await getDataAboutArtist(searchAPI)
      setResponseAPI(dataFromAPI)

      console.log("respuesta API: " + responseAPI)
      console.log(isLoading, setLoading)
    }
  }

  return(
    <>
    </>
  )
}
export default CardData;