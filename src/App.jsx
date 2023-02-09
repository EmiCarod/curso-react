import { Link, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/header';
import List from './components/List';
import Description from "./components/Description";
import { db } from "../db/firebase-config.js";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import red from "./components/red";
import Product from "./components/Product";
import Form from "./components/Form";


const App = function () {
  const { prendas, tablas } = products;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const productsCollectionRef = collection(db, "products");
  
  //mapeamos la documentacion, nos devuelve un objeto y seteamos el id en doc.id 
  const getProducts = async () => {
    const data = await getDocs(productsCollectionRef);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(false);
  };
  
  const getProduct = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setProducts(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  // creamos esta funcion para poder borrar el o los productos
  const deleteProduct = async (id) => {
    const docRef = doc(db, "products", id);
    await deleteDoc(docRef);
    const data = await getDocs(productsCollectionRef);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  //creamos esta funcion para poder actualizar el precio del articulo que querramos
  const updateProduct = async (id) => {
    const docRef = doc(db, "products", id);
    await updateDoc(docRef, { precio: 500 });
    const data = await getDocs(productsCollectionRef);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getProducts();
  }, []);


  return (
    <div>
      <Header />
      <main>
        <nav>
          <Link to={"/prendas"}>
            <h3>Prendas</h3>
          </Link>
          <Link to={"/tablas"}>
            <h3>Tablas</h3>
          </Link>
          <link to ="create">
            <h3>Crear</h3>
          </link>
        </nav>
        <ul>
          <Routes>
          <Route
            path="/"
            element={
              <red
                loading={loading}
                products={products}
                getProduct={getProduct}
                updateProduct={updateProduct}
                deleteProduct={deleteProduct}
              />
            }
          />
            <Route path="/products/:id" element={<Product product={products} />} />
            <Route path="/create" element={<Form setProducts={setProducts} />} />
            <Route path="/prendas" element={<List list={prendas}/>} />
            <Route path="/prendas/:name" element={<Description data={data} />} />
            <Route path="/tablas" element={<List list={tablas}/>} />
            <Route path="/tablas/:name" element={<Description data={data} />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </ul>
      </main>
    </div>
  );
};

export default App;
