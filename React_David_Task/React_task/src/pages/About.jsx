import { useEffect, useState } from "react";

const About = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  const fetchTodos = async () => {
    try {
      const res = await fetch("https://blog-app-b961.onrender.com/api/posts");
      const data = await res.json();
      console.log("SERVER RESPONSE:", data);

      setPosts(Array.isArray(data) ? data : data.posts || []);
    } catch (err) {
      console.log("Fetch error:", err);
    }
  };

  const addTodo = async () => {
    try {
      await fetch("https://blog-app-b961.onrender.com/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: input,
          desc: input
        })
      });

      fetchTodos();
      setInput("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>Add Post</button>

      {posts.map((post, i) => (
        <p key={i}>{post.title}</p>
      ))}
    </div>
  );
};

export default About;
