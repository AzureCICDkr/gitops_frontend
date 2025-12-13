import classes from '../style/modal/modal.module.css';
import {useLoginStore, useModalStore} from "../store/store";


const Modal = () => {

    const logIn = useLoginStore((state) => state.logIn);
    const closeModal = useModalStore((state)=> state.closeModal);

    const onBtnClickHandler = () => {

        logIn();
        closeModal();

    }

    const onXClicked = () => {
        closeModal();
    }

    return <>
           <div className={classes.modal_wrapper}>
               <div className={classes.modal_header}>
                   <span className={classes.close} onClick={()=> onXClicked()}>&times;</span>
               </div>
               <div className={classes.content_wrapper}>
                   <p className={classes.login}>로그인</p>
                   <div className={classes.google}>
                       <div onClick={()=>onBtnClickHandler()}>Google</div>
                   </div>

               </div>
           </div>
           </>


}


export default Modal;