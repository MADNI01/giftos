import classes from "./Products.module.css";
import Nav from "../components/Nav";
import { db } from "../firebase/firebase";
import Product from "../components/Product";
import { useState } from "react";
import { Slider } from "@material-ui/core";
import Footer from "../components/Footer";
const Products = (props) => {
  const items = JSON.parse(props.data);
  const [filteringItems, setFilteringItems] = useState(items);
  const [ageValue, setAgeValue] = useState("");
  const [priceValue, setPriceValue] = useState([0, 100]);

  const [dataItems, setDataItems] = useState(items);

  const ageHandler = (e) => {
    const value = e.target.value;
    setAgeValue(value);
    if (e.target.value == "all") {
      setFilteringItems(items);
      setDataItems(items);
    } else {
      const newItems = items.filter((item) => item.age == value);
      setFilteringItems(newItems);
      setDataItems(newItems);
    }
  };

  const priceHandler = (e, data) => {
    setPriceValue(data);

    const newItems = filteringItems.filter((item) => {
      return item.price >= data[0] && item.price <= data[1];
    });
    setDataItems(newItems);
  };

  return (
    <div style={{overflow:'hidden'}}>
      <Nav />
      <div className={classes.products}>
        <div className={classes.container}>
          <div className={classes.filtering}>
            <div className={classes.age}>
              <select onChange={ageHandler} value={ageValue}>
                <option value="all">All</option>
                <option value="8-16">8-16</option>
                <option value="16-22">16-22</option>
                <option value="22-30">22-30</option>
              </select>
            </div>
            <div className={classes.price}>
              <Slider value={priceValue} onChange={priceHandler} />
              <div>
                <span>0</span>
                <span>25</span>
                <span>50</span>
                <span>75</span>
                <span>100</span>
              </div>
            </div>
          </div>
          <div className={classes.main}>
            <h2>Our Products</h2>
            <div className={classes["products-section"]}>
              {dataItems.map((item) => (
                <Product
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  photo={item.photo}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;

export async function getStaticProps(context) {
  const ref = await db.collection("items").get();

  const dataRef = ref.docs.map((item) => ({
    ...item.data(),
    id: item.id,
  }));

  return {
    props: {
      data: JSON.stringify(dataRef),
    },
  };
}
