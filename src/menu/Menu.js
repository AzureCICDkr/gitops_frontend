import classes from '../style/menu/menu.module.css';
import MenuContent from "./MenuContent";
import ChatRoom from "./ChatRoom";


const Menu = () => {

    const arr = [];

    for(let i = 1 ;  i <= 10 ;i++){
        arr.push(<ChatRoom/>)
    }

    return <>
              <div className={classes.menu_wrapper}>
                    <MenuContent children={arr}>

                    </MenuContent>
              </div>
           </>;

}

export default Menu;