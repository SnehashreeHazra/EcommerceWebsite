import React from "react";
import jamdanisuit from "../../assets/RUHANIOFFWHITE-2_1080x1080.webp";
import jamdaniSaree from "../../assets/2_0032_DSC01014.webp";
import kanthasilk from "../../assets/BanarasiKatanSilk1.webp";
import jamdaniSuit from "../../assets/PureSilkBlueBaluchariSareewithMythologicalFiguresandButiWork_5.webp";
import printSaree from "../../assets/okhai4529.webp";
import kanthasuit from "../../assets/OSBTCMS27-3-1.webp";
const CategoriesCard = () => {
  return (
    <>
      <div className="category_card">
        <img src={printSaree} />
        <h2>Jamdani Suit</h2>
      </div>

      <div className="category_card">
        <img src={jamdaniSaree} />
        <h2>Handloom Jamdani Saree</h2>
      </div>

      <div className="category_card">
        <img src={jamdaniSuit} />
        <h2>Kantha Silk Saree</h2>
      </div>

      <div className="category_card">
        <img src={kanthasilk} />

        <h2>Handloom Jamdani Suit </h2>
      </div>

      <div className="category_card">
        <img src={jamdanisuit} />

        <h2>Hand Block Print Saree </h2>
      </div>

      <div className="category_card">
        <img src={kanthasuit} />
        <h2>Kantha Suit </h2>
      </div>
    </>
  );
};

export default CategoriesCard;
