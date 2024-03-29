import React, { useEffect, useRef, useState } from "react";
import "./ProductSlider.scss";

function ProductSlider() {
  const imagesRef = useRef();
  let conRef = useRef(true);
  const [conRight, setConRight] = useState(true);
  const [conLeft, setConLeft] = useState(false);
  const [timeOut, setTimeOut] = useState(null);
  const [funcOut, setFuncOut] = useState(null);
  const [scrollVal, setScrollVal] = useState(0);
  const [products, setProducts] = useState([
    {
      currency: "INR",
      rate: 499,
      category: "one",
      name: "abcdef ghijkl",
      img: "https://tse2.mm.bing.net/th?id=OIP.rQfjNU7I1vu4rkTIVIjo4QHaHa&pid=Api&P=0&h=180",
    },
    {
      currency: "INR",
      rate: 499,
      category: "one",
      name: "bcdefa hijklg",
      img: "https://tse3.mm.bing.net/th?id=OIP.BU8oZa8tjDtujhZ6Lg4ptgHaHa&pid=Api&P=0&h=180",
    },
    {
      currency: "INR",
      rate: 499,
      category: "two",
      name: "cdefab ijklgh",
      img: "https://tse2.mm.bing.net/th?id=OIP.SP5-nQIZlOxP_h9Des6DDAHaHa&pid=Api&P=0&h=180",
    },
    {
      currency: "INR",
      rate: 499,
      category: "two",
      name: "defabc jklghi",
      img: "https://tse2.mm.bing.net/th?id=OIP.BK6NQWcIA5Ko8FLiDo12tgHaHa&pid=Api&P=0&h=180",
    },
    {
      currency: "INR",
      rate: 499,
      category: "three",
      name: "bcdefa ghijkl",
      img: "https://tse2.mm.bing.net/th?id=OIP.rQfjNU7I1vu4rkTIVIjo4QHaHa&pid=Api&P=0&h=180",
    },
    {
      currency: "INR",
      rate: 499,
      category: "three",
      name: "cdefab hijklg",
      img: "https://tse3.mm.bing.net/th?id=OIP.BU8oZa8tjDtujhZ6Lg4ptgHaHa&pid=Api&P=0&h=180",
    },
    {
      currency: "INR",
      rate: 499,
      category: "four",
      name: "abcdef ijklgh",
      img: "https://tse2.mm.bing.net/th?id=OIP.rQfjNU7I1vu4rkTIVIjo4QHaHa&pid=Api&P=0&h=180",
    },
    {
      currency: "INR",
      rate: 499,
      category: "four",
      name: "defabc jklghi",
      img: "https://tse3.mm.bing.net/th?id=OIP.BU8oZa8tjDtujhZ6Lg4ptgHaHa&pid=Api&P=0&h=180",
    },
  ]);
  function getScrollMaxVal() {
    let wid = imagesRef.current.clientWidth - imagesRef.current.scrollWidth;
    let posWid = wid * -1;
    setScrollVal(posWid);
  }
  useEffect(() => {
    getScrollMaxVal();
  }, []);
  function funcLeft(p) {
    
    let t = 2500;
    let time = setInterval(() => {
      if (imagesRef.current.scrollLeft <= 1) {
        conRef.current = true;
        setConLeft(false);
        setConRight(true);
      } else {
        imagesRef.current.scrollLeft -= 250;
      }
    }, t);
      setFuncOut({ func: funcLeft });
      setTimeOut(time);
    
  }
  function funcRight(p) {
  
    let t = 2500;
    let time = setInterval(() => {
      if (imagesRef.current.scrollLeft >= scrollVal - 1) {
        conRef.current = true;
        setConLeft(true);
        setConRight(false);
      } else {
        imagesRef.current.scrollLeft += 250;
      }
    }, t);

   
      setFuncOut({ func: funcRight });
      setTimeOut(time);
   
  }
  useEffect(() => {
    if (conRef.current) {
      conRef.current = false;
      if (conRight) {
        setTimeout(() => {
          clearInterval(timeOut);
          funcRight();
        }, 25);
      } else {
        setTimeout(() => {
          clearInterval(timeOut);
          funcLeft();
        }, 25);
      }
    }
  }, [conLeft, conRight]);


  return (
    <div
    onTouchEnd={() => (funcOut !== null ? funcOut.func() : "")}
    onTouchStart={() => (timeOut !== null ? clearInterval(timeOut) : "")}
      onMouseOver={() => (timeOut !== null ? clearInterval(timeOut) : "")}
      onMouseEnter={() => (timeOut !== null ? clearInterval(timeOut) : "")}
      onMouseLeave={() => (funcOut !== null ? funcOut.func() : "")}
      ref={imagesRef}
      className="selected-categories-products"
    >
      {products?.map((d, i) => {
        return (
          <div key={i} className="product">
            <img className="product-img" src={d.img} alt="img" />
            <div className="product-details-div">
              <span className="product-name-span">{d.name}</span>
              <span className="product-rate-span">
                {"(" + d.rate + " " + d.currency + ")"}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductSlider;