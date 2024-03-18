import { useState } from "react";
import useEditStore from "../../stores/EditStatus"
import { IoMdAdd } from "../../assets/assets";
import {motion ,useAnimation} from "framer-motion"
import update from "../../utils/updateQue.js";
import useQueStore from "../../stores/QueStore"
import AddQue from "../AddQue"
import useFormStore from "../../stores/FormStore";

export default function  Email({que,idx}){

    const {visualData, updateVisualData} = useFormStore( (state)=>({
        visualData: state.visualData,
        updateVisualData: state.updateVisualData,
    }));


    const edit = useEditStore((state) => state.edit);


    const {ques, changeQueStatement} = useQueStore( ( state) => ({
        ques: state.ques,
        changeQueStatement: state.changeQueStatement,
    }));

    return (
        <div className="h-full w-full flex flex-col gap-1 rounded-md hover:shadow-lg hover:bg-slate-50 transition-all duration-100 relative container que  ">

            <AddQue idx={idx}/>
           
            <div
                className="w-full h-full mb-3"
                >
                {
                    !edit ?
                    <p className="w-full h-max p-2 pl-0" style={{color:visualData.queColor, fontFamily:visualData.fontFamily, fontSize:visualData.fontSize}}>{idx}. {ques[idx-1].statement}</p>:
                    <textarea 
                     
                        className="border w-full h-[40px] pl-2 rounded-md bg-slate-200"
                        style={{fontSize:visualData.fontSize}}
                        value={ques[idx-1].statement}
                        onChange={(e)=> changeQueStatement(idx-1,e.target.value)}
                    />

                }
            </div>
            

            <div>
                <input 
                    type="email"
                    className="border w-[60%] h-[40px] p-2 rounded-md"
                    style={{fontSize:visualData.fontSize}}
                />
            </div>
        </div>
    )
}
