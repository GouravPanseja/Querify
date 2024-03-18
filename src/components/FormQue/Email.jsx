import useEditStore from "../../stores/EditStatus"
import useQueStore from "../../stores/QueStore"
import AddQue from "../AddQue"
import useFormStore from "../../stores/FormStore";
import useResponseStore from "../../stores/ResponseStore";

export default function  Email({form,que,idx}){

    const {responses, updateResponses} = useResponseStore( (state)=>({
        
        responses:state.responses,
        updateResponses:state.updateResponses,
    }));


    return (
        <div className="h-full w-full flex flex-col gap-1 rounded-md hover:shadow-lg hover:bg-slate-50 transition-all duration-100 relative container que ">
           
            <div className="w-full h-full mb-3">
  
                <p className="w-full h-max p-2 pl-0" style={{color:form.visualData.queColor, fontFamily:form.visualData.fontFamily, fontSize:form.visualData.fontSize}}>{idx}. {que.statement}</p>
                    
            </div>


            <div>
                <input 
                    type="email"
                    className="border w-[60%] h-[40px] p-2 rounded-md"
                    style={{fontSize:form.visualData.fontSize}}
                    value={responses[`q${idx-1}`]}
                    onChange={(e)=> updateResponses({[`q${idx-1}`] : e.target.value})}
                />
            </div>
        </div>
    )
}
