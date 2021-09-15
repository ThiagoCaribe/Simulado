import db from './db.js';
import express from 'express'
import cors from 'cors'


const app = express();
app.use(cors());
app.use(express.json());

app.get('/matricula', async (req, resp) =>{
     var r = await db.tb_matricula.findAll();
     resp.send(r);
})

app.post('/matricula', async (req, resp) =>{
    let info = req.body;
    let check = await db.tb_matricula.findOne({where : {nr_chamada : info.chamada}});
    if(check != null ){
        resp.send({erro : "Nesta sala ja tem um aluno com está chamada"})
    }
    if(info.nome == null || info.nome == '' || info.chamada == null || info.chamada == '' ||  info.curso == null || info.curso == '' ||  info.turma == null || info.turma == ''  )
        resp.send({erro:'algum campos esta vazio por favor preencher todos campos'})
    if(info.chamada < 0 ){
        resp.send({erro:"Numero de chamada negativo"})
    }else{
        var r = {
            nm_aluno : info.nome,
            nr_chamada : info.chamada,
            nm_curso : info.curso,
            nm_turma : info.turma
        };
    }
    let res = await db.tb_matricula.create(r);
    resp.send('aluno inserido');

})

app.put('/matricula/:id', async (req, resp) =>{

    let nome= req.body.nome;
    let cham= req.body.chamada;
    let curso= req.body.curso;
    let turma = req.body.turma;

    let check = await db.tb_matricula.findOne({where : {nr_chamada : cham}});
    
    
    if(nome == null || nome == '' || cham == null || cham == '' ||  curso == null || curso == '' ||  turma == null ||turma == ''  )
        resp.send({erro:'algum campos esta vazio por favor preencher todos campos'})
    if(cham < 0 ){
        resp.send({erro:"Numero de chamada negativo"}) 
    }else{
        var alt = await db.tb_matricula.update({ nm_aluno : nome , nr_chamada : cham, nm_curso :curso, nm_turma : turma}, {where : {id_matricula :  req.params.id}});
        resp.send(200);
    }
})
 app.delete('/matricula/:id', async (req, resp) =>{

    let t = await db.tb_matricula.destroy({where: {id_matricula : req.params.id}});
    resp.send(200);
 })

app.listen(process.env.PORT, x => console.log(`Server up at port ${process.env.PORT}`))