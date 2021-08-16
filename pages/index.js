import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import Gifts from '../components/Gifts';
import Hero from '../components/Hero'
import Products from '../components/Products'
import Reviews from '../components/Reviews';
import Saving from '../components/Saving';
import Why from '../components/Why';
import { db } from '../firebase/firebase';


export default function Home(props) {

  return (
    <div style={{overflow:'hidden'}}>

      <Hero />
      <Products items={props.data} />
      <Saving />
      <Why />
      <Gifts />
      <ContactUs />
      <Reviews />
      <Footer />

      
    </div>
  );
}

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
