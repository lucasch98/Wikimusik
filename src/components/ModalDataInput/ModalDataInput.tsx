import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import { useState } from 'react'


function ModalDataInput() {
  const OverlayOne = () => (
    <ModalOverlay
      bg='backdropSaturate'
      backdropFilter='auto'
      backdropInvert='0%'
      backdropBlur='5px'
    />
  )
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = useState(<OverlayOne />)

  return(
    <>
       <Button
        onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}
      >
        Use Overlay one
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose} size={'xl'}>
        {overlay}
        <ModalContent style={{backgroundColor: '#1A202C'}}>
          <ModalHeader style={{color: 'white', textAlign: 'center'}}>
            Modal Title
          </ModalHeader>
          <hr style={{borderWidth: '1px'}}/>
          <ModalCloseButton />
          <ModalBody style={{ marginTop: '3%'}}>
            <p style={{color: 'white'}}>Custom backdrop filters!</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} style={{backgroundColor: '#bee3f8'}}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalDataInput;