// get posts from db.json
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

// get users from db.json
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

// delete post from db.json
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

// create post to db.json
export async function createPost(post) {
  const url = "http://localhost:3000/posts";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });

    if (!response.ok) {
      throw new Error("Something's wrong while calling api");
    }

    return response.json();
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
}
