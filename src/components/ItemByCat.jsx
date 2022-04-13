import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ItemByCat() {
  const { category_name } = useParams();

  const [itemCat, setItemCat] = useState([]);

  useEffect(() => {
    fetch(`https://jim-cam-marketplace.herokuapp.com/api/items/`)
      .then((res) => res.json())
      .then((data) => setItemCat(data.items));
  }, [category_name]);

  const categoryItems = itemCat.filter((item) => {
    return item.category_name === category_name;
  });

  return (
    <ul>
      {categoryItems.map((item) => {
        return (
          <li key={item.item_id}>
            <h2> Name: {item.item_name}</h2>
            <p>Description: {item.description}</p>
            <img
              className="ImagePhotos"
              src={
                "https://cdn.images.express.co.uk/img/dynamic/20/750x445/1147250.jpg"
              }
              alt={` of ${item.item_name}`}
            />
            <p>Price: £{item.price}</p>
            <p> Category: {item.category_name}</p>
          </li>
        );
      })}
    </ul>
  );
}
