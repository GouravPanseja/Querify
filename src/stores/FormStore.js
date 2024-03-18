import { create } from "zustand";

let today = new Date();
let timestamp = today.getTime();
timestamp += 30 * 24 * 60 * 60 * 1000;
today.setTime(timestamp);

const formStore = (set) => ({ 

    visualData:{
        queColor:"black",
        ansColor:"black",
        background:"#ffffff",
        fontFamily:"Space Grotesk",
        fontSize:"16px",
        labelColor:"black",
        buttonColor:"#38a2e7",
        logoBorderRadius:"0px",
        titleColor:"black",
        titleSize:"22px",
        backgroundImage:"",
    },

    logicData:{
        startAt:new Date().toISOString().split('T')[0],
        expiresAt: today.toISOString().split('T')[0],
        participantCount:100,
    },
    
    logo:null,

    newForm:{},

    setLogo: (file)=>{
        set( (state)=>( { logo: file}));
    },

    updateLogicData: (data)=>{
        set((state)=>{
            const obj = {...state.logicData, ...data }

            return({logicData: obj})
        })
    },

    updateVisualData: (data)=>{
        set((state)=>{
            const obj = {...state.visualData, ...data }

            return({visualData: obj})
        })
    },


    setNewForm: (data)=> {
        set((state)=> ({newForm:data}));
    }
});

const useFormStore = create(formStore);

export default useFormStore;




