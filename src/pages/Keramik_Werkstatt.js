import React from "react";
import keramik1 from "../img/keramik1.png";
import keramik2 from "../img/keramik2.png";
import keramik3 from "../img/keramik3.png";
import keramik4 from "../img/keramik4.png";
import keramik5 from "../img/keramik5.png";
import keramik6 from "../img/keramik6.png";
import keramik7 from "../img/keramik7.png";
import keramik8 from "../img/keramik8.png";
import keramik9 from "../img/keramik9.png";
import keramik10 from "../img/keramik10.png";

const keramik_images = [
  {
    img: keramik1,

    artist_year: "Hans, 1933",
    work_title: "Uff!",
  },

  {
    img: keramik2,

    artist_year: "Hans, 1933",
    work_title: "Uff!",
  },

  {
    img: keramik3,

    artist_year: "Hans, 1933",
    work_title: "Uff!",
  },
  {
    img: keramik4,

    artist_year: "THEODOR BOGLER, 1923",
    work_title: "Mokka-Maschine",
  },
  {
    img: keramik5,

    artist_year: "MARGUERITE FRIEDLAENDER, 1934/1937",
    work_title: "Kaffeekannen und Teekanne",
  },
  /*   {
    img: keramik6,

    artist_year: "TRUDE PETRI, 1930",
    work_title: "Teeservice „Hallesche Form“ mit Goldringdekor, KPM",
  },
  {
    img: keramik7,

    artist_year: "TRUDE PETRI, 1930",
    work_title: "Teeservice „Hallesche Form“ mit Goldringdekor, KPM ",
  }, */
  /*   {
    img: keramik8,

    artist_year: "TRUDE PETRI, 1930",
    work_title: "Teeservice „Hallesche Form“ mit Goldringdekor, KPM ",
  },
  {
    img: keramik9,

    artist_year: "MARGUERITE FRIEDLAENDER und GERHARD MARCKS, 1930",
    work_title: "Krug mit Vogeldekor",
  },
  {
    img: keramik10,

    artist_year: "um 1935",
    work_title: "Flaschen-Vase",
  }, */
];

const Keramik_Werkstatt = () => {
  return (
    <>
      <div className="container">
        <div className="keramik_container">
          <p>
            {" "}
            Walter Gropius , Gründer und Leiter des Weimarer Bauhauses, richtete
            1920
            <span style={{ fontSize: 25 }}> die Keramikwerkstatt </span>seiner
            Kunstschule in Dornburg ein. Für den externen Standort sprachen die
            Existenz einer traditionsgebundenen Töpferwerkstatt, mit Max Krehan
            ein Töpfer, der bereit war, die handwerkliche Ausbildung zu leiten,
            und mit dem leer stehenden Marstall ein in Landesbesitz vorhandenes
            Gebäude. Gerhard Marcks wurde als Formmeister berufen. Die
            Geschichte der Bauhaus-Töpferei währte nur knapp fünf Jahre, aber in
            dieser Zeit wurde hier unter einfachsten Bedingungen eine neue
            Gefäßästhetik von europäischem Rang entwickelt. Viele der
            bedeutendsten deutschen Keramiker des 20. Jahrhunderts haben hier
            ihre Ausbildung absolviert: Theodor Bogler , Otto Lindig ,
            Marguerite Friedlaender , Werner Burri , Johannes Driesch , Franz
            Rudolf Wildenhain .
          </p>
          <br />
          <p>
            Vorläufer der Weberei war eine Frauenklasse, die 1919 geschaffen
            wurde, um die zahlreichen Frauen unterzubringen, die sich um
            Aufnahme ins Bauhaus beworben hatten. Seitens des Bauhauses war es
            nicht vorgesehen, alle Ausbildungsplätze zur Hälfte mit Frauen und
            Männern zu belegen. 1920 wurde die Frauenklasse in die Klasse für
            Textil überführt. In sie konnten auch Männer eintreten, was aber die
            Ausnahme blieb. Oskar Schlemmer spottete über die Weberei
            folgendermaßen:
          </p>
          <br />
        </div>
      </div>
      <div className="keramik_image_container">
        {keramik_images.map(image => (
          <div className="keramik_card">
            <img id="keramik_images2" src={image.img} alt={image.alt} />
            <div> {image.artist_year}</div>
            <div>{image.work_title}</div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Keramik_Werkstatt;
