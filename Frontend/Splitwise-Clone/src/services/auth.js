export const signup = async (data) => {
  const res = await fetch('/api/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
    const result = await res.json();

  console.log('API response:', result);
  console.log('Status:', res.status);
  return result;
};
