import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Posts from 'pages/Posts/Posts';
import Post from 'pages/Post/Post';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Posts />,
  },
  {
    path: '/:postId',
    element: <Post />,
  },
]);

const App = () => {
  return (
   <RouterProvider router={router} />
  )
}

export default App;