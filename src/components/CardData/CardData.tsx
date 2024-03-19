import { useEffect } from "react"
import { constants_API } from "../../constants_API/constants_API"

//const 
interface searchBandInput {
  searchAPI: string
  isLoading: boolean
  setLoading: (value: boolean) => void
  dataAPI: {}
}


function CardData ({searchAPI, isLoading, setLoading, dataAPI}: searchBandInput) {
  
  useEffect(() => {
    const fetchDataAPI = async () => {
      const response = await fetch()
    }
  },[])

  return(
    <>
    </>
  )
}
export default CardData;