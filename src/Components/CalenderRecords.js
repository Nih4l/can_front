import React, { useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai'

const CalenderRecords = () => {
    const today = new Date();
    const [currentDate, setCurrentDate] = useState(today.getDate());
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dates = [];

    const startOffset = Math.max(currentDate - 3, 1);
    const endOffset = Math.min(currentDate + 3, daysInMonth);
    const startDate = Math.max(startOffset, 1);
    const endDate = Math.min(endOffset, daysInMonth);

    // Populate the dates
    for (let i = startDate; i <= endDate; i++) {
        const date = new Date(currentYear, currentMonth, i);
        const day = daysOfWeek[date.getDay()];
        dates.push({ day, date: i });
    }

    const goToPrevDate = () => {
        if (currentDate === 1) {
            if (currentMonth === 0) {
                setCurrentMonth(11);
                setCurrentYear(currentYear - 1);
            } else {
                setCurrentMonth(currentMonth - 1);
            }
            setCurrentDate(new Date(currentYear, currentMonth - 1, 0).getDate());
        } else {
            setCurrentDate(currentDate - 1);
        }
    };

    const goToNextDate = () => {
        if (currentDate === daysInMonth) {
            if (currentMonth === 11) {
                setCurrentMonth(0);
                setCurrentYear(currentYear + 1);
            } else {
                setCurrentMonth(currentMonth + 1);
            }
            setCurrentDate(1);
        } else {
            setCurrentDate(currentDate + 1);
        }
    };

    return (
        <div className="flex flex-col items-start space-y-2 w-[50%] justify-center">
            <div className="flex items-center justify-between w-[200%] px-4">

                {/* <div className="text-lg font-semibold">
                    {new Date(currentYear, currentMonth).toLocaleString('default', {
                        month: 'long',
                        year: 'numeric',
                    })}
                </div> */}




            </div>

            <div className="flex items-center space-x-5 ">
                <button className="text-sm text-gray-500 hover:text-gray-700" onClick={goToPrevDate}>
                    <AiOutlineLeft />
                </button>
                {dates.map((dateObj, index) => (
                    <div
                        key={index}
                        className={`text-center flex flex-col justify-center rounded-3xl w-14 h-16 ${dateObj.date === today.getDate() ? 'bg-[#F2CF47] text-white' : 'text-gray-500 bg-[#FDF6FA]'
                            }`}
                    >
                        <div className="text-sm">{dateObj.day}</div>
                        <div>{dateObj.date === today.getDate() ? today.getDate() : dateObj.date}</div>

                    </div>


                ))}
                <button className="text-sm text-gray-500 hover:text-gray-700" onClick={goToNextDate}>
                    <AiOutlineRight />
                </button>
            </div>
        </div>
    );
};

export default CalenderRecords;