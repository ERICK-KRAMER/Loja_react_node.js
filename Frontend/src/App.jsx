import axios from "axios";
import { useState } from "react";

export function App() {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    model: "",
    url_image: "",
    description: "",
    value: 0,
    stock: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3220/products/create", formData);
      console.log("Data sent successfully", response.data.product);
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (

    <>
    <h1>adicionando produtos no banco de dados</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label> Nome do Produto: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label> Marca do produto: </label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <label> Modelo: </label>
        <input
          type="text"
          name="model"
          value={formData.model}
          onChange={handleChange}
        />
      </div>
      <div>
        <label> Url da imagem do produto: </label>
        <input
          type="url"
          name="url_image"
          value={formData.url_image}
          onChange={handleChange}
        />
      </div>
      <div>
        <label> Descrição: </label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label> Valor: </label>
        <input
          type="number"
          name="value"
          value={formData.value}
          onChange={handleChange}
        />
      </div>
      <div>
        <label> Quantidade em Estoque: </label>
        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
    </>
  );
}
