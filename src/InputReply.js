import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { blogActions } from "./store/reducers/blogData";

export default function InputReply(props){

    const {
        contentsList
    } = useSelector((state) => state.blog);
    const dispatch = useDispatch();
    const [reply, setReply] = useState();

    const inputReply = (e) => {
        
        setReply(e.target.value)
    }
    
    const sendReply = () => {
        let id = props.id
        // console.log(id)
        let nowReply = reply;
        let deepCopyList = [...contentsList]
        let 아이디번째 = deepCopyList[id]
        let 아이디번째딥카피 = {...아이디번째}
        // console.log(아이디번째딥카피)
        //아직 댓글이 없을때
        if(!아이디번째딥카피.reply){
            아이디번째딥카피.reply = [nowReply];
            deepCopyList.splice(id,1,아이디번째딥카피);
            console.log(deepCopyList);
            dispatch(blogActions.setContentsList(deepCopyList));
        //댓글이 있을때     
        }else{
            let 아이디번째댓글딥카피 = [...아이디번째딥카피.reply];
            아이디번째댓글딥카피.push(nowReply);
            아이디번째딥카피.reply = 아이디번째댓글딥카피;   
            deepCopyList.splice(id,1,아이디번째딥카피);
            console.log(deepCopyList);
            dispatch(blogActions.setContentsList(deepCopyList));
        }
          
        
        
    }

    return(
        <>
        <input type='text' style={{width : '80%', border : 'none', outline : 'none'}} onChange={inputReply}></input>
        <button onClick={sendReply}>게시</button>
        </>
    )
}