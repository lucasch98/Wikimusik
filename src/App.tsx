import "./App.css"
import { Tabs, TabList, Tab} from '@chakra-ui/react'
import InputSearch from "./components/InputSearch/InputSearch"
import ModalDataInput from "./components/ModalDataInput/ModalDataInput"
import { useEffect, useState } from "react"
import { TopArtists } from "./components/TopArtists/TopArtists"
import CardData, { DataAPIProps } from "./components/CardData/CardData"

function App() {
  const [showModal, setShowModal] = useState(false)
  const [searchAPI, setSearchAPI] = useState("")
  const [isLoading, setLoading] = useState(true)
  const [bandAPI, setBandAPI] = useState<DataAPIProps>({
      bandName: "",
      url_band_lastFM: "",
      listeners_on_lastFM: "",
      artist_similars: []
    }
  )

  useEffect(() => {
    if(searchAPI !== "") {
      setShowModal(true)
      openModal()
    }
  }, [searchAPI])

  const openModal = () => {
    setShowModal(true)
  }

  return (
    <>
      <div className="container">
        <Tabs variant='soft-rounded' colorScheme='blue' id="nabvar">
          <TabList>
            <Tab>Information</Tab>
            <Tab>News</Tab>
            <Tab>Top 10 artist</Tab>
          </TabList>
        
        </Tabs>
        <hr />
      </div>

      <div style={{paddingTop: "3%"}}>
        <section style={{  
          fontWeight: 600, 
          lineHeight: 1.1, 
          opacity: 0.9, 
          fontSize: "15%",
          height: "50vh"
        }}>
          <h1> 
            Discover information about your <br /> favorite 
            <span style={{color: '#90CDF4'}}> artists </span> 
            and <span style={{color: '#90CDF4'}}> bands </span>  
            as you listen
          </h1>
        </section>
      <InputSearch setSearchAPI={setSearchAPI}/>
      {
        showModal && (
          <>
            <CardData 
              searchAPI={searchAPI} 
              isLoading={isLoading} 
              setLoading={setLoading} 
              showModal={showModal}
            />
            <ModalDataInput showModal={setShowModal} setBandAPI={setBandAPI}/>
          </>
        )
      }
      </div>

      <hr style={{marginTop: "5%"}}/>
      
      <section>
        <TopArtists />  
      </section>
    </>
  )
}

export default App
