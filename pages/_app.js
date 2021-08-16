import "../styles/globals.css";
import store from "../components/store";
import { Provider } from "react-redux/";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import Loading from '../components/Loading'

function MyApp({ Component, pageProps }) {
  const [user,loading] =useAuthState(auth)




  return (
      <Provider store={store}>

      <Component {...pageProps} />
      </Provider>
    
  );
}

export default MyApp;
