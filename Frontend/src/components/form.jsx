/* eslint-disable react/prop-types */
import { useState } from "react";
import { Button } from '../components/container'
import { InputStyled } from "../components/Header";

const ProductForm = ({ initialData, onSubmit }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
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
          <textarea 
            name="description" 
            rows="4" 
            cols="50" 
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
  );
};

export default ProductForm;
