import "./styles.css"
import { getTopAlbums, propAlbum } from "../../Services_API/Services_API"
import { useEffect, useState } from "react"
import { propSearch } from "../../App"

export const CardsAlbums = ({searchAPI}:propSearch) =>{

  const [dataAlbums, setDataAlbums] = useState<propAlbum[]>()

  useEffect(() => {
    getAlbumsAPI()
  },[])

  const getAlbumsAPI = async () => {
    const dataAPI = await getTopAlbums(searchAPI)
    setDataAlbums(dataAPI)
    console.log("dataaa:", dataAPI)
  }


  return(
    <>
     <div className="cards-container">
      {
        dataAlbums && (
            dataAlbums.map((element, index) => (
                <div className="card" key={index}>
                  <a href={element.url} target='_blank'>
                    <div className="card-header">
                      <img src={element.image} alt="Imagen de encabezado" className="header-image" />
                    </div>
                    <div className="card-content">
                      <h2><strong>{element.name}</strong></h2>
                      <ul>
                      </ul>
                    </div>
                  </a>
                </div>
            ))
        )

      }

    </div>

      <div style={{display: "flex", justifyContent: "center"}}>
        <button className="buttonViewMoreAlbums">
          <a id="search-link" target="_blank" href={`https://www.last.fm/search/albums?q="${searchAPI}`}><strong>View more</strong></a>
        </button>
      </div>  

  </>
  )
}
