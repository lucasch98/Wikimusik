import "./App.css"
import { Tabs, TabList, Tab} from '@chakra-ui/react'
import InputSearch from "./components/InputSearch/InputSearch"
import ModalDataInput from "./components/ModalDataInput/ModalDataInput"
import { useState } from "react"
import { TopArtists } from "./components/TopArtists/TopArtists"
import CardData from "./components/CardData/CardData"

function App() {
  const [showModal, setShowModal] = useState(false)
  const [searchAPI, setSearchAPI] = useState("")
  const [dataAPI, setDataAPI] = useState({})
  const [isLoading, setLoading] = useState(true)

  const openModal = () => {
    if(searchAPI !== "") {
      <CardData 
        searchAPI={searchAPI} 
        isLoading={isLoading} 
        setLoading={setLoading} 
        dataAPI={dataAPI}
      />
    }

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
        <section style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', fontWeight: 900, lineHeight: 1.2}}>
          <h1> 
            Discover information about your <br /> favorite 
            <span style={{color: '#90CDF4'}}> artists </span> 
            and <span style={{color: '#90CDF4'}}> bands </span>  
            as you listen
          </h1>
        </section>
      <InputSearch openModal={openModal} setSearchAPI={setSearchAPI}/>
      {
        showModal && 
        <ModalDataInput showModal={setShowModal} bandData={searchAPI}/>
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
