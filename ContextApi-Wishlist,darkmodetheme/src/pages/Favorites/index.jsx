import { useContext } from 'react'
import {FavoritesContext } from '../../context/FavContext/FavContext'
import { Button, Col, Row } from 'antd'



const Favorites = () => {

  const {fav,clearFavorites} = useContext(FavoritesContext)

  console.log(fav);
  

  return (
    <>
     <div >
      <div style={{ display: "flex",flexDirection : 'column', justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        {fav.length > 0 && (
          <>
          <Button type="primary" danger onClick={clearFavorites}>
            Clear All Favorites
          </Button>
          <h1>Burdada fikir vermeyin birdene bu dizayn ordan goturmusem funksionlliq ozumkudu</h1>
          </>
        )}
      {fav.map((f)=>{
          return(
            <>
            <Row gutter={16.16}>
              <Col xs={24} sm={12} md={8} key={f.id}>
            <img src={f.image} width={100} alt="" />
        <h2 style={{ margin: 0 }}>{f.title}</h2>
              </Col>
            </Row>
            </>
          )
        })}
       </div>
      </div>


    </>
  )
}

export default Favorites
