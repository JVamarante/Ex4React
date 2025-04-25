import React, { useState } from 'react';

const FormularioDeContato = () => {
  const [form, setForm] = useState({
    nome: '',
    contato: '',
    mensagem: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const jsonToSend = JSON.stringify(form);
    console.log(`O seguinte JSON será enviado via HTTP POST para o back-end: ${jsonToSend}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={form.nome}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Contato:</label>
        <input
          type="text"
          name="contato"
          value={form.contato}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Mensagem:</label>
        <textarea
          name="mensagem"
          value={form.mensagem}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioDeContato;
