import React, { useEffect } from 'react';
import "./Bigcmt.css"


const Bigcmt = () => {
    useEffect(() => {
        let items = document.querySelectorAll('.slider .list .item');
        let next = document.getElementById('next');
        let prev = document.getElementById('prev');
        let thumbnails = document.querySelectorAll('.thumbnail .item');
    
        // config param
        let countItem = items.length;
        let itemActive = 0;
        let refreshInterval;
    
        // event next click
        next.onclick = function () {
          itemActive = itemActive + 1;
          if (itemActive >= countItem) {
            itemActive = 0;
          }
          showSlider();
        };
    
        // event prev click
        prev.onclick = function () {
          itemActive = itemActive - 1;
          if (itemActive < 0) {
            itemActive = countItem - 1;
          }
          showSlider();
        };
    
        // auto run slider
        refreshInterval = setInterval(() => {
          next.click();
        }, 2000);
    
        function showSlider() {
          // remove item active old
          let itemActiveOld = document.querySelector('.slider .list .item.active');
          let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
          itemActiveOld.classList.remove('active');
          thumbnailActiveOld.classList.remove('active');
    
          // active new item
          items[itemActive].classList.add('active');
          thumbnails[itemActive].classList.add('active');
    
          // clear auto time run slider
          clearInterval(refreshInterval);
          refreshInterval = setInterval(() => {
            next.click();
          }, 5000);
        }
    
        // click thumbnail
        thumbnails.forEach((thumbnail, index) => {
          thumbnail.addEventListener('click', () => {
            itemActive = index;
            showSlider();
          });
        });
    
        // Clean up the interval when the component unmounts
        return () => clearInterval(refreshInterval);
      }, []); // Empty dependency array means this effect runs once after the initial render



  return (
   
        <div className="slider">
            <div className="list">
                <div className="item active">
                    <img src="../img/DISEC5.jpg"/>
                    <div className="content">
                        <h2>DISEC</h2>
                        {/* <p><span>AGENDA:</span> obi wan</p> */}
                        <p>
                                DISEC, the inaugural committee of the United Nations General Assembly, addresses the original UN objectives of securing the future and preserving international peace. At JUMUN, DISEC stands out for hosting diverse viewpoints and intense debates among a wide range of delegates. With comprehensive discussions on global peace and security, the committee consistently generates all-encompassing ideas. Delegates, from newcomers to veterans, face a test of negotiating skills due to the large number of delegations. JUMUN 2024 is the platform to determine if consensus or the current global geopolitical scenario will prevail.               
                                 </p>
                    </div>
                <div className="item">
                    <img src="../img/UNW5.jpg" />
                        <div className="content">
                            <h2>UNCSW</h2>
                             {/* <p><span>AGENDA:</span></p>  */}

                            <p>
                                Women's leadership and political engagement face historical underrepresentation and discrimination globally. The United Nations Commission on the Status of Women (UNCSW), established in 1946 by ECOSOC resolution 11(II), is the primary global organization dedicated to advancing gender equality. UNCSW envisions a society where everyone enjoys equal rights and opportunities, challenging norms for women's safety. JUMUN mirrors UNCSW, testing participants' abilities to make a difference in various spheres, from political leadership to corporate boardrooms. Join us at JUMUN 2024 in redefining humanity.                    
                             </p>
                        </div>
                </div>
                <div className="item">
                    <img src="../img/VPC4.jpg" />
                        <div className="content">
                
                            <h2>VPC</h2>
                            {/* <p><span>AGENDA:</span></p> */}
                            <p>
                                Lord Louis Mountbatten established the Viceroy's Partition Council as part of the overall plan for the 1947 partition of British India. Tasked with overseeing the complex division into India and Pakistan, the council, comprised of diverse members, played a crucial role in administrative and logistical decisions. Responsibilities included asset division, border demarcation, and addressing administrative matters. Implementing the Mountbatten Plan, the council aimed to facilitate a smooth transition, minimize tensions, and represent the interests of diverse communities involved in the partition.                    
                                </p>
                        </div>
                </div>
                <div className="item">
                    <img src="../img/LOKSABHA1.jpg" />
                        <div className="content">
                
                            <h2>LOK SABHA</h2>
               
                            <p>
                            Leaders must unite to address the dynamic nature of politics in this diverse nation, developing policies and governance structures. JUMUN 2024 presents the Lok Sabha committee, the primary legislative body of India, shaped by the people's mandate through elections and universal adult suffrage. With unique organization ensuring representation from all regions, it fosters variety and universality. The "make or break" exam in the House will determine if the country finds the legislator it deserves. Test your knowledge at JUMUN 2024.
                            </p>
                        </div>
                </div>
                <div className="item">
                    <img src="../img/IP.jpg" />
                        <div className="content">
                
                            <h2>IP</h2>
                            {/* <p><span>AGENDA:</span></p>  */}
                            <p>
                    
                                The International Press in Model United Nations (MUN) represents leading news organizations, meticulously covering committee discussions for the conference newsletter. Participants act as journalists and photographers, reporting on various committees' development, effectiveness, debate flow, and alliance-building. Photographs capturing conference moments not only showcase stunning visuals but also narrate a story without captions. Join us at JUMUN 2023 and don't forget your cameras for this unique opportunity to engage in journalistic coverage.
                            </p>
                         </div>
                </div>
            </div>
        </div>
    
        <div className="arrows">
            <button id="prev">&lt;</button>
            <button id="next">&gt;</button>
        </div>
    

        <div className="thumbnail">
            <div className="item active">
                <img src="../img/DISEC.png" />
                <div className="content">
                    UNGA DISEC
                </div>
            </div>
            <div className="item">
             <img src="../img/UNW.png" />
                <div className="content">
                 UNCSW
                </div>
            </div>
            <div className="item">
                <img src="../img/VPC.png"  />
                <div className="content">
                    VPC
                </div>
            </div>
            <div className="item">
                <img src="../img/LOKSABHA.png" />
                <div className="content">
                    LOK SABHA
                </div>
            </div>
            <div className="item">
                <img src="../img/IP.png" />
                <div className="content">
                    IP
                </div>
            </div>
        </div>
    </div>

  )
}

export default Bigcmt