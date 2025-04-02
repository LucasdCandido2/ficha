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
        <div key={field.name} className="mb-4">
          <h3 className="text-lg font-semibold mb-2">{field.label}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {field.fields.map((subField) => (
              <div key={subField.name}>
                <label className="block text-sm font-medium mb-1">{subField.label}: </label>
                <input
                  type={subField.type}
                  name={subField.name}
                  min={subField.min}
                  max={subField.max}
                  className="bg-gray-700 text-gray-100 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onChange={(e) => handleChange(e, field.name, subField.name)}
                />
              </div>
            ))}
          </div>
        </div>
      );
    }
    return (
      <div key={field.name} className="mb-4">
        <label className="block text-sm font-medium mb-1">{field.label}: </label>
        <input
          type={field.type}
          name={field.name}
          min={field.min}
          max={field.max}
          className="bg-gray-700 text-gray-100 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
    <form onSubmit={handleSubmit} className="p-4 bg-gray-800 rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">{config.title}</h2>
      {config.fields.map((field) => renderField(field))}
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded mt-4 transition-colors"
      >Criar Ficha</button>
    </form>
  );
}
