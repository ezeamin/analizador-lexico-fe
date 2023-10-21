const API_URL = import.meta.env.VITE_API_URL;

export const postDataFn = async (data) => {
  const response = await fetch(`${API_URL}`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Ocurrió un error en la solicitud');
  }

  const json = await response.json();
  return json;
};
