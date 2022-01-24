import React from "react";
import WeaponCard from "./WeaponCard";

const Catalog = ({ weapons }) => {
  return (
    <>
      <h4 className="catalog-title">Polecane filmy</h4>
      {weapons.length > 0 ? (
        <div className="catalog">
          {weapons.map((w, index) => (
            <WeaponCard weapon={w} key={index} />
          ))}
        </div>
      ) : (
        <div className="notfound">
          <h5>Niestety, nie znaleziono fimów</h5>
        </div>
      )}
    </>
  );
};
export default Catalog;
