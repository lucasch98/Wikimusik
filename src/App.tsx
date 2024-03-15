import "./App.css"
import { Tabs, TabList, Tab} from '@chakra-ui/react'
import InputSearch from "./components/InputSearch/InputSearch"

function App() {
  return (
    <>
    <div>
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

    <div>
      <h1 id="textSearcher">
        Discover information about your favorite  
        <span style={{color: '#bee3f8'}}> artists </span> 
        and <span style={{color: '#bee3f8'}}> bands </span>  
        as you listen
      </h1>
    </div>
    <InputSearch />
    </>
  )
}

export default App
