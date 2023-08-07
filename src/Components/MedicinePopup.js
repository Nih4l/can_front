import React from 'react'
import { RxCross2 } from 'react-icons/rx'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Select, { defaultTheme } from 'react-select'


const MedicinePopup = ({toggleMedicine}) => {
  //   const [medicine, setMedicine]=useState(true);
  // const toggleMedicine= ()=>{
  //   setMedicine(!medicine);
  // }
  const [medicineCount, setMedicineCount] = useState(1);
  const [deleteMedicine, setDeleteMedicine] = useState(false);
  const [time, setTime] = useState();
  const [reminderTime, setReminderTime] =useState(false);

  const handleTimeChange = (value) => {
    setTime(value && value.format('hh:mm A'));
  };
  const mealOptions = [
    { value: "Before Breakfast", label: "Before Breakfast" },
    { value: "After Breakfast", label: "After Breakfast" },
    { value: "Before Lunch", label: "Before Lunch" },
    { value: "After Lunch", label: "After Lunch" },
    { value: "Before Dinner", label: "Before Dinner" },
    { value: "After Dinner", label: "After Dinner" },

  ];
const handleAddMedicine = () => {
  setMedicineCount(medicineCount + 1);
};
const customStyles = {
  
  option: (provided, state) => ({
    ...provided,
    backgroundColor:  'white',
    
    color:'black',
    '&:hover': {
      backgroundColor: '#EFC31968',
      color: 'white'
    }
  }),
  menu: (provided) => ({
    ...provided,
    width: '70%', // Set your desired width here
    zIndex:'20'
    
  }),
  control: (provided, state) => ({
    ...provided,
    width: '100%', // Adjust the width to your desired value (e.g., '50%' for half width)
    padding:'4px',
   
    border: '2px solid #D1D5DB', // Customize the border style here
    borderRadius: '20px', // Customize the border radius here
    backgroundColor: 'transparent',
    boxShadow: 'none',
    position:'relative',

    
  }),
  placeholder: (provided, state) => ({
    
    position: 'absolute',
    left: '3px',
    fontSize: '14px',
    color: '#7C7C7C',
    transform: state.isFocused ? 'translateY(-20px) scale(0)' : 'translateY(0) scale(1)', // Apply the transform property here
    transition: 'transform 0.2s', // Add transition for smooth animation
    // backgroundColor: '#FFFFFF', // Adjust the background color based on focus state
    padding: '4px 4px', // Add padding to adjust the spacing around the placeholder
  }),
 
};
  const handleReminder=()=>{
    setReminderTime(!reminderTime);
  }


  const handleDeleteMedicine=()=>{
    setDeleteMedicine(true);
  }
  const [isSelectClicked, setIsSelectClicked] = useState(false);

  const handleSelectClick = () => {
    setIsSelectClicked(true);
  };
 
  return (
    
    <>
    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50 overflow-y-scroll overscroll-y-auto'>
    <div className=' flex flex-col bg-white rounded-[40px] lg:md:w-auto lg:md:h-auto w-full px-10 m-3'>
    <div className='flex flex-row py-4 justify-between items-center w-full'>
       <h1 className='text-[22px] font-[500]'>Add Medicines</h1>
        <RxCross2 className=' lg:md:ml-80 cursor-pointer' onClick={toggleMedicine}/>
    </div>
    <div className='flex flex-col'>
        <form>
         
         {[...Array(medicineCount)].map((_, index) => (
    <div key={index}>
        <label className='text-[16px] font-[500]'> Medicine {index + 1} </label>
        <div className='flex py-2 gap-6'>
        <div className="relative z-0 w-1/2 mb-4 group">
    <input type="text" name="medicine" id="medicine" className="block  w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-[20px] p-3 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer" placeholder=" " />

        <label for="medicine" className="peer-focus:font-medium absolute px-2 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 left-3 z-10 origin-[0]  peer-focus:left-3 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "><p className='bg-white border-0 rounded-[8px] peer-focus:bg-transparent'>Medicine {index +1}</p></label>
    </div>
    <div className="relative z-0 w-1/2 mb-4 group">
    <input type="text" name="type" id="type" className="block  w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-[20px] p-3 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer" placeholder=" "  />

        <label for="type" className="peer-focus:font-medium absolute px-2 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 left-3 z-10 origin-[0]  peer-focus:left-3 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "><p className='bg-white border-0 rounded-[8px] peer-focus:bg-transparent'>Type</p></label>
    </div>
        </div >
        <div  className='flex py-2 gap-6'>
        <div className="relative z-0 w-1/2 mb-4 group">
    <input type="text" name="dose" id="dose" className="block  w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-[20px] p-3 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer"  placeholder=" "  />

        <label for="dose" className="peer-focus:font-medium absolute px-2 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 left-3 z-10 origin-[0]  peer-focus:left-3 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "><p className='bg-white border-0 rounded-[8px] peer-focus:bg-transparent'>Dose</p></label>
    </div>
    <div className="relative z-0 w-1/2 mb-4 group">
    <input type="text" name="unit" id="unit" className="block  w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-[20px] p-3 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer" placeholder=" "  />

        <label for="unit" className="peer-focus:font-medium absolute px-2 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 left-3 z-10 origin-[0]  peer-focus:left-3 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "><p className='bg-white border-0 rounded-[8px] peer-focus:bg-transparent'>Unit</p></label>
    </div>
        </div>
        <div  className='flex py-4 gap-6'>
          <div className='relative z-10 w-1/2 mb-4 group'>
        <Select options={mealOptions} className='border-0 z-0' placeholder={'Meal'} styles={customStyles} onFocus={handleSelectClick}/>
        {/* <TimePicker onChange={handleTimeChange} showSecond={false} defaultValue={time} */}
        <label
    htmlFor="mealOptions"
    className={`absolute px-2 lg:md:text-sm text-xs flex-nowrap text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 left-3 z-20 origin-[0] peer-focus:left-3 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${isSelectClicked ? 'visible' :'hidden'}`}
  >
    <p className='bg-white border-0 rounded-[8px] peer-focus:bg-transparent'>Meal</p>
  </label>
        </div>
    {/* format="hh:mm A" className='border rounded-[20px] w-1/2' placeholder='Meal time' appearance='none' style={{ appearance:'none', width: '50%', outline:'none', borderRadius:'20px'}}/> */}
    <div className="relative w-1/2 mb-4 group">
    <input type="text" onFocus={(e) => {e.target.type = 'time';}} id="medicineTime" className="block  w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-[20px] p-3 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer" placeholder=" "  />
    <label for="medicineTime" className="peer-focus:font-medium absolute px-2 lg:md:text-sm text-xs flex-nowrap text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 left-3 z-10 origin-[0]  peer-focus:left-3 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "><p className='bg-white border-0 rounded-[8px] peer-focus:bg-transparent'>Time for reminder</p></label>
    </div>
         
        </div>
        </div>))}
        <label className='text-[16px] font-[500]'>Select Date</label>
        <div  className='flex py-2 gap-6'>
        
        <div className="relative  w-1/2 mb-4 group">
    <input type="text" onFocus={(e) => {e.target.type = 'date';}} id="startFrom" className="block w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-[20px] p-3 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer" placeholder=" " />
    <label for="startFrom" className="peer-focus:font-medium absolute px-2 lg:md:text-sm text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 left-3 z-1 origin-[0]  peer-focus:left-3 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "><p className='bg-white border-0 rounded-[8px] peer-focus:bg-transparent'>Start from</p></label>
    </div>       
    
    <div className="relative  w-1/2 mb-4 group">
    <input type="text" onFocus={(e) => {e.target.type = 'date';}} id="stopOn" className="block  w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-[20px] p-3 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer" placeholder=" " />
    <label for="stopOn" className="peer-focus:font-medium absolute px-2 lg:md:text-sm text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 left-3 z-10 origin-[0]  peer-focus:left-3 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "><p className='bg-white border-0 rounded-[8px] peer-focus:bg-transparent'>Stop On</p></label>
    </div>
        </div>
        <div className='flex gap-6'>
        <input type='checkbox' className="appearance-none w-4 h-4 border-2 border-pink-500 rounded-sm bg-white mt-1 shrink-0 checked:bg-pink-500 checked:border-pink-500" onChange={handleAddMedicine}/> Add another medicine
        </div>
        <div  className='flex flex-row gap-6 py-2'>
        <input type='checkbox' className="appearance-none w-4 h-4 border-2 border-pink-500 rounded-sm bg-white mt-1 shrink-0 checked:bg-pink-500 checked:border-pink-500" onChange={handleReminder}/>
Remind me to take medicine
        </div>

        {reminderTime && (
          
          <div  className=' flex flex-col py-2 w-full'>
        <div className="relative z-0 w-full mb-4 group">
    <input type="text" onFocus={(e) => {e.target.type = 'time'; }} id="medicineTime" className="block  w-full text-sm text-gray-900 bg-transparent border-2 border-gray-300 rounded-[20px] p-3 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black-500 focus:outline-none focus:ring-0 focus:border-black-600 peer" placeholder=" " />
    <label for="medicineTime" className="peer-focus:font-medium absolute px-2 lg:md:text-sm text-xs text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-4 left-3 z-10 origin-[0]  peer-focus:left-3 peer-focus:text-black-600 peer-focus:dark:text-black-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "><p className='bg-white border-0 rounded-[8px] peer-focus:bg-transparent'>Time </p></label>
    </div>
        </div>
        )}
        
        <div className='flex flex-row py-2 gap-4 justify-end'>
            <button className='border-2 px-6 py-2 rounded-[15px]' onClick={handleDeleteMedicine}>Cancel</button>
           
            <button className='border-2 px-6 py-2 rounded-[15px] bg-[#EFC31966]'><Link to='/Medicine1'>Save</Link></button>
        </div>
      
        </form>
    </div>   
  
</div>
</div>
</>
 )
}

export default MedicinePopup