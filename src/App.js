import { Link, Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './components/header';
import List from './components/List';
import data from './components/data.json';
import Description from "./components/Description";


const App = function () {
  const { prendas, tablas } = data;
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
        </nav>
        <ul>
          <Routes>
            <Route path="/" element={<p>Bienvenido a mi sitio web</p>} />
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
