import { useState } from "react";
import { useParams } from "react-router-dom";

export function Put() {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        name: "",
        brand: "",
        model: "",
        type: "",
        url_image: "",
        description: "",
        value: "",
        stock: ""
    })
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
        <>
    <h1>Atualizar produtos no banco de dados</h1>
    <form onSubmit={handleSubmit}>
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
        <label> Tipo: </label>
        <input
          type="text"
          name="type"
          value={formData.type}
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
