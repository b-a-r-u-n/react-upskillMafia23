import { useState } from 'react'
import Nav from './Nav-bar';
import Card from './Card';
import Cart from './Cart'

function App() {
  let [cart , Setcart] = useState([])
  // let [warning , Setwarning] = useState(false);

  const AddToCart= (item) => {
    // console.log(item);
    let isPresent = false;
    cart.forEach((present) => {
      if(item.id === present.id){
        isPresent = true;
      }
    })
    if(isPresent == true)
      return;
    Setcart([...cart , item]);
  }

  let handleAmmount = (item , d) => {
    let ind;
    cart.forEach((data , index) => {
      if(data.id === item.id){
        ind = index;
      }
    })
    let arr = cart;
    arr[ind].amount += d;
    if(arr[ind].amount === 0)
      arr[ind].amount = 1;
    if(arr[ind].amount === 11){
      console.log("Click me");
      arr[ind].amount = 10;
    }
    Setcart([...arr])
  }

  return (
    <>
      <Nav />
      <Card AddToCart={AddToCart}/>
      <Cart cart={cart} Setcart={Setcart} key={cart.id} handleAmmount={handleAmmount}/>
    </>
  );
}

export default App
