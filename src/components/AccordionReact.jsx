import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import React from 'react'

function AccordionReact() {
  return ( 
    <>   
        <Accordion className='m-8 px-2 border-2 rounded-md shadow-lg shadow-black' allowZeroExpanded>
                <AccordionItem key={0}>
                    <AccordionItemHeading>
                        <AccordionItemButton className=''>
                         <h4 className='p-2 font-bold text-xl text-[#F1CAA3]'>prueba acordeon</h4>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                    <p className='m-2 font-medium border-t-2 pt-2'>lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quam soluta ducimus dignissimos sunt architecto et unde, perferendis laudantium ullam expedita quidem enim, temporibus aliquid! Nihil ab inventore vel voluptate.</p>
                    </AccordionItemPanel>
                </AccordionItem>
        </Accordion>

        <Accordion className='m-8 px-2 border-2 rounded-md shadow-lg shadow-black'allowZeroExpanded>
                <AccordionItem key={0}>
                    <AccordionItemHeading>
                        <AccordionItemButton className='border-b-2'>
                         <h4 className='p-2 font-bold text-xl text-[#F1CAA3]'>prueba acordeon</h4>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                    <p className='m-2 font-medium'>lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quam soluta ducimus dignissimos sunt architecto et unde, perferendis laudantium ullam expedita quidem enim, temporibus aliquid! Nihil ab inventore vel voluptate.</p>
                    </AccordionItemPanel>
                </AccordionItem>
        </Accordion>

        <Accordion className='m-8 px-2 border-2 rounded-md shadow-lg shadow-black' allowZeroExpanded>
                <AccordionItem key={0}>
                    <AccordionItemHeading>
                        <AccordionItemButton className='border-b-2'>
                         <h4 className='p-2 font-bold text-xl text-[#F1CAA3]'>prueba acordeon</h4>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                    <p className='m-2 font-medium'>lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quam soluta ducimus dignissimos sunt architecto et unde, perferendis laudantium ullam expedita quidem enim, temporibus aliquid! Nihil ab inventore vel voluptate.</p>
                    </AccordionItemPanel>
                </AccordionItem>
        </Accordion>

        <Accordion className='m-8 px-2 border-2 rounded-md shadow-lg shadow-black' allowZeroExpanded>
                <AccordionItem key={0}>
                    <AccordionItemHeading>
                        <AccordionItemButton className='border-b-2'>
                         <h4 className='p-2 font-bold text-xl text-[#F1CAA3]'>prueba acordeon</h4>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                    <p className='m-2 font-medium'>lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quam soluta ducimus dignissimos sunt architecto et unde, perferendis laudantium ullam expedita quidem enim, temporibus aliquid! Nihil ab inventore vel voluptate.</p>
                    </AccordionItemPanel>
                </AccordionItem>
        </Accordion>
        
        <Accordion className='m-8 px-2 border-2 rounded-md shadow-lg shadow-black' allowZeroExpanded>
                <AccordionItem key={0}>
                    <AccordionItemHeading>
                        <AccordionItemButton className='border-b-2'>
                         <h4 className='p-2 font-bold text-xl text-[#F1CAA3]'>prueba acordeon</h4>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                    <p className='m-2 font-medium'>lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quam soluta ducimus dignissimos sunt architecto et unde, perferendis laudantium ullam expedita quidem enim, temporibus aliquid! Nihil ab inventore vel voluptate.</p>
                    </AccordionItemPanel>
                </AccordionItem>
        </Accordion>
        
    </>

)}

export default AccordionReact