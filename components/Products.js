import Product from "./Product";
import classes from "./Products.module.css";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Link from "next/link";
import { db } from "../firebase/firebase";

const Products = (props) => {
  

  const items = JSON.parse(props.items)
  useEffect(()=>{
    Aos.init({duration:1000})
  },[])

  return (
    
    <div className={classes.section}>
      <div className={classes.container}>
        <h2 data-aos='fade-up'>LATEST PRODUCTS</h2>
        <div className={classes.products} data-aos='slide-up'>
          {items.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              photo={item.photo}
              age={item.age}

            />
          ))}
        </div>
        
        <div className={classes.all}>
            <Link href='/products'><button >View All Products</button></Link>
        </div>
      </div>
    </div>
    
    
  );
};

export default Products;




export async function getStaticProps(){

  const ref = await db.collection('items').get()

  const dataRef = ref.docs.map((item)=>({
    ...item.data(),
    id:item.id
  }))
  
  return {
    props:{
      data : JSON.stringify(dataRef)
    }
  }
}

