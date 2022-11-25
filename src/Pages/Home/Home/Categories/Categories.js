import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../../../Components/Loading';
const Categories = () => {
    const { data: brands, isLoading } = useQuery({
        queryKey: ['brands'],
        queryFn: async () => {
            const res = await fetch('http://localhost:8000/brands');
            const data = await res.json();
            return data;
        }
    });
    // const url = `http://localhost:8000/selectedBrand?brand=${brands.brand}`
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div >
            <h1 className='text-3xl font-semibold my-7'>Select brand</h1>
            <div className='flex border-dotted border-2 border-sky-500 gap-x-7 p-3 rounded-md bg-[#a8dadc]'>
                {
                    brands?.map(brand =>
                        <div
                            key={brand._id}
                        >
                            <div className='cursor-pointer border-2 border-solid border-blue-400 rounded-md p-2' title={brand.brand}>
                                <img className='hidden md:block' src={brand.imgURL} alt="" />
                                <Link to='/selectedBrand' className='text-xl md:text-2xl font-semibold hover:underline'>{brand.brand}</Link>
                            </div>
                        </div>)
                }
           </div>
        </div>
    );
};

export default Categories;