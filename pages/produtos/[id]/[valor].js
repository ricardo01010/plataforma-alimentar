import {useRouter} from 'next/router';

function Produtos(){
    const router = useRouter();
    const id = router.query.id;
    const valor = router.query.valor;

    return <div>Id do produto {id} - {valor}</div>
}

export default Produtos;