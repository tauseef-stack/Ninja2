import { Amazon } from "./Components/Amazon";
import { Apple } from "./Components/Apple";
import "./Components/Card.css";


const Usefull = ({date,h1text,pay,h3text,color}) => {
  return (
    <div style={{ width: "50%", margin: "auto", height: "300px", background:`${color}`, padding: "50px" }}>
      <h2>{date}</h2>
           <button style={{color:"white",background:"black",padding:"20px"}}>Case Study</button>
      <h1>{h1text }</h1>
      <h1>{pay}</h1>
          <h3>{h3text} - Mobile</h3>
      </div>
  )
}



const Reuse = ({img,photo,h3text,ptext}) => {
  return (
    <div className="bigDiv">
      <div>
        <img src={`${img}`} alt={`${photo}`} className="image1"/>
      </div>
      <div>
      <h3>{h3text}</h3>
      <p>{`${ptext}`}</p>
       </div>
      <div>
        <button className="btn">Copy Adress</button><span><img src="https://th.bing.com/th/id/OIP.OQUmyWhXYjOS7w7IcFOamQHaHa?pid=ImgDet&rs=1" alt="" className="image"/></span>
      </div>
      <div>
        <button className="btn">QR Code</button> <span><img src="https://th.bing.com/th/id/R.dcf4b6e228aef80dd1a58f4c76f07128?rik=Qj2LybacmBALtA&riu=http%3a%2f%2fpngimg.com%2fuploads%2fqr_code%2fqr_code_PNG25.png&ehk=eKH2pdoegouCUxO1rt6BJXt4avVYywmyOS8biIPp5zc%3d&risl=&pid=ImgRaw" alt="" className="image"/></span>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Amazon />
      <Apple />
      <Usefull date={"26/03/1994"} h1text={"Amazon Gift"} pay={"Pay"} h3text={"Deakstop"} color={"yellow"} />
      <Usefull date={"26 sep 1994"} h1text={"Apple Gift"} pay={"Pay"} h3text={"MackOS"} color={"lightgrey"} />
      <hr />
      <Reuse img={"https://pngimg.com/uploads/bitcoin/bitcoin_PNG48.png"} photo={"photo"} h3text={"BitCoin($btc)"} ptext={"sedrftghyujikollll123dde45"} />
    
      <Reuse img={"https://clipground.com/images/ripple-logo-png-5.png"} photo={"photo"} h3text={"Ripple($btc)"} ptext={"sedrftghyujiko5555123dde45"} />
      <Reuse img={"https://logos-download.com/wp-content/uploads/2018/04/DogeCoin_logo_cercle.png"} photo={"photo"} h3text={"DogCoin($Srtc)"} ptext={"sedrftghyuj7777858dde45"}/>
    </div>
  );
}

export default App;
