import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <>
      <div className="carousel w-full">
      <div id="item1" className="carousel-item w-full">
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={
                  "https://www.startech.com.bd/image/cache/catalog/desktop-pc/desktop-offer/ryzen-7-5800x-gaming-desktop-pc-0001-500x500.webp"
                }
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">build your own pc</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                
              </div>
            </div>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full">
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={
                  "https://www.startech.com.bd/image/cache/catalog/desktop-pc/desktop-offer/ryzen-7-5800x-gaming-desktop-pc-0001-500x500.webp"
                }
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">build your own pc</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                
              </div>
            </div>
          </div>
        </div>
        <div id="item3" className="carousel-item w-full">
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={
                  "https://www.startech.com.bd/image/cache/catalog/desktop-pc/desktop-offer/ryzen-7-5800x-gaming-desktop-pc-0001-500x500.webp"
                }
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">build your own pc</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                
              </div>
            </div>
          </div>
        </div>
        <div id="item4" className="carousel-item w-full">
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={
                  "https://www.startech.com.bd/image/cache/catalog/desktop-pc/desktop-offer/ryzen-7-5800x-gaming-desktop-pc-0001-500x500.webp"
                }
                className="max-w-sm rounded-lg shadow-2xl"
              />
              <div>
                <h1 className="text-5xl font-bold">build your own pc</h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </>
  );
};

export default Banner;
