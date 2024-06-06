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
    
    Setcart([...arr]);
    if(arr[ind].amount === 11){
      arr[ind].amount = 10;
    }
    if(arr[ind].amount === 0){
      // console.log(item.id);
      removeItem(item.id);
    }
  }

  const removeItem = (id) => {
    // console.log(cart);
    let arr1 = cart.filter((item) => {
        if(item.id != id){
            return item;
        }
    })
    // console.log(arr1);
    Setcart(arr1);
  }

  return (
    <>
      <Nav />
      <Card AddToCart={AddToCart}/>
      <Cart cart={cart} Setcart={Setcart} key={cart.id} handleAmmount={handleAmmount} removeItem={removeItem}/>
    </>
  );
}

export default App
