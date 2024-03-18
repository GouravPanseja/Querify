import { useState } from "react";
import useEditStore from "../../stores/EditStatus"
import AddQues from "../AddQue";
import useQueStore from "../../stores/QueStore";
import useFormStore from "../../stores/FormStore";

export default function  Text({que,idx}){

    const edit = useEditStore((state) => state.edit);

    const {visualData, updateVisualData} = useFormStore( (state)=>({
        visualData: state.visualData,
        updateVisualData: state.updateVisualData,
    }));

    const {ques, changeQueStatement} = useQueStore( ( state) => ({
        ques: state.ques,
        changeQueStatement: state.changeQueStatement,
    }));

    return (
        // h-full w-full flex flex-col gap-2 relative que hover:shadow-lg hover:bg-slate-50 transition-all duration-100
        <div className="h-full w-full flex flex-col gap-1 relative que hover:shadow-lg hover:bg-slate-50 transition-all duration-100 ">
            <AddQues idx={idx}/>
            <div
                className="w-full h-full py-2 mb-3"
            >{
                !edit ?
                <p className="w-full h-max  p-2 pl-0" style={{color:visualData.queColor, fontFamily:visualData.fontFamily, fontSize:visualData.fontSize}}>{idx}. {ques[idx-1].statement}</p>:
                <textarea 
                    type="text"
                    className="border w-full h-[40px] pl-2 rounded-md bg-slate-200"
                    value={ques[idx-1].statement}
                    style={{fontSize:visualData.fontSize}}
                    onChange={(e)=> changeQueStatement(idx-1,e.target.value)}
                />

            }
            </div>

            <div>
                <input 
                    type="text"
                    className="border max-w-max min-w-[60%] h-[40px] p-2 rounded-md"
                    style={{fontSize:visualData.fontSize}}
                />
            </div>
        </div>
    )
}