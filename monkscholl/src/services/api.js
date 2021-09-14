import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
})

export default class Api{
    async ListaAluno(){
        let dados = await api.get(`/matricula/`);
        return dados.data;
    }

    async AdicionarAluno(nome, chamada, curso, turma){
        
        let info = {
            nome : nome,
            chamada : chamada,
            curso : curso,
            turma : turma
        }
        let  r = await api.post(`/matricula`, info);
        return r.data;
    }
    async EditarAluno(id,nome, chamada, curso, turma){
        
        let r = await api.put(`/matricula/${id}`, { nome : nome, chamada : chamada, curso : curso,  turma : turma });
        return r.data;
    }
}