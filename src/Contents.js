import './contents.css'
import React from 'react';
import { useSelector } from 'react-redux';


export default function Contents(){
    const {
        contentsList
    } = useSelector((state) => state.blog);
    return(
        <>
        
            {contentsList.map((item,index)=>{
                return(
                    
                    <div className="wrapper" key={index}>
                        <div className="title">{item.title}</div>
                        <div className="content">
                            <img src={item.img} style={{width : '100%'}}></img>
                            {item.content}
                        </div>
                        <div className="item">like</div>
                        <div className="item">inputReply</div>
                        <div className="item">replyList</div>
                    </div>
                    
                )
            })}
            </>
            
            
       
        
        
    )
}