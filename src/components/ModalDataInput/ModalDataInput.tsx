import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import { useEffect } from 'react';
import { DataAPIProps } from '../CardData/CardData';

interface closeModalProp {
  showModal: (value: boolean) => void
}

function ModalDataInput(showModal: closeModalProp, bandData: DataAPIProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
   onOpen() 
  })

  const closeModal = () => {
    onClose()
    showModal(false)
  }

  return(
    <>
      <Modal isCentered isOpen={isOpen} onClose={closeModal} size={'xl'}>
        <ModalOverlay
          bg='backdropSaturate'
          backdropFilter='auto'
          backdropInvert='0%'
          backdropBlur='5px'
        />
        <ModalContent style={{backgroundColor: '#1A202C'}}>
          <ModalHeader style={{color: 'white', textAlign: 'center'}}>
            Modal Title
          </ModalHeader>
          <hr style={{borderWidth: '1px'}}/>
          <ModalCloseButton style={{color: "red"}}/>
          <ModalBody style={{ marginTop: '3%'}}>
            <p style={{color: 'white'}}>Custom backdrop filters!</p>
          </ModalBody>
          <p>{bandData}</p>
          {/*<ModalFooter>
            <Button onClick={closeModal} style={{backgroundColor: '#bee3f8'}}>Close</Button>
  </ModalFooter>*/}

        {/*<CardDataInput bandData={bandData}/>  */}

        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalDataInput;