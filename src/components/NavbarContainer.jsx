import {useEffect, useState} from 'react'
import NavBar from './NavBar';


function NavbarContainer() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products/category-list')
    .then(res => res.json())
    .then(data => setCategories(data));

  }, [])

  return <NavBar categories={categories}/>
}

export default NavbarContainer