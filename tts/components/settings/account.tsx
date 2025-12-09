
"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "react-day-picker";
import { useForm } from "react-hook-form";
import { z } from "zod";
export default function AccountSetting() {
  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    email: z.email({message:"Enter a valid email"}),
    country: z.string({message:"Choose a valid country"})
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="h-full">
      <div className="mb-5!">
        <p className="text-2xl font-semibold">Account settings</p>
        <span className="font-urbanist text-sm text-[#686868]">
          Manage your account, photo and names.
        </span>
      </div>

      {/* <div>
        <p className="font-medium">Profile photo</p>
        <div>
          <div className="w-25 h-25 rounded-full flex justify-center text-5xl text-white font-medium items-center bg-[#3A53C6]">
            B
          </div>
          <div>
            <Input
              placeholder="Upload photo"
              className="bg-[#3A53C6]! text-white! border! w-30"
              type="file"
            ></Input>
          </div>
        </div> */}
      {/* </div> */}
      <div>
        <p className="font-medium mb-3!">Personal information</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8! h-full">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="shadcn"
                      className="bg-[#F9F9F9]! w-[95%] border-0 px-4! rounded-sm!"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="example@info.com"
                      className="bg-[#F9F9F9]! w-[95%] border-0 px-4! rounded-sm!"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="bg-[#3A53C6]! ml-auto! relative px-4! py-2! rounded-lg! text-white!">Save changes</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
