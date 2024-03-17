import "./App.css"
import { Tabs, TabList, Tab} from '@chakra-ui/react'
import InputSearch from "./components/InputSearch/InputSearch"
import ModalDataInput from "./components/ModalDataInput/ModalDataInput"

function App() {
  return (
    <>
      <div className="container">
        <Tabs variant='soft-rounded' colorScheme='blue' id="nabvar">
          <TabList>
            <Tab>Information</Tab>
            <Tab>News</Tab>
            <Tab>Top 10 artist</Tab>
          </TabList>

          {/*<TabPanels>
            <TabPanel>
            <p>one!</p>
            </TabPanel>
          </TabPanels>*/}
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
      <InputSearch />

      <ModalDataInput />
    </>
  )
}

export default App
