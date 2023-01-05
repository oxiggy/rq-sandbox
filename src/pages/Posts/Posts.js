import { usePosts } from 'hooks/usePosts';

const Posts = () => {
  const { isLoading, posts } = usePosts();

  return (
    <div>
      <h1>Posts</h1>
      {isLoading ? <div>loading</div> : posts.length ?
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