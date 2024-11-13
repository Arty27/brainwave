import React from "react";
import Section from "./Section";
import Heading from "./Heading";
import { benefits } from "../constants";
import bgImage from "../assets/benefits/card-1.svg";
import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath";
import { GradientLight } from "./design/Benefits";

const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className={"md:max-w-md lg:max-w-2xl"}
          title="Chat Smarter, Not Harder!"
        />
        <div className="flex flex-wrap justify-center mb-10 gap-10">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="block relative p-1 bg-no-repeat bg-[length:100%_100%] md:max-w-[20rem]"
              style={{ backgroundImage: `url(${item.backgroundUrl})` }}
            >
              <div className="relative flex flex-col min-h-[20rem] z-2 p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold tex-n-1 tracking-wider">
                    Explore More
                  </p>
                  <Arrow />
                </div>
              </div>
              {item.light && <GradientLight />}
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: `url(#benefits)` }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
