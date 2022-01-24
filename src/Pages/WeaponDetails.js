import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router";
import Header from "../Components/Header";
import { showAddress } from "../api";
import axios from "axios";
import Loader from "../Components/Loader";

const WeaponDetails = () => {
  const { weaponId } = useParams();
  const [weapon, setWeapon] = useState();

  useEffect(() => {
    const url = `${showAddress}${weaponId}`;
    axios
      .get(url)
      .then((res) => {
        setWeapon(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [weaponId]);

  return (
    <Container>
      <Header />
      {weapon ? (
        <div style={{ marginTop: 20 }}>
          <img src={weapon.photo} alt="" width="800px" style={{display:"block", width:"50%", margin:"0px auto"}}/>
          <h5><b>Marka:</b> {weapon.brand}</h5>
          <h5><b>Model:</b> {weapon.model}</h5>
          <h5><b>Rodzaj:</b> {weapon.type}</h5>
          <hr />
          <a href={weapon.video} target="_blank">
            Zobacz zwiastun na YouTube
          </a>
          <hr />
          <h4>Opis</h4>
          <p style={{ fontSize: 14, textAlign: "justify" }}>
            {weapon.description}
          </p>
          <hr />
          <h4>Dostępna w wersjach na amunicję:</h4>
          <ul>
            {weapon.calibers.map((caliber, index) => (
              <li key={index}>{caliber.name}</li>
            ))}
          </ul>
        </div>
      ) : (
        <Loader />
      )}
    </Container>
  );
};

export default WeaponDetails;
