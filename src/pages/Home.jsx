import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const posts = [
    {
      id: 1,
      title: 'lorem Ipsum',
      desc: 'lorem Ipsum',
      img: 'https://images.pexels.com/photos/2330169/pexels-photo-2330169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      id: 2,
      title: 'lorem Ipsum',
      desc: 'lorem Ipsum',
      img: 'https://images.pexels.com/photos/2330169/pexels-photo-2330169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      id: 3,
      title: 'lorem Ipsum',
      desc: 'lorem Ipsum',
      img: 'https://images.pexels.com/photos/2330169/pexels-photo-2330169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      id: 4,
      title: 'lorem Ipsum',
      desc: 'lorem Ipsum',
      img: 'https://images.pexels.com/photos/2330169/pexels-photo-2330169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      id: 5,
      title: 'lorem Ipsum',
      desc: 'lorem Ipsum',
      img: 'https://images.pexels.com/photos/2330169/pexels-photo-2330169.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    }
  ]
  return (
    <div className='home'>
      <div className='posts'>
        {posts.map(post=>(
          <div className='post' key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className='link' to={`/post/${post.id}`}>
              <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read more</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
