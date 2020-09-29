import React, { useState, useCallback } from "react";

import Input from "../../components/Input";

import {
  Container,
  InputSection,
  Button,
  ResultsSection,
  ScreenOne,
  ScreenTwo,
} from "./styles";

interface IDataSheetInfo {
  name: string;
  netAmount: string;
  unit: string;
  yield: string;
  correctionFactor: string;
  grossCost: string;
  grossUnitCost: string;
  totalCost: string;
}

const Table: React.FC = () => {
  const [table, setTable] = useState<IDataSheetInfo[]>([]);
  const [ingredient, setIngredient] = useState<IDataSheetInfo>(
    {} as IDataSheetInfo
  );

  const addOnTable = useCallback(
    (event) => {
      event.preventDefault();

      setTable([...table, ingredient]);
    },
    [ingredient, table]
  );

  console.log(ingredient);
  console.log(table);

  return (
    <Container>
      <InputSection>
        <form>
          <Input
            name="ingredient"
            title="Ingredientes"
            placeholder="Qual o nome do ingrediente?"
            onChange={(info) => {
              setIngredient({ ...ingredient, name: info.target.value });
            }}
          />
          <Input
            name="netAmount"
            title="Quantidade Liquida(ml)"
            placeholder="Quantos mls?"
            onChange={(info) => {
              setIngredient({ ...ingredient, netAmount: info.target.value });
            }}
          />
          <Input
            name="unit"
            title="Unidade(s)"
            placeholder="Quantos unidades?"
            onChange={(info) => {
              setIngredient({ ...ingredient, unit: info.target.value });
            }}
          />
          <Input
            name="yield"
            title="Rendimento"
            placeholder="Qual o rendimento?"
            onChange={(info) => {
              setIngredient({ ...ingredient, yield: info.target.value });
            }}
          />
          <Input
            name="correctionFactor"
            title="Fator de Correção"
            placeholder="Qual o FC?"
            onChange={(info) => {
              setIngredient({
                ...ingredient,
                correctionFactor: info.target.value,
              });
            }}
          />
          <Input
            name="grossUnitCost"
            title="Custo Bruto Unitário"
            placeholder="Qual o CBU?"
            onChange={(info) => {
              setIngredient({
                ...ingredient,
                grossUnitCost: info.target.value,
              });
            }}
          />

          <Button onClick={(event) => addOnTable(event)}>Calcular</Button>
        </form>
        <ResultsSection>
          <ScreenOne>Tela 1</ScreenOne>
          <ScreenTwo>Tela 2</ScreenTwo>
        </ResultsSection>
      </InputSection>
      <section>
        <table>
          <thead>
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
          </thead>
          <tbody>
            {table &&
              table.map((ingredient, index) => (
                <tr key={index}>
                  <td>{ingredient.name}</td>
                  <td>{ingredient.netAmount}</td>
                  <td>{ingredient.unit}</td>
                  <td>{ingredient.yield}</td>
                  <td>{ingredient.correctionFactor}</td>
                  <td>{ingredient.grossUnitCost}</td>
                  <td>{ingredient.grossCost}</td>
                  <td>{ingredient.totalCost}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </Container>
  );
};

export default Table;
