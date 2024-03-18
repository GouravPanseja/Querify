import { MdOutlineDateRange,IoIosTime } from "../assets/assets";
import { useEffect, useState } from "react";
import useFormStore from "../stores/FormStore";
export default function DesignSubMenu() {


    const [formData, setFormData] = useState({
        startDate :"2024-08-25",
        startTime : "12:00",
        endDate : "2027-08-25",
        endTime : "12:00",
        responses: 0,
    })

    const {logicData, updateLogicData} = useFormStore((state)=> ({logicData: state.logicData , updateLogicData: state.updateLogicData}));

    console.log(logicData);

    useEffect(()=>{

        const startAt = formData.startDate + "T" + formData.startTime;
        
        

        const expiresAt = formData.endDate + "T" + formData.endTime;
        

        

        updateLogicData({startAt,expiresAt,participantCount:formData.responses});

    },[formData])



  return (
    <div className="w-full h-full">

        <div className="h-max w-full border-b">

            
            <div className="p-[16px] flex flex-col gap-4 border-b">
                <p className="text-[16px] font-semibold">Form Opens At</p>
                <div className="flex justify-between">
                    <p className="text-[#737373] text-[15px] w-[30%]">Date</p>
                    <input
                        type="date"
                        className="text-[#737373] text-[15px] flex-grow-[2] cursor-pointer outline-none hover:bg-gray-300 rounded-md"
                        value={formData.startDate}
                        onChange={(e)=> setFormData((prev) => ({...prev, startDate : e.target.value }))}
                    />
                </div>
                <div className="flex justify-between">
                    <p className="text-[#737373] text-[15px] w-[30%]">Time</p>
                    <input
                        type="time"
                        className="text-[#737373] text-[15px] flex-grow-[2] cursor-pointer outline-none hover:bg-gray-300 rounded-md" 
                        value={formData.startTime}
                        onChange={(e)=> setFormData((prev) => ({...prev, startTime : e.target.value }))}

                    />
                </div>
                

            </div>

            <div className="p-[16px] flex flex-col gap-4 border-b">
                <p className="text-[16px] font-semibold">Form Closes At</p>
                <div className="flex justify-between">
                    <p className="text-[#737373] text-[15px] w-[30%]">Date</p>
                    <input
                        type="date"
                        className="text-[#737373] text-[15px] flex-grow-[2] cursor-pointer outline-none hover:bg-gray-300 rounded-md"
                        value={formData.endDate}
                        onChange={(e)=> setFormData((prev) => ({...prev, endDate : e.target.value }))}

                    />
                </div>
                <div className="flex justify-between">
                    <p className="text-[#737373] text-[15px] w-[30%]">Time</p>
                    <input
                        type="time"
                        className="text-[#737373] text-[15px] flex-grow-[2] cursor-pointer outline-none hover:bg-gray-300 rounded-md" 
                        value={formData.endTime}
                        onChange={(e)=> setFormData((prev) => ({...prev, endTime : e.target.value }))}

                    />
                </div>
                

            </div>

            <div className="p-[16px] flex flex-col gap-4">
                <p className="text-[15px] font-semibold">Response Limit</p>
                <input 
                    type="number"
                    className="block outline-none border rounded-md px-2" 
                    value={formData.responses}
                    onChange={(e)=> setFormData((prev) => ({...prev, responses : e.target.value }))}
                />
            </div>

            
        </div>
    </div>
  );
}
