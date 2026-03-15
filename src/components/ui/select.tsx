"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// Very simple Select implementation to satisfy the import requirements
// and provide functional form integration.

export const Select = ({ children, onValueChange }: any) => {
  const [value, setValue] = React.useState("");
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative w-full">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, { 
            value, 
            setValue, 
            onValueChange,
            open,
            setOpen
          });
        }
        return child;
      })}
    </div>
  );
};

export const SelectTrigger = ({ className, children, value, open, setOpen }: any) => (
  <button
    type="button"
    onClick={() => setOpen(!open)}
    className={cn(
      "flex h-14 w-full items-center justify-between rounded-full border border-border bg-background px-6 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className
    )}
  >
    {value || children}
    <ChevronDown className={cn("h-4 w-4 opacity-50 transition-transform", open && "rotate-180")} />
  </button>
);

export const SelectValue = ({ placeholder, value }: any) => (
  <span className={cn(!value && "text-muted-foreground")}>
    {value || placeholder}
  </span>
);

export const SelectContent = ({ children, open, setOpen, setValue, onValueChange }: any) => {
  if (!open) return null;
  
  return (
    <>
      <div 
        className="fixed inset-0 z-40" 
        onClick={() => setOpen(false)} 
      />
      <div className="absolute top-full left-0 z-50 mt-2 min-w-[8rem] overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-xl animate-in fade-in zoom-in-95 w-full">
        <div className="p-1">
          {React.Children.map(children, (child) => {
             if (React.isValidElement(child)) {
               return React.cloneElement(child as React.ReactElement<any>, { 
                 setValue, 
                 setOpen,
                 onValueChange
               });
             }
             return child;
          })}
        </div>
      </div>
    </>
  );
};

export const SelectItem = ({ children, value: itemValue, setValue, setOpen, onValueChange }: any) => (
  <div
    className="relative flex w-full cursor-pointer select-none items-center rounded-xl py-3 px-4 text-base outline-none hover:bg-muted focus:bg-muted font-medium transition-colors"
    onClick={() => {
      setValue(children);
      if (onValueChange) onValueChange(itemValue);
      setOpen(false);
    }}
  >
    {children}
  </div>
);
