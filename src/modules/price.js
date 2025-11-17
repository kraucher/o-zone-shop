import getData from "./getData";
import renderGoods from "./renderGoods";
import { priceFilter } from "./filters";

const price = () => {
  const minPrice = document.getElementById("min");
  const maxPrice = document.getElementById("max");

  const handlePriceFilter = () => {
    const minPriceValue = minPrice.value;
    const maxPriceValue = maxPrice.value;

    getData().then((data) => {
      renderGoods(priceFilter(data, minPriceValue, maxPriceValue));
    });
  };

  minPrice.addEventListener("input", handlePriceFilter);
  maxPrice.addEventListener("input", handlePriceFilter);
};

export default price;
