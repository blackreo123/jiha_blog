import { useState } from "react";
import { useSelector } from "react-redux";

export default function InputReply(props){

    const {
        contentsList
    } = useSelector((state) => state.blog);

    const [reply, setReply] = useState();

    const inputReply = (e) => {
        
        setReply(e.target.value)
    }
    
    const sendReply = () => {
        let replace = []
        let id = props.id
        let temp = [...contentsList];
        
        let test = {...temp[id]}
                
        replace.push(test)
        
        
        
        let asdf = [...replace[id].reply]
        asdf.push(reply)
        // console.log(asdf)
        replace[id].reply = asdf
        console.log(replace)
    }

    return(
        <>
        <input type='text' style={{width : '80%', border : 'none', outline : 'none'}} onChange={inputReply}></input>
        <button onClick={sendReply}>게시</button>
        </>
    )
}