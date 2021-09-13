import styled from "styled-components";

const Container2 = styled.div`
    background-color: #F5F5F5;
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 80vw ;
    height: 100vh;

    .novo-aluno{
        display: flex;
        flex-direction: column;
        background-color: white;
        margin: 1.5em;
        padding: 1.5em;
    }
    .inputC{
        display:flex ;
        flex-direction: row;
        align-content:center ;
    }
    .inputB{
        display:flex ;
        flex-direction: row;
        align-content:center ;
    }
    .aluno-matriculado{
        margin: 1.5em;
        padding: 1.5em;
        display: flex;
        flex-direction: column;
        background-color: white;
        

    }
    table {
        border-collapse: collapse;
        }
            
    thead{
        background-color: #986CDF;
        
        
    }
    th{
        font-size: 1em;
        color: white;
        padding: 0.8em;
        
       
    }
    tr{
        text-align: center;
    }
    
    td{
        font-size: 1em;
        padding: 1em;
        text-align: center;
    }
`
const Input = styled.input`
    border: 1px solid #d3d3d3;
    border-radius: 0.5em;
    height: 2.5em;
    margin: 1em 1em 0.5em 1em;


`
export { Container2, Input }


