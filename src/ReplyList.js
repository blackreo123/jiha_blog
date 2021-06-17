import { useSelector } from "react-redux";

export default function ReplyList(props){
    const {
        contentsList
    } = useSelector((state) => state.blog);
    return(
        <>
        {contentsList[props.id].reply 
            ?   <table>
                    <tbody>
                        {contentsList[props.id].reply.map((item)=>
                            <tr>
                                <td>
                                    {item}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table> 
            :   '댓글이 존재하지 않습니다.'}
        </>
    )
        
}