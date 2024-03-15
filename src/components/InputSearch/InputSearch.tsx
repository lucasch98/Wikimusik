import { Input } from '@chakra-ui/react'
import "./InputSearch.css"
function InputSearch() {
return(
  <>
    <div className='containerInputSearch'>
      <Input id='inputSearch' placeholder='🔎 Type Artist/Band...' size='lg'/>
    </div>
  </>
)
}

export default InputSearch