import React, { useEffect,useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import {IoIosArrowRoundBack,FaRegEye, MdEdit} from "../assets/assets";
import { useNavigate } from "react-router-dom";
import {Checkbox , Date, Matrix ,Range, Radio, Text, Textarea,Email} from "../components/Que/index.js";
import useEditStore from "../stores/EditStatus";
import useQueStore from "../stores/QueStore";
import DesignSubMenu from "../components/DesignSubMenu"
import LogicSubMenu from "../components/LogicSubMenu";
import useFormStore from "../stores/FormStore";
import {motion} from "framer-motion";
import OtherSubMenu from "../components/OtherSubMenu"
import AddQues from "../components/AddQue";

export default function Preview(){
    const location = useLocation();

    const navigate = useNavigate();
    const {visualData, updateVisualData, logo} = useFormStore( (state)=>({
        visualData: state.visualData,
        updateVisualData: state.updateVisualData,
        logo : state.logo,
    }));

    const [template, setTemplate] = useState();
    const [customise, setIsCustomise] = useState(false);
    const [sideMenu, setSideMenu] = useState("design");

    const [currentNav, setCurrentNav] = useState("preview")

    const {ques, setQues,title,updateTitle} = useQueStore((state)=>({
        ques: state.ques,
        setQues:state.setQues,
        title:state.title,
        updateTitle:state.updateTitle,
    }))

    const {edit, setEdit} = useEditStore((state) => ({
        edit: state.edit,
        setEdit:state.setEdit,
    }));

    const path = location.pathname.split("/")
    const id = path[path.length -1];
  
    const fontFamily = useQueStore((state)=> state.fontFamily);

    const fetchTemplate = async ()=>{

        try{
            const token = localStorage.getItem("token");

            const response =  await axios.post(`${process.env.REACT_APP_BASE_URL}/getTemplate`,{id}, {

                headers:{
                    Authorization: `Bearer ${token}`
                },
            });


            console.log(response.data.data);

            setTemplate(response.data.data);   
            
            updateTitle(response.data.data.title);
            const questions = (response.data.data.data);

            for(let i = 0 ; i < questions.length; i++){
                delete questions[i]._id ;
            }

            console.log(questions);
            setQues(questions);           // giving array of questions

            toast.success("data fetched succesfully", {
                style: {
                  border: '1px solid green',
                  padding: '6px',
                  color: 'green',
                },
                iconTheme: {
                  primary: 'green',
                  secondary: '#FFFAEE',
                },
            });


        }
        catch(err){
            console.log(err);

            toast.error(err?.response?.data?.message || err?.message, {
                style: {
                  border: '1px solid red',
                  padding: '6px',
                  color: '#red',
                },
                iconTheme: {
                  primary: 'red',
                  secondary: '#FFFAEE',
                },
            });
        }

        


    }

    useEffect( ()=>{
        

        fetchTemplate();

    },[])

    console.log(visualData.logoBorderRadius)
    console.log(logo);
    console.log(template?.thumbnail);



    return(
        <div className="w-screen min-h-screen h-max bg-[#fafafa]">

            {/* Sidebar */}
            <div className={`sidebar fixed top-0 left-0 w-[256px] h-screen shadow-md bg-white  ${!customise && "p-[30px]"}   border `}>

                {
                    !customise ? 
                    <div className="w-full h-full flex flex-col gap-5">
                            {/* back */}
                        <div className="flex gap-3 items-center mb-5 cursor-pointer" onClick={()=> navigate("/templateBank")}>
                            <IoIosArrowRoundBack/>
                            <button>back</button>
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="text-[1.2em] px-4 min-h-[30px] font-semibold">{title}</p>
                            <p className="text-[13px] text-[#676666]">{template?.description}</p>
                        </div>

                        {/* question */}
                        <div>   
                            <p className="text-[13px] text-[#676666]">Questions</p>
                            <p className="text-[22px] font-semibold">{ques.length}</p> 
                        </div>
                        <div>   
                            <p className="text-[13px] text-[#676666]">No of times used</p>
                            <p className="text-[22px] font-semibold">1240</p> 
                        </div>
                        <div>   
                            <p className="text-[13px] text-[#676666]">Estd compeletion time</p>
                            <p className="text-[22px] font-semibold">{template?.estimatedTime}</p> 
                        </div>
                        <div className="flex items-center justify-center mt-2 ">
                            <button 
                                className="text-[14px] bg-black text-white px-3 py-3 rounded-md shadow-lg hover:bg-slate-700 transition-all duration-100"
                                onClick={()=> setIsCustomise((prev)=> !prev)}
                                >Customise </button>
                        </div>
                    </div> :

                    <div className="w-full h-full">

                        {/* Back button */}
                        <div className="w-full h-[49px] border-b ">
                                    <div className="flex gap-3 w-full h-[49px] px-[16px] items-center mb-5 cursor-pointer " onClick={()=> setIsCustomise((prev)=> !prev)}>
                                            <IoIosArrowRoundBack/>
                                            <button>back</button>
                                    </div>
                        </div>

                        {/* subMenues */}
                        <div className="w-full h-[49px] border-b ">

                                    <div className="w-full h-full px-[16px] flex justify-between items-center">
                                        <div 
                                            className={`text-[14px] relative h-full ${ sideMenu === "design" ? "text-black" : "text-[#949393]"} flex items-center cursor-pointer hover:text-[#2d2d2dc1]`}
                                            onClick={()=> setSideMenu("design")}

                                        >
                                            Design
                                            {
                                                sideMenu === "design" &&
                                                <span className="w-full h-[2px] bg-black absolute bottom-0 left-0"></span>
                                            }
                                            
                                        </div>
                                        <div 
                                            className={`text-[14px] relative h-full ${ sideMenu === "logic" ? "text-black" : "text-[#949393]"} flex items-center cursor-pointer hover:text-[#2d2d2dc1]`}
                                            onClick={()=> setSideMenu("logic")}
                                        >
                                            Logic
                                            {
                                                sideMenu === "logic" &&
                                                <span className="w-full h-[2px] bg-black absolute bottom-0 left-0"></span>
                                            }
                                            
                                        </div>
                                        <div 
                                            className={`text-[14px] relative h-full ${ sideMenu === "settings" ? "text-black" : "text-[#949393]"} flex items-center cursor-pointer hover:text-[#2d2d2dc1]`}
                                            onClick={()=> setSideMenu("settings")}
                                        >
                                            Settings
                                            {
                                                sideMenu === "settings" &&
                                                <span className="w-full h-[2px] bg-black absolute bottom-0 left-0"></span>
                                            }
                                            
                                        </div>

            
                                    </div>
                        </div>


                        {
                            sideMenu === "design" ? 
                                <DesignSubMenu/>
                            :
                            sideMenu === "logic" ? 
                                <LogicSubMenu /> 
                            :
                            sideMenu === "settings" ?
                                <OtherSubMenu/> : null
                        }
                    </div>
                }

                
                
            </div>

             {/* Navbar */}
            <div className="navbar fixed top-0 left-[256px] flex  items-center justify-center gap-2 h-[50px] w-full bg-white shadow-sm z-[100] border border-l-0 relative" style={{width:"calc(100vw - 256px)"}}>

                <div 
                    className={`h-full px-3 flex items-center justify-center gap-1 cursor-pointer`} 
                    onClick={()=> {setEdit(false); setCurrentNav("preview")}}
                > 
                   
                   <p className={`${currentNav === "preview" ? "text-black border-black " : "text-[#8c8c8c]"} text-[15px] border h-full border-b-2 border-transparent flex items-center font-semibold`}>preview</p>  
                </div>
                <div 
                    className={`h-full px-3 flex items-center justify-center gap-1  cursor-pointer`}
                    onClick={()=> {setEdit(true); setCurrentNav("create")}}
                >
                    
                    <p className={`${currentNav === "create" ? "text-black" : "text-[#8c8c8c]"} text-[15px]  flex items-center border border-b-2 border-transparent  font-semibold `}>create</p>  
                </div>


                <div 
                    className={`h-full px-3 flex items-center justify-center gap-1  cursor-pointer absolute right-[50px] `}
                    onClick={()=> {navigate("/shareForm")}}
                >
                    
                <p className="text-[14px] bg-[#036351] text-white py-[7px] font-semibold px-4 rounded-md shadow-lg hover:bg-[#036351d1] transition-all duration-200 hover:shadow-xl">Publish</p>
                </div>
                
               
            </div>

            
            {
                currentNav !== "share" ?
                <div className=" ml-[256px]  h-max " style={{ width:"calc(100vw - 256px)"}}>


                    <div className="w-[75%]  h-max mx-auto pt-[100px] relative ">

                        <div className="flex flex-col gap-2 rounded-lg shadow-lg justify-center relative border bg-white bg-center bg-contain bg-no-repeat "  style={{backgroundColor:visualData.background, background:`url(${visualData.backgroundImage})`}}>
                            {
                                ques.length ===0 &&
                                <AddQues visible="block"/>
                            }
                            
                            
                            <div className="absolute top-7 right-7 h-[100px] w-[100px] flex justify-center items-center">
                                {
                                    logo &&
                                    <img src={URL.createObjectURL(logo)} alt="logo" className={`object-cover  w-full h-full`} style={{borderRadius:`${visualData.logoBorderRadius}%`}}/>
                                }   
                            
                            </div>

                            
                            <h1 className="text-[22px] text-center mb-7 pt-5">
                                {
                                    !edit ?
                                    <p className="hover:bg-slate-200 w-max mx-auto " style={{fontFamily:visualData.fontFamily}}>{title}</p> 
                                    :
                                    <input
                                        type="text"
                                        className="text-center rounded-md bg-slate-200"
                                        value={title}
                                        onChange={(e)=> updateTitle(e.target.value)}
                                    />
                                }
                            
                            </h1>
                        {
                            ques?.map((que, idx )=>(
                                
                                <div className="w-full my-7 p-5" >
                                    {
                                        que.type === "text" ?       <Text que={que}  idx={idx+1}/> : 
                                        que.type === "textarea" ?   <Textarea que={que} idx={idx+1}/> : 
                                        que.type === "radio" ?      <Radio que={que} idx={idx+1}/> :
                                        que.type === "checkbox" ?   <Checkbox que={que} idx={idx+1}/> : 
                                        que.type === "range" ?      <Range que={que} idx={idx+1}/> : 
                                        que.type === "date" ?       <Date que={que} idx={idx+1}/> : 
                                        que.type === "matrix" ?     <Matrix que={que} idx={idx+1}/> :
                                        que.type === "email" ?      <Email que={que} idx={idx+1}/> :
                                        null
                                    }
                                </div>
                            ))
                        }
                        </div>
                    </div>


                </div>
                : null
            }


            
        </div>

        

    )
}