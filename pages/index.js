import {useState} from 'react';
function Home(){
    return <div><h1>Home 1</h1>
        <Contador></Contador>
        <a href="/sobre">Página Sobre</a>   
    </div>
}

function Contador(){
    const [contador, setContador] = useState(1);

    function adicionarContador(){
        setContador(contador + 1);
    }

    return(
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>

        </div>
    )
}

export default Home