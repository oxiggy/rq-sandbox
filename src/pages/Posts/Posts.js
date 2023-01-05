import { memo } from 'react';
import { Link } from 'react-router-dom';
import { usePosts } from 'hooks/usePosts';

const Posts = () => {
  const { isLoading, posts, refetch } = usePosts();

  return (
    <main>
      <h1>Posts <Link to='/create'>Create post</Link></h1>
      {isLoading ? <div>loading</div> : posts?.length ?
        <div>
          {posts.map(post => (
            <div key={post.id}>
              <h2><Link to={`${post.id}`}>{post.title}</Link></h2>
              <p>
                {post.text}
              </p>
            </div>
          ))}
        </div>
        : <div>Elements not found</div>
      }
      <button onClick={() => refetch()}>Fetch data</button>
    </main>
  )
}

export default memo(Posts);