const API_URL = import.meta.env.VITE_API_URL;

export const postDataFn = async (data) => {
  const response = await fetch(`${API_URL}/analyze`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json',
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw json;
  }

  return json;
};
