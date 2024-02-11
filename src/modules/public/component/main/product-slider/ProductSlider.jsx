import React,{ useEffect, useRef, useState } from "react";
import "./ProductSlider.scss"

function ProductSlider() {
    
  const imagesRef = useRef();
  let conRef = useRef(true);
  const [conRight, SetConRight] = useState(true);
  const [conLeft, SetConLeft] = useState(false);
  const [timeOut, SetTimeOut] = useState(null);
  const [funcOut, SetFuncOut] = useState(null);
  const [scrollVal, SetScrollVal] = useState(0);
  const [products, SetProducts] = useState([
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
  ]);
  function getScrollMaxVal() {
    let wid = imagesRef.current.clientWidth - imagesRef.current.scrollWidth;
    let posWid = wid * -1;
    SetScrollVal(posWid);
    }
  useEffect(() => {
    getScrollMaxVal();
  }, []);
  function funcLeft() {

  
    let t = 40;
    let time = setInterval(() => {
      if (imagesRef.current.scrollLeft <= 1) {
        conRef.current = true;
        SetConLeft(false);
        SetConRight(true);
      } else {
        imagesRef.current.scrollLeft -= 0.75;
      }
    }, t);
    SetTimeOut(time);
    SetFuncOut({ func: funcLeft });
  }
  function funcRight() {
    
    let t = 40;
    let time = setInterval(() => {
      if (imagesRef.current.scrollLeft >= scrollVal - 1) {
        conRef.current = true;
        SetConLeft(true);
        SetConRight(false);
      } else {
        imagesRef.current.scrollLeft += 1;
      }
    }, t);
    SetTimeOut(time);
    SetFuncOut({ func: funcRight });
  }
  useEffect(() => {
    if (conRef.current) {
      conRef.current = false;
      if (conRight) {
        setTimeout(() => {
          clearInterval(timeOut);
          funcRight();
        }, 500);
      } else {
        setTimeout(() => {
          clearInterval(timeOut);
          funcLeft();
        }, 500);
      }
    }
  }, [conLeft, conRight]);
  function touchScroll(params) {
    if (timeOut !== null) {
      clearInterval(timeOut)
    setTimeout(() => {
      if (funcOut !== null){
      clearInterval(timeOut)
      funcOut.func()
      clearInterval(timeOut)
      }
    }, 2500);
    }
  }

  return (
      <div
      onTouchStart={() => touchScroll()}
      onMouseOver={() => timeOut !== null ? clearInterval(timeOut):""}
      onMouseEnter={() => timeOut !== null ? clearInterval(timeOut):""}
      onMouseLeave={() => funcOut !== null ? funcOut.func():""}
      ref={imagesRef}
      className="selected-categories-products">
        {
            products?.map((d,i)=>{
                return(
<div key={i} className="product">
<img className="product-img" src={d.img} alt="img"/>
<div className="product-details-div">

<span className="product-name-span">{d.name}</span>
<span className="product-rate-span">{"("+d.rate+" "+d.currency+")"}</span>
</div>
</div>
                )
            })
        }
      </div>
  );
}

export default ProductSlider;
