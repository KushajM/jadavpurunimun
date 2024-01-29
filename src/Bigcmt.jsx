import React, { useState, useEffect } from 'react';
import './Bigcmt.css';

const Bigcmt = () => {
    const [itemActive, setItemActive] = useState(-1);
  const countItem = 8;

  const nextClick = () => {
    setItemActive((prevItem) => (prevItem + 1) % countItem);
  };

  const prevClick = () => {
    setItemActive((prevItem) => (prevItem - 1 + countItem) % countItem);
  };

  useEffect(() => {
    // Initial run after component mount
    nextClick();

  
   
  }, []);

  const showSlider = (index) => {
    setItemActive(index);

   
 
  

    // Save the new interval in the state
  
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
    { imgSrc: '../DISEC9.jpg', title: 'UNGA DISEC', content: 'DISEC, the inaugural committee of the United Nations General Assembly, addresses the original UN objectives of securing the future and preserving international peace. At JUMUN, DISEC stands out for hosting diverse viewpoints and intense debates among a wide range of delegates. With comprehensive discussions on global peace and security, the committee consistently generates all-encompassing ideas. Delegates, from newcomers to veterans, face a test of negotiating skills due to the large number of delegations. ' },
    { imgSrc: '../UNW5.jpg', title: 'UNCSW', content: "Women's leadership and political engagement face historical underrepresentation and discrimination globally. The United Nations Commission on the Status of Women (UNCSW), established in 1946 by ECOSOC resolution 11(II), is the primary global organization dedicated to advancing gender equality. UNCSW envisions a society where everyone enjoys equal rights and opportunities, challenging norms for women's safety. JUMUN mirrors UNCSW, testing participants' abilities to make a difference in various spheres, from political leadership to corporate boardrooms.     "},
    { imgSrc: '../VPC6.jpg', title: 'VPC', content: "Lord Louis Mountbatten established the Viceroy's Partition Council as part of the overall plan for the 1947 partition of British India. Tasked with overseeing the complex division into India and Pakistan, the council, comprised of diverse members, played a crucial role in administrative and logistical decisions. Responsibilities included asset division, border demarcation, and addressing administrative matters. Implementing the Mountbatten Plan, the council aimed to facilitate a smooth transition, minimize tensions, and represent the interests of diverse communities involved in the partition."},
    { imgSrc: '../VPC2.jpg', title: 'LOK SABHA', content: "Leaders must unite to address the dynamic nature of politics in this diverse nation, developing policies and governance structures. JUMUN 2024 presents the Lok Sabha committee, the primary legislative body of India, shaped by the people's mandate through elections and universal adult suffrage. With unique organization ensuring representation from all regions, it fosters variety and universality. The 'make or break' exam in the House will determine if the country finds the legislator it deserves. " },
    { imgSrc: '../HCR.jpg', title: 'UNHCR', content: "The UN High Commissioner for Refugees (UNHCR), formed in 1950 to address post-World War II displacement, aids refugees, stateless individuals, and displaced communities. Governed by the 1951 Refugee Convention, UNHCR's mission involves resettlement, repatriation, protection, healthcare, and emergency relief. JUMUN 2024 will simulate UNHCR's efforts, fostering discussion on global refugee crises. The organization advocates for national and international policies supporting refugees, ensuring their well-being. " },
    { imgSrc: '../unodc.jpg', title: 'UNODC', content: "Established in 1997, the United Nations Office on Drugs and Crime (UNODC) spearheads the global battle against illicit drugs, international crime, and terrorism. With around 500 staff members globally, UNODC focuses on raising awareness about drug abuse dangers, enhancing international efforts against illicit drug activities, and combating drug-related crime. Initiatives include alternatives to illicit drug cultivation, crop monitoring, and anti-money laundering projects. UNODC's online committee, suitable for beginners, aims to create a robust deterrence framework for a safer world." },
    { imgSrc: '../unicef.jpg', title: 'UNICEF', content: "Established in 1946 post-World War II, UNICEF prioritizes aiding at-risk children globally. Operating in 190+ countries, it ensures children's survival, development, and rights protection. As the largest vaccine provider, UNICEF addresses health, nutrition, water, sanitation, education, HIV prevention, and child protection. It responds to emergencies, providing essential aid. Join the 10th Jadavpur University Model UN Conference for unbiased discussions on defending children's rights. UNICEF's online committee welcomes beginner-level double delegates." },
    { imgSrc: '../IP.jpg', title: 'IP', content: "The International Press in Model United Nations (MUN) represents leading news organizations, meticulously covering committee discussions for the conference newsletter. Participants act as journalists and photographers, reporting on various committees' development, effectiveness, debate flow, and alliance-building. Photographs capturing conference moments not only showcase stunning visuals but also narrate a story without captions." },
  ]; 

  const thumbnails = [
    { imgSrc: '../DISEC.png', title: 'UNGA DISEC' },
    { imgSrc: '../UNW.png', title: 'UNCSW' },
    { imgSrc: '../VPC.png', title: 'VPC' },
    { imgSrc: '../LOKSABHA.png', title: 'LOK SABHA' },
    { imgSrc: '../HCR.png', title: 'UNHCR'},
    { imgSrc: '../odc2.png', title: 'UNODC'},
    { imgSrc: '../unicef2.png', title: 'UNICEF'},
    { imgSrc: '../IP.png', title: 'IP' },
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
