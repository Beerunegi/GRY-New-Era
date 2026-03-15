"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// Vanilla implementation of Accordion to avoid external dependencies
const Accordion = ({ children, type = "single", collapsible = true, className }: any) => {
  const [openItems, setOpenItems] = React.useState<string[]>([]);

  const toggleItem = (value: string) => {
    if (type === "single") {
      setOpenItems(prev => prev.includes(value) ? [] : [value]);
    } else {
      setOpenItems(prev => prev.includes(value) ? prev.filter(i => i !== value) : [...prev, value]);
    }
  };

  return (
    <div className={cn("space-y-2", className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const props = child.props as any;
          return React.cloneElement(child as React.ReactElement<any>, { 
            isOpen: openItems.includes(props.value),
            toggle: () => toggleItem(props.value)
          });
        }
        return child;
      })}
    </div>
  );
};

const AccordionItem = ({ className, children, isOpen, toggle, ...props }: any) => {
  return (
    <div className={cn("border-b overflow-hidden", className)} {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, { isOpen, toggle });
        }
        return child;
      })}
    </div>
  );
};

const AccordionTrigger = ({ className, children, isOpen, toggle, ...props }: any) => {
  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        "flex flex-1 w-full items-center justify-between py-4 font-medium transition-all",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className={cn("h-4 w-4 shrink-0 transition-transform duration-200", isOpen && "rotate-180")} />
    </button>
  );
};

const AccordionContent = ({ className, children, isOpen }: any) => {
  return (
    <div 
      className={cn(
        "overflow-hidden transition-all duration-300",
        isOpen ? "max-h-[500px] opacity-100 pb-4" : "max-h-0 opacity-0 pb-0",
        className
      )}
    >
      <div className="text-base">{children}</div>
    </div>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
