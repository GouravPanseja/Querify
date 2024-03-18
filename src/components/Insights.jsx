import {AnimatePresence, motion} from "framer-motion"
export default function Insights({form,responses}){

    const avgCompletionTime = ()=>{

        if(!responses){
            return "---"
        }
        var sum = 0;
        
        for(var response of responses){
            sum += response?.completionTime ? response.completionTime : 0 ;

        }
        return ((sum /responses?.length)/ 1000).toFixed(2);
    }

    return(
        <AnimatePresence mode="wait">
            <motion.div
                animate ={{
                    opacity:1
                }}
                initial={{
                    opacity:0
                }}
                exit={{
                    opacity:0
                }}
                transition={{
                    duration:0.5
                }}
                key = "insight"
            >
                        <h1 className="text-[24px]"> Big Picture</h1>
                        
                        <table className="result_table mt-7">
                    
                            <tr>
                                <th className="text-[14px] text-[#808080]">Views</th>
                                <th className="text-[14px] text-[#808080]" >Submissions</th>
                                <th className="text-[14px] text-[#808080]">Submission Rate</th>
                                <th className="text-[14px] text-[#808080]">Time to Complete</th>
                            </tr>

                            <tr className="">
                                <td className="text-[36px] tracking-widest font-thin text-center">
                                    {form?.views}
                                </td>
                                <td className="text-[36px] tracking-widest font-thin text-center">
                                    {form.responses?.length}
                                </td>
                                <td className="text-[36px] tracking-widest font-thin text-center">
                                    {((form.responses?.length/form?.views) * 100).toFixed(2)}%
                                </td>
                                <td className="text-[36px] tracking-widest font-thin text-center">
                                    {isNaN(avgCompletionTime()) ? "---" : avgCompletionTime()}s
                                </td>
                            </tr>
                
  
                        
                            <tr className="">
                                <th className="text-[14px] text-[#808080]">Created at</th>
                                <th className="text-[14px] text-[#808080]" >Live since</th>
                                <th className="text-[14px] text-[#808080]">Expires at</th>
                                <th className="text-[14px] text-[#808080]">Participants left</th>
                            </tr>

                            <tr>
                                <td className="text-[26px] tracking-widest font-thin text-center">
                                    {form?.createdAt?.split("T")[0]}
                                </td>
                                <td className="text-[26px] tracking-widest font-thin text-center">
                                    {form?.startAt?.split("T")[0]}
                                </td>
                                <td className="text-[26px] tracking-widest font-thin text-center">
                                    {form.expireAt?.split("T")[0] }
                                </td>
                                <td className="text-[26px] tracking-widest font-thin text-center">
                                    {(form?.participantCount - form?.responses?.length)}
                                </td>
                            </tr>
                
                        </table>
            </motion.div>
        </AnimatePresence>
        
    )
}