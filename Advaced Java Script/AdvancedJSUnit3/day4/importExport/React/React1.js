import { Counter } from "./Components/Counter"
//import { Counter2 } from "./Components/Counter2"  //no need to write file exension using Component import.
 import styles from "./App1.module.css"
function App() {
  const count = 500;
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const data = [{title:"Top Offers",url:"https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"},{title:"Grocery",url:"https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100"},{title:"Mobiles",url:"https://www.flipkart.com/mobile-phones-store?fm=neo%2Fmerchandising&iid=M_8eeb5f81-d19b-42c9-ae69-8420ac7c91eb_1_372UD5BXDFYS_MC.ZRQ4DKH28K8J&otracker=hp_rich_navigation_3_1.navigationCard.RICH_NAVIGATION_Mobiles_ZRQ4DKH28K8J&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L0_view-all&cid=ZRQ4DKH28K8J"},{title:"Fashion",url:"https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100"},{title:"Electronics",url:"https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100"},{title:"Home Appliancess",url:"https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100"}]
  return (
    <div className="App">
      {arr.map((el) => {
        return <Counter argument={el.title} url1={el.url}/>
      })}
     
    </div>
  );
}

export default App;