'use client'
import React, { FormEvent, useState } from 'react';
import styles from './Searchbar.module.css';
import { FaSearch } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const Searchbar = () => {
  const [search, setSearch] = useState("")
  const router = useRouter()
  const [index, setIndex] = useState(0)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push(`/results/${search}`)
    setSearch('')
  }

  return (
    <div className='pt-6 pb-4'>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
            <FaSearch className={styles.icon} />
            <input
                type="text"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                className={styles.input}
                placeholder="Cerca"
            />
        </div>
      </form>
      <div className="flex py-2 gap-x-2">
        <button 
          onClick={() => setIndex(0)}
          className={`${index == 0 ? 'bg-[#81B4AE] text-[#f1f1f1]': 'bg-[#d4d4d4] text-[#606060]'} rounded-[4px]  p-2`}>Parola chiave</button>
        <button 
          onClick={() => setIndex(1)}
          className={`${index == 1 ? 'bg-[#81B4AE] text-[#f1f1f1]': 'bg-[#d4d4d4] text-[#606060]'} rounded-[4px]  p-2`}>Categoria</button>
        <button 
          onClick={() => setIndex(2)}
          className={`${index == 2 ? 'bg-[#81B4AE] text-[#f1f1f1]': 'bg-[#d4d4d4] text-[#606060]'} rounded-[4px]  p-2`}>Nome tag</button>
      </div>
    </div>
  );
};

export default Searchbar;