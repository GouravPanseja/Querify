import useEditStore from "../../stores/EditStatus";
import { useState,useEffect } from "react";
import AddQues from "../AddQue";
import useQueStore from "../../stores/QueStore";
import useFormStore from "../../stores/FormStore";
export default function  Radio({que,idx}){

    const edit = useEditStore((state) => state.edit);

    const {ques, changeQueStatement,updateRadioOpt} = useQueStore( ( state) => ({
        ques: state.ques,
        changeQueStatement: state.changeQueStatement,
        updateRadioOpt: state.updateRadioOpt
    }));

    const {visualData, updateVisualData} = useFormStore( (state)=>({
        visualData: state.visualData,
        updateVisualData: state.updateVisualData,
    }));



    return (

        <div className="h-full w-full flex flex-col gap-2 relative que hover:shadow-lg hover:bg-slate-50 transition-all duration-100">
            <AddQues idx={idx}/>
            <div
                className="w-full h-max mb-3"
            >{
                !edit ?
                <p className="w-full h-max p-2 pl-0" style={{color:visualData.queColor, fontFamily:visualData.fontFamily,fontSize:visualData.fontSize}}>{idx}. {ques[idx-1].statement}</p>
                :
                <textarea 
                    type="text"
                    className="border w-full h-[40px]  rounded-md bg-slate-200"
                    value={ques[idx-1].statement}
                    style={{fontSize:visualData.fontSize}}
                    onChange={(e)=> changeQueStatement(idx-1,e.target.value)}
                />
            }
            </div>

            <div className="flex flex-col gap-2">
                {
                    que.options.map((opt, optIdx)=>(
                        
                        <label className="flex gap-3" htmlFor={`${idx} + ${optIdx}`} > 
                            <input 
                                type="radio" 
                                className="border"
                                name={`que${idx}`}  
                                id={`${idx} + ${optIdx}`} 
                                style={{fontSize:visualData.fontSize}}

                            /> 
                                <div className="custom-radio" style={{borderColor:visualData.buttonColor,borderRadius:"5px"}}></div>

                                {
                                    !edit ?
                                    <p style={{color:visualData.labelColor, fontFamily:visualData.fontFamily,fontSize:visualData.fontSize}}>{ques[idx-1].options[optIdx]}</p>
                                    :
                                    <input 
                                        type="text" 
                                        value={ques[idx-1].options[optIdx]} 
                                        onChange={(e)=> updateRadioOpt(idx-1, optIdx, e.target.value)}
                                        className="border rounded-md bg-slate-200 h-max w-full"
                                        style={{fontSize:visualData.fontSize}}
                                    />
                                    
                                }

                        </label>
                       
                    ))
                }
            </div>
        </div>
    )
}