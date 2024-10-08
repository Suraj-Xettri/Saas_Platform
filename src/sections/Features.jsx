import React from "react";
import { Element } from "react-scroll";
import { features } from "../constants";
const Features = () => {
  return (
    <sectio>
      <Element name="features">
        <div className="container">
          <div className="relative flex ">
            {features.map((feature) => (
              <div key={feature.id}>{feature.title}</div>
            ))}
          </div>
        </div>
      </Element>
    </sectio>
  );
};

export default Features;
