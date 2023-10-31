import axios from 'axios'
import { useState, useEffect } from "react"
import '../styles/tabela.css'
import { Link } from 'react-router-dom'

export function Get() {
    const [dataProducts, setDataProducts] = useState([]);
    const [id, setId] = useState([])
    
    useEffect(() => {
        async function fetchData() {
            try {
                const responser = await axios.get('http://localhost:3220/products/')
                setDataProducts(responser.data)
                console.log(responser.data)
            } catch (error) {
                console.log({ message: error })
            }
        }
        fetchData();
    }, [])


    const handleClick = async (productId) => {
      try {
        const deleteItem = await axios.delete(`http://localhost:3220/delete/product/${productId}`);
        alert('O item foi removido da Lista do banco de dados');
        console.log(deleteItem);
        setId(null);
      } catch (error) {
        console.log({ message: error });
      }
    };
    
    return (
        <table>
          <thead>
            <tr>
              <th className='vertical'>Teclado</th>
              <th className='vertical'>Marca</th>
              <th className='vertical'>Modelo</th>
              <th className='vertical'>Tipo</th>
              <th className='vertical'>Descrição</th>
              <th className='vertical'>Valor</th>
              <th className='vertical'>Estoque</th>
            </tr>
          </thead>
          <tbody>
            {dataProducts.map((product) => (
                <tr key={product._id}>
                <Link to={`/put/${product._id}`}>
                    <td><img src={product.url_image} alt={product.name}/></td>
                </Link>
                <td>{product.brand}</td>
                <td>{product.model}</td>
                <td>{product.type}</td>
                <td>{product.description}</td>
                <td>{product.value}</td>
                <td>{product.stock}</td>
                <button onClick={() => handleClick(product._id)}>Remover</button>
                </tr>
            ))}
          </tbody>
        </table>
      );      

}