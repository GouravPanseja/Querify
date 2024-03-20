import useEditStore from "../../stores/EditStatus";
import { useState,useEffect } from "react";
import AddQues from "../AddQue";
import useQueStore from "../../stores/QueStore";
import useFormStore from "../../stores/FormStore";
import useResponseStore from "../../stores/ResponseStore";

export default function  Radio({que,form,idx}){

    const {responses, updateResponses} = useResponseStore( (state)=>({
        
        responses:state.responses,
        updateResponses:state.updateResponses,
    }));

    return (

        <div className="h-full w-full flex flex-col gap-2 relative que hover:shadow-lg hover:bg-slate-50 transition-all duration-100 pb-3">
            <div className="w-full h-max mb-3">

                <p className="w-full h-max p-2 pl-0" style={{color:form.visualData.queColor, fontFamily:form.visualData.fontFamily,fontSize:form.visualData.fontSize}}>{idx}. {que.statement}</p>

            </div>

            <div className="flex flex-col gap-2 pb-[30px]">
                {
                    que.options.map((opt, optIdx)=>(
                        
                        <label className="flex gap-3" htmlFor={`${idx} + ${optIdx}`} > 
                            <input 
                                type="radio" 
                                className="border que"
                                required={true}
                                name={`que${idx}`}  
                                id={`${idx} + ${optIdx}`} 
                                style={{fontSize:form.visualData.fontSize}}
                                value={`opt${optIdx+1}`}
                                onChange={(e)=> updateResponses({ [`q${idx-1}`] :  e.target.value })}

                            /> 
                                <div className="custom-radio" style={{borderColor:form.visualData.buttonColor,borderRadius:"5px"}}></div>

                                {

                                    <p style={{color:form.visualData.labelColor, fontFamily:form.visualData.fontFamily,fontSize:form.visualData.fontSize}}>{opt}</p>
                                   
                                    
                                }

                        </label>
                       
                    ))
                }
            </div>
        </div>
    )
}