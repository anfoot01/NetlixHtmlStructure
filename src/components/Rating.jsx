import React from "react";

const Rating = () => {

  for (let i = 0; i < 5; i++) {
    const star = document.createElement("div");
    star.classList.add("material-symbols-outlined");
    let text = document.createTextNode("star")
    star.appendChild(text);
    console.log(i);
  }
  const starsCount = 3;
  for (let i = 0; i < starsCount; i++) {
    const yellowStar = document.createElement("div");
    yellowStar.classList.add("material-symbols-outlined");
    yellowStar.classList.add("yellow");
    let text = document.createTextNode("star")
    yellowStar.appendChild(text);
    console.log(i);
  }
  return (
    <div className="rating">
      <span class="material-symbols-outlined">star</span>
      <span class="material-symbols-outlined">star</span>
      <span class="material-symbols-outlined">star</span>
      <span class="material-symbols-outlined">star</span>
      <span class="material-symbols-outlined">star</span>
    </div>
  );
};

export default Rating;
