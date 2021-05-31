import { useState } from "react"

export default function Heart(props){
    const [heart,setHeart] = useState(false);
    const changeHeart = () =>{
        if(!heart){
            setHeart(true);
        }else if(heart){
            setHeart(false);
        }
    }
    return(
        <>
        <span onClick={changeHeart}>{heart ? '❤️' : '🤍'}</span>
        </>
    )
}