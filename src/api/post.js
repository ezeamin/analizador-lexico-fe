const API_URL = import.meta.env.VITE_API_URL;

export const postDataFn = async (data) => {
  const response = await fetch(`${API_URL}/syntax-analyze`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.error || 'Ocurrió un error en la solicitud');
  }

  return json;
};
