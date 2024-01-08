// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";
import Footer from "./Components/Footer";
import React, { useState } from "react";
import Additems from "./Components/Additems";

function App() {
  const products = [
    {
      price: 99999,
      name: "Iphone 15s Max",
      qantity: 0,
    },
    {
      price: 25999,
      name: "Samsang 15s Max",
      qantity: 0,
    },
  ]

  let [productList, setProductList] = useState(products)
  let [totalAmount, setTotalAmount] =useState(0)

  const incrementQuantity = (index) => {
    let newProductList = [...productList]
    let newTotalAmounnt=totalAmount
    newProductList[index].qantity++
    newTotalAmounnt+=newProductList[index].price
    setTotalAmount(newTotalAmounnt)
    setProductList(newProductList);
  }

  const decrementQuantity = (index) =>{
    let newProductList = [...productList]
    let newTotalAmounnt = totalAmount
    if(newProductList[index].qantity > 0){
      newTotalAmounnt-=newProductList[index].price
      newProductList[index].qantity--
    }
    setTotalAmount(newTotalAmounnt)
    setProductList(newProductList)
  }

  const resetQuantity =()=>{
    let newProductList=[...productList]
    newProductList.map((products)=>{
      products.qantity=0
    }
    )
    setProductList(newProductList)
    setTotalAmount(0)
  }

  const removeItems=(index)=>{
    let newProductList=[...productList]
    let newTotalAmounnt=totalAmount
    newTotalAmounnt-=newProductList[index].qantity*newProductList[index].price
    newProductList.splice(index,1)
    setProductList(newProductList)
    setTotalAmount(newTotalAmounnt)
  }

  const addItems=(name,price)=>{
    let newProductList=[...productList];
    let newTotalAmounnt=totalAmount
    newProductList.push({
      price: price,
      name: name,
      qantity: 0,
    })
    setProductList(newProductList);
    setTotalAmount(newTotalAmounnt)
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <Additems addItems={addItems}/>
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItems={removeItems}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
    </>
  );
}

export default App;

