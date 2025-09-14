import {useState, useEffect} from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router'


function ItemListContainer (props){
    const [items, setItems] = useState ([])
    const { id } = useParams()
    
    useEffect(() => {
        const url = 'https://dummyjson.com/products'
        const urlCategorias = `https://dummyjson.com/products/category/${id}`


        fetch(id ? urlCategorias : url)
        .then(res => res.json())
        .then(data => setItems(data.products));

    },[id])
    return (
        <>
        <h2 className="subtitulo">{props.text}</h2>
        <ItemList items={items} />
        </>
    )

}

export default ItemListContainer