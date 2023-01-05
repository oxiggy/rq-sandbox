import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Posts from 'pages/Posts/Posts';
import Post from 'pages/Post/Post';
import CreatePost from 'pages/CreatePost/CreatePost';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Posts />,
  },
  {
    path: '/:postId',
    element: <Post />,
  },
  {
    path: '/create',
    element: <CreatePost />,
  },
]);

const App = () => {
  return (
   <RouterProvider router={router} />
  )
}

export default App;