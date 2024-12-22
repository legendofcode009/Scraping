// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaHeart } from 'react-icons/fa'

const LikesPage = () => {
    return (
        <div className='relative overflow-x-auto shadow-md rounded-lg px-4'>
            <table className='w-full text-sm text-left rtl:text-right bg-glass overflow-hidden'>
                <thead className='text-xs uppercase bg-glass'>
                    <tr>
                        <th scope='col' className='p-4'>
                            <div className='flex items-center'>No</div>
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Username
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Date
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='bg-glass'>
                        <td className='w-4 p-4'>
                            <div className='flex items-center'>
                                <span>1</span>
                            </div>
                        </td>
                        <th scope='row' className='flex items-center px-6 py-4 whitespace-nowrap'>
                            <img
                              className='w-10 h-10 rounded-full'
                              src='/1.png'
                              alt='Jese image'
                            />
                            <div className='ps-3'>
                                <div className='text-base font-semibold'>Jayce Stone</div>
                            </div>
                        </th>
                        <td className='px-6 py-4'>Jayce</td>
                        <td className='px-6 py-4'>
                            <div className='flex items-center'>
                                <FaHeart size={22} className='text-red-500 mx-2' />
                                Liked your profile
                            </div>
                        </td>
                    </tr>
                    <tr className='bg-glass'>
                        <td className='w-4 p-4'>
                            <div className='flex items-center'>
                                <span>2</span>
                            </div>
                        </td>
                        <th scope='row' className='flex items-center px-6 py-4 whitespace-nowrap'>
                            <img
                              className='w-10 h-10 rounded-full'
                              src='/2.png'
                              alt='Jese image'
                            />
                            <div className='ps-3'>
                                <div className='text-base font-semibold'>Lyric Dunn</div>
                            </div>
                        </th>
                        <td className='px-6 py-4'>Lyric</td>
                        <td className='px-6 py-4'>
                            <div className='flex items-center'>
                                <FaHeart size={22} className='text-red-500 mx-2' />
                                Liked your work experience
                            </div>
                        </td>
                    </tr>
                    <tr className='bg-glass'>
                        <td className='w-4 p-4'>
                            <div className='flex items-center'>
                                <span>3</span>
                            </div>
                        </td>
                        <th scope='row' className='flex items-center px-6 py-4 whitespace-nowrap'>
                            <img
                              className='w-10 h-10 rounded-full'
                              src='/3.png'
                              alt='Jese image'
                            />
                            <div className='ps-3'>
                                <div className='text-base font-semibold'>Saul Kemp</div>
                            </div>
                        </th>
                        <td className='px-6 py-4'>Saul</td>
                        <td className='px-6 py-4'>
                            <div className='flex items-center'>
                                <FaHeart size={22} className='text-red-500 mx-2' />
                                Liked your university
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}
export default LikesPage