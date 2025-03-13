import React from "react";

const styles = {
  container: "w-full border-b",
  innerContainer: "max-w-11/12 mx-auto",
  postWrapper: "p-5",
  author: "text-sm font-semibold",
  metaInfo: "text-[12px] text-[#626262] font-semibold",
  title: "text-2xl font-bold mt-2",
  content: "text-sm/6 my-3",
  button: "w-full bg-[#333] text-[#eee] rounded-md py-2 cursor-pointer mt-5",
};

function Posts({ posts }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className={styles.container}>
          <div className={styles.innerContainer}>
            <div className={styles.postWrapper}>
              <div>
                <span className={styles.author}>{post.author}</span>
              </div>
              <div className={styles.metaInfo}>
                <span>{post.created_at}</span>
                <span className="mx-2">{post.reading_time}</span>
                {post.tags.map((tag, index) => (
                  <span key={index}>#{tag}</span>
                ))}
              </div>
              <div className={styles.title}>
                <h3>{post.title}</h3>
              </div>
              <div className={styles.content}>
                <p>{post.content}</p>
              </div>
              <button className={styles.button}>View Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
