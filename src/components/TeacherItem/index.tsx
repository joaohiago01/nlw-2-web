import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/47699280?s=460&u=95a29f9e9b0fe118385c6923df534624be6fb749&v=4" alt="João Hiago"/>
                <div>
                    <strong>João Hiago</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p>
                Estudante do curso de Análise e Desenvolvimento de Sistemas.
                <br/><br/>
                Apaixonado por desafios e aprendizado.
                No momento, embarcado no mundo JavaScript com NodeJS e React.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 100,00</strong>
                </p>
                    <button type="button">
                        <img src={whatsappIcon} alt="Whatsapp" />
                        Entrar em contato
                    </button>
            </footer>
        </article>
    );
}

export default TeacherItem;