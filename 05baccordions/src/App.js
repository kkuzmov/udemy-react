import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
  ,
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

function App() {
  return (
  <div>
    <Accordions data={faqs}/>
  </div>
  )
}

function Accordions({data}) {
  return <div>
    {data.map((accordeon, index) => <AccordionItem title={accordeon.title} text={accordeon.text} num={index} key={Date.now().toString()}/> )}
  </div>
}

function AccordionItem({title, text, num}) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(){
    setIsOpen((isOpen)=> !isOpen)
  }
  return <div className={`item ${isOpen? 'open' : ''}`} onClick={handleClick}>
    <p className='number'>{num < 10 ?  num = `0${num}` : {num}}</p>
    <p className='title'>{title}</p>
    <p className="icon">{isOpen ? '-' : '+'}</p>
    {isOpen && <div className="content-box">{text}</div>}
    
  </div>
}

export default App;
