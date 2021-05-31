import { useState } from "react"
import React from 'react';
import { blogActions } from "./store/reducers/blogData";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
export default function InputForm(){

    const dispatch = useDispatch();
    const [testImg,setTestImg] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const {
        contentsList
    } = useSelector((state) => state.blog);

    const history = useHistory();

    //이미지 업로드
    const test = (e) => {
        // console.log(e.target.files[0])
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0]
        reader.onloadend = () =>{
            // console.log(reader.result)
            setTestImg({file : file, previewURL : reader.result})
        }
        reader.readAsDataURL(file);
        
    }

    //제목
    const inputTile = (e) => {
        let title = e.target.value;
        setTitle(title);
    }
    //내용
    const inputContent = (e) => {
        let content = e.target.value;
        setContent(content);
    }
    //등록
    const sendData = () => {
        let temp = contentsList
        
        let data = {title : title, content : content, img : testImg.previewURL}
            temp = [...contentsList]
            temp.push(data)
            dispatch(blogActions.setContentsList(temp))
            history.replace('/')
    }
    return(
        
        <div className="inputForm-container">
            <div>제목 : <input type="text" onChange={inputTile}></input></div>
            <div>사진 업로드 <input type="file" accept="image/*" onChange={test}></input></div>
            <div>
                <img alt='' src={testImg !== '' ? testImg.previewURL : null}></img>
            </div>
            <div>내용 : <textarea onChange={inputContent}></textarea></div>
            <div><button onClick={sendData}>등록</button></div>
        </div>
        
    )
}