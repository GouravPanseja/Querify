import { useState, version } from "react";
import useEditStore from "../../stores/EditStatus"
import AddQues from "../AddQue";
import useQueStore from "../../stores/QueStore";
import useFormStore from "../../stores/FormStore";
import useResponseStore from "../../stores/ResponseStore";

export default function  Range({que,form,idx}){

    const arr = [];

    for(var i = que.rangeMin; i <= que.rangeMax; i++){
        arr.push(i);
    }

    const {responses, updateResponses} = useResponseStore( (state)=>({
        
        responses:state.responses,
        updateResponses:state.updateResponses,
    }));


    return (
        <div className="h-full w-full flex flex-col relative que mb-3  hover:shadow-lg hover:bg-slate-50 transition-all duration-100">
          
            <div className="w-full h-full mb-3">

                <p className="w-full h-max p-2 pl-0" style={{color:form.visualData.queColor, fontFamily:form.visualData.fontFamily,fontSize:form.visualData.fontSize}}>{idx}. {que.statement}</p>
            </div>

            <div className="w-[50%] mt-7">

                
                <input
                    type="range" 
                    min={que.rangeMin} 
                    max={que.rangeMax} 
                    className="slider que w-full"
                    style={{borderColor:form.visualData.buttonColor, fontFamily:form.visualData.fontFamily}}
                    value={responses[`q${idx-1}`]}
                    onChange={(e)=> updateResponses({[`q${idx-1}`] : e.target.value})}
                />
                <div 
                    className="w-full flex justify-between"
                    
                >
                    {
                        arr.map((val, idx)=>(

                            <span className="text-sm" key={idx}  style={{color:form.visualData.queColor, fontFamily:form.visualData.fontFamily}}>{val}</span>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}