import '../HomePgae/homepage.css';
import FormFk from '../Form/formfk';

function HomePage() {
  return (
    <section className="body">
          <div className="form_section">
             <div className='form_block'>
               <FormFk /> 
             </div>
          </div>
          <p className="footerText">Copyright © 2024 DAT Solutions, LLC. All rights reserved. 
            <a  className="footerLink" href="https://www.dat.com/privacy-policy">Privacy Policy</a>
          </p>
    </section>
  );
}

export default HomePage;
