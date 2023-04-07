import React, {useRef, useState, useEffect} from 'react'


const Form = () => {

    const formRef = useRef(null)
    const [form, setForm] = useState({
        gender: "",
        highestqualification: "",
        rural: "",
        disability:"",
        iswaterfilter:"",
        chew:"",
        smoke:"",
        alcohol:"",
        treatment:"",



    })
    const [isMobile, setIsMobile] = useState(false)

    const handleSubmit = async(event) => {
        event.preventDefault()
        console.log(form)
        let finalres = "";
        Object.keys(form).map((key, value) => {
            finalres += form[key]+"-";
            console.log(key);
        })
        const res = await fetch(`http://localhost:8000/home/${finalres}`,{method:'GET',mode:'cors'});
        const data = await res.json()
        console.log(data);  

        console.log(finalres);
       
    }

    const handleChange = (event) => {
        const { target } = event;
        const { name, value } = target;
    
        setForm({
          ...form,
          [name]: value,
        });
        
    }
 
    useEffect(() => {
        // if (window.innerWidth < 500) {
        //   setIsMobile(true);
        // }
    
        const mediaQuery = window.matchMedia("(max-width: 1000px)");
        setIsMobile(mediaQuery.matches);
    
        const handleMediaQueryChange = (event) => {
          setIsMobile(event.matches);
        };
        mediaQuery.addEventListener("change", handleMediaQueryChange);
    
        return () => {
          mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
      }, []);
  return (
    <div
        className={` w-screen font-sans font-bold sm:min-h-full sm:h-full min-h-full border-b-4 border-[#DEAD4F] mr-6 p-6 pb-10 flex ${isMobile ? "flex-col" : "flex-row"}`}
    >
        <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-0 flex flex-col gap-8 sm:px-32 px-10"
        >
            <label className='flex flex-col'>
                <span className='text-black font-medium mb-4'> Gender </span>
                {/* <input 
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    placeholder='placeholder 1'
                    className="dark:bg-black bg-white py-4 px-6  dark:text-white text-black rounded-lg outline-none border-none font-medium"
                /> */}

                <select
                    className="dark:bg-black bg-white py-4 px-6  dark:text-white text-black rounded-lg outline-none border-none font-medium"    
                    name='gender'  value={form.gender} onChange={handleChange}
                >
                    <option value="1"> Male </option>
                    <option value="2"> Female </option>
                </select>

                
            </label>

            <label className='flex flex-col'>
                <span className='text-black font-medium mb-4'> Highest Qualification  </span>
                <select
                    className="dark:bg-black bg-white py-4 px-6  dark:text-white text-black rounded-lg outline-none border-none font-medium"    
                    name='highestqualification' value={form.highestqualification} onChange={handleChange}
                >
                    <option value="0"> Illiterate </option>
                    <option value="1"> School </option>
                    <option value="2"> Bachelors </option>
                    <option value="3"> Masters </option>
                    <option value="4"> PhD </option>
                </select>
            </label>
            
            
            <label className='flex flex-col'>
                <span className='text-black font-medium mb-4'> Rural / Urban / Metropolitan City </span>
                <select
                    className="dark:bg-black bg-white py-4 px-6  dark:text-white text-black rounded-lg outline-none border-none font-medium"    
                    name='rural' value={form.rural} onChange={handleChange}
                >
                    <option value="0"> Rural </option>
                    <option value="1"> Urban </option>
                    <option value="2"> Metropolitan City </option>
                </select>
            </label>
            
            <label className='flex flex-col'>
                <span className='text-black font-medium mb-4'> Do you have any disability? </span>
                <select
                    className="dark:bg-black bg-white py-4 px-6  dark:text-white text-black rounded-lg outline-none border-none font-medium"    
                    name='disability'    value={form.disability}  onChange={handleChange}  
                >
                    <option value="0"> No </option>
                    <option value="1"> Yes </option>
                </select>
            </label>

            <label className='flex flex-col'>
                <span className='text-black font-medium mb-4'> Is your water clean? </span>
                <select
                    className="dark:bg-black bg-white py-4 px-6  dark:text-white text-black rounded-lg outline-none border-none font-medium"    
                    name='iswaterfilter' value={form.iswaterfilter} onChange={handleChange}
                >
                    <option value="0"> Not Clean </option>
                    <option value="1"> Partially CLean </option>
                    <option value="2"> Fully Clean </option>
                </select>
            </label>

            <label className='flex flex-col'>
                <span className='text-black font-medium mb-4'> On a scale of 0-7, how often do you chew tobacco? </span>
                <select
                    className="dark:bg-black bg-white py-4 px-6  dark:text-white text-black rounded-lg outline-none border-none font-medium"    
                name="chew" value={form.chew} onChange={handleChange}
                >
                    <option value="0"> 0 </option>
                    <option value="1"> 1 </option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                    <option value="4"> 4 </option>
                    <option value="5"> 5 </option>
                    <option value="6"> 6 </option>
                    <option value="7"> 7 </option>
                    
                </select>
            </label>
            
            <label className='flex flex-col'>
                <span className='text-black font-medium mb-4'> On a scale of 0-4, how often do you smoke? </span>
                <select
                    className="dark:bg-black bg-white py-4 px-6  dark:text-white text-black rounded-lg outline-none border-none font-medium"    
                    name="smoke" value={form.smoke} onChange={handleChange}
                >
                    <option value="0"> 0 </option>
                    <option value="1"> 1 </option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                    <option value="4"> 4 </option>
                </select>
            </label>

            
            <label className='flex flex-col'>
                <span className='text-black font-medium mb-4'> On a scale of 0-4, how often do you drink alcohol? </span>
                <select
                    className="dark:bg-black bg-white py-4 px-6  dark:text-white text-black rounded-lg outline-none border-none font-medium"    
                name="alcohol" value={form.alcohol} onChange={handleChange}
                >
                    <option value="0"> 0 </option>
                    <option value="1">  1</option>
                    <option value="2">  2</option>
                    <option value="3">  3</option>
                    <option value="4">  4</option>
                </select>
            </label>
            
            
            <label className='flex flex-col'>
                <span className='text-black font-medium mb-4'> On a scale of 0-9, how often do you get treatment / consult a doctor? </span>
                <select
                    className="dark:bg-black bg-white py-4 px-6  dark:text-white text-black rounded-lg outline-none border-none font-medium"    
                name="treatment" value={form.treatment} onChange={handleChange}
                >
                    <option value="0"> 0 </option>
                    <option value="1"> 1 </option>
                    <option value="2"> 2 </option>
                    <option value="3"> 3 </option>
                    <option value="4"> 4 </option>
                    <option value="5"> 5 </option>
                    <option value="6"> 6 </option>
                    <option value="7"> 7 </option>
                    <option value="8"> 8 </option>
                    <option value="9"> 9 </option>

                </select>
            </label>
                
          <button
            type="submit"
            className="bg-[#dead4f] py-2 px-6 rounded-xl outline-none w-fit text-black text-xl font-bold shadow-md "
          >
            predict..
          </button>
            
        </form>
    </div>
  )
}

export default Form

// Sex  -  Male-1 female-2
// Highest Qualification 0-4 Dropdown -> Illiterate, School,    , Masters, PhD 
// Rural - Urban-0 / Rural-1 / Metropolitan -2
// Disability Status - Boolean 0,1
// isWaterFilter - 0,1,2 , Partially Clean, Fully Clean
// Chew - 0-7 
// Smoke - 0-4 
//  Alcohol  - 0-4
// Treatment 0-9 Treatment /  Doctor

// 1-2-3
// API EndPoint 8000/home/

