import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { usePost } from 'hooks/usePost';

const Post = () => {
  let { postId } = useParams()
  const { isLoading, post } = usePost(postId)

  return (
    <main>
      {isLoading ? <div>Loading...</div> : post ? (
        <>
          <h1>Title: {post.title}</h1>
          <p>Text: {post.text}</p>
        </>
      ) : (
        <div>Empty data</div>
      )}
    </main>
  )
}

export default memo(Post);