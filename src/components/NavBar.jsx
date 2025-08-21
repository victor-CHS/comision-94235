import CartWidget from "./CartWidget"

function NavBar (){
    return(
   <>
    <div className="NavBar">
        <h1>MusicStore</h1>
        <div>
            <ul className="categorias">
                <li>Rock</li>
                <li>Metal</li>
                <li>Simfonico</li>
            </ul>
        </div>
        <div className="carritoCompras">
            <CartWidget/>
        </div>  
    </div>
   </>   
    )
}

export default NavBar