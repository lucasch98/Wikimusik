import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
  SimpleGrid,
  Card,
  CardHeader,
  Heading,
  CardBody,
  CardFooter,
  Button,
  Text 
} from '@chakra-ui/react'
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { DataAPIProps, getDataAboutArtist, getTopTracksURL, propTopTracks } from "../../Services_API/Services_API"
import { ExternalLinkIcon } from '@chakra-ui/icons';
import "./styles.css"
import { MdPeopleAlt } from "react-icons/md";
import { AiFillSound } from "react-icons/ai";

interface ModalDataInputProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  setPressEnter: (value: boolean) => void;
  searchAPI: string
}

function ModalDataInput({ setShowModal, showModal, setPressEnter, searchAPI }: ModalDataInputProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [bandAPI, setBandAPI] = useState<DataAPIProps>()
  const [getTopTracks, setTopTracks] = useState<propTopTracks[]>()

  useEffect(() => {
    if(showModal){
      onOpen()
      getDataAPIArtist()
      getTopTracksAPI()
    }
  }, [onOpen, showModal])

  const closeModal = () => {
    setShowModal(false)
    onClose()
    setPressEnter(false)
  }

  const getTopTracksAPI = async () => {
    try{
      const topTracksAPI = await getTopTracksURL(searchAPI)
      setTopTracks(topTracksAPI)
    }catch(error){
      console.log(error)
    }
  }

  const getDataAPIArtist = async () => {
    try{
      const dataAPI = await getDataAboutArtist(searchAPI)
      setBandAPI(dataAPI)
    }catch(error){
      console.log(error)
    }
  }


  return(
    <>
    {
      bandAPI && (
        <Modal isCentered isOpen={isOpen} onClose={closeModal} size={'xl'}>
          <ModalOverlay
            bg='backdropSaturate'
            backdropFilter='auto'
            backdropInvert='0%'
            backdropBlur='5px'
          />
            <ModalContent 
              style={{backgroundColor: '#1A202C'}} 
              maxW="calc(90vw)"
              width="calc(50vw)"
              maxHeight="90vh"
              overflow="auto"
            >
            <ModalHeader style={{color: 'white', textAlign: 'center', fontSize: "30px"}}>
             <span style={{color: "#BEE3F8"}}><strong>{bandAPI.bandName}</strong></span>
            </ModalHeader>
            <hr style={{borderWidth: '1px'}}/>
            <ModalCloseButton style={{color: "red"}}/>
            <ModalBody style={{ marginTop: '3%', fontSize: "20px"}}>
              {/*<p style={{color: 'white'}}>Custom backdrop filters!</p>*/}
              <ul>
                <li>
                <Flex alignItems="center">
                  {/*Icon LastFM */}
                  Listeners on
                  <svg style={{marginLeft: "5px"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#d0021b" fill="none">
                    <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                    <path d="M11.0714 15.0318C10.5251 15.3296 9.89082 15.5 9.21429 15.5C7.16294 15.5 5.5 13.933 5.5 12C5.5 10.067 7.16294 8.5 9.21429 8.5C11.4777 8.66528 12.1577 10.6609 12.5678 12C13.4964 15.0318 15.6172 15.5 16.6429 15.5C17.6685 15.5 18.5 14.7165 18.5 13.75C18.5 12.7835 17.6685 12 16.6429 12C15.6172 12 14.7857 11.2165 14.7857 10.25C14.7857 9.2835 15.6172 8.5 16.6429 8.5C17.5759 8.5 18.3483 9.14843 18.4801 9.99317" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                  </svg>                    
                  <span style={{marginLeft: "5px", color: "#BEE3F8"}}>{bandAPI.listeners_on_lastFM}</span>
                </Flex>
                </li>

                <li>
                  <Flex alignItems="center">
                    <a target='_blank' href={bandAPI.url_band_lastFM}>
                      {bandAPI.bandName} on <span style={{color: "red", marginLeft: "3px"}}><ExternalLinkIcon style={{cursor: "pointer", color: "red"}}/>LastFM</span>
                    </a>
                  </Flex>
                </li>

                <article>
                  <div style={{borderRadius: "10px", borderColor: "1px solid white", boxShadow: "0px 0px 10px #10bcde", paddingLeft: "2%", paddingRight: "2%", paddingBottom: "2%"}}>
                    <h2 style={{fontSize: "25px", textAlign: "center", marginTop: "5%", color: "#BEE3F8"}}><strong>Top tracks</strong></h2>
                    {getTopTracks && (
                      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' style={{marginTop: "2%"}}>
                        {getTopTracks.map((track, index) => (
                          <Card key={index} bg="#262f3e" color="white" border="solid 2px #bfb6b4">
                            <CardHeader textAlign="center">
                              <Heading style={{fontSize: "18px"}}>{track.name}</Heading>
                            </CardHeader>
                            <CardBody>
                              <Text style={{fontSize: "18px", color: "#c0bebd"}}>
                                  <div style={{display: "flex", alignItems: "center"}}>
                                    <MdPeopleAlt style={{color: "white", paddingRight: "3%"}}/> 
                                    <p>Listeners: {track.listeners}</p>
                                  </div>
                                  <div style={{display: "flex", alignItems: "center"}}>
                                    <AiFillSound style={{color: "white", paddingRight: "3%"}}/> 
                                    <p>Playcount: {track.playcount}</p>
                                  </div>
                              </Text>
                            </CardBody>
                            <CardFooter justifyContent="center" boxShadow="md">
                              <Button as='a' href={track.url} target='_blank' rel='noopener noreferrer' style={{color: "white", backgroundColor: "red"}}>Listen on LastFM</Button>
                            </CardFooter>
                          </Card>
                        ))}
                      </SimpleGrid>
                    )}
                  </div>
                </article>
              </ul>

              <article>
                <div style={{borderRadius: "10px", borderColor: "1px solid white", boxShadow: "0px 0px 10px #339f40", paddingLeft: "2%", paddingRight: "2%", paddingBottom: "2%"}}>
                  <h2 style={{fontSize: "25px", textAlign: "center", marginTop: "5%", color: "#BEE3F8"}}><strong>Top albums</strong></h2>
                </div>
              </article>
            </ModalBody>
            
            {/*<ModalFooter>
              <Button onClick={closeModal} style={{backgroundColor: '#bee3f8'}}>Close</Button>
    </ModalFooter>*/}

          {/*<CardDataInput bandData={bandData}/>  */}

          </ModalContent>
        </Modal>
      )
    }
    {/*{!bandAPI && alert("No se pudieron traer datos de la API")}*/}
    </>
  )
}

export default ModalDataInput;