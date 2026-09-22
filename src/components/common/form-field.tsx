import * as React from "react";
import { cn } from "@/lib/utils";

export interface FormFieldProps {
  label?: React.ReactNode;
  htmlFor?: string;
  required?: boolean;
  helpText?: React.ReactNode;
  error?: React.ReactNode;
  rightLabelAction?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

export function FormField({
  label,
  htmlFor,
  required,
  helpText,
  error,
  rightLabelAction,
  className,
  children,
}: FormFieldProps) {
  return (
    <div className={cn("w-full", className)}>
      {label && (
        <div className="mb-1.5 flex items-center justify-between gap-2">
          <label
            htmlFor={htmlFor}
            className="block text-sm font-medium text-neutral-800"
          >
            {label}
            {required && <span className="ml-0.5 text-rose-500">*</span>}
          </label>
          {rightLabelAction}
        </div>
      )}
      {children}
      {helpText && !error && (
        <p className="mt-1.5 text-xs text-neutral-400">{helpText}</p>
      )}
      {error && <p className="mt-1 text-xs text-rose-600">{error}</p>}
    </div>
  );
}
