import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  "apparel",
  "glassware",
  "custom",
  "stickers",
  "coasters",
  "decor",
  "keychains",
  "bookmarks",
  "clothing"
];

const ProductCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <style>{`
        .slick-dots li button:before {
          color: var(--dusty-mauve);
          font-size: 10px;
        }
        .slick-dots li.slick-active button:before {
          color: var(--dusty-coral);
        }
      `}</style>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product} className="px-2">
<div className="bg-[var(--dusty-coral)] rounded-lg shadow-lg p-6 text-center">
    <h3 className="text-xl font-semibold text-white pacifico">{product}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;