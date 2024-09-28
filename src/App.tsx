// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import AuthProvider from './context/AuthContext';
import Home from './pages/User/home';
import AdminDashboard from './pages/Admin/admin';
import UserDashboard from './pages/User/UserDashboard';
import Blogs from './pages/User/blogs';
import BlogPage from './pages/User/blog-page';
import CoursePage from './pages/User/course-page';
import AboutPage from './pages/User/about-page';
import Schedule from './pages/User/schedule-appointment';
import AuthPage from './pages/User/auth-page';
import ProtectedRoute from './components/ProtectedRoute';
import UserSettings from './pages/User/userSettings';

const App = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:blogId" element={<BlogPage />} />
        <Route path="/course/:courseId" element={<CoursePage />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/login" element={<AuthPage />} />
        <Route
          path="/user/dashboard"
          element={<ProtectedRoute element={<UserDashboard />} />}
        />
        <Route
          path="/user/settings"
          element={<ProtectedRoute element={<UserSettings />} />}
        />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
