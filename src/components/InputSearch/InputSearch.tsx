import { Input } from '@chakra-ui/react'
import "./InputSearch.css"
import { useState } from 'react'

interface OpenModal {
  setSearchAPI: (value: string) => void
}

function InputSearch({setSearchAPI}: OpenModal) {
  const [search, setSearch] = useState("")

  const handleKeyDown = (event: { key: string; preventDefault: () => void; }) => {
    if(event.key === 'Enter') {
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