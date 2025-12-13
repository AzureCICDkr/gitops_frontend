import classes from '../style/menu/menuContent.module.css';
import ChatRoom from "./ChatRoom";

const MenuContent = (props) => {



    return <>

               <div className={classes.menu_content}>
                    {props.children.map(data => data)}
               </div>
               </>;

}

export default MenuContent;