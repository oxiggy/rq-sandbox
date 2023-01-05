import { useQuery } from 'react-query';
import { PostsService } from 'services/posts.service';

export const usePost = (id) => {
  const { isLoading, data: post } = useQuery(
    ['posts list', id],
    () => PostsService.getById(id),
    {
      onError: (error) => {
        alert(error.message)
      },
      select: ({ data }) => data,
      enabled: !!id
    }
  )

  return { isLoading, post }
}