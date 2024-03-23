import { useEffect, useState } from "react"
import { getDataAboutArtist } from "../../constants_API/constants_API"
import DataAPIProps from '../CardData/CardData';
 
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

function CardData ({searchAPI, isLoading, setLoading, showModal, setBandAPI} : props) {
  const [responseAPI, setResponseAPI] = useState<DataAPIProps>({
    bandName: "",
    url_band_lastFM: "",
    listeners_on_lastFM: "",
    artist_similars: []
  })

   useEffect(() => {
    fetchData()
  }, [])


  const fetchData = async () => {
    if(showModal) {
      await getDataAboutArtist(searchAPI, setResponseAPI)
      if(responseAPI.bandName !== ""){
        setBandAPI(responseAPI)
        console.log(isLoading, setLoading, responseAPI)
      }
    }
  }

  return(
    <>
    </>
  )
}
export default CardData;