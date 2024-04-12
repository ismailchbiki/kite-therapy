import React from "react";

// Import Custom Hooks
import useAxios from "../../CustomHooks/useAxios/useAxios";

// Import Components
import AboutHeader from "./Header/Header";
import AboutBody from "./Body/Body";
import Loading from "./../Loading/Index";
import Error from "./../Error/Index";

// Main About Sass File
import "./Index.scss";

// Main About Component
const About = () => {
  // Fetch data
  const {
    data: { header = {}, content = {} },
    success,
    isPending,
    error,
  } = useAxios(`${process.env.PUBLIC_URL}/apis/about.json`, []);

  return (
    <section className="about">
      {isPending && <Loading />}

      {success && (
        <div className="container">
          <AboutHeader header={header} />
          <AboutBody content={content} />
        </div>
      )}

      {error && <Error message={error.message} name="About" />}
    </section>
  );
};

export default About;
