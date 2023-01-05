import { useQuery } from 'react-query';
import { PostsService } from 'services/posts.service';

export const usePosts = () => {
  const { isLoading, data: posts, refetch } = useQuery(
    'posts list',
    () => PostsService.getAll(),
    {
      onError: (error) => {
        alert(error.message)
      },
      select: ({data}) => data.map(post => ({
        ...post,
        title: '✦ ' + post.title.toUpperCase()
      })),
      //enabled: false
    }
  )

  return { isLoading, posts, refetch }
}