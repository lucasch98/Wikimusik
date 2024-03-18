import "./App.css"
import { Tabs, TabList, Tab} from '@chakra-ui/react'
import InputSearch from "./components/InputSearch/InputSearch"
import ModalDataInput from "./components/ModalDataInput/ModalDataInput"
import { useState } from "react"

function App() {
  const [showModal, setShowModal] = useState(false)
  const [searchAPI, setSearchAPI] = useState("")

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

      <article style={{ display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
        <h1> 
          Discover information about your <br /> favorite 
          <span style={{color: '#bee3f8'}}> artists </span> 
          and <span style={{color: '#bee3f8'}}> bands </span>  
          as you listen
        </h1>
      </article>

      <InputSearch openModal={openModal} setSearchAPI={setSearchAPI}/>
      {
        showModal && 
          <ModalDataInput showModal={setShowModal}/>
      }
    </>
  )
}

export default App
