"use client"

import React, { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import getSpecificUserOTP from '@/lib/actions/getSpecificUser'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import confirmOTP from '@/lib/actions/confirmOTP'
import sendOTPadmin from '@/lib/actions/admin/sendOTPadmin'

  


const formSchema = z.object({
    phone: z.string().min(10, {
      message : "Must be 10 numbers.",
    }).max(10,{message:"Must be 10 numbers"}),
    
  })

const AdminLogin = () => {

    // eslint-disable-next-line react-hooks/exhaustive-deps


    const router = useRouter()
    const {toast}= useToast();
    const [loading, setLoading] = useState(false);
    const [otpShow, setOtpShow] = useState(false);

    

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            phone:"",
    },
    })

    // 2. Define a submit handler.
    async function onSubmit(values) {
        try {
            setLoading(true);
            const response = await sendOTPadmin(values.phone);
            if(response.found==true){
              sessionStorage.setItem("phone", values.phone);
              setOtpShow(true);
            }
            else{
              toast({
                title: "Oops !",
                description: "Access Denied",
                variant: "destructive",
            })
            }
        } catch (error) {
            console.log(error)
            toast({
                title: "Oops !",
                description: "Some error occured.",
                variant: "destructive",
            })
        }finally{
            setLoading(false);
        }
    }

    const otpConfirm = async ()=>{
      try {
        setLoading(true);
        let otpCode = document.getElementById("inputOTP");
        if(otpCode.value==""){
          toast({
            title: "Alert !",
            description: "Enter the OTP",
          })
        }
        else{
          let phone = sessionStorage.getItem("phone")
          const response = await confirmOTP(phone, otpCode.value);

          if(response.matched){
            sessionStorage.setItem("tempo", phone);
            sessionStorage.removeItem("phone");
            toast({
              title: "Congratulations !",
              description: "Logged in Successfully.",
              variant: "success"
            });
            setTimeout(() => {
              router.push("/admin/users");
            }, 3000);
          }
          else{
            toast({
              title: "Oops !",
              description: "OTP does not match.",
              variant: "destructive"
            });
          }
        }

    } catch (error) {
        console.log(error)
        toast({
            title: "Oops !",
            description: "Some error occured.",
            variant: "destructive",
        })
    }finally{
        setLoading(false);
    }
    }



  return (
    
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full md:w-96">
    <Card>
        <CardHeader>
            <CardTitle>Log in</CardTitle>
            <CardDescription>Log in to admin Dashboard</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">

          <div className={otpShow?"hidden":"space-y-8"}>

             {/* phone */}
             <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Phone number</FormLabel>
                <FormControl>
                   <Input type="number" className="placeholder:text-gray-400 font-light" placeholder="98XXXXXXXX" {...field} />
                </FormControl>
                {/* <FormDescription>
                    This is your public display name.
                </FormDescription> */}
                <FormMessage />
                </FormItem>
            )}
            />
             {
                !loading
                ?
                <Button type="submit" className="w-full">Log in</Button>
                :
                <Button className="w-full" disabled>
                    <Loader2 className=" h-4 w-4 animate-spin" />
                </Button>
            }

          </div>

          <div className={otpShow?"":"hidden"}>
            <p className='font-medium text-center'>Enter OTP</p>
            <p className="text-xs text-gray-500 mt-1 text-center">An otp was just sent to your phone number. Wait for a while if it is not received.</p>

          <InputOTP id="inputOTP" maxLength={5}>
            <InputOTPGroup className="flex justify-center w-full my-12">
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
            </InputOTPGroup>
          </InputOTP>

          {
                !loading
                ?
                <Button type="button" className="w-full mt-4" onClick={otpConfirm}>Confirm</Button>
                :
                <Button className="w-full" disabled>
                    <Loader2 className=" h-4 w-4 animate-spin" />
                </Button>
            }
          

          </div>

        </CardContent>
    </Card>
    </form>
    </Form>
  )
}

export default AdminLogin