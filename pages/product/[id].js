import router from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import Nav from "../../components/Nav";
import { cartActions } from "../../components/store/cartSlice";
import { auth, db } from "../../firebase/firebase";
import classes from "./ProductPage.module.css";
const ProductPage = (props) => {
  const data = JSON.parse(props.data);
  const [user] = useAuthState(auth)
  
  const dispatch = useDispatch();
  
  const addItemHandler = (e) => {
    e.preventDefault()

    if(!user){
      alert('sign in to buy this item')
      router.push('/signup')
      return;
    }
    dispatch(
      cartActions.addItem({
        title: data.title,
        photo: data.photo,
        age: "18-22",
        quantity: 1,
        price: data.price,
        id: data.id,
      })
    );
  };

  
  return (
    <div>
      <Nav scroll={false} />
      <div className={classes.product}>
        <div className={classes.container}>
          <div className={classes.box}>
            <img src={data.photo} />
          </div>
          <div className={classes.info}>
            <span>Gifts</span>
            <h2>{data.title}</h2>
            <p>{data.desc}</p>
            <form onSubmit={addItemHandler}>
              <span>Color</span>
              <div>
                <input type="checkbox"></input>
                <input type="checkbox"></input>
                <input type="checkbox"></input>
              </div>
              <div>
                <span>${data.price}</span>
                <button >Add to cart</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

export async function getStaticPaths() {
  const ref = await db.collection("items").get();

  return {
    fallback: false,
    paths: ref.docs.map((item) => ({
      params: { id: item.id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const ref = db.collection("items").doc(context.params.id);

  const dataRef = await ref.get();

  return {
    props: {
      data: JSON.stringify({
        ...dataRef.data(),
        id:context.params.id
      }),
    },
  };
}
