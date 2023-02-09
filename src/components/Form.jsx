import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../../db/firebase-config.js";

const Form = ({ setProducts }) => {
    const [inputTitle, setInputTitle] = useState("");
    const [inputPrecio, setInputPrecio] = useState("");
    const [inputImage, setInputImage] = useState("");

    const createProduct = async (e) => {
    e.preventDefault();
    const product = {
        title: inputTitle,
        price: inputPrecio,
        image: inputImage,
    };
    const productsCollectionRef = collection(db, "products");
    await addDoc(productsCollectionRef, product).then(({ id }) => {
        console.log("Documento agregado con ID: ", id);
    });
    const data = await getDocs(productsCollectionRef);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setInputTitle("");
    setInputPrecio("");
    setInputCategory("");
    setInputDescription("");
    setInputImage("");
    };

    return (
    <form onSubmit={createProduct}>
    <input
        type="text"
        placeholder="titulo"
        onChange={(e) => setInputTitle(e.target.value)}
        value={inputTitle}
    />
    <input
        type="number"
        placeholder="Precio"
        onChange={(e) => setInputPrecio(e.target.value)}
        value={inputPrecio}
    />
    <input
        type="text"
        placeholder="Image"
        onChange={(e) => setInputImage(e.target.value)}
        value={inputImage}
        />
        <button type="submit">Crear producto</button>
    </form>
    );
};

export default Form;