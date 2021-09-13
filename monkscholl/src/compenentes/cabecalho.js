import { Cabecalho } from "./cabecalhoStyled";
import { Button } from "./botaoStyled";
export default function Cabcalho(){
    return(
        <Cabecalho>
            <div className='titulo'>
                <div className='imgP'><img src='./assets/imagens/user.svg' /></div>
                <div className='usu'><p> ola, usuario  </p></div>
            </div>
            <div className='btns'>
                <Button><img src={'./assets/imagens/relaod.svg'} /></Button>
                <Button><img src='./assets/imagens/back1.svg' /></Button>
            </div>
        </Cabecalho>
    );
}