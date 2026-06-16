import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HimpunSurvei from './pages/HimpunSurvei';
import FormSurvei from './pages/FormSurvei';

const router = createBrowserRouter([
  {
    path: "/formsurvei",
    element: <FormSurvei />
  },
  {
    path: "/himpunSurvei",
    element: <HimpunSurvei />
  },
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}


