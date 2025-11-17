export const searchFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.title.toLowerCase().includes(value.toLowerCase());
  });
};

export const categoryFilter = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.category === value;
  });
};

export const priceFilter = (goods, min, max) => {
  return goods.filter((goodsItem) => {
    const minPrice = min || 0;
    const maxPrice = max || Infinity;
    return goodsItem.price >= minPrice && goodsItem.price <= maxPrice;
  });
};
