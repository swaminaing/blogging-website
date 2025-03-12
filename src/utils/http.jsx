export async function getPosts() {
  const url = "http://localhost:3000/posts";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Something's wrong while calling api");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}
