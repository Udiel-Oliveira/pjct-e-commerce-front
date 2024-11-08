import { useState, useEffect } from 'react';

export function useEntityData(endpoint) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://pjct-e-commerce-back.onrender.com/api/${endpoint}/`);
      if (!response.ok) throw new Error('Erro ao carregar dados');
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError('Erro ao carregar dados. Por favor, tente novamente.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const addEntity = async (name) => {
    try {
      const response = await fetch(`https://pjct-e-commerce-back.onrender.com/api/${endpoint}/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
      });
      if (!response.ok) throw new Error(`Erro ao adicionar ${endpoint}`);
      await fetchData();
      return true;
    } catch (err) {
      setError(`Erro ao adicionar ${endpoint}. Por favor, tente novamente.`);
      console.error(err);
      return false;
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return { data, loading, error, fetchData, addEntity };
}
