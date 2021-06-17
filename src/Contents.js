import './contents.css'

import { useSelector } from 'react-redux';
import Heart from './Heart';
import InputReply from './InputReply';
import ReplyList from './ReplyList';


export default function Contents(){
    const {
        contentsList
    } = useSelector((state) => state.blog);

    
    return(
        <>
        
            {contentsList.map((item)=>{
                return(
                    
                    <div className="wrapper" key={item.id}>
                        <div className="title">{item.title}</div>
                        <div className="content">
                            {item.img ? <img alt='이미지였던것' src={item.img} style={{width : '100%'}}></img> : null }
                            {item.content}
                        </div>
                        <div className="item">
                            <Heart></Heart>
                        </div>
                        <div className="item">
                            <InputReply id={item.id}></InputReply>
                        </div>
                        <div className="item reply">
                            <ReplyList id={item.id}></ReplyList>
                        </div>
                    </div>
                    
                )
            })}
            </>
            
            
       
        
        
    )
}