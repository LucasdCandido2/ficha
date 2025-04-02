import { useState } from "react";

//Componente para preencher a ficha do personagem
export default function CharacterForm({ config, onSubmit }) {
    //Estados para nivel e atributos
    const [formData, setFormData] = useState({});

    //Função para atualizar os campos
    const handleChange = (e, groupName = null, fieldName = null) => {
        const { name, value } = e.target;
        if (groupName && fieldName) {
            setFormData({
                ...formData,
                [groupName]: {
                    ...(formData[groupName] || {}),
                    [fieldName]: value
                }
            });
        } else {
            setFormData({ ...formData, [name]: value});
        }
    };

    const renderFild = (field) => {
        if (field.type === 'group') {
            return (
                <div key={field.name}>
                    <h3>{field.label}</h3>
                    {field.fields.map((subFild) => (
                        <div key={subField.name}>
                            <label>{subField.label}: </label>
                            <input
                                type={subField.type}
                                name={subField.name}
                                onChange={(e) => hamdleChange(e, field.name, subField.name)}
                            />
                        </div>
                    ))}
                </div>
            )
        }
        return (
            <div key={field.name}>
                <label>{field.label}: </label>
                <input
                    type={field.type}
                    name={field.name}
                    min={field.min}
                    onchange={handleChange}
                />
            </div>
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{config.title}</h2>
            {config.fields.map(renderField)}
            <button type='submit'>Criar Ficha</button>
        </form>
    )
}