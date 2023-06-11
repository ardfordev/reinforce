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
            <CardTitle>Health Index</CardTitle>
            <CardDescription>
            </CardDescription>
          </CardHeader>
          <CardContent className='grid grid-cols-3 gap-5'>
            <div className='text-3xl font-semibold'>Energi Produksi</div><div> : </div><div className='text-end'> kW</div>
            <div className='text-end'>Segmen 1</div><div> : </div><div className='text-end'> kW</div>
            <div className='text-end'>Segmen 2</div><div> : </div><div className='text-end'> kW</div>
            <div className='text-2xl font-semibold'>Energi Penjualan (TUL 309)</div><div> : </div><div className='text-end'> kW</div>
          </CardContent>
          <CardFooter className='border-t grid grid-cols-2 pt-2'>
            <div>RESUME HEALTH INDEX PENYULANG : <span className='text-3xl text-green-500'>SEHAT</span></div>
            <div className='grid grid-cols-3 gap-2'>
              <div className='text-end'>GAP LOSS</div><div> : </div><div className='text-end'> kW</div>
              <div className='text-end'>GAP PERCENT</div><div> : </div><div className='text-end'> %</div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default page;