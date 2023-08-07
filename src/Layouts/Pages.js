// Page.js
import React from "react";
import HomeNav from "../Components/HomeNav";
import SideNav from "../Components/SideNav";
import SideMenu from '../Components/SideMenu';


const Page = ({ pageContent  }) => {
  return (
    <div>
      <div className="flex ">
        
        {/* <SideNav /> */}
        <SideMenu />
        
        <div className="flex w-full flex-col">
            <div className="header">
        <HomeNav />       
        </div>
        <div className="content-body h-[92vh] overflow-scroll">{pageContent }</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
