import { HashLoader } from "react-spinners";
const Loading = (props) => {
    
  return (
    <div style={{display:'grid', placeItems:'center',minHeight:'100vh'}}>
      <HashLoader size={60} color='#f89cab' />
    </div>
  );
};

export default Loading;
