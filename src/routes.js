import HomePage from './pages/home-page.jsx'
import ProfilePage from './pages/profile-page.jsx'

// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        component: <HomePage />,
        label: 'Home 🏠',
    },
    {
        path: 'profile',
        component: <ProfilePage />,
        label: 'Profile',
    },
]

export default routes