import "./Slider.scss";
import { useEffect, useRef, useState } from "react";
function Slider() {
  const imagesRef = useRef();
  let conRef = useRef(true);
  const [conRight, SetConRight] = useState(false);
  const [conLeft, SetConLeft] = useState(true);
  const [timeOut, SetTimeOut] = useState(null);
  const [funcOut, SetFuncOut] = useState(null);
  const [scrollVal, SetScrollVal] = useState(0);
  const [images] = useState([
    {
      img: "https://tse2.mm.bing.net/th?id=OIP.rQfjNU7I1vu4rkTIVIjo4QHaHa&pid=Api&P=0&h=180",
    },
    {
      img: "https://tse3.mm.bing.net/th?id=OIP.BU8oZa8tjDtujhZ6Lg4ptgHaHa&pid=Api&P=0&h=180",
    },
    {
      img: "https://tse2.mm.bing.net/th?id=OIP.SP5-nQIZlOxP_h9Des6DDAHaHa&pid=Api&P=0&h=180",
    },
    {
      img: "https://tse2.mm.bing.net/th?id=OIP.BK6NQWcIA5Ko8FLiDo12tgHaHa&pid=Api&P=0&h=180",
    },
    {
      img: "https://tse2.mm.bing.net/th?id=OIP.rQfjNU7I1vu4rkTIVIjo4QHaHa&pid=Api&P=0&h=180",
    },
    {
      img: "https://tse3.mm.bing.net/th?id=OIP.BU8oZa8tjDtujhZ6Lg4ptgHaHa&pid=Api&P=0&h=180",
    },
    {
      img: "https://tse2.mm.bing.net/th?id=OIP.SP5-nQIZlOxP_h9Des6DDAHaHa&pid=Api&P=0&h=180",
    },
    {
      img: "https://tse2.mm.bing.net/th?id=OIP.BK6NQWcIA5Ko8FLiDo12tgHaHa&pid=Api&P=0&h=180",
    },
  ]);

  function getScrollMaxVal() {
    imagesRef.current.scrollLeft += 999999999;
    setTimeout(() => {
      let val = imagesRef.current.scrollLeft;
      SetScrollVal(val);
    }, 1000);
  }
  useEffect(() => {
    getScrollMaxVal();
  }, []);
  function funcLeft() {
    let t = 1600;
    let time = setInterval(() => {
      if (imagesRef.current.scrollLeft <= 1) {
        conRef.current = true;
        SetConLeft(false);
        SetConRight(true);
      } else {
        imagesRef.current.scrollLeft -= 160;
      }
    }, t);
    SetTimeOut(time);
    SetFuncOut({ func: funcLeft });
  }
  function funcRight() {
    let t = 1600;
    let time = setInterval(() => {
      if (imagesRef.current.scrollLeft >= scrollVal - 1) {
        conRef.current = true;
        SetConLeft(true);
        SetConRight(false);
      } else {
        imagesRef.current.scrollLeft += 160;
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
        }, 1500);
      } else {
        setTimeout(() => {
          clearInterval(timeOut);
          funcLeft();
        }, 1500);
      }
    }
  }, [conLeft, conRight]);
  return (
    <div
      className="slider"
      onMouseEnter={() => clearInterval(timeOut)}
      onMouseLeave={() => funcOut.func()}
    >
      <div ref={imagesRef} className="images">
        {images?.map((i, index) => {
          return <img key={index} src={i.img} alt="" />;
        })}
      </div>
    </div>
  );
}

export default Slider;
