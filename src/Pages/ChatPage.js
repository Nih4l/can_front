import React, { useState } from "react";
import HomeNav from "../Components/HomeNav";
import { FiSearch } from "react-icons/fi";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { IoIosInformationCircleOutline , IoIosInformationCircle } from "react-icons/io";
import { BsTelephone, BsCheck2All } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import { AiOutlineSend } from "react-icons/ai";
import { GrMicrophone } from "react-icons/gr";

import account from "../Photos/account.jpg";
import account2 from "../Photos/account2.jpg";
import SideMenu from "../Components/SideMenu";
import Page from "../Layouts/Pages";
import sendIcon from '../Photos/sendIcon.png'
import micIcon from '../Photos/micIcon.png'
import smileIcon from '../Photos/smileIcon.png'

const ChatPage = () => {
  const [chats, setChats] = useState(true);

  const toggleReq = () => {
    setChats(!chats);
  };

  //chats
  const [text, setText] = useState("");
  const [sendImage, setSendImage] = useState(null)
  const [result, setResult] = useState([]);
  const [imageResult, setImageResult] = useState([])
  const [Info, setInfo] = useState(true)

  const handleClick = () => {
    setInfo((prevState) => !prevState);
  }

  const inputTaken = (event) => {
    setText(event.target.value);
  };

  const HandleImageSend = (e) => {
    const file = e.target.files[0]
    console.log(file)
    setSendImage(URL.createObjectURL(file))

  }

  const listOfItems = () => {
    setResult((oldItems) => {
      return [...oldItems, text];
    });
    setText("");

  };

  const listOfImage = () => {
    setImageResult((oldImage) => {
      return [...oldImage, sendImage]
    });
    console.log(setImageResult)
    setSendImage('')

  }

  const Groups = [
    {
      id: 1,
      image: 'account2.jpg',
      name: 'Nihal',
      groupName: 'Group1'
    },
    {
      id: 2,
      image: 'account2.jpg',
      name: 'Sierra',
      groupName: 'Group1'
    },
    {
      id: 3,
      image: 'account2.jpg',
      name: 'Naveen',
      groupName: 'Group1'
    },
    {
      id: 4,
      image: 'account2.jpg',
      name: 'Naveen',
      groupName: 'Group1'
    },
    {
      id: 5,
      image: 'account2.jpg',
      name: 'Naveen',
      groupName: 'Group1'
    },
    {
      id: 6,
      image: 'account2.jpg',
      name: 'Naveen',
      groupName: 'Group1'
    },

  ]

  const AllChats = [
    {
      id: 1,
      image: 'account2.jpg',
      name: 'Nihal fasadffdsa',
      time: '12:00 AM',
      message: 'Hey! How are you'
    },
    {
      id: 2,
      image: 'account2.jpg',
      name: 'Nihal',
      time: '12:00 AM',
      message: 'Hey! How are you'
    },
    {
      id: 3,
      image: 'account2.jpg',
      name: 'Nihal',
      time: '12:00 AM',
      message: 'Hey! How are you'
    },
    {
      id: 4,
      image: 'account2.jpg',
      name: 'Nihal',
      time: '12:00 AM',
      message: 'Hey! How are you'
    },
    {
      id: 5,
      image: 'account2.jpg',
      name: 'Nihal',
      time: '12:00 AM',
      message: 'Hey! How are you'
    },
    {
      id: 6,
      image: 'account2.jpg',
      name: 'Nihal',
      time: '12:00 AM',
      message: 'Hey! How are you'
    },
  ]

  const AllRequests = [
    {
      id: 1,
      image: 'account2.jpg',
      name: 'Nihal fasadffdsa',
      time: '12:00 AM',
      message: 'Hey! How are you'
    },
    {
      id: 2,
      image: 'account2.jpg',
      name: 'Nihal',
      time: '12:00 AM',
      message: 'Hey! How are you'
    },
    {
      id: 3,
      image: 'account2.jpg',
      name: 'Nihal',
      time: '12:00 AM',
      message: 'Hey! How are you'
    },
    {
      id: 4,
      image: 'account2.jpg',
      name: 'Nihal',
      time: '12:00 AM',
      message: 'Hey! How are you'
    },

  ]


  return (
    <Page
      pageContent={
        <>
          {/* background */}
          <div className="bg-[#FEF8FD] flex items-center justify-center h-full">
            {/* chat space */}
            <div className=" h-[600px] w-full flex  justify-center  ">
              <div className="  bg-white  rounded-3xl  shadow-2xl">
                <div className="flex h-full w-full">
                  {/* left bar */}
                  <div className="pt-4 px-4   w-1/4 border-r-2">
                    <div className="flex  items-center gap-2 mt-3 p-2 shadow-2xl bg-white rounded-3xl">
                      <FiSearch color="black" />
                      <input placeholder="Search" className="outline-none overflow-hidden" />
                    </div>

                    <h2 className="mt-5 font-semibold">Group's</h2>

                    {/* persons */}
                    {/* <div className="flex  overflow-x-scroll pt-2">
                      {Groups.map((item) => (
                        <div key={item.id} className=" mx-6 flex flex-col items-center">
                          <img src={item.image} className="rounded-full" />
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-xs">{item.groupName}</p>
                        </div>
                      ))}

                      
                    </div> */}
                    <div className="flex overflow-x-scroll py-4 w-full" >
                      <div className="flex" style={{ width: "fit-content" }}>
                        {Groups.map((item) => (
                          <div key={item.id} className="w-24  flex flex-col items-center">
                            <div className="w-14 h-14 border-red-600 border-2 rounded-full flex items-center justify-center">
                              <img
                                src={item.image}
                                alt={item.name} // Added alt attribute for accessibility
                                className="w-12 h-12 rounded-full object-cover" // Adjust size of the image
                              />
                            </div>

                            <p className="font-semibold text-[14px]">{item.name}</p>
                            <p className=" text-[12px]">{item.groupName}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* chats */}
                    <div className=" flex pt-3 justify-between  relative">
                      <div
                        className={
                          chats
                            ? "font-bold border-b-2 w-1/2 flex items-center justify-center transform-all ease-in-out duration-500 border-[#8B1539] text-[#8B1539] cursor-pointer"
                            : "font-bold border-b-2 w-1/2 flex items-center justify-center border-[#C4C4C4] text-[#C4C4C4] cursor-pointer"
                        }
                        onClick={toggleReq}
                      >
                        <h2 className="">Chat</h2>

                      </div>
                      <div
                        className={
                          !chats
                            ? "font-bold border-b-2 w-1/2 flex items-center justify-center transform-all ease-in-out duration-500 border-[#8B1539] text-[#8B1539] cursor-pointer"
                            : "font-bold border-b-2 w-1/2 flex items-center justify-center border-[#C4C4C4] text-[#C4C4C4] cursor-pointer"
                        }
                        onClick={toggleReq}
                      >
                        <h2 className="">Requests</h2>

                      </div>
                    </div>

                    {/* Requests */}

                    {chats && (
                      <div className="flex flex-col mt-2 gap-6 h-[230px]    overflow-y-scroll " style={{}}>

                        {AllChats.map((item) => (
                          <div className="flex flex-row items-center gap-5" key={item.id}>
                            <div className="relative">
                              <img
                                src={item.image} alt={item.name}
                                className="h-12 w-12 rounded-full  "
                              />
                              <div className=" absolute top-0 right-0 h-3 w-3 flex items-center justify-center rounded-full text-[10px] text-white font-poppins bg-[#C31A7F]">2</div>
                              <div className=" absolute bottom-0 right-2 h-2 w-2 flex items-center justify-center rounded-full text-[10px] text-white font-poppins bg-[#11D800]"></div>
                            </div>

                            <div className="flex flex-row gap-3 justify-between">
                              <div className="flex flex-col     ">
                                <h1 className=" text-[14px] font-poppins"> {item.name.length > 12 ? item.name.slice(0, 12) + "..." : item.name}</h1>
                                <p className=" text-[12px]  font-poppins">{item.message}</p>
                              </div>
                              <p className="text-[10px]  ">{item.time}</p>
                            </div>
                            <BsCheck2All className="flex item-center justify-center" color="#C4C4C4" size={13} />
                          </div>
                        ))}


                      </div>
                    )}

                    {/* Requests */}

                    {!chats && (

                      <div className="overflow-y-scroll h-[240px]">
                        {AllRequests.map((item) => (
                          <div className="">

                            <div className="flex flex-row gap-4 pt-4 items-center " key={item.id}>
                              <img
                                src={item.image} alt="none"
                                className="h-10 w-10 rounded-full"
                              />
                              <div>
                                <div className="flex flex-row item-center gap-3 justify-between">
                                  <div className="flex flex-col items-start     ">
                                    <h1 className="font-bold">{item.name.length > 12 ? item.name.slice(0, 12) + "..." : item.name}</h1>
                                    <p className=" text-[12px] font-poppins">{item.message}</p>
                                  </div>
                                  <p className="text-[10px] text-center">{item.time}</p>
                                </div>


                              </div>
                            </div>
                            <div className="flex justify-evenly  pt-2 pl-7  items-center">
                              <div className="cursor-pointer rounded-3xl   text-[#C31A7F]">
                                Reject
                              </div>
                              <div className="  cursor-pointer rounded-3xl text-[#efc419d4]">
                                Accept!
                              </div>
                              <div className="h-6 w-6 bg-white flex items-center justify-center rounded-full   " style={{
                                boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.5)'
                              }}>
                                {" "}
                                <AiOutlineEye />{" "}
                              </div>
                            </div>
                            <hr className="mt-4" />
                          </div>

                        ))}
                      </div>

                    )}
                  </div>

                  {/* right side */}
                  <div className=" w-full ">


                    {/* main chat */}
                    <div className=" bg-[#F5F5F5] h-full relative overflow-hidden rounded-r-3xl  flex flex-col justify-between  ">
                      <div className="flex bg-white h-[10vh]">
                        <div className=" w-full flex px-6 items-center  ">
                          <img src={account} className="rounded-full w-[6%]" />
                          <h2 className="px-2 font-bold">Sierra's Group</h2>
                        </div>

                        <div className="flex gap-4 items-center mr-6">
                          <AiOutlineVideoCamera />
                          <BsTelephone />
                          <div onClick={handleClick}>
                            {Info ? <IoIosInformationCircleOutline /> : <IoIosInformationCircle color="#C31A7F" />}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row   w-full mb-7">
                        <div className="bg-white w-full p-2 px-4 shadow-2xl rounded-2xl flex justify-between items-center mx-5">
                          <input
                            placeholder="Type your message...."
                            className="w-[90%] outline-none"
                            onChange={inputTaken}
                            value={text}
                          />
                          {/* <ImAttachment color="#C4C4C4" /> */}
                          <label>
                            <input
                              type="file"
                              accept="image/*" // Specify the file types you want to allow
                              style={{ display: "none" }}
                              onChange={HandleImageSend}
                            />
                            <ImAttachment color="#C4C4C4" />
                          </label>
                        </div>

                        <div className="flex relative items-center justify-center mr-6 gap-3">
                          <div
                            onClick={() => { listOfItems(); listOfImage(); }}
                            className="bg-[#EFC319] p-2 rounded-full shadow-gray-950 shadow-2xl"
                          >
                            {" "}
                            <AiOutlineSend size={20} color="white" />
                          </div>
                          <div className="bg-[#ffffff] p-2 rounded-full shadow-gray-950 shadow-2xl">
                            {" "}
                            <GrMicrophone size={20} />
                          </div>
                        </div>
                      </div>

                      <div className="absolute right-[5%] bottom-[20%]  h-[45vh] overflow-y-scroll flex flex-col-reverse items-end ">
                        {result.reverse().map((itemValue, index) => {

                          return (
                            <div>
                              <p
                                className="m-2 bg-[#86C6C5] p-2 w-max rounded-xl text-right text-white"
                                key={index}
                              >
                                {itemValue}
                              </p>

                              {/* <div className="flex justify-center mt-2" >
                            <img
                              src={sendImage}
                              alt="Selected"
                              style={{ maxWidth: "200px" }}
                              onChange={HandleImageSend} // Adjust the size as per your requirement
                            />
                          </div> */}
                            </div>

                          )






                        })}
                        {/* {sendImage && (
                          <div className="flex justify-center mt-2">
                            <img
                              src={sendImage}
                              alt="Selected"
                              style={{ maxWidth: "200px" }}
                              onChange={HandleImageSend} // Adjust the size as per your requirement
                            />
                          </div>
                        )} */}

                        {imageResult.reverse().map((item, index) => {
                          return (
                            <div className="flex justify-center mt-2" key={index}>
                              <img
                                src={item}
                                alt="Selected"
                                style={{ maxWidth: "200px" }}
                              // Adjust the size as per your requirement
                              />
                            </div>
                          )
                        })}
                      </div>
                       
                    </div>
                   
                  </div>
                  {!Info && (
                        <div className="bg-white ">
                        <h1>TITLE</h1>
                        <p>Some information here...</p>

                        </div>
                       
                    )}
                </div>
              </div>
            </div>
          </div>
        </>
      }
    />
  );
};

export default ChatPage;
