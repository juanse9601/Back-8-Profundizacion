// UserService.ts
export async function fetchUserFromAPI(userId: string): Promise<{ id: string; name: string }> {
    // Simulación de una llamada a una API externa
    // Este es el método que vamos a mockear
    return { id: userId, name: "John Doe" };
  }
  
  export async function getUserData(userId: string): Promise<string> {
    const user = await fetchUserFromAPI(userId);
    return `Usuario: ${user.name}`;
  }
  