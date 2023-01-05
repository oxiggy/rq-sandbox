import { useState } from 'react';
import { useQuery } from 'react-query';
import { PostsService } from 'services/posts.service';

const Posts = () => {
  const [posts, setPosts] = useState([])
  const { isLoading, data: response } = useQuery('posts list', () => PostsService.getAll(), {
    onSuccess: ({ data }) => {
      setPosts(data)
    },
    onError: (error) => {
      alert(error.message)
    }
  })

  return (
    <div>
      <h1>Posts</h1>
      {isLoading ? <div>loading</div> : response?.data.length ?
        <div>
          {posts.map(post => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>
                {post.text}
              </p>
            </div>
          ))}
        </div>
        : <div>Elements not found</div>
      }
    </div>
  )
}

export default Posts;