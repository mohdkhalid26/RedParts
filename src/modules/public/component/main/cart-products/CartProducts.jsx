import React, { useEffect, useState } from 'react'
import "./CartProducts.scss"
function CartProducts() {
    const [products, SetProducts] = useState(null);
    function getProducts() {
        SetProducts([
            {
              currency:"INR",
                rate:499,
              category: "one",
              name: "abcdef ghijkl",
              img: "https://tse2.mm.bing.net/th?id=OIP.rQfjNU7I1vu4rkTIVIjo4QHaHa&pid=Api&P=0&h=180",
            },
            {
              currency:"INR",
                rate:499,
              category: "one",
              name: "bcdefa hijklg",
              img: "https://tse3.mm.bing.net/th?id=OIP.BU8oZa8tjDtujhZ6Lg4ptgHaHa&pid=Api&P=0&h=180",
            },
            {
              currency:"INR",
                rate:499,
              category: "two",
              name: "cdefab ijklgh",
              img: "https://tse2.mm.bing.net/th?id=OIP.SP5-nQIZlOxP_h9Des6DDAHaHa&pid=Api&P=0&h=180",
            },
            {
              currency:"INR",
                rate:499,
              category: "two",
              name: "defabc jklghi",
              img: "https://tse2.mm.bing.net/th?id=OIP.BK6NQWcIA5Ko8FLiDo12tgHaHa&pid=Api&P=0&h=180",
            },
            {
              currency:"INR",
                rate:499,
              category: "three",
              name: "bcdefa ghijkl",
              img: "https://tse2.mm.bing.net/th?id=OIP.rQfjNU7I1vu4rkTIVIjo4QHaHa&pid=Api&P=0&h=180",
            },
            {
              currency:"INR",
                rate:499,
              category: "three",
              name: "cdefab hijklg",
              img: "https://tse3.mm.bing.net/th?id=OIP.BU8oZa8tjDtujhZ6Lg4ptgHaHa&pid=Api&P=0&h=180",
            },
            {
              currency:"INR",
                rate:499,
              category: "four",
              name: "abcdef ijklgh",
              img: "https://tse2.mm.bing.net/th?id=OIP.rQfjNU7I1vu4rkTIVIjo4QHaHa&pid=Api&P=0&h=180",
            },
            {
              currency:"INR",
                rate:499,
              category: "four",
              name: "defabc jklghi",
              img: "https://tse3.mm.bing.net/th?id=OIP.BU8oZa8tjDtujhZ6Lg4ptgHaHa&pid=Api&P=0&h=180",
            },
          ])
    }
    useEffect(() => {
        getProducts()
    }, []);
  return (
    <>{
        products ?
    <div className='cart-products-div'>
        
                <h3 className="cart-products-h3">CART</h3>
                <div className="cart-products-grid">
                    {
                        products?.map((d,i)=>{
                            return(
<div key={i} className="cart-product">
    <div className="img-div">
    <img className='cart-product-img' src={d.img} alt="" />
    </div>
    <div className="details-div">
        <span className="cart-product-name">{d.name}</span>
        <span className="cart-product-rate">{"("+d.rate+" "+d.currency+")"}</span>
    </div>
</div>
                            )
                        })
                    }
                </div>
                
             
    </div>
       :
       ""
   }
            </>
  )
}

export default CartProducts