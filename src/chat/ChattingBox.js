import classes from '../style/chat/chattingBox.module.css';
import Chatting from "./Chatting";

const ChattingBox = () => {

    const arr = ["user","bot","user","bot","user","bot","user","bot","user","bot"];

    return<>
                <div className={classes.chatting_box_wrap}>
                    {arr.map((data)=> <Chatting user={data}  />)}
                </div>
          </>;
}


export default ChattingBox;