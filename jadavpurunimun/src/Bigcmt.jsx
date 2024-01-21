import React, { useState, useEffect } from 'react';
import './Bigcmt.css';

const Bigcmt = () => {
    const [itemActive, setItemActive] = useState(0);
  const countItem = 5;

  const nextClick = () => {
    setItemActive((prevItem) => (prevItem + 1) % countItem);
  };

  const prevClick = () => {
    setItemActive((prevItem) => (prevItem - 1 + countItem) % countItem);
  };

  useEffect(() => {
    // Initial run after component mount
    nextClick();

    // Auto run slider every 2 seconds
    let refreshInterval = setInterval(() => {
      nextClick();
    }, 5000);

    // Clear interval on component unmount
    return () => clearInterval(refreshInterval);
  }, []);

  const showSlider = (index) => {
    setItemActive(index);

    // Clear existing auto time run slider
    clearInterval(refreshInterval);

    // Set a new auto time run slider every 5 seconds
    let newRefreshInterval = setInterval(() => {
      nextClick();
    }, 5000);

    // Save the new interval in the state
    setRefreshInterval(newRefreshInterval);
  };
 

  useEffect(() => {
    const scrollLimit = 1;

    const handleScroll = () => {
      if (document.documentElement.scrollTop > scrollLimit) {
        document.documentElement.scrollTop = scrollLimit;
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const items = [
    { imgSrc: '../img/DISEC2.jpg', title: 'DISEC', content: 'DISEC, the inaugural committee of the United Nations General Assembly, addresses the original UN objectives of securing the future and preserving international peace. At JUMUN, DISEC stands out for hosting diverse viewpoints and intense debates among a wide range of delegates. With comprehensive discussions on global peace and security, the committee consistently generates all-encompassing ideas. Delegates, from newcomers to veterans, face a test of negotiating skills due to the large number of delegations. JUMUN 2024 is the platform to determine if consensus or the current global geopolitical scenario will prevail.  ' },
    { imgSrc: '../img/UNW5.jpg', title: 'UNCSW', content: "                       Women's leadership and political engagement face historical underrepresentation and discrimination globally. The United Nations Commission on the Status of Women (UNCSW), established in 1946 by ECOSOC resolution 11(II), is the primary global organization dedicated to advancing gender equality. UNCSW envisions a society where everyone enjoys equal rights and opportunities, challenging norms for women's safety. JUMUN mirrors UNCSW, testing participants' abilities to make a difference in various spheres, from political leadership to corporate boardrooms. Join us at JUMUN 2024 in redefining humanity.    "},
    { imgSrc: '../img/VPC6.jpg', title: 'VPC', content: "Lord Louis Mountbatten established the Viceroy's Partition Council as part of the overall plan for the 1947 partition of British India. Tasked with overseeing the complex division into India and Pakistan, the council, comprised of diverse members, played a crucial role in administrative and logistical decisions. Responsibilities included asset division, border demarcation, and addressing administrative matters. Implementing the Mountbatten Plan, the council aimed to facilitate a smooth transition, minimize tensions, and represent the interests of diverse communities involved in the partition."},
    { imgSrc: '../img/VPC2.jpg', title: 'LOK SABHA', content: "Leaders must unite to address the dynamic nature of politics in this diverse nation, developing policies and governance structures. JUMUN 2024 presents the Lok Sabha committee, the primary legislative body of India, shaped by the people's mandate through elections and universal adult suffrage. With unique organization ensuring representation from all regions, it fosters variety and universality. The 'make or break' exam in the House will determine if the country finds the legislator it deserves. Test your knowledge at JUMUN 2024." },
    { imgSrc: '../img/IP.jpg', title: 'IP', content: "The International Press in Model United Nations (MUN) represents leading news organizations, meticulously covering committee discussions for the conference newsletter. Participants act as journalists and photographers, reporting on various committees' development, effectiveness, debate flow, and alliance-building. Photographs capturing conference moments not only showcase stunning visuals but also narrate a story without captions. Join us at JUMUN 2023 and don't forget your cameras for this unique opportunity to engage in journalistic coverage." },
  ]; 

  const thumbnails = [
    { imgSrc: '../img/DISEC.png', title: 'UNGA DISEC' },
    { imgSrc: '../img/UNW.png', title: 'UNCSW' },
    { imgSrc: '../img/VPC.png', title: 'VPC' },
    { imgSrc: '../img/LOKSABHA.png', title: 'LOK SABHA' },
    { imgSrc: '../img/IP.png', title: 'IP' },
  ]; 

  return (
    <div className="slider">
     
      <div className="list">
        {items.map((item, index) => (
          <div key={index} className={`item ${index === itemActive ? 'active' : ''}`}>
            <img src={item.imgSrc} alt={item.title} />
            <div className="content">
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button onClick={prevClick}>&lt;</button>
        <button onClick={nextClick}>&gt;</button>
      </div>
      <div className="thumbnail">
        {thumbnails.map((thumbnail, index) => (
          <div
            key={index}
            className={`item ${index === itemActive ? 'active' : ''}`}
            onClick={() => showSlider(index)}
          >
            <img src={thumbnail.imgSrc} alt={thumbnail.title} />
            <div className="content">{thumbnail.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bigcmt;
