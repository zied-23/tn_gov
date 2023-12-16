import React from "react";
import "../globals.css";
import Governements from "../Data";
import { Link } from "react-router-dom";

function GovList() {
  return (
    <>
      <div className="products-container">
        {Governements.map((gov) => {
          return (
            <Link to={`/Governement/${gov.id}`}>
              <article className="product-card" key={gov.id}>
                <div className="product-image">
                  <img src={gov.image} alt="" width="200px" height="350px" />
                </div>
                <div className="product-name">This is {gov.city}</div>
                <div className="product-price">{gov.Quality}</div>
              </article>
            </Link>
          );
        })}
      </div>
    </>
  );
}
export default GovList;
