const API_URL = import.meta.env.VITE_API_URL;

export const getTableFn = async () => {
  const response = await fetch(`${API_URL}/table`);

  if (!response.ok) {
    throw new Error('Ocurrió un error en la solicitud');
  }

  const json = await response.json();
  return json;
};
