import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ItemByCat() {
  const { item_cat } = useParams();
  const [itemCat, setItemCat] = useState([]);

  useEffect(() => {
    fetch(`https://space-facts.herokuapp.com/api/planets/`);
  });
}
