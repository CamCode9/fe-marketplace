import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ItemByCat() {
  const { category_name } = useParams();

  const [itemCat, setItemCat] = useState([]);

  useEffect(() => {
    fetch(`https://jim-cam-marketplace.herokuapp.com/api/items/`)
    .then(res => res.json())
    .then(data => setItemCat(data.items));
  }, [category_name]);

  console.log(itemCat, 'PRE')

  const categoryItems = itemCat.filter(item => {
    if(item.category_name === category_name) {
      return item;
    }
  })

  console.log(categoryItems, 'ITEMS BY CAT')
  // return (
  //   <div>
  //     <h1>Items in {category_name} category:</h1>
  //     <ul>
  //       {itemCat.filter((item) => {
  //         return <li key={item.item_id}>

  //         </li>
  //       })}
  //     </ul>
      
  //   </div>
  // )
}
