/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from '../../styles/put.module.css'
import { Button } from '../../components/container'
import { InputStyled } from "../../components/Header";

export function Put() {
    const { id } = useParams();
    const [prodData, setProdData] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        brand: "",
        model: "",
        type: "",
        url_image: "",
        description: "",
        value: "",
        stock: ""
    });
    
    useEffect(()=>{
      const dataValue = async() => {
        try {
            const response = await axios.get('http://localhost:3220/products/');
            filterData(response.data);
          } catch (error) {
            console.log({ message: error })
          }
      }
      dataValue();
    }, []);

    const filterData = (data) => {
      data.filter((item) => {
        if(item._id === id){
          setProdData(item)
        }
      })
    }

    useEffect(() => {
      setFormData({
        name: prodData.name || "",
        brand: prodData.brand || "",
        model: prodData.model || "",
        type: prodData.type || "",
        url_image: prodData.url_image || "",
        description: prodData.description || "",
        value: prodData.value || 0,
        stock: prodData.stock || 0,
      });
    }, [prodData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch(`http://localhost:3220/products/update/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          });
      
          if (response.ok) {
            const data = await response.json();
            console.log("Produto atualizado:", data);
            window.open("/get", '_self')
          } else {
            console.error("Erro ao atualizar o produto.");
          }
        } catch (error) {
          console.error("Erro na solicitação:", error);
        }
      };
     
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    return (
    <div className={style.container}>
      <h1>Atualizar produtos no banco de dados</h1>
      <form onSubmit={handleSubmit}>
          <div>
            <label> Nome do Produto: </label>
            <InputStyled
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label> Marca do produto: </label>
            <InputStyled
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
            />
          </div>
        <div>
          <label> Modelo: </label>
          <InputStyled
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
          />
        </div>
        <div>
          <label> Tipo: </label>
          <InputStyled
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
          />
        </div>
        <div>
          <label> Url da imagem do produto: </label>
          <InputStyled
            type="url"
            name="url_image"
            value={formData.url_image}
            onChange={handleChange}
          />
        </div>
        <div>
          <label> Descrição: </label>
          <textarea name="description" rows="4" cols="50" value={formData.description} onChange={handleChange}></textarea>
        </div>
        <div>
          <label> Valor: </label>
          <InputStyled
            type="number"
            name="value"
            value={formData.value}
            onChange={handleChange}
          />
        </div>
        <div>
          <label> Quantidade em Estoque: </label>
          <InputStyled
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
          />
        </div>
        <div style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
          <Button type="submit">Atualizar</Button>
        </div>
      </form>
    </div>
  );
}
