import { useState } from "react";
import useEditStore from "../../stores/EditStatus"
import AddQues from "../AddQue";
import useQueStore from "../../stores/QueStore";
import useFormStore from "../../stores/FormStore";
import useResponseStore from "../../stores/ResponseStore";

export default function Textarea({que,form,idx}){

    const {responses, updateResponses} = useResponseStore( (state)=>({
        
        responses:state.responses,
        updateResponses:state.updateResponses,
    }));


    return (
        <div className="h-full w-full flex flex-col gap-1 relative que mb-3 hover:shadow-lg hover:bg-slate-50 transition-all duration-100 border-b pb-[30px]">

            <div
                className="w-full h-full mb-3"
            >

                <p className="w-full h-full p-2 pl-0" style={{color:form.visualData.queColor, fontFamily:form.visualData.fontFamily,fontSize:form.visualData.fontSize}}>{idx}. {que.statement}</p>



            </div>

            <div>
                <textarea 
                    className="border w-[60%] h-[40px] p-2 rounded-md border-gray-800"
                    style={{fontSize:form.visualData.fontSize}}
                    value={responses[`q${idx-1}`]}
                    onChange={(e)=> updateResponses({[`q${idx-1}`] : e.target.value})}
                />
            </div>
        </div>
    )
}