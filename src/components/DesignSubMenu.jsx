import {IoIosArrowRoundBack,FaRegEye, MdEdit} from "../assets/assets";
import { IoIosArrowDown,FaDroplet } from "../assets/assets";
import DropDownB from "./DropDownB";
import useFormStore from "../stores/FormStore";
import { useState } from "react";
import DropDownF from "./DropDownF";
import toast from "react-hot-toast";


export default function DesignSubMenu() {

  

    const {visualData, updateVisualData,setLogo,logo} = useFormStore( (state)=>({
        visualData: state.visualData,
        updateVisualData: state.updateVisualData,
        setLogo: state.setLogo,
        logo: state.logo
    }));

    console.log(visualData);

    const handleFileInput = (e)=>{
      const imageFile =  e.target.files[0];

      setLogo(imageFile);

      toast.success(`Image uploaded : ${imageFile.name}`, {
        style: {
          border: '1px solid green',
          padding: '6px',
          color: '#green',
          width: "max-content",
          maxWidth:"400px",
          overflow:"hidden",
        },
        iconTheme: {
          primary: 'green',
          secondary: '#FFFAEE',
        },
    });

    }

  return (
    <div className="w-full h-full flex flex-col ">
      <div>
        {/* Font family field */}
        <div className="w-full h-[120px] px-[16px] flex flex-col justify-center ">
          <div className="h-[50%] flex items-center ">
            <p className="font-semibold">My Theme</p>
          </div>
          <div className="h-[50%] flex items-center justify-center">
            <DropDownB />
          </div>
        </div>
        <div className="w-full h-max px-[16px] py-5 flex justify-between border-b ">
          <div className="h-[50%] flex items-center ">
            <p className="font-semibold">Font Size</p>
          </div>
          <div className="h-[50%] w-[35%] flex items-center justify-center">
            <DropDownF/>
          </div>
        </div>

        {/* Color fields */}
        <div className="w-full p-[16px] flex flex-col gap-4">
          <div className="w-full flex justify-between items-center ">
            <p className="text-[15px]">Questions</p>
            <div className="flex border p-2 rounded-md items-center gap-2 relative hover:bg-gray-200 transition-all duration-200">
              
              <input 
                type="color" 
                className="color_input" 
                value={visualData.queColor}
                onChange={(e)=> updateVisualData({queColor:e.target.value})}
            />

              <FaDroplet className={` color_icon`} style={{fill:visualData.queColor}}/>

              <IoIosArrowDown />
            </div>
          </div>
          <div className="w-full flex justify-between items-center">
            <p className="text-[15px]">Answers</p>
            <div className="flex border p-2 rounded-md items-center gap-2 relative hover:bg-gray-200 transition-all duration-200">
              <input 
                type="color" 
                className="color_input" 
                value = {visualData.ansColor}
                onChange={(e)=> updateVisualData({ansColor: e.target.value})}
            />

              <FaDroplet className=" color_icon" style={{fill:visualData.ansColor}}/>

              <IoIosArrowDown />
            </div>
          </div>
          <div className="w-full flex justify-between items-center">
            <p className="text-[15px]">Background</p>
            <div className="flex border p-2 rounded-md items-center gap-2 relative hover:bg-gray-200 transition-all duration-200">
              <input 
                type="color" 
                className="color_input" 
                value = {visualData.background}
                onChange={(e)=> updateVisualData({background: e.target.value})}
            />

              <FaDroplet className="fill-green-200 color_icon" style={{fill:visualData.background}} />

              <IoIosArrowDown />
            </div>
          </div>
          <div className="w-full flex justify-between items-center">
            <p className="text-[15px]">Labels</p>
            <div className="flex border p-2 rounded-md items-center gap-2 relative hover:bg-gray-200 transition-all duration-200">
              <input 
                type="color" 
                className="color_input" 
                value = {visualData.labelColor}
                onChange={(e)=> updateVisualData({labelColor: e.target.value})}
            />

              <FaDroplet className="fill-green-200 color_icon" style={{fill:visualData.labelColor}} />

              <IoIosArrowDown />
            </div>
          </div>
          <div className="w-full flex justify-between items-center">
            <p className="text-[15px]">Buttons</p>
            <div className="flex border p-2 rounded-md items-center gap-2 relative hover:bg-gray-200 transition-all duration-200">
              <input 
                type="color" 
                className="color_input" 
                value = {visualData.buttonColor}
                onChange={(e)=> updateVisualData({buttonColor: e.target.value})}
            />

              <FaDroplet className="fill-green-200 color_icon" style={{fill:visualData.buttonColor}} />

              <IoIosArrowDown />
            </div>
          </div>
        </div>

        {/* Logo field */}
        <div className="w-full px-[16px] flex flex-col gap-4 border">
          <div className="relative flex justify-between items-center w-full pt-3">
            <p className="text-[15px]">Logo</p>

            <div className="relative w-[60px] rounded-md h-[30px] overflow-hidden border cursor-pointer hover:bg-gray-200 transition-all duration-200">
              <input
                type="file"
                className="w-full h-full absolute top-0 right-0 opacity-0 cursor-pointer"
                onChange={handleFileInput}
              />
              <p className="text-[14px] w-full h-full flex items-center  text-center ml-3">
                Add
              </p>
            </div>
          </div>

          <div className="w-full  py-2"> 
            <div className="flex flex-col justify-between w-full gap-4">
                <p className="text-">Logo Radius</p>
                <input
                  type="range"
                  min={0} 
                  max={50} 
                  className="slider border-blue"
                  value={visualData.logoBorderRadius}
                  onChange={(e) => updateVisualData({logoBorderRadius:e.target.value})}
                />
            </div>
          </div>

        </div>

        
      </div>
    </div>
  );
}
