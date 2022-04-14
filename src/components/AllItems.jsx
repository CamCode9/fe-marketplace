import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Items = () => {
  const [itemsData, setItemData] = useState([]);
  useEffect(() => {
    fetch(`https://jim-cam-marketplace.herokuapp.com/api/items`)
      .then((res) => res.json())
      .then((data) => setItemData(data.items));
  }, []);
  return (
    <ul>
      {itemsData.map((item) => (
        <li key={item.item_id}>
          <h2> Name: {item.item_name}</h2>
          <p>Description: {item.description}</p>
          <img
            className="ImagePhotos"
            src={item.img_url}
            alt={` of ${item.item_name}`}
          />
          <p>Price: £{item.price}</p>
          <Link to={`/api/items/${item.category_name}`}>
            <p> Category: {item.category_name}</p>
          </Link>
          {/* //Link here */}
        </li>
      ))}
    </ul>
  );
};

export default Items;
