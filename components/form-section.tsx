"use client";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { Label } from "./ui/label";
import  {Input}  from "./ui/input";
import { z } from "zod";
import { Button } from "./ui/button";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, MailCheck, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const formSchema = z.object({
  firstname: z
    .string()
    .min(3, { message: "Firstname must be at least 3 characters." }),
  lastname: z
    .string()
    .min(2, { message: "Lastname must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
});

export function FormSection({ className }: { className?: string }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
    },
  });

  const { isSubmitting, isSubmitSuccessful } = form.formState;

  const formRef = useRef<HTMLFormElement | null>(null);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await sendEmail(values);
      toast.success("Email sent successfully");
      form.reset();
    } catch (error) {
      toast.error("Error sending email");
      console.error(error);
    }
  };

  const sendEmail = (_values: z.infer<typeof formSchema>) => {
    if (!formRef.current) return Promise.reject("Form not found");
    return emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      formRef.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
    );
  };

  return (
    <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)} className={cn("relative", className)}>
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
        <LabelInputContainer>
          <Label htmlFor="firstname">First name</Label>
          <Input
            id="firstname"
            placeholder="Roberto"
            {...form.register("firstname")}
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="lastname">Last name</Label>
          <Input
            id="lastname"
            placeholder="Carlos"
            {...form.register("lastname")}
          />
        </LabelInputContainer>
      </div>
      <LabelInputContainer className="mb-4">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          placeholder="ambassador@realmadrid.com"
          type="email"
          {...form.register("email")}
        />
      </LabelInputContainer>
  

      <Button
        type="submit"
        className="relative my-3 flex items-center gap-3"
        disabled={isSubmitting}
      >
        {isSubmitSuccessful ? <span>Sent !</span> : <span>Send ?</span>}
        <AnimatePresence mode="wait" initial={false}>
          {isSubmitting && (
            <motion.span
              key="loader"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <Loader2 className="w-5 h-5 animate-spin" />
            </motion.span>
          )}
          {!isSubmitting && !isSubmitSuccessful && (
            <motion.span
              key="send"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <Send className="w-5 h-5" />
            </motion.span>
          )}
          {!isSubmitting && isSubmitSuccessful && (
            <motion.span
              key="success"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <MailCheck className="w-5 h-5" />
            </motion.span>
          )}
        </AnimatePresence>
      </Button>

      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
    </form>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};