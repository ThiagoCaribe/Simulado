import { useState } from 'react';
import { Container2 , Input } from "./containe2Styled";
import Cabecalho from "../../compenentes/cabecalho";
import Test from "../../compenentes/titulo";
import { ButtonC } from "../../compenentes/botaoStyled";



export default function Faixa2(){
    const [aluno, setAluno] = useState('Novo aluno');
    return(
        <Container2>
            <Cabecalho />
            <div className='novo-aluno'>
                <Test aluno={aluno}/>
                <div className='inputC'>
                    <div className='inputF'>
                        <label>Nome:</label>
                        <Input type="text" id='nome '/>
                    </div>
                    <div className='inputF'>
                        <label style={{'margin-left': '1.8em'}}>Curso:</label>
                        <Input type="text" id='nome '/>
                    </div>
                </div>     
                <div className='inputB'>
                    <div className='inputF'>
                        <label>Chamada:</label>
                        <Input type="number" id='nome '/>
                    </div>
                    <div className='inputF'>
                        <label>Turma:</label>
                        <Input type="text" id='nome '/>
                    </div>
                    <div className='cadastrar'>
                        <ButtonC>Cadastrar</ButtonC>
                    </div>
                </div>             
            </div>
            <div className='aluno-matriculado'>
                <Test aluno={'Alunos Matriculados'} />
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Chamada</th>
                            <th>Turma</th>
                            <th>Curso</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Thiago</td>
                            <td>49</td>
                            <td>InfoC</td>
                            <td>Informatica</td>
                            <td><img src='./assets/imagens/edit.svg'/></td>
                            <td><img src='./assets/imagens/delete.svg'/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Container2>
    );
}