const getData = () => {
  return fetch(
    "https://test-df204-default-rtdb.firebaseio.com/goods.json"
  ).then((response) => {
    return response.json();
  });
};

export default getData;
