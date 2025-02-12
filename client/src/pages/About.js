import React from "react";
import "../style.css";
import { Link } from "react-router-dom";
import Image from "../assets/images/scoops4.jpg";

const styles = {
  container: {
    backgroundColor: "#FFD6E8",
    borderRadius: 2,
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    textAlign: "center",
    // backgroundSize: "30%",
    alignItems: "center",
  },
  cardContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.50)",
    border: "none",
  },
  img: {
    height: "35rem",
    width: "35rem",
  },
  quote: {
    color: "#FF007F",
    fontFamily: "Syncopate",
    fontDisplay: "sans-serif",
    textAlign: "center",
  },
  span: {
    color: "#FF007F",
  },
  btn: {
    textDecoration: "none",
    color: "#FF007F",
  },
  flavorites: {
    marginTop: 45,
    color: "#FF007F",
    fontFamily: "Syncopate",
    fontDisplay: "sans-serif",
    textAlign: "center",
  },
};
export default function About() {
  return (
    <div className="p-5">
      <h3 style={styles.flavorites}></h3>

      <div className="row p-5 justify-content-around" style={styles.container}>
        <div style={styles.cardContainer}>
          <br></br>
          <h3 style={styles.flavorites}>
            Make life even sweeter here at ice cup store{" "}
          </h3>
          <br></br>
          <h3 style={styles.quote}>
            SUBSCRIBE and cool off with a sweet treat delivered right to your
            door{" "}
          </h3>
          <h3 style={styles.quote}>
            Regardless of the weather,
            <h3>
              {" "}
              ice cream is the perfect treat for any occassion.
              <h3>
                you can try new flavors at ice cup store without the hassle
                <br></br>
                <h3>
                  Share with your family or eat it yourself
                  <h3 style={styles.flavorites}>(we dont judge!)</h3>
                </h3>
                <br></br>
              </h3>
            </h3>
          </h3>
        </div>
      </div>
    </div>
  );
}
