import { useEffect } from "react";
import { getProducts } from "./api";

function App() {
  useEffect(() => {
    getProducts()
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  }, []);

  return <div>Open console to see products from backend</div>;
}

export default App;
