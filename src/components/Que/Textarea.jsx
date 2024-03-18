import { useState } from "react";
import useEditStore from "../../stores/EditStatus"
import AddQues from "../AddQue";
import useQueStore from "../../stores/QueStore";
import useFormStore from "../../stores/FormStore";

export default function Textarea({que,idx}){

    const edit = useEditStore((state) => state.edit);

    const {visualData, updateVisualData} = useFormStore( (state)=>({
        visualData: state.visualData,
        updateVisualData: state.updateVisualData,
    }));

    const [statementValue,setStatementValue] = useState(que.statement);

    const {ques, changeQueStatement} = useQueStore( ( state) => ({
        ques: state.ques,
        changeQueStatement: state.changeQueStatement,
    }));


    return (
        <div className="h-full w-full flex flex-col gap-1 relative que mb-3 hover:shadow-lg hover:bg-slate-50 transition-all duration-100">
            <AddQues idx={idx}/>  
            <div
                className="w-full h-full mb-3"
            >{
                !edit ?
                <p className="w-full h-full p-2 pl-0" style={{color:visualData.queColor, fontFamily:visualData.fontFamily,fontSize:visualData.fontSize}}>{idx}. {ques[idx-1].statement}</p>:
                <textarea
                    className="border w-full h-[40px]  rounded-md bg-slate-200"
                    style={{fontSize:visualData.fontSize}}
                    value={ques[idx-1].statement}
                    onChange={(e)=> changeQueStatement(idx-1,e.target.value)}
                />

            }
            </div>

            <div>
                <textarea 
                    className="border w-[60%] h-[40px] p-2 rounded-md"
                    style={{fontSize:visualData.fontSize}}
                />
            </div>
        </div>
    )
}