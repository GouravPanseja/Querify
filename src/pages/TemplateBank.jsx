import Navbar from "../components/Navbar";
import { IoIosSearch,IoIosArrowDown,FaMoneyCheckDollar,MdSentimentVerySatisfied,RiGovernmentLine,MdLocalHospital,MdSchool ,heroDevice, IoMdAdd} from "../assets/assets";
import { useState,useEffect } from "react";
import { useAnimation,motion, AnimatePresence } from "framer-motion";
import Dropdown from "../components/Dropdown";
import TemplateContainer from "../components/TemplateContainer";
import toast from "react-hot-toast";
import axios from "axios";
import useTemplateStore from "../stores/templateStore";
import TemplateCard from "../components/TemplateCard";
import {templates} from "../data/templates";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import TempSubMenu from "../components/TempSubMenu";
import { MagnifyingGlass } from "react-loader-spinner";
import { gsap,ScrollTrigger } from "gsap/all";
import { ClipLoader } from "react-spinners";
export default function TemplateBank(){
    const controls = useAnimation();

    const refTrigger = useRef(null);


    const navigate  = useNavigate();

    const handleScroll = (e)=>{ 
        console.log("setted");
        console.log(window.scrollY);
        
        
        const scrollPosition = window.scrollY ;

        if(scrollPosition >= 80 ){
            controls.start({
                top:0,
                duration:0.5,
            })
        }
    }

    const [templates, setTemplates] = useState([]);
    const [loading , setLoading] = useState(false);
    const [educationalTemps , setEducationTemps] = useState([]);
    const [marketTemps , setMarketTemps] = useState([]);
    const [healthCareTemps , setHealthCareTemps] = useState([]);
    const [customerTemps , setCustomerTemps] = useState([]);
    const [diversityTemps , setDiversityTemps] = useState([]);
    const [covidTemps , setCovidTemps] = useState([]);
    const [governmentTemps , setGovernmentTemps] = useState([]);

    const [marketMenu, setMarketMenu] = useState(false);
    const [educationMenu, setEducationMenu] = useState(false);
    const [healthcareMenu, setHealthcareMenu] = useState(false);
    const [customerMenu, setCustomerMenu] = useState(false);
    const [diversityMenu, setDiversityMenu] = useState(false);
    const [governmentMenu, setGovernmentMenu] = useState(false);
    const [covidMenu, setCovidMenu] = useState(false);

    const category = useTemplateStore((state)=> state.category);

    const refSib2 = useRef(null);
    const refSib1 = useRef(null);



    const filterTemp = (arr, categ)=>{
        
        const result = arr.filter((template)=> template.category === categ);

        return result;
    }
    

    const  fetchTemplates = async ()=>{

        try{

            setLoading(true);
            const token = localStorage.getItem("token");
            
            const response =await  axios.get(`${process.env.REACT_APP_BASE_URL}/getAllTemplates`,{
                headers: {
                    Authorization: `Bearer ${token}`
            }});
            
            console.log(response?.data?.data);

            setTemplates(response?.data?.data);

            setEducationTemps(filterTemp(response.data.data,"education"));
            setMarketTemps(filterTemp(response.data.data,"market"));
            setHealthCareTemps(filterTemp(response.data.data,"healthcare"));
            setCustomerTemps(filterTemp(response.data.data,"customer"));
            setDiversityTemps(filterTemp(response.data.data,"diversity"));
            setCovidTemps(filterTemp(response.data.data,"covid"));
            setGovernmentTemps(filterTemp(response.data.data, "government"))

        
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
                  border: '1px solid green',
                  padding: '6px',
                  color: '#green',
                },
                iconTheme: {
                  primary: 'green',
                  secondary: '#FFFAEE',
                },
            });
        }    
        
        setLoading(false);
    }

    useEffect(()=>{

        fetchTemplates();


        gsap.registerPlugin(ScrollTrigger);

        gsap.to(".template-navbar",{
            top:0,
           
            trigger:refTrigger.current,



            markers:true,

            
        })
       

    },[])

    useEffect (()=>{
        refSib1.current.style.MinHeight = `${refSib2.current.offsetHeight}px`;
    },[category])
    


    console.log(category);
    return(
        <AnimatePresence mode="wait">
            <motion.div 
                className=" h-screen w-screen bg-[#fafafa] overflow-x-hidden relative" 
                key="templateBank"
                animate={{
                    opacity:1,
                }}
                transition={{
                    duration:0.5
                }}
                initial={{
                    opacity:0
                }}
                exit={{
                    opacity:0,
                    transition: { duration: 0.5 }
                }}

            >

                <div

                    className="template-navbar min-h-[54px] w-full bg-[#fafafae1] fixed top-[-54px] left-0 z-[11]" 
                    style={{backdropFilter:"blur(10px)"}}
                >

                </div>
                <div ref={refTrigger} className="absolute top-[100px] h-1 bg-slate-600 w-full trigger"></div>

                <Navbar bgColor={""} border={""}/>

               

                {/* HERO */}
                <div className="template_hero h-[80%] w-full bg-center flex relative" >

                    <div className="min-w-[50%] flex justify-center items-center">

                        <div className=" md:w-[90%] w-full md:px-0 px-3  h-full flex flex-col justify-center items-center z-[10]">

                            <p className="sm:text-[4rem]  text-[2.5rem] text-left w-full whitespace-nowrap ">Get inspired. </p>
                            <p className="sm:text-[4rem]  text-[2.5rem] text-left w-full whitespace-nowrap">Pick a template. </p>
                            <p className="sm:text-[4rem]  text-[2.5rem] text-left w-full whitespace-nowrap">Make it your own.</p>
                        </div>      
                    </div>
                    <div className="max-w-[50%] md:flex hidden justify-center items-center ">
                        <img 
                            alt="hero-img" 
                            src={heroDevice}
                            className="lg:max-h-[360px] lg:max-w-[645px] md:max-h-[330px] md:max-w-[590px] absolute left-[50%] hidden sm:block" 
                        />
                    </div>
                </div>

 
                <div className="flex h-max gap-[40px]">

                    <div className="sib2 w-[30%] hidden  lg:flex justify-end" ref={refSib1}>
                        
                        <div className=" h-screen w-[253px] sticky top-[50px]  justify-end pt-[70px] overflow-y-scroll" style={{height:"calc(100vh - 50px)"}}>
                            
                            <div className="text-[20px] py-3 border-b border-gray-300 font-semibold mr-11">
                                Our templates
                            </div>

                            <TempSubMenu templates={marketTemps} title={"Market"}/> 
                            <TempSubMenu templates={educationalTemps} title={"Education"}/> 
                            <TempSubMenu templates={healthCareTemps} title={"Healthcare"}/> 
                            <TempSubMenu templates={customerTemps} title={"Customer"}/> 
                            <TempSubMenu templates={governmentTemps} title={"Government"}/> 
                            <TempSubMenu templates={diversityTemps} title={"Diversity"}/> 
                            <TempSubMenu templates={covidTemps} title={"Covid"}/> 


                                
                        </div>
                    </div>

                    <div 
                        className="sib1 min-h-screen h-max lg:w-[70%] w-full px-[20px] relative bg-[#fafafa]"
                        ref={refSib2}
                        >

                        {/* Searchbar and categories */}
                        <div className="flex w-full sm:flex-row flex-col  relative items-center justify-between  h-[60px] gap-2 py-[8px] my-7">

                            {/* SEARCH FIELD */}
                            <div className="sm:w-[60%] w-full sm:h-full h-[50px] flex items-center gap-2  pl-2 rounded-md bg-white  shadow-md">
                                <IoIosSearch 
                                    className="text-[1.5rem]"
                                />
                                <input
                                    type="text"
                                    className="w-full sm:h-full h-[50px] p-2 py-3 text-[14px] outline-none rounded-r-md" 
                                    placeholder="Search all templates and categories"
                                />
                            </div>

                            {/* DROP DOWN */}
                            
                            <Dropdown/>
                            

                        </div>

                        {/* // templates */}


                        {
                            loading ?
                            <div className="absolute top-[50%] left-[50%]">
                                <ClipLoader color="#000000" className="absolute top-[50%] left-[50%]" />
                            </div>

                            
                            :
                            category === "all" ?
                            <div className="sm:mt-0 mt-[60px]">
                                {   
                                    educationalTemps.length !==0  &&
                                    <TemplateContainer templates={educationalTemps}/>
                                }
                                {   
                                    marketTemps.length !==0  &&
                                    <TemplateContainer templates={marketTemps}/>
                                }
                                
                                {   
                                    customerTemps.length !==0  &&
                                    <TemplateContainer templates={customerTemps}/>
                                }
                                {   
                                    diversityTemps.length !==0  &&
                                    <TemplateContainer templates={diversityTemps}/>
                                }
                                {   
                                    healthCareTemps.length !==0  &&
                                    <TemplateContainer templates={healthCareTemps}/>
                                }                                
                                
                                {   
                                    governmentTemps.length !==0  &&
                                    <TemplateContainer templates={governmentTemps}/>
                                }
                                
                                {   
                                    covidTemps.length !==0  &&
                                    <TemplateContainer templates={covidTemps}/>
                                }
                                

                            </div>
                            :
                            <div className="flex flex-wrap gap-6 ">
                                {
                                    category === "education" ?
                                    <div className="flex flex-wrap gap-6 sm:mt-0 mt-[60px]" >
                                        {
                                            educationalTemps.map((temp)=>(
                                                <TemplateCard template={temp} />
                                            ))
                                        }
                                    </div>
                                    :
                                    
                                    category === "customer" ?
                                    <div className="flex flex-wrap gap-6 sm:mt-0 mt-[60px]">
                                        {
                                            customerTemps.map((temp)=>(
                                                <div>
                                                    <TemplateCard template={temp} />
                                                </div>
                                            ))
                                        }
                                    </div>
                                    :
                                    
                                    category === "market" ?
                                    <div className="flex flex-wrap gap-6 sm:mt-0 mt-[60px]">

                                        <p className="text-[2.5rem]">Market Surveys</p>
                                        <div className="flex gap-[25px] flex-wrap">
                                            {
                                                marketTemps.map((temp)=>(
                                                    <div>
                                                        <TemplateCard template={temp} />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        
                                    </div>
                                    :
                                    
                                    category === "customer" ?
                                    <div className="flex flex-wrap sm:mt-0 mt-[60px]">
                                        {
                                            customerTemps.map((temp)=>(
                                                <div>
                                                    <TemplateCard template={temp} />
                                                </div>
                                            ))
                                        }
                                    </div>
                                    :
                                    category === "diversity" ?
                                    <div className="flex flex-wrap gap-6 sm:mt-0 mt-[60px]">
                                        {
                                            diversityTemps.map((temp)=>(
                                                <div>
                                                    <TemplateCard template={temp} />
                                                </div>
                                            ))
                                        }
                                    </div>
                                    :
                                    category === "government" ?
                                    <div className="flex flex-wrap gap-6 sm:mt-0 mt-[60px]">
                                        {
                                            governmentTemps.map((temp)=>(
                                                <div>
                                                    <TemplateCard template={temp} />
                                                </div>
                                            ))
                                        }
                                    </div>
                                    :
                                    category === "healthcare" ?
                                    <div className="flex flex-wrap gap-6 sm:mt-0 mt-[60px]">
                                        {
                                            healthCareTemps.map((temp)=>(
                                                <div>
                                                    <TemplateCard template={temp} />
                                                </div>
                                            ))
                                        }
                                    </div>
                                    :
                                    null
                                    
                                }
                            </div>
                        }

                        {
                            
                        }



                    
                    </div>
                </div>

                
            
            </motion.div>
        </AnimatePresence>
        
    )
}

 {/* {
                        category === "all" ? 
                        <div>
                            <TemplateContainer templates={customerTemps} /> 
                            <TemplateContainer templates={educationalTemps} /> 
                            <TemplateContainer templates={marketTemps} /> 
                            <TemplateContainer templates={healthCareTemps} /> 
                            <TemplateContainer templates={diversityTemps} /> 
                            <TemplateContainer templates={covidTemps} /> 
                        </div>
                        :
                        <div>

                        {
                            filteredTemplates &&

                            filteredTemplates.map((template)=>(
                                <div></div>
                            )) 
                        }
                            
                        </div>

                        
} */}