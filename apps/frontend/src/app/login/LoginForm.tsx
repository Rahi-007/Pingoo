"use client";

import { z } from "zod";
import { useState } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { login, setAxiosAuthToken } from "@/service/auth.service";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { fadeUpAnimation } from "@/lib/motion.utils";
import { setAuth } from "@/context/slice/auth.slice";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, LogIn } from "lucide-react";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import GInput from "@/components/generic/GInput";

const inputDark =
  "h-11 rounded-xl border border-zinc-300/70 bg-white/80 px-3.5 text-zinc-900 shadow-none placeholder:text-zinc-500/90 backdrop-blur-md transition-[border-color,background-color,box-shadow] focus-visible:border-cyan-500/40 focus-visible:bg-white focus-visible:shadow-[0_0_0_3px_rgba(14,116,144,0.10)] focus-visible:ring-0 dark:border-white/[0.12] dark:bg-white/[0.04] dark:text-slate-100 dark:placeholder:text-slate-400/80 dark:focus-visible:border-white/25 dark:focus-visible:bg-white/[0.07] dark:focus-visible:shadow-[0_0_0_3px_rgba(255,255,255,0.06)]";

const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

type LoginFormValues = z.infer<typeof LoginSchema>;

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [showPass, setShowPass] = useState(false);

  const onSubmit = async (values: LoginFormValues) => {
    try {
      const res = await login(values);
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("refreshToken", res.refreshToken);
      localStorage.setItem("user", JSON.stringify(res.user));
      setAxiosAuthToken(res.accessToken);
      dispatch(setAuth(res));
      router.replace("/");
      // toast.success("Welcome Back 🎉");
    } catch (error: unknown) {
      // toast.error(error instanceof Error ? error.message : String(error));
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="border-2 rounded p-8 space-y-4">
        <motion.div {...fadeUpAnimation(12, 0.35, 0.06)} className="space-y-2">
          <label className="ml-0.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500 dark:text-slate-400/90">
            <span className="h-1 w-1 rounded-full bg-zinc-500/60 dark:bg-white/40" aria-hidden />
            Email
          </label>
          <GInput.Form type="email" name="email" label="" control={form.control} placeholder="you@example.com" className={inputDark} />
        </motion.div>

        <motion.div {...fadeUpAnimation(12, 0.35, 0.1)} className="space-y-2">
          <div className="flex items-center justify-between gap-2">
            <label className="ml-0.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500 dark:text-slate-400/90">
              <span className="h-1 w-1 rounded-full bg-zinc-500/60 dark:bg-white/40" aria-hidden />
              Password
            </label>
            <button
              type="button"
              className="text-xs font-medium text-zinc-600 underline-offset-2 transition-colors hover:text-zinc-900 dark:text-slate-300/90 dark:hover:text-white"
            >
              Forgot password?
            </button>
          </div>
          <div className="relative">
            <GInput.Form
              type={showPass ? "text" : "password"}
              name="password"
              label=""
              control={form.control}
              placeholder="••••••••"
              className={`${inputDark} pr-11`}
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg p-2 text-zinc-500 transition-colors hover:bg-zinc-200/70 hover:text-zinc-900 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white"
              aria-label={showPass ? "Hide password" : "Show password"}
            >
              {showPass ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
            </button>
          </div>
        </motion.div>

        <motion.div {...fadeUpAnimation(10, 0.35, 0.14)}>
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="relative h-12 w-full rounded-xl border-0 bg-linear-to-r from-sky-500 via-teal-500 to-emerald-600 font-semibold text-white shadow-[0_8px_28px_-6px_rgba(20,184,166,0.45),0_0_0_1px_rgba(255,255,255,0.08)_inset] transition-all hover:from-sky-400 hover:via-teal-400 hover:to-emerald-500 hover:shadow-[0_12px_36px_-8px_rgba(45,212,191,0.4)] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-55 disabled:hover:shadow-none"
          >
            <span className={form.formState.isSubmitting ? "invisible" : "inline-flex items-center gap-2"}>
              <LogIn className="h-4 w-4" />
              Sign in
            </span>
            {form.formState.isSubmitting && (
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              </span>
            )}
          </Button>
        </motion.div>
      </form>
    </Form>
  );
};

export default LoginForm;
