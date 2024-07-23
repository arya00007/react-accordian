import { useState } from "react";
export function Accordion({data}) {
  return(<div className="accordion">
    {data.map((el,index) => <AccordianItem title={el.title} text={el.text} num={index} />)}
  </div>) 
}

function AccordianItem({num,title, text}) {
  const [isOpen, setIsOpen] = useState(false);
  return(
    <div className="item" onClick={()=> setIsOpen(!isOpen)}>
      <p className="number">{num < 9 ? `0${num+1}` : num+1}</p>
      <p className="text">{title}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  )
}