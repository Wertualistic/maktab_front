import React, { useState } from "react";
import "./direction.css";

const directions = [
  { id: 1, title: "Банк назоратчиси", className: "b-imgs" },
  { id: 2, title: "Компьютер графикаси ва дизайн оператор", className: "m-imgs" },
  { id: 3, title: "Электромонтёр", className: "r-imgs" },
  { id: 4, title: "Автомобиль электр ва электрон жиҳозларига хизмат ", className: "h-imgs" },
  { id: 5, title: "Банк назоратчиси", className: "s-imgs" },
  { id: 6, title: "Компьютер графикаси ва дизайн оператор", className: "p-imgs" },
  { id: 7, title: "Электромонтёр", className: "a-imgs" },
  { id: 8, title: "Автомобиль электр ва электрон жиҳозларига хизмат", className: "i-imgs" },
];

const Directions = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    if (current < directions.length - 4) setCurrent(current + 1);
  };

  const prevSlide = () => {
    if (current > 0) setCurrent(current - 1);
  };

  return (
      <div className="slider-wrapper">
      <h1 className="title">Йўналишлар</h1>
        <div className="butons">
            <button className="arrow left" onClick={prevSlide}></button>
            <div className="slider">
              <div
                className="slider-track"
                style={{ transform: `translateX(-${current * 270}px)` }}
              >
                {directions.map((dir) => (
                  <div key={dir.id} className={`slide ${dir.className}`}>
                    <div className="overlay">
                      <p>{dir.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="arrow right" onClick={nextSlide}></button>
        </div>
      </div>
  );
};

export default Directions;
