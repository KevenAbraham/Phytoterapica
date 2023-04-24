import style from './Produtos.module.css';

function Produtos(props) {
    return (
        <div>
            <main>
                <img src={props.foto} alt="foto"></img>
                <h2> Óleo Essencial de {props.name} - 10ml</h2>
                <span> {props.valor} </span>
                <p>(ou até em 3x de R$ {props.parcelas} sem juros)</p>
            </main>
        </div>
    ) 
}

export default Produtos;