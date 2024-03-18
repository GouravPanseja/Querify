import { useState,useEffect } from "react";
import useEditStore from "../../stores/EditStatus"
import AddQues from "../AddQue";
import useQueStore from "../../stores/QueStore";
import useFormStore from "../../stores/FormStore";
import useResponseStore from "../../stores/ResponseStore";

export default function  Matrix({form,que,idx}){

    const {responses, updateResponses} = useResponseStore( (state)=>({
        
        responses:state.responses,
        updateResponses:state.updateResponses,
    }));

    return (
        <div className="h-full w-full flex flex-col relative que  hover:shadow-lg hover:bg-slate-50 transition-all duration-100 overflow-x-scroll">

            {/* statement */}
            <div className="w-full h-full mb-6">      
                <p className="w-full h-max p-2 pl-0" style={{color:form.visualData.queColor,fontFamily:form.visualData.fontFamily,fontSize:form.visualData.fontSize}}>{idx}. {que.statement}</p>

            </div>

            <table className="">
                <tr className=" ml-[30%] w-[70%] h-[30px] flex justify-between mt-7 items-center ">
                        {
                            que.matrixColumns.map((col,colIdx)=>(
                                <th className="text-[13px] ">
                                    <p style={{color:form.visualData.labelColor, fontFamily:form.visualData.fontFamily}}>{col}</p> 
                                </th>
                            ))
                        }
                </tr>

                    {
                        que.matrixRows.map((row,rowIdx)=>(

                            <tr className="flex  gap-2 w-full justify-between items-center">

                                <td className="w-[30%]">

                                    <p style={{color:form.visualData.labelColor,fontFamily:form.visualData.fontFamily,fontSize:form.visualData.fontSize}}>{row}</p>  

                                </td>


                                {
                                    que.matrixColumns.map((col,colIdx)=>(
                                        <td>
                                            <label className="cursor-pointer">
                                                <input 
                                                    type="radio" 
                                                    name={row + rowIdx}
                                                    style={{fontSize:form.visualData.fontSize}}
                                                    value={{row : col}}
                                                    onChange={(e) => {
                                                        const { name, value } = e.target;
                                                        const rowKey = name.substring(0, name.indexOf(' ')); // Extracting the row key from the input name
                                                        const updatedResponse = { ...responses[`q${idx - 1}`], [rowKey]: value };
                                                        updateResponses({ [`q${idx - 1}`]: updatedResponse });
                                                    }}

                                                />
                                                <span class="custom-radio" style={{borderColor:form.visualData.buttonColor,fontSize:form.visualData.fontSize}}></span>
                                                
                                            </label>
                                        </td>
                                        
                                    ))
                                }

                                
                            </tr>
                        ))
                    }

            </table>

                
        </div>
    )
}   