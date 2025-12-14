import classes from './../style/header/headerArea.module.css'
import {useLoginStore,useModalStore} from "../store/store";
import {useEffect} from "react";



const getParam = (param)=>{

    const data = param === 'login'? 'login' : param === 'logout' ? 'logout' : 'register';
    return data;

}

const Header = () => {

    const isLogin = useLoginStore((state) => state.isLogin);
    const logIn = useLoginStore((state) => state.logIn);
    const logOut = useLoginStore((state) => state.logOut);
    const openModal = useModalStore((state)=> state.openModal);

    useEffect(() => {
        console.log(isLogin, logIn, logOut);
    }, []);


    const onBtnClickHandler = (param) => {

            switch(getParam(param)){
                case 'login':
                      openModal();
                      break;
                case 'register':
                    openModal();
                    break;
                case  'logout':
                      logOut();
                    break;


            }


        }


    return <>
              <div className={classes.container}>
                    <div className={classes.logo}>chatbot</div>
                    <div className={classes.middle}></div>
                    <div className={classes.info}>
                        <div className={classes.user_info_area}>
                            <div className={classes.login}>
                                {  !isLogin ? <button className={classes.button} onClick={()=>onBtnClickHandler('login')}>login</button>:
                                <button className={classes.button} onClick={()=>onBtnClickHandler('logout')}>logout</button>}

                            </div>
                            <div className={classes.register}>
                                { !isLogin && <button className={classes.button} onClick={()=>onBtnClickHandler('register')}>register</button>}
                            </div>
                        </div>
                    </div>
              </div>

           </>

}


export default Header;