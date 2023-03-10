import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Root from './Components/Root/Root';
import StartPractice from './Components/StartPractice/StartPractice';
import Statistics from './Components/Statistics/Statistics';
import Topics from './Components/Topics/Topics';
import LoadData from './DataLoader/DataLoader';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Root></Root>,
      loader:LoadData,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/topic',
          element:<Topics></Topics>,
        },
        {
          path:'/statistics',
          element:<Statistics></Statistics>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/startquiz/:quizId',
          loader: async ({params})=>{
                 console.log(params);
                 return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element:<StartPractice></StartPractice>,
        }
      ]
    }
  ]);

  return (
    <div className="App">
      
         <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
