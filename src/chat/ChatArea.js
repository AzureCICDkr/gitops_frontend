import classes from '../style/chat/chatArea.module.css';
import ChattingBox from './ChattingBox'

const ChatArea = () => {



    return <>
             <div className={classes.chatting_area_wrap}></div>
                <ChattingBox></ChattingBox>
           </>;

}


export default ChatArea;


