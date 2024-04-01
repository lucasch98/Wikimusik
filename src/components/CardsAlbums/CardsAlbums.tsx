import "./styles.css"
import { getTopAlbums } from "../../Services_API/Services_API"
import { useEffect } from "react"

export const CardsAlbums = () =>{

  useEffect(() => {
    getAlbumsAPI()
  },[])

  const getAlbumsAPI = async () => {
    const dataAPI = await getTopAlbums("pink floyd")
    console.log("dataaa:", dataAPI)
  }


return(
  <>
    <div className="card">
      <div className="card-header">
        <img src="https://lastfm.freetls.fastly.net/i/u/300x300/d4bdd038cacbec705e269edb0fd38419.png" alt="Imagen de encabezado" className="header-image" />
      </div>
      <div className="card-content">
        <h2>Plan Básico</h2>
        <div className="price">$19.99/mes</div>
        <ul>
          <li>Característica 1</li>
          <li>Característica 2</li>
          <li>Característica 3</li>
        </ul>
        <button>Seleccionar</button>
      </div>
    </div>
  </>
  )
}
