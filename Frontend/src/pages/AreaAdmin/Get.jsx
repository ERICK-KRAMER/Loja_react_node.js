/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import style from '../../styles/tabela.module.css';
import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { useState, useEffect } from "react";
import { Button, Container } from "../../components/container";

export function Get() {
  const [dataProducts, setDataProducts] = useState([]);
  const [busca, setBusca] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState("");
  
  function handleChange(e) {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const responser = await axios.get('http://localhost:3220/products/');
        setDataProducts(responser.data);
      } catch (error) {
        console.log({ message: error });
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const filteredProducts = dataProducts.filter((item) => {
      return (
        item.model.toLowerCase().includes(searchTerm) &&
        item.name.toLowerCase().includes(selectedProduct)
      );
    });
    setBusca(filteredProducts);
  }, [dataProducts, searchTerm, selectedProduct]);
  

  const handleRemove = async(e, id) => {
    e.preventDefault();
    try {
      const removeItem = await axios.delete(`http://localhost:3220/products/delete/${id}`)
      alert(`${removeItem.data.message}, ${removeItem.data.product.model}`);
      console.log(removeItem.data.product.model)
      window.open('/get', '_self');
    } catch (error) {
      console.log({ message: error })
    }
  }
  

  return (
    <>
      <Header handleChange={handleChange} busca={searchTerm} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}/>
      <div className={style.Container}>
        {busca && busca.map(product => (
          <Container key={product._id}>
            <img className={style.img} src={product.url_image} alt={product.model}/>
            <h5>{product.brand}</h5>
            <h5>{product.model}</h5>
            <h5>{product.type}</h5>
            <h4>{`R$ ${product.value}`}</h4>
            <div>
              <Link to={`/put/${product._id}`}><Button background='#1aa14e'>Atualizar</Button></Link>
              <Button background='#c41515' onClick={(e)=>{handleRemove(e, product._id)}}>Remover</Button>
            </div>
          </Container>
      ))}
      </div>
    </>
  );
}