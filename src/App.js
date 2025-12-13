import classes from './style/app/appArea.module.css'
import HeaderArea from './header/HeaderArea'
import Modal from './common/Modal';
import Menu from './menu/Menu';
import ChatArea from './chat/ChatArea';
import {useLoginStore, useModalStore} from "./store/store";

const App = () => {

  const isLogin = useLoginStore((state) => state.isLogin);
  const isOpened = useModalStore((state)=>state.isOpened);


  return (
  <>
    {isOpened && <div className={classes.backdrop}>
      <Modal></Modal>
    </div>}
    <div className={classes.wrapper}>
      <div className={`${classes.container} ${!isLogin ? classes.noMenu:''}`}>
        <div className={classes.header}>
            <HeaderArea></HeaderArea>
        </div>
        {isLogin&&<div className={classes.menu}>
          <Menu></Menu>
        </div>}
        <div className={classes.content}>
          <ChatArea/>
        </div>
      </div>
    </div> 
  </>
  );
}

export default App;
