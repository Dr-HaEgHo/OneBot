'use client'
import { useRouter } from 'next/navigation';
import React, { FC, useEffect, useState } from 'react'
import TableShimmerLoader from './TableShimmerLoader';
import EmptyTable from './EmptyTable';
import { TableProps } from '@/types';
import Image from 'next/image';
import { More } from 'iconsax-react';
// import moment from 'moment';


const Table:FC<TableProps> = ({ data, loading }) => {

    const [sortedResults, setSortedResults] = useState([] as any)
    const [domLoaded, setDomLoaded] = useState(false);
    const router = useRouter();



    const sortResults = () => {
        if (data.results) {
            console.log("results in table:::", data.results)
            const dataCopy: any[] = [...data.results]
            const newSortedResults = dataCopy.sort((a: any, b: any) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
            setSortedResults(newSortedResults)
        }
    }

    useEffect(() => {
        sortResults()
    }, [])

    useEffect(() => {
        setDomLoaded(true);
    }, []);

    return (<>
        {
            domLoaded && (<div className='w-full bg-white rounded-lg'>
                <table className='w-full'>
                    <thead className='w-full border-b border-tableStroke p-[18px] '>
                        <tr className='w-full flex items-center px-2 justify-between'>
                            <th>

                            </th>
                            <th className='table-header' >
                                Name
                            </th>
                            <th className='table-header' >
                                Email
                            </th>
                            <th className='table-header' >
                                Phone Number
                            </th>
                            <th className='table-header justify-center' >
                                Status
                            </th>
                            <th className='table-header justify-center' >
                                Action
                            </th>
                        </tr>
                    </thead>


                    <tbody className={`flex flex-col gap-4 ${loading && 'animate-pulse w-full flex flex-col mt-4 px-4 mb-4'}`} >

                        {loading ? (<TableShimmerLoader />) : (
                            <>
                                {
                                    data && data.results ? data.results.map((item: any) => (
                                        <tr onClick={() => {
                                            router.push(`/dashboard/incubatees/${item?.id}`)
                                        }} key={item.id} className='w-full flex items-center px-2 justify-between hover:bg-sidebarTxtHover active:bg-sidebarTxtActive transition duration-200 cursor-pointer'>
                                            <td className='py-3 flex flex-1 gap-2 items-center text-black font-[400] text-xs 2xl:text-[15px]'>
                                                <Image
                                                    src={require('../assets/images/avatar2.png')}
                                                    alt="student thumbnail"
                                                    className='w-10 h-10 founded-full overflow-hidden'
                                                />
                                                {item.name}
                                            </td>
                                            <td className='py-3 flex flex-1 text-email font-normal text-sx 2xl:text-[15px]'>
                                                {item.email}
                                            </td>
                                            <td className='py-3 flex flex-1 text-email font-normal text-sx 2xl:text-[15px]'>
                                                {item.phone}
                                            </td>
                                            <td className={`flex flex-[1] justify-center  `}>
                                                <span className={`flex items-center justify-center w-[107px] py-1 rounded-full text-primary2 text-xs 2xl:text-sm   ${item.status === 'Active' ? 'bg-primaryLightRGB' : 'bg-primaryLightRGB'}`} >{item.status}</span>
                                            </td>
                                            <td className='py-3 flex flex-1 justify-center flex-col items-center'>
                                                {/* <p className='text-head text-xs 2xl:text-sm ' >{moment(item.created_at).format("Do, MMM YYYY")}</p> */}
                                                {/* <p className='text-head text-[8px] 2xl:text-[8px]' >at {moment(item.created_at).format("hh:mm a")}</p> */}
                                                <span className='bg-dashboardBg rounded-full w-5 h-5 flex items-center justify-center hoverActive font-[900] text-2xl'>⁝</span>
                                            </td>
                                        </tr>
                                    )) : (<EmptyTable text='Oops, No incubatees' subtext='Sorry, there are no incubatees currently' />)
                                }
                            </>
                        )}

                    </tbody>
                </table>
            </div>)
        }
    </>)
}
export default Table;