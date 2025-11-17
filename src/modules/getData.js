const getData = (str) => {
  return fetch(
    `https://test-df204-default-rtdb.firebaseio.com/goods.json?${
      str ? `search=${str}` : ""
    }`
  ).then((response) => {
    return response.json();
  });
};

export default getData;
