import { useState } from "react";
import useEditStore from "../../stores/EditStatus"
import AddQues from "../AddQue";
import useQueStore from "../../stores/QueStore";
import useFormStore from "../../stores/FormStore";
import useResponseStore from "../../stores/ResponseStore";

export default function  Text({que,form,idx}){


    const {responses, updateResponses} = useResponseStore( (state)=>({
        
        responses:state.responses,
        updateResponses:state.updateResponses,
    }));



    return (
        <div className="h-full w-full flex flex-col gap-1 relative que hover:shadow-lg hover:bg-slate-50 transition-all duration-100 overflow-hidden pb-[30px] ">

            <div
                className="w-full h-full py-2 mb-3"
            >

                <p className="w-full h-max  p-2 pl-0" style={{color:form.visualData.queColor, fontFamily:form.visualData.fontFamily, fontSize:form.visualData.fontSize}}>{idx}. {que.statement}</p>
              


            </div>

            <div className="pb-[20px]">
                <input 
                    type="text"
                    className="border max-w-max min-w-[60%] h-[40px] p-2 rounded-md"
                    style={{fontSize:form.visualData.fontSize}}
                    value={responses[`q${idx-1}`]}
                    onChange={(e)=> updateResponses({[`q${idx-1}`] : e.target.value})}
                />
            </div>
        </div>
    )
}