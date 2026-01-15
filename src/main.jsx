import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ViewStory from './ViewStory.jsx'
import EditProfile from './Edit-profile.jsx'
import { ProfileProvider } from './ProfileContext.jsx'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'
import Profile from './Profile.jsx' 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/story/:id/:total",
    element: <ViewStory />,
  },
  {
    path: "/edit-profile",
    element: <EditProfile />,
  },
  {
    path: "/profile",
    element: <Profile />,
  }
]);

createRoot(document.getElementById('root')).render(
  <ProfileProvider>
    <RouterProvider router={router} />
  </ProfileProvider>
)
