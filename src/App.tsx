import { useEffect, useState } from "react";

const App = () => {
  type Post = { userId: number; id: number; title: string; body: string };


  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
      if(!res.ok) {
        throw new Error("Network response was not ok");
      }
      
      return res.json();
    })
    .then((data: Post[]) => {
      setPosts(data);
      setLoading(false);
    })
    .catch((error) => {
      setError(error.message);
      setLoading(false);
    });
  }, []);  

  return <div>APP</div>;
};

export default App;
