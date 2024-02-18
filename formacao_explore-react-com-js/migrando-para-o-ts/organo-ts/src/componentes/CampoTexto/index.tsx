import React from 'react'
import './CampoTexto.css'

interface CampoTextoProps {
    aoAlterado: (valor: string) => void,
    label: string,
    placeholder: string,
    obrigatorio?: boolean,
    valor: string,
    tipo?: 'text' | 'date'
}


const CampoTexto = (
    {
        aoAlterado,
        label,
        placeholder,
        valor,
        tipo = 'text',
        obrigatorio = false,
    }: CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...`;

    // tipo evento onChange
    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input
                value={valor}
                onChange={aoDigitado}
                required={obrigatorio}
                placeholder={placeholderModificada}
                type={tipo}
            />
        </div>
    )
}
export default CampoTexto

