import { useDispatch, useSelector } from "react-redux";
import { blogActions } from "./store/reducers/blogData";

export default function DeleteContent(props){
    const {
        contentsList
    } = useSelector((state) => state.blog);

    const dispatch = useDispatch();

    const dele = () => {
        let 딥카피리스트 = [...contentsList]
        딥카피리스트.splice(props.id,1)
        dispatch(blogActions.setContentsList(딥카피리스트))
    }
    return(
        <>
            <button 
                style={{
                        float : 'right',
                        backgroundColor : "white",
                        border: '1px'
                        }}
                onClick={dele}        
            >
                    🗑
            </button>
        </>
    )
}