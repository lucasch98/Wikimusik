import { Input } from '@chakra-ui/react'
import "./InputSearch.css"
import { useState } from 'react'

interface OpenModal {
  openModal: () => void;
  setSearchAPI: (value: string) => void
}

function InputSearch({openModal, setSearchAPI}: OpenModal) {
  const [search, setSearch] = useState("")

  const handleKeyDown = (event: { key: string }) => {
    if(event.key === "Enter") {
      openModal()
    }
  }

return(
  <>
    <div className='containerInputSearch'>
      <Input 
        id='inputSearch' 
        placeholder='🔎 Type Artist/Band...' 
        size='lg'
        onChange={(e) => setSearch(e.target.value)} 
        onKeyDown={handleKeyDown}
      />
    </div>
  </>
)
}

export default InputSearch