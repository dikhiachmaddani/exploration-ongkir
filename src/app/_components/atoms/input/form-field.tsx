import { UseFormRegister, FieldValues, Path, FieldErrors } from "react-hook-form";
import { Input } from "@/app/_components/atoms/ui/input";
import { cva, VariantProps } from 'class-variance-authority';
import { InputHTMLAttributes } from 'react';

const input = cva(
    "",
    {
        variants: {
            variant: {
                default: "",
            },
            inputSize: {
                default: "",
                sm: "h-9",
                lg: "h-11",
                full: "h-20",
            },
            rounded: {
                default: "",
                sm: "rounded-sm",
                lg: "rounded-lg",
                full: "rounded-full",
            },
        },
        defaultVariants: {
            variant: "default",
            inputSize: "default",
            rounded: "default",
        },
    },
);

interface InputProps<T extends FieldValues = FieldValues> extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof input> {
    name: Path<T>;
    register: UseFormRegister<T>;
    errors?: FieldErrors<T>;
}

export function FormField<T extends FieldValues = FieldValues>(inputProps: InputProps<T>) {
    const { name, type = "text", placeholder, disabled = false, register, errors, variant, inputSize, rounded, className } = inputProps;
    return (
        <div>
            <Input type={type} placeholder={placeholder} disabled={disabled}
                className={input({ variant, inputSize, rounded, className })}
                {...register(name)}
            />
            {errors && errors[name] && <span className="text-red-500 text-sm mt-2">{errors[name]?.message?.toString()}</span>}
        </div>
    );
}
