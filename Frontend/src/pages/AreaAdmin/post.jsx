import axios from "axios";
import { useState } from "react";
import { Button } from '../../components/container'
import { InputStyled } from "../../components/Header";
import style from '../../styles/post.module.css'

export function Post() {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    model: "",
    type:"",
    url_image: "",
    description: "",
    value: 0,
    stock: 0,
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3220/products/create`, formData);
      console.log(response.data) 
      if(response.data.message === 'Já existe esse produto no catálogo'){
        return alert(response.data.message)
      }
      alert(`${response.data.message} , produto: ${response.data.product.model}`); 
      window.open('/get', '_self');
    } catch (error) {
      alert(`${error.response.data.message}`);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className={style.container}>
    <h1>Adicionando produtos no banco de dados</h1>
    <form onSubmit={handleSubmit}>
      <div>
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
        <textarea 
          name="description" 
          rows="4" cols="50" 
          value={formData.description} 
          onChange={handleChange}>
        </textarea>
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
      <Button type="submit">Enviar</Button>
    </form>
    </div>
  );
}
