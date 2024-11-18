import { useEffect, useRef, useState } from "react";
import canvasImages from "./Canvasimage";
//import gsap
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

function Canvas({ details }) {
  const { startIndex, numImages, duration, size, top, left, zIndex } = details;
  const [index, setIndex] = useState({ value: startIndex });
  const canvasRef = useRef(null);

  //use GSAP

  useGSAP(() => {
    gsap.to(index, {
      value: startIndex + numImages - 1,
      duration: duration,
      repeat: -1,
      ease: "linear",
      onUpdate: () => {
        /*"problem for this code" ("setIndex({value:index.value});") => jab ham value ki value ko update karte hain 
        to ya ush ki value ko 1.1,1.2,1.3 yase update hota hai ya galta hai*/

        // solution
        setIndex({ value: Math.round(index.value) });
      },
    });
  });
  useEffect(() => {
    const scale = window.devicePixelRatio;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = canvasImages[index.value];
    img.onload = () => {
      canvas.width = canvas.offsetWidth * scale;
      canvas.height = canvas.offsetHeight * scale;
      canvas.style.width = canvas.offsetWidth + "px";
      canvas.style.height = canvas.offsetHeight + "px";

      ctx.scale(scale, scale);
      ctx.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
    };
    // console.log(canvasImages);
  }, [index]);

  return (
    <canvas
    data-scroll
    data-scroll-speed={Math.random().toFixed(1)}
      ref={canvasRef}
      className="absolute"
      style={{
        width: `${size * 1.8}px`,
        height: `${size * 1.8}px`,
        top: `${top}%`,
        left: `${left}%`,
        zIndex: `{${zIndex}}`,
      }}
      id="canvas"
    ></canvas>
  );
}

export default Canvas;
