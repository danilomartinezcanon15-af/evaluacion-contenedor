export async function syncData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error en syncData:', error);
    return [];
  }
}
