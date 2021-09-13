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
    var r = {
        nm_aluno : info.aluno,
        nr_chamada : info.chamada,
        nm_curso : info.curso,
        nm_turma : info.turma
    };
    let res = await db.tb_matricula.create(r);
    resp.send(res);

})

app.put('/matricula/:id', async (req, resp) =>{
    let nome= req.body.nome;
    let cham= req.body.chamada;
    let curso= req.body.curso;
    let turma = req.body.turma;
    var alt = await db.tb_matricula.update({ nm_aluno : nome , nr_chamada : cham, nm_curso :curso, nm_turma : turma}, {where : {id_matricula :req.params.id }});
    resp.send(alt);
})
 app.delete('/matricula/:id', async (req, resp) =>{

    let t = await db.tb_matricula.destroy({where: {id_matricula : req.params.id}});
    resp.send(t);
 })

app.listen(process.env.PORT, x => console.log(`Server up at port ${process.env.PORT}`))s