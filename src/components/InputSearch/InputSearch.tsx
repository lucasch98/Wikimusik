import { Input } from '@chakra-ui/react'
import "./InputSearch.css"
import { useState } from 'react'

interface OpenModal {
  setSearchAPI: (value: string) => void;
  setPressEnter: (value: boolean) => void;
}

function InputSearch({setSearchAPI, setPressEnter}: OpenModal) {
  const [search, setSearch] = useState("")

  const handleKeyDown = (event: { key: string}) => {
    if(event.key === 'Enter') {
      setPressEnter(true)
      setSearchAPI(search)
    }
  }

return(
  <>
    <div className='containerInputSearch'>
      <Input 
        type='text'
        id='inputSearch' 
        placeholder='🔎 Type Band...' 
        value={search}
        size='lg'
        onChange={(e) => setSearch(e.target.value)} 
        onKeyDown={handleKeyDown}
        autoComplete='off'
      />
    </div>
  </>
)
}

export default InputSearch