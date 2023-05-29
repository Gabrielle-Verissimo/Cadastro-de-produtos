import axios from 'axios';
import './style.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Form() {
    const [disponible, setDisponible] = useState(false);
    const navegate = useNavigate();

    function handleRadio({target}) {
        if(target.id == 'yes') {
            setDisponible(true);
        }
        else {
            setDisponible(false);
        }
    }

   async function handleForm(e) {
        e.preventDefault();
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData);
        if(!data.name) {
            return;
        }
        try {
           await axios.post('http://localhost:3000/cadastrar-produto', {
                name: data.name,
                description: data.description,
                value: parseFloat(data.value),
                disponible: disponible
            })
            alert('produto cadastrado com sucesso');
        } catch (e) {
            console.log(e);
        }
        navegate('/lista-produtos');
   }
    return (
        <>
            <h1 className='title'>Cadastrar produto</h1>
            <form onSubmit={handleForm} className="form">
                <label htmlFor="name">Nome do produto:</label>
                <input type="text" name="name" id="name"/>
                <label htmlFor="description">Descrição:</label>
                <textarea name="description" id="description" cols="30" rows="10"></textarea>
                <label htmlFor="value">Valor:</label>
                <input type="text" name="value" id="value"/>
                <div id="disponible">
                    <label >Disponível para venda:</label>
                    <label htmlFor="yes">Sim</label>
                    <input type="radio" name="disponible" id="yes" onClick={handleRadio}/>
                    <label htmlFor="no">Não</label>
                    <input type="radio" name="disponible" id="no" onClick={handleRadio}/>
                </div>
                <button type="submit" id="btn-register">Cadastrar</button>
            </form>
        </>
    )
}

export default Form;