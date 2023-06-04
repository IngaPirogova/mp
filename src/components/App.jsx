import { Route, Routes } from 'react-router-dom';
import MainPage from 'pages/MainPage/MainPage';
import NotFound from 'pages/NotFound/NotFound';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />       
      </Routes>
    </div>
  )
}

// export const App = () => {
//   return (
//        <Suspense fallback={<div>Loading...</div>}>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<MainPage />} />
//           <Route path="register" element={<RegisterPage />} />
//           <Route path="login" element={<LoginPage />} />
//           <Route path="calendar" element={<MainLayout />}>
//             <Route path="account" element={<AccountPage />} />
//             <Route index element={<CalendarPage />} />
//           </Route>
//           <Route path="*" element={<NotFoundPagePage />} />
//         </Route>
//       </Routes>
//       <ToastContainer autoClose={3000} />
//       </Suspense>
//   );
// };



