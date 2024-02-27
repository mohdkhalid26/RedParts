import React, { useEffect, useState } from "react";
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import "./Admin.scss";
import { db, storage } from "../../../Firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
function Admin() {
  let date = new Date();
  let uniqueId = String(date.getTime());
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();
  today = dd + "/" + mm + "/" + yyyy;
  const [productsA, setProductsA] = useState([]);
  const [productsB, setProductsB] = useState([]);
  const [productsC, setProductsC] = useState([]);
  const [allProducts, setAllProducts] = useState([
    ...productsA,
    ...productsB,
    ...productsC,
  ]);
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);
  const [img3, setImg3] = useState(null);
  const [img4, setImg4] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    rate: "",
    currency: "",
    category: "",
    description: "",
    id: uniqueId,
  });
  useEffect(() => {
    const funcProductsA = onSnapshot(
      collection(db, "a"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ docId: doc.id, ...doc.data() });
        });
        let sortListAscending = list.sort((a, b) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        );
        setProductsA(sortListAscending);
        console.log(sortListAscending);
      },
      (err) => {
        console.log(err);
      }
    );
    const funcProductsB = onSnapshot(
      collection(db, "b"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ docId: doc.id, ...doc.data() });
        });
        let sortListAscending = list.sort((a, b) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        );
        setProductsB(sortListAscending);
        console.log(sortListAscending);
      },
      (err) => {
        console.log(err);
      }
    );
    const funcProductsC = onSnapshot(
      collection(db, "c"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ docId: doc.id, ...doc.data() });
        });
        let sortListAscending = list.sort((a, b) =>
          a.name.toLowerCase().localeCompare(b.name.toLowerCase())
        );
        setProductsC(sortListAscending);
        console.log(sortListAscending);
      },
      (err) => {
        console.log(err);
      }
    );
    return () => {
      funcProductsA();
      funcProductsB();
      funcProductsC();
    };
  }, []);
  useEffect(() => {
    let sortAllListAscending = [...productsA, ...productsB, ...productsC].sort(
      (a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    );
    setAllProducts([...sortAllListAscending]);
  }, [productsA, productsB, productsC]);
  useEffect(() => {
    console.log(allProducts);
  }, [allProducts]);
  function writeData(e) {
    let name = e.target.name;
    let value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  async function formSubmit(e) {
    e.preventDefault();
    if (formData.docId) {
      try {
        await updateDoc(doc(db, formData.category, formData.docId), {
          ...formData,
          date: today,
        });
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        await addDoc(collection(db, formData.category), {
          ...formData,
          date: today,
        });
      } catch (err) {
        console.log(err);
      }
    }
    setFormData({
      name: "",
      rate: "",
      currency: "",
      category: "",
      description: "",
      id: uniqueId,
    });
    window.location.reload();
  }
  const uploadImg = (img, n) => {
    let newDate = new Date();
    let newUniqueId = String(newDate.getTime());
    let idName = newUniqueId + "_" + img.name;
    let storageRef = ref(storage, idName);
    let uploadTask = uploadBytesResumable(storageRef, img);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
        switch (snapshot.state) {
          case "paused":
            console.log("upload paused");
            break;
          case "running":
            console.log("upload running");
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadUrl) => {
            setFormData({ ...formData, [n]: {url:downloadUrl , n:idName} });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    );
  };
  useEffect(() => {
    img1 && uploadImg(img1, "img1");
  }, [img1]);
  useEffect(() => {
    img2 && uploadImg(img2, "img2");
  }, [img2]);
  useEffect(() => {
    img3 && uploadImg(img3, "img3");
  }, [img3]);
  useEffect(() => {
    img4 && uploadImg(img4, "img4");
  }, [img4]);
  async function getEditData(docId, category) {
    let docRef = doc(db, category, docId);
    let snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setFormData({ ...snapshot.data(), docId: docId });
    }
  }
  function deleteImages(array) {
for (let index = 0; index < array.length; index++) {
  if (array[index] != undefined) {
    const desertRef = ref(storage, array[index]);
    deleteObject(desertRef).then((res) => {
      console.log(res + "delete");
    }).catch((error) => {
      console.log(error);
    });
  }
  
}
    
  }
  async function deleteData(docId,category,...n) {
    if (window.confirm("Confirm ?")) {
      try {
        await deleteDoc(doc(db,category,docId));
        deleteImages(n)
        setAllProducts(allProducts.filter((p,i)=> p.docId !== docId))
      } catch (error) {
        console.log(error);
      }
    }
  }
  return (
    <div className="admin">
      <form onSubmit={formSubmit}>
        <input
          required
          onChange={(e) => setImg1(e.target.files[0])}
          placeholder="file 1"
          type="file"
          name="file1"
        />
        <input
          required
          onChange={(e) => setImg2(e.target.files[0])}
          placeholder="file 2"
          type="file"
          name="file2"
        />
        <input
          onChange={(e) => setImg3(e.target.files[0])}
          placeholder="file 3"
          type="file"
          name="file3"
        />
        <input
          onChange={(e) => setImg4(e.target.files[0])}
          placeholder="file 4"
          type="file"
          name="file4"
        />
        <input
          required
          onChange={writeData}
          placeholder="Name"
          value={formData.name}
          type="text"
          name="name"
        />
        <input
          required
          onChange={writeData}
          placeholder="Rate"
          value={formData.rate}
          type="text"
          name="rate"
        />
        <input
          required
          onChange={writeData}
          placeholder="Currency"
          value={formData.currency}
          type="text"
          name="currency"
        />
        <input
          required
          onChange={writeData}
          placeholder="Category"
          value={formData.category}
          type="text"
          name="category"
        />
        <input
          required
          onChange={writeData}
          placeholder="Description"
          value={formData.description}
          type="text"
          name="description"
        />
        <button type="submit">SUBMIT</button>
      </form>
      <div className="products-div">
        {allProducts &&
          allProducts.map((d, i) => {
            return (
              <div
                style={{ display: "flex", flexDirection: "column" }}
                className="product"
                key={d.id}
              >
                <h1>{d.name}</h1>
                {d.img1 ? <img src={d.img1.url} alt="img1" width={250} /> : ""}
                { d.img2 ? 
                <img src={d.img2.url} alt="img2" width={250} /> : ""
              }
              { d.img3 ? 
                <img src={d.img3.url} alt="img3" width={250} /> : ""
              }
              { d.img4 ? 
                <img src={d.img4.url} alt="img4" width={250} /> : ""
              }
                <button onClick={() => getEditData(d.docId, d.category)}>
                  Edit
                </button>
                <button onClick={() => deleteData(d.docId, d.category,d.img1.n,d.img2.n,d.img3?.n,d.img4?.n,)}>Delete</button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Admin;
