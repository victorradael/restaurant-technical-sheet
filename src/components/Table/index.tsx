import React, { useState } from "react";
import { Container, InputSection, InputBlock, ResultsSection } from "./styles";

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
      <InputSection>
        <form>
          <InputBlock>
            <label htmlFor="ingredient">Ingrediente</label>
            <input
              placeholder="Nome do ingrediente"
              type="text"
              name="ingredient"
              id=""
            />
          </InputBlock>
          <InputBlock>
            <label htmlFor="net-amount">Quantidade Liquida</label>
            <input type="text" name="net-amount" id="" />
          </InputBlock>
          <InputBlock>
            <label htmlFor="unity">Unidade</label>
            <input type="text" name="unity" id="" />
          </InputBlock>
          <InputBlock>
            <label htmlFor="yield">Rendimento (%)</label>
            <input type="text" name="yield" id="" />
          </InputBlock>
          <InputBlock>
            <label htmlFor="correction-factor">Fator de Correção</label>
            <input type="text" name="correction-factor" id="" />
          </InputBlock>
          <InputBlock>
            <label htmlFor="gross-unit-cost">Custo Bruto Unitário</label>
            <input type="text" name="gross-unit-cost" id="" />
          </InputBlock>
        </form>
        <ResultsSection>
          <div>Tela 1</div>
          <div>Tela 2</div>
        </ResultsSection>
      </InputSection>
      <section>
        <table>
          <tr>
            <th>Ingredientes</th>
            <th>Quantidade Liquida</th>
            <th>Unidade</th>
            <th>Rendimento %</th>
            <th>Fator de Correção</th>
            <th>Quantidade Bruta</th>
            <th>Custo Bruto Unitário</th>
            <th>Custo Total</th>
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
      </section>
    </Container>
  );
};

export default Table;
