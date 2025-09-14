import { useEffect, useState } from "react"
import { useParams } from "react-router"
import ProductDetail from "./ProductDetail"


function ProductDetailContainer () {
    const [item, setItem] = useState()
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(data => setItem(data))
    }, [id])


    return (
        <ProductDetail item={item}/>
    )
}

export default ProductDetailContainer