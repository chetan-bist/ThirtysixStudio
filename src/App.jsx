import Canvas from "./Canvas";
import "./index.css";
import data from "./data";

import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  });
  return (
    <>
      <div className="w-full relative min-h-screen font-['Helvetica_Now_Display']">
        {data[0].map((canvasdets, index) => (
          <Canvas details={canvasdets} />
        ))}
        <div className="w-full h-screen text-white">
          <nav className="w-full p-8 flex justify-between z-50">
            <div className="brand text-2xl font-regular">ThirtysixStudio</div>
            <div className="links flex gap-10">
              {["Home", "About", "projects", "contact"].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="text-md hover:text-gray-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>
          <div className="textcontainer w-full px-[20%]">
            <div className="text w-[50%]">
              <h3 className="text-4xl leading-[1.5">
                At Thirtysixstudio, we build immersive digital experiences for
                brands with a purpose.
              </h3>
              <p className="text-md w-[80%] mt-10 font-normal">
                We’re a boutique production studio focused on design, motion,
                and creative technology, constantly reimagining what digital
                craft can do for present-time ads and campaigns.
              </p>
              <p className="text-md mt-10">scroll</p>
            </div>
          </div>
          <div className="w-full absolute bottom-0 left-0">
            <h1 className="text-[16rem] font-normal tracking-tight leading-none">ThirtysixStudio</h1>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default App;
