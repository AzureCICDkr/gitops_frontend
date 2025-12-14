import classes from '../style/chat/chatArea.module.css';
import ChattingBox from './ChattingBox'
import MessageInputBox from "./MessageInputBox";

const ChatArea = () => {



    return <>
             <div className={classes.chatting_area_wrap}></div>
                <ChattingBox/>
                <MessageInputBox/>
        </>
}


export default ChatArea;


