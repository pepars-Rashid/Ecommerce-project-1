"use client"  

import { zodResolver } from "@hookform/resolvers/zod"  
import { useForm } from "react-hook-form"  
import { z } from "zod"  
import { Button } from "@/components/ui/button"  
import {  
  Form,  
  FormControl,  
  FormField,  
  FormItem,  
  FormLabel,  
  FormMessage,  
} from "@/components/ui/form"  
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"  
import NumberInput from "./ui/number-input"  
import { Heart } from "lucide-react"

// Extend the schema to include 'number' as a required field  
const FormSchema = z.object({  
  type: z.enum(["red", "green", "blue"], {  
    required_error: "You need to select a color.",  
  }).default('green'),  
  number: z.number().min(1, { message: "Number must be greater than 0." }).default(1)
})  

export function ColorPicker() {  
  const form = useForm({  
    resolver: zodResolver(FormSchema),  
  })  

  function onSubmit(data) {  
    console.log('Form data:', JSON.stringify(data, null, 2))  
  }  

  return (  
    <Form {...form}>  
      <form onSubmit={form.handleSubmit(onSubmit)} className="h-full flex flex-col gap-2 justify-between pb-3">  
        <div className={'flex justify-between items-center'}>  
          <FormField  
            control={form.control}  
            name="type"  
            render={({ field }) => (  
              <FormItem className="flex gap-2 items-center">  
                <FormLabel className={'text-base font-medium'}>Color</FormLabel>  
                <FormControl>  
                  <RadioGroup  
                    onValueChange={field.onChange}  
                    value={field.value} // Use value instead of defaultValue  
                    className="flex"  
                  >  
                    <FormItem className="flex items-center space-x-3 space-y-0">  
                      <FormControl>  
                        <RadioGroupItem className={'bg-[red] text-white'} value="red" />  
                      </FormControl>  
                    </FormItem>  
                    <FormItem className="flex items-center space-x-3 space-y-0">  
                      <FormControl>  
                        <RadioGroupItem className={'bg-[green] text-white'} value="green" />  
                      </FormControl>    
                    </FormItem>  
                    <FormItem className="flex items-center space-x-3 space-y-0">  
                      <FormControl>  
                        <RadioGroupItem className={'bg-[blue] text-white'} value="blue" />  
                      </FormControl>  
                    </FormItem>  
                  </RadioGroup>  
                </FormControl>  
                <FormMessage />  
              </FormItem>  
            )}  
          />  
          
          {/* Add Number Input Field */}  
          <FormField  
            control={form.control}  
            name="number"  
            render={({ field }) => (  
              <FormItem className="flex gap-2 items-center">
                <FormControl>  
                  <NumberInput   
                    {...field} // Spread the field props to bind the input  
                    onChange={(value) => {  
                      field.onChange(value); // Call the onChange handler with the new value  
                    }}  
                  />  
                </FormControl>  
                <FormMessage />  
              </FormItem>  
            )}  
          />  
        </div>  
        <div className="w-full flex md:flex-row flex-col justify-end gap-5">
          <Button type="button" className={'w-32 md:w-auto rounded-xl py-6 bg-transparent border-2 border-[#009393] text-[#009393] hover:bg-[#016170]'}>
            <Heart size={22} fill="#009393"/>
          </Button>
          <Button type="button" className={'w-32 py-6 text-base font-medium  rounded-xl bg-transparent border-2 border-[#009393] text-[#009393] hover:bg-[#016170] hover:text-white'}>Add to the cart</Button>
          <Button type="submit" className={'w-32 py-6 text-base font-medium  rounded-xl bg-[#009393] hover:bg-[#016170]'}>Buy now</Button>  
        </div>
      </form>  
    </Form>  
  )  
}