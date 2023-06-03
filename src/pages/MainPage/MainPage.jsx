import { Link } from 'react-router-dom';

export const MainPage = () => {
    return (
      <main>
        <section class="auth">
        <img src="../images/goose2.png" alt="Goose" width="142" height="142"/>
            <h1 class="auth__title">GooseTrack</h1>
            <button class="auth__button" type="button">Log in 
            <span class="auth__span">LogIn</span>
            </button>
            <Link to="#">Sign up</Link>
            

        </section>
       
      </main>
    );
  };


  




        
