import type { ComponentProps } from "react";
import type { FieldValues, SubmitHandler, UseFormReturn } from "react-hook-form";

import { FormProvider } from "react-hook-form";

type FormProps<TSchema extends FieldValues = FieldValues> = Omit<ComponentProps<"form">, "onSubmit"> & {
	form: UseFormReturn<TSchema>;
	onSubmit: SubmitHandler<TSchema>;
};

export function Form<TSchema extends FieldValues = FieldValues>(props: FormProps<TSchema>) {
	return (
		<FormProvider {...props.form}>
			<form onSubmit={props.form.handleSubmit(props.onSubmit)}>
				<fieldset className="flex flex-col gap-4" disabled={props.form.formState.isSubmitting}>
					{props.children}
				</fieldset>
			</form>
		</FormProvider>
	);
}
