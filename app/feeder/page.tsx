/* eslint-disable */
"use client"
import React, { FC } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Filter } from "lucide-react"
import Image from 'next/image'
import penyulangImg from '@/public/penyulang1.jpg'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { OverviewUnit } from '@/components/overview-unit'
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


interface pageProps {}

const page: FC<pageProps> = ({}) => {
  const [date, setDate] = React.useState<Date>()

  return (
    <div className='container items-center pb-8 pt-6'>
      <div className='grid gap-5'>
      <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-medium">
              Filter
            </CardTitle>
            <Filter className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent className='grid gap-5 md:grid-cols-2'>
            <div className='grid gap-5 md:grid-cols-2'>
              <div>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Tingkatan Unit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Tingkatan Unit</SelectLabel>
                      <SelectItem value="uid">Unit Induk Distribusi</SelectItem>
                      <SelectItem value="up3">Unit Pelaksana Pelayanan</SelectItem>
                      <SelectItem value="ulp">Unit Layanan Pelanggan</SelectItem>
                      <SelectItem value="gi">Gardu Induk</SelectItem>
                      <SelectItem value="penyulang">Penyulang</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex w-full items-center space-x-2">
                <Input type="email" placeholder="Nama Unit " />
                <Button type="submit">Search</Button>
              </div>
            </div>
            <div className='md:text-end'>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Tanggal</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              </div>
          </CardContent>
      </Card>
      </div>
      <div className='my-6'>
        <Card>
          <CardHeader className="flex pb-2">
            <CardTitle>Nama Unit</CardTitle>
            <CardDescription>
            </CardDescription>
          </CardHeader>
          <CardContent className='w-full flex justify-center items-center'>
            <div>
              <Image
                src={penyulangImg}
                alt="Penyulang 1"
                width={939}
                className="rounded-md object-cover"
              />
            </div>
          </CardContent>
        </Card>
      </div>
      <div className='my-6 grid md:grid-cols-3 gap-5'>
        <div>
          <Card className="">
            <CardHeader>
              <CardTitle>Titik Pangkal</CardTitle>
              <CardDescription>
                <div className='grid grid-cols-2 gap-2'>
                  <div>V1 : </div><div>16 Kv</div>
                  <div>I1 : </div><div>16 A</div>
                  <div>Cos Q1 : </div><div>...</div>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className='text-center'>
              <div className='w-full'>Perbedaan Tegangan</div>
              <OverviewUnit />
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="">
            <CardHeader>
              <CardTitle>Titik Tengah</CardTitle>
              <CardDescription>
                <div className='grid grid-cols-2 gap-2'>
                  <div>V1 : </div><div>16 Kv</div>
                  <div>I1 : </div><div>16 A</div>
                  <div>Cos Q1 : </div><div>...</div>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className='text-center'>
              <div className='w-full'>Perbedaan Tegangan</div>
              <OverviewUnit />
            </CardContent>
          </Card>
        </div>
        <div>
          <Card className="">
            <CardHeader>
              <CardTitle>Titik Ujung</CardTitle>
              <CardDescription>
                <div className='grid grid-cols-2 gap-2'>
                  <div>V1 : </div><div>16 Kv</div>
                  <div>I1 : </div><div>16 A</div>
                  <div>Cos Q1 : </div><div>...</div>
                </div>
              </CardDescription>
            </CardHeader>
            <CardContent className='text-center'>
              <div className='w-full'>Perbedaan Tegangan</div>
              <OverviewUnit />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default page;