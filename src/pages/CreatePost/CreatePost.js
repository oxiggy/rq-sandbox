import { memo, useState } from 'react';
import { useCreatePost } from 'hooks/useCreatePost';

const CreatePost = () => {
  const [data, setData] = useState({ id: 0, title: '', text: '' })
  const { isLoading, mutateAsync } = useCreatePost(data)

  const handleSubmit = async (event) => {
    event.preventDefault()
    await mutateAsync(data)
  }

  return (
    <main>
     <h1>Create post</h1>
     <form onSubmit={handleSubmit}>
      <input placeholder='id' type='number' value={data.id} onChange={(event) => setData({...data, id: +event.target.value})}  />
      <input placeholder='title' value={data.title} onChange={(event) => setData({...data, title: event.target.value})}  />
      <input placeholder='text' value={data.text} onChange={(event) => setData({...data, text: event.target.value})}  />
       <button disabled={isLoading}>create</button>
     </form>
    </main>
  )
}

export default memo(CreatePost);