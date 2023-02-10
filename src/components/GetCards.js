import React, { useState, useEffect } from "react";
import axios from "axios";
import MyCard from "./MyCard";

function GetCards () {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://warm-gorge-84676.herokuapp.com/cards/").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          {/* <h2>{item.title}</h2>
          <p>{item.body}</p> */}
          <MyCard title={item.title} desc={item.desc} price={item.price} image={item.image} />
        </div>
      ))}
    </div>
  );
}

export default GetCards;