import { useEffect } from "react"
import { getDataAboutArtist } from "../../constants_API/constants_API"

interface props {
  searchAPI: string,
  isLoading: boolean,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

function CardData ({searchAPI, isLoading, setLoading} : props) {
  
  useEffect(() => {
    const responseAPI = getDataAboutArtist(searchAPI)
    console.log("respuesta API: " + responseAPI)
    console.log(isLoading, setLoading)
  },[])
  return(
    <>
    </>
  )
}
export default CardData;