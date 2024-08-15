import React from 'react';
import "@/styles/globals.css";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Data } from '@/components/data';

export default function Page() {
  return (
    <div className='min-h-screen w-full bg-[#19072C] flex lg:p-20 p-4 items-center justify-center z-0 overflow-hidden'>
      <div className='shape absolute top-3 rotate-90 -right-28 w-[800px] h-[500px] max-md:hidden opacity-80'></div>
      <div className='relative w-auto h-auto'>
        <div className='shape absolute top-28 -left-56 w-96 h-96 max-md:hidden'></div>
        <div className='shape absolute bottom-[80px] right-56 rotate-45 w-96 h-96 max-md:hidden opacity-40'></div>
        <div className='shape absolute -bottom-[80px] -right-64 rotate-180 w-96 h-96 max-md:hidden opacity-40'></div>
        <div className='w-full max-w-[900px] p-6 md:p-16 rounded-3xl bg-white/10 shadow-lg shadow-black space-y-1 relative !z-20 backdrop-filter backdrop-blur-md'>
          <h2 className='text-4xl font-bold text-blue-200 !mb-3'>{Data.heading}</h2>
          <p className='text-white text-lg'>{Data.description}</p>
          <div className='!my-10'>
            <TableDemo tData={Data.table} />
          </div>
          {Data.table.others.map((item:any, index:any) => (
            <div key={index}>
              <h2 className='text-xl font-bold text-blue-100'>{item.title}</h2>
              <p className='text-white text-lg !mb-4'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TableDemo( {tData }:any) {
  return (
    <Table className='overflow-hidden text-white'>
      <TableHeader>
        <TableRow className='bg-[#6366F1]'>
          {tData.thead.map((head:any, index:any) => (
            <TableHead key={index}>{head}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {tData.trows.map((product :any) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{product.apiName}</TableCell>
            <TableCell>{product.model}</TableCell>
            <TableCell >{product.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}