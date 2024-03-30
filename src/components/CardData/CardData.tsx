/*import { useEffect, useState } from "react"
import { getDataAboutArtist } from "../../Services_API/Services_API"

interface props {
  searchAPI: string,
  isLoading: boolean,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  showModal: boolean
}


function CardData ({searchAPI, isLoading, setLoading, showModal} : props) {
  
  const [responseAPI, setResponseAPI] = useState<DataAPIProps>();

   useEffect(() => {
    fetchData()
  })

  const fetchData = async () => {
    if(showModal) {
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
*/