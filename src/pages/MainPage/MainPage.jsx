import { Link } from 'react-router-dom';
// import css from './MainPage.module.css';

export const MainPage = () => {
    return (
      <main>
        <section class="auth">
        {/* <img src='https://cdn-icons-png.flaticon.com/512/622/622669.png' alt='' width={142} height={142}/> */}
        <img src='https://github.com/IngaPirogova/mp/blob/main/src/images/goose2.png' alt='' width={142} height={142}/>
           
            <h1 class="auth__title">GooseTrack</h1>
            <button class="auth__button" type="button">Log in 
            <span class="auth__span">LogIn</span>
            </button>
            <Link to="#">Sign up</Link>            

        </section>
       
      </main>
    );
  };


  




        
