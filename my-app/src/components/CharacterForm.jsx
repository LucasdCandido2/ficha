import { useState } from 'react';

export default function CharacterForm({ config, onSubmit }) {
  const [formData, setFormData] = useState({});

  // Função para atualizar os dados do formulário
  const handleChange = (e, groupName = null, fieldName = null) => {
    const { name, value } = e.target;
    if (groupName && fieldName) {
      setFormData({
        ...formData,
        [groupName]: {
          ...(formData[groupName] || {}),
          [fieldName]: value,
        },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Função para renderizar cada campo com base na configuração
  const renderField = (field) => {
    if (field.type === 'group') {
      return (
        <div key={field.name}>
          <h3>{field.label}</h3>
          {field.fields.map((subField) => (
            <div key={subField.name}>
              <label>{subField.label}: </label>
              <input
                type={subField.type}
                name={subField.name}
                onChange={(e) => handleChange(e, field.name, subField.name)}
              />
            </div>
          ))}
        </div>
      );
    }
    return (
      <div key={field.name}>
        <label>{field.label}: </label>
        <input
          type={field.type}
          name={field.name}
          min={field.min}
          onChange={handleChange}
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
      {config.fields.map((field) => renderField(field))}
      <button type="submit">Criar Ficha</button>
    </form>
  );
}
