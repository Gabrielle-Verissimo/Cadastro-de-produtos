import './style.css';
import useFecth from '../../hooks/useFetch';

function Produtcs() {
    const [data, isLoading] = useFecth();

    return (
        <>
        {isLoading ? <h1>Carregando...</h1> : (
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
        )}

        </>
    )
}

export default Produtcs;