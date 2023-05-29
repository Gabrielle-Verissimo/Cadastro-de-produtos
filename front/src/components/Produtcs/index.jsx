import './style.css';
import useFecth from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

function Produtcs() {
    const [data, isLoading] = useFecth();
    const navegate = useNavigate();

    function goToRegister() {
        navegate('/cadastrar-produto');
    }

    return (
        <>
        {isLoading ? <h1>Carregando...</h1> : (
            <div id='container-table'>
                <h1>Produtos</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                        </tr>
                        {data.map(item => {
                            return(
                                <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.value}</td>
                                </tr>
                            )

                        })}
                    </tbody>
                </table>
            </div>

        )}
        <button id='btn-new-register' onClick={goToRegister}>Cadastrar novo produto</button>
        </>
    )
}

export default Produtcs;