import React from 'react'

const Menu = () => {
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
        },
    ];
  return (
    <div className='menu'>
      <h1>Other posts you may like</h1>
        {posts.map(post=>(
            <div className="post" key={post.id}>
                <img src={post.img} alt="" />
                <h2>{post.title}</h2>
                <button>Read more</button>
            </div>
        ))}
    </div>
  )
}

export default Menu
