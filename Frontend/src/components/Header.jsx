/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { Button } from './container';

export const Header = ({ handleChange, busca, selectedProduct, setSelectedProduct }) => {
  function handleClick() {
    window.open('/post', '_self');
  }

  const handleSelectChange = (event) => {
    setSelectedProduct(event.target.value);
  };

  return (
    <HeaderStyled>
      <div className="container">
        <InputStyled
          type="text"
          onChange={handleChange}
          value={busca}
          placeholder="Qual produto você está procurando?"/>
      </div>
      <Div>
      <select value={selectedProduct} onChange={handleSelectChange}>
        <option value="">Selecione o tipo de produto</option>
        <option value="teclado">Teclado</option>
        <option value="mouse">Mouse</option>
        <option value="gabinete">Gabinete</option>
        <option value="monitor">Monitor</option>
      </select>
      </Div>
      <div className="btn">
        <Button type="submit" onClick={handleClick}>
          Adicionar Item
        </Button>
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 0 1rem;
`;

export const InputStyled = styled.input`
  width: 260px;
  height: 30px;
  border:none;
  border-radius: 3px;
  padding: 10px;
  outline: none;
  font-weight: 600;
`

const Div = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
`;
