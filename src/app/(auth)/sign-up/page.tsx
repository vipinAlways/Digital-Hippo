"use client";
import { Icons } from "@/components/Icon";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AuthCredeintialValidator,
  TAuthCredeintialValidator,
} from "@/lib/validators/account-credential-validator";
import { trpc } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

function page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredeintialValidator>({
    resolver: zodResolver(AuthCredeintialValidator),
  });
  const { mutate, status } = trpc.auth.createPayLoadUser.useMutation();
  const isLoading = status === 'pending';

  const onsubmit = ({ email, password }: TAuthCredeintialValidator) => {};

  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col items-center space-y-2 text-center">
          <Icons.logo className="h-20 w-20" />

          <h1 className="text-2xl font-bold">Create an account</h1>

          <Link
            href="/sign-in"
            className={buttonVariants({
              variant: "link",
              className: "gap-1.5",
            })}
          >
            Already have an account Sign-in
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 ">
          <form onSubmit={handleSubmit(onsubmit)}>
            <div className="grid gap-2">
              <div className="grid gap-2 py-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  {...register("email")}
                  placeholder="Enter your email"
                  className={cn({ "focus-visible:ring-red-500": errors.email })}
                />
              </div>
            </div>
            <div className="grid gap-2">
              <div className="grid gap-2 py-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password")}
                  placeholder="Enter your password"
                  className={cn({
                    "focus-visible:ring-red-500": errors.password,
                  })}
                />
              </div>

              <Button>Sign up</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;
