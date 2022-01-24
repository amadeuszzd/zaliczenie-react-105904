import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Bar from "../Components/Bar";
import Catalog from "../Components/Catalog";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import axios from "axios";
import Loader from "../Components/Loader";
import { randomAddress, searchAddress } from "../api";

const Main = () => {
  const [phrase, setPhrase] = useState();
  const [weapons, setWeapons] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const saveUserWord = (data) => {
    setPhrase(data);
  };

  useEffect(() => {
    setIsLoading(true);
    if (phrase) {
      const url = `${searchAddress}${phrase}`;
      axios
        .get(url)
        .then((res) => {
          setWeapons(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axios
        .get(randomAddress)
        .then((res) => {
          setWeapons(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    setIsLoading(false);
  }, [phrase]);

  return (
    <>
      <Container>
        <Header title="Wyszukiwarka egzemplarzy broni palnej wykorzystywanej w sporcie strzeleckim" />
        <Bar getUserWord={saveUserWord} />
        {isLoading ? (
          <Loader />
        ) : (
          <>{weapons ? <Catalog weapons={weapons} /> : <Loader />}</>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Main;
