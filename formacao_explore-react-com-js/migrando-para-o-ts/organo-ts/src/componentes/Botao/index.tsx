import React, { ReactElement } from 'react';
import './Botao.css';

interface BotaoProps {
    children: ReactElement | string // pode ser um ReactElement ou uma string
};

const Botao = ({ children }: BotaoProps) => {
    return (
        <button className='botao'>
            {children}
        </button>
    )
}
export default Botao;
