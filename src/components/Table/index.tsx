import React, { useState } from "react";
import { Container } from "./styles";

interface IDataSheetInfo {
  nome: string;
  quantidadeLiquida: number;
  unidade: number;
  fatorDeCorrecao: number;
  rendimento: number;
  quantidadeBruta: number;
  custoBruto: number;
  custoTotal: number;
}

const Table = () => {
  const [datasheetInfo, setDataSheetInfo] = useState<IDataSheetInfo[]>();

  return (
    <Container>
      <table>
        <tr>
          <th>INGREDIENTES</th>
          <th>QTDE. LIQ</th>
          <th>UNIDADE</th>
          <th>Rendimento %</th>
          <th>Fator de Correcao</th>
          <th>QTDE BRUTA</th>
          <th>CUSTO BRUTO UNIT.</th>
          <th>CUSTO TOTAL</th>
        </tr>
        {datasheetInfo &&
          datasheetInfo.map((ingredient) => (
            <tr>
              <td>{ingredient.nome}</td>
              <td>{ingredient.quantidadeLiquida}</td>
              <td>{ingredient.unidade}</td>
              <td>{ingredient.rendimento}</td>
              <td>{ingredient.fatorDeCorrecao}</td>
              <td>{ingredient.quantidadeBruta}</td>
              <td>{ingredient.custoBruto}</td>
              <td>{ingredient.custoTotal}</td>
            </tr>
          ))}
      </table>
    </Container>
  );
};

export default Table;
