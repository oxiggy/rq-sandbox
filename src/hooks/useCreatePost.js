import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { PostsService } from 'services/posts.service';

export const useCreatePost = (data) => {
  const navigate = useNavigate()

  const { isLoading, mutateAsync } = useMutation(
    ['create post', data],
    (data) => PostsService.create(data),
    {
      onSuccess: () => {
        navigate('/')
      },
      onError: (error) => {
        alert(error.message)
      }
    })

  return { isLoading, mutateAsync }
}