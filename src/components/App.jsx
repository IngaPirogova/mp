import { Route, Routes } from 'react-router-dom';
import {MainPage} from '../pages/MainPage/MainPage';
import { NotFound } from '../pages/NotFound/NotFound';


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage/>} />
       
        <Route path="*" element={<NotFound />} />       
      </Routes>
    </div>
  )
}



