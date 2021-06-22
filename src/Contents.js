import './contents.css'

import { useSelector } from 'react-redux';
import Heart from './Heart';
import InputReply from './InputReply';
import ReplyList from './ReplyList';
import DeleteContent from './DeleteContent';


export default function Contents(){
    const {
        contentsList
    } = useSelector((state) => state.blog);

    
    return(
        <>
        
            {contentsList.map((item)=>{
                return(
                    
                    <div className="wrapper" key={item.id}>
                        <div className="title">
                            {item.title}
                            <DeleteContent id={item.id}></DeleteContent>
                        </div>
                        <div className="content">
                            {item.img ? <img alt='이미지였던것' src={item.img} style={{width : '100%', marginBottom : '5%'}}></img> : null }
                            <pre>
                                {item.content}
                            </pre>
                            
                        </div>
                        <div className="heart">
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