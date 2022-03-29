import "./Components/Style1.css";
import Styles from "./Components/Style2.module.css"
import { Contactus } from "./Components/Contactus"
import { Download } from "./Components/Download"
import { Help } from "./Components/Help"
import { Home } from "./Components/Home"
import { Joinus } from "./Components/Joinus"
import { Login } from "./Components/Login"
import { Search } from "./Components/Search"
import { Setting } from "./Components/Setting"


function App() {
  return (
    <div className="App">
      <div className="main">
      <div className="one"><h2>CONTACT US</h2></div>
          <div className="two"><h2>SETTINGS</h2></div>
          <div className="three"><h2>LOGIN</h2></div>
          <div className="four"><h2>CONTACT US</h2></div>
          <div className="one"><h2>SEARCH</h2></div>
          <div className="two"><h2>HELP</h2></div>
          <div className="three"> <h2>HOME</h2></div>
        <div className="four"><h2>DOWNLOAD</h2></div>
       
    )
      </div>

      <div className={Styles.main}>
        <Contactus sty={Styles.one} />
        <Download sty={Styles.two} />
        <Help sty={Styles.three} />
        <Home sty={Styles.four} />
        <Joinus sty={Styles.one} />
        <Login sty={Styles.two} />
        <Search sty={Styles.three} />
        <Setting sty={Styles.four} />
        
      </div>

      <div style={{ width:"50%",margin:"auto"}}>
        <div>
        <h1>Mobile Operting System</h1>
        <ul>
          <li>Android</li>
          <li>BlackBerry</li>
          <li>iPhone</li>
          <li>Windows Phone</li>
        </ul>

        <h1>Mobile Manufacturers</h1>
        <ul>
          <li>Samsung</li>
          <li>HTC</li>
          <li>Micromax</li>
          <li>Apple</li>
        </ul>
      </div>
        </div>
       
    </div>
  );
}

export default App;
