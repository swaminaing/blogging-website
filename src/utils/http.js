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

export async function getUsers() {
  const url = "http://localhost:3000/users";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Something's wrong while calling api");
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
}

export async function deletePost(postId) {
  const url = `http://localhost:3000/posts/${postId}`;

  try {
    const response = await fetch(url, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Something's wrong while calling api");
    }

    return response.json();
  } catch (error) {
    console.error("Error deleting post:", error);
    throw error;
  }

}
