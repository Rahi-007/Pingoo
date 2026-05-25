"use client";

import GInput from "@/components/generic/GInput";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface IProps {
  websiteName: string;
}

const SystemSettingSchema = z.object({
  websiteName: z.string().min(1, { message: "Website Name is Required" }),
});

type SystemSettingFormValues = z.infer<typeof SystemSettingSchema>;

const SystemSettingForm = ({ websiteName }: IProps) => {
  const form = useForm<SystemSettingFormValues>({
    resolver: zodResolver(SystemSettingSchema),
    defaultValues: {
      websiteName: websiteName || "",
    },
  });

  const onSubmit = async (values: SystemSettingFormValues) => {
    try {
      //   const res = await login(values);

      console.log("System Updated Successful 🎉", values);
    } catch (error: unknown) {
      console.error(error instanceof Error ? error.message : String(error));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-4 border-2 rounded-md w-100">
          <h1 className="text-2xl py-2 mb-4">System Settings Form</h1>
          <GInput.Form type="text" name="websiteName" label="Site Name" control={form.control} placeholder="Site name" className="mb-4" />

          <div className="flex justify-end">
            <Button type="submit" disabled={form.formState.isSubmitting}>
              <span className={form.formState.isSubmitting ? "invisible" : "inline-flex items-center gap-2"}>
                <Check className="h-4 w-4" />
                Submit
              </span>

              {/* Loading animation */}
              {/* {form.formState.isSubmitting && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="h-6 w-6 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                </span>
              )} */}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SystemSettingForm;
