import React, { useState, useRef, useCallback } from "react";
import * as Yup from "yup";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import Input from "../../components/Input";

import {
  Container,
  InputSection,
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
  const formRef = useRef<FormHandles>(null);

  // const [datasheetInfo, setDataSheetInfo] = useState<IDataSheetInfo>(
  //   {} as IDataSheetInfo
  // );
  const [table, setTable] = useState<IDataSheetInfo[]>([]);

  const handleSubmit = useCallback(
    async (data: IDataSheetInfo) => {
      try {
        console.log("1");
        formRef.current?.setErrors({});
        console.log("2");

        const schema = Yup.object().shape({
          name: Yup.string().required(" Nome obrigatório."),
          netAmount: Yup.number().required("Quantidade liquida obrigatória."),
          unit: Yup.number().required("Unidade obrigatória."),
          yield: Yup.number().required("Rendimento obrigatório."),
          correctionFactor: Yup.number().required("FC obrigatório."),
          grossCost: Yup.number(),
          grossUnitCost: Yup.number().required("CBU obrigatório."),
          totalCost: Yup.number(),
        });
        console.log("3");

        await schema.validate(data, {
          abortEarly: false,
        });

        console.log("4");

        setTable([...table, data]);
      } catch (error) {
        console.log("5");
        if (error instanceof Yup.ValidationError) {
          formRef.current?.setErrors(error);

          return;
        }
      }
    },
    [table]
  );

  return (
    <Container>
      <InputSection>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="ingredient"
            title="Ingredientes"
            placeholder="Qual o nome do ingrediente?"
          />
          <Input
            name="netAmount"
            title="Quantidade Liquida(ml)"
            placeholder="Quantos mls?"
          />
          <Input
            name="unit"
            title="Unidade(s)"
            placeholder="Quantos unidades?"
          />
          <Input
            name="yield"
            title="Rendimento"
            placeholder="Qual o rendimento?"
          />
          <Input
            name="correctionFactor"
            title="Fator de Correção"
            placeholder="Qual o FC?"
          />
          <Input
            name="grossUnitCost"
            title="Custo Bruto Unitário"
            placeholder="Qual o CBU?"
          />

          <button type="submit">Add</button>
        </Form>
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
