/* eslint-disable react/prop-types */
import { useState } from 'react';
import { PostComponent } from './Post';
import { Navigation } from './Navigation';
import { ReturnFunc } from './ReturnFunc';

function App() {
  const [posts, setPosts] = useState([]);

  // eslint-disable-next-line react/jsx-key
  const postComponent = posts.map(post => <PostComponent 
    name =  {post.name}
    subtitle = {post.subtitle}
    time = {post.time}
    image = {post.image}
    description = {post.description}
  />)

  const addPost = () => {
    setPosts([...posts, {
      name: "raman",
      subtitle: "3000 followers",
      time: "2m ago",
      image: "https://images.unsplash.com/photo-1615915468538-0fbd857888ca?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9nb3xlbnwwfHwwfHx8MA%3D%3D"
    }])
  }

  return (
    <div style={{ background: "#dfe6e9", height: "100vh" }}>
      <button onClick={addPost}>Add post</button>
      <div style={{display: "flex", justifyContent: "center"}}>
        <div>
          <Navigation />
          {postComponent}
          <ReturnFunc />
        </div>
      </div>
    </div>
  )
}

export default App
