import { useState , useRef } from 'react';
import { Container2 , Input } from "./containe2Styled";
import Cabecalho from "../../compenentes/cabecalho";
import Test from "../../compenentes/titulo";
import { ButtonC } from "../../compenentes/botaoStyled";
import ReactTooltip from 'react-tooltip';
import Api from '../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import LoadingBar   from 'react-top-loading-bar'
import 'react-toastify/dist/ReactToastify.css';

const api = new Api();


export default function Faixa2(){
    const [matricula, setMatricula] = useState([]);
    const [aluno, setAluno] = useState('Novo aluno');
    const [btn, setBtn] = useState('Cadastrar');
    const [nome, setNome] = useState('');
    const [chamada, setChamada] = useState(0);
    const [curso, setCurso] = useState('');
    const [turma, setTurma] = useState('');
    const [idalt, setIdalt] = useState(0);
    
    const carre = useRef(null);

    const ValidarR = (resp) =>{
        if(!resp.erro)
            return true;
        toast.error(`${resp.erro}`);
        return false;
    }

    
    const ListaAluno = async () =>{
       
        carre.current.continuousStart();
        let r = await api.ListaAluno();
        setMatricula(r);
        carre.current.complete();
    }
    const InseriAluno = async () => {
        
        if(idalt > 0){
            carre.current.continuousStart();
            let r = await api.EditarAluno(idalt,nome,chamada,curso,turma);
            setIdalt(0);
            limparCampos();
            if(!ValidarR(r)){
                limparCampos();
                return;}
            setAluno("Novo aluno");
            setBtn("Cadastrar");
            ListaAluno();
            toast.dark('aluno alterado com sucesso');
            carre.current.complete();  
            return;
        }else{
            carre.current.continuousStart();
            let  r = await api.AdicionarAluno(nome,chamada,curso,turma);
            limparCampos();
            if(!ValidarR(r)){
                limparCampos();
                return;}
            toast.dark('aluno inserido com sucesso');
            ListaAluno();
            carre.current.complete();  
        }
    }
    function limparCampos(){
        setChamada('');
        setCurso('');
        setNome('');
        setTurma('');
        
    }
    const AlterarAluno = async (item) => {
        setChamada(item.nr_chamada);
        setCurso(item.nm_curso);
        setNome(item.nm_aluno);
        setTurma(item.nm_turma);
        setAluno("Alterando aluno " + item.nm_aluno);
        setBtn("alterar");
        setIdalt(item.id_matricula);      
        
        console.log(item);
        return;
    }
    const apagarAluno = async (id) => {
        await api.apagarAluno(id);
        toast.dark("Aluno removido !!");
        ListaAluno();
        return;
    }
    return(
        <Container2> 
            <LoadingBar color='pink' ref={carre} />
            <ReactTooltip />
            <Cabecalho teste={ListaAluno} />
                <div className='novo-aluno'>
                    <Test aluno={aluno}/>
                    <div className='inputC'>
                        <div className='inputF'>
                            <label>Nome:</label>
                            <Input type="text" id='nome' value={nome} onChange={e =>setNome(e.target.value)}/>
                        </div>
                        <div className='inputF'>
                            <label style={{'margin-left': '1.8em'}}>Curso:</label>
                            <Input type="text" id='curso' value={curso} onChange={e =>setCurso(e.target.value)}/>
                        </div>
                    </div>     
                    <div className='inputB'>
                        <div className='inputF'>
                            <label>Chamada:</label>
                            <Input type="number" id='chamada'value={chamada} onChange={e =>setChamada(e.target.value)} />
                        </div>
                        <div className='inputF'>
                            <label>Turma:</label>
                            <Input type="text" id='turma' value={turma} onChange={e =>setTurma(e.target.value)}/>
                        </div>
                        <div className='cadastrar'>
                            <ButtonC style={{cursor: 'pointer'}} onClick={InseriAluno}>{btn}</ButtonC>
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
                            {matricula.map(x=>
                                <tr>
                                    <td >{x.id_matricula}</td>
                                    <td data-tip="">{x.nm_aluno}</td>    
                                    <td>{x.nr_chamada}</td>
                                    <td>{x.nm_curso}</td>
                                    <td>{x.nm_turma}</td>
                                    <td><img src='./assets/imagens/edit.svg' style={{cursor : 'pointer'}} alt='' onClick={() => AlterarAluno(x) } /></td>
                                    <td><img src='./assets/imagens/delete.svg' style={{cursor : 'pointer'}} alt='' onClick={() => apagarAluno(x.id_matricula)}  /></td>
                                </tr>
                                )}
                        </tbody>
                    </table>
                </div>
        </Container2>
    );
}