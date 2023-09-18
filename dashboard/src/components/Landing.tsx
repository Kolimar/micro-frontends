import React from "react";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing_client">
      <div className="landing-page">
        <header className="header">
          <h1>Bienvenido a nuestra Landing Page</h1>
        </header>
        <section className="block">
          <h2>Bloque 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            tristique velit sit amet quam euismod, a venenatis turpis finibus.
          </p>
        </section>
        <section className="block">
          <h2>Bloque 2</h2>
          <p>
            Proin eget varius sem. Vestibulum facilisis erat sed lacus commodo,
            sit amet varius risus dapibus.
          </p>
        </section>
        <section className="block">
          <h2>Bloque 3</h2>
          <p>
            Etiam sit amet ipsum nunc. Integer bibendum ex ut purus cursus, ac
            laoreet risus ultrices.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Landing;
