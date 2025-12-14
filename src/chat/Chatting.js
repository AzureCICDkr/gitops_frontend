import classes from '../style/chat/chatting.module.css';


const Chatting = (props) => {

    const isUser = props.user === 'user';

    return <>
            <div className={`${classes.messageRow}  ${isUser ? classes.user : classes.bot}`} >
                 <div className={` ${classes.messageBox }   ${ isUser ? classes.userMessage : classes.botMessage }     `} >
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                     Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                     ut aliquip ex ea commodo consequat.
                 </div>
            </div>
          </>;

}


export default Chatting;