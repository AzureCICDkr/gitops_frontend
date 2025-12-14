import classes from '../style/chat/messageInputBox.module.css';
import {useRef, useState} from "react";


const MessageInputBox = () => {


    const textareaRef = useRef(null);
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e.target.value);

        // textarea 높이 자동 조절
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto";
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };

    const handleSubmit = () => {
        if (!value.trim()) return;

        console.log("send:", value);
        setValue("");

        // 초기 높이로 복구
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = "auto";
        }
    };

    return <>
             <div className={classes.message_input_wrap}>
                 <div className={classes.input_content}>
                    <textarea class="chat_text_area" className={classes.chat_text_area}>

                    </textarea>
                    <button className={classes.send_button}>
                        전송
                    </button>
                 </div>
             </div>
           </>;

}


export default MessageInputBox;