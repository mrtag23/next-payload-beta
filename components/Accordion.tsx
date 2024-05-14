import React from 'react';
import {
    Accordion as AccordionRdx,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Accordion:React.FC<{
    type: 'single'|'multiple',
    title?: string | null,
    body?: string | null,
    items?:
        | {
        title?: string | null;
        body?: string | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'accordion-item';
    }[]
        | null;
}> = ({type, title, body, items}) => {
    return (
        <div className="max-w-5xl mx-auto py-10">
            <AccordionRdx type={type}>
                {items?.map((item, index) => (
                    <AccordionItem key={item.id} value={item.id || index.toString()}>
                        <AccordionTrigger>{item.title}</AccordionTrigger>
                        <AccordionContent>{item.body}</AccordionContent>
                    </AccordionItem>
                ))}
            </AccordionRdx>
        </div>
    );
};

export default Accordion;