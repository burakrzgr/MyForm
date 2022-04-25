import React, { useState } from 'react';
import './SidebarCollapsible.scss';


function SidebarCollapsible({children,sidebar,sidebarHeader}){
  const [rightOpen,setRightOpen] = useState(false);

  const toggleSidebar = () => {
    setRightOpen(!rightOpen);
  }

    return (
      <div id='layoutSidebar'>
        <div id='mainSidebar'>
              <div className='content'>
                  {children}
              </div>
          </div>

          <div id='rightSidebar' className={rightOpen?"open":"closed"} >
              <div className='icon'
                   onClick={toggleSidebar} >
                   &equiv;
              </div>
              <div className={`sidebar ${rightOpen}`} >
                  <div className='header'>
                      {sidebarHeader}
                  </div>
                  <div className='content'>
                      {sidebar}
                  </div>
              </div>
          </div>

      </div>
    );
}

export default SidebarCollapsible;