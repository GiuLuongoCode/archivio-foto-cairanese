'use client'

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { photos } from "./photos"
import { useEffect, useState } from "react"
import MyDialog from "./MyDialog"

export default function MyMasonry({results, limit}: {
    results: any,
    limit: number
}) {

    const [open, setOpen] = useState(false)
    const closeDialog = () => {
        setOpen(false)
    }

    const [imgIndex, setImgIndex] = useState(0)

    const prevImage = () => {
        if(imgIndex > 0) {
            setImgIndex(imgIndex-1)
        }
    }

    const nextImage = () => {
        console.log("INDEX: " + imgIndex + " / limit: " + limit)
        if(imgIndex < limit - 1) {
            setImgIndex(imgIndex+1)
        }
    }

    useEffect(() => {
        if (open) {
          document.body.classList.add('overflow-hidden');
        } else {
          document.body.classList.remove('overflow-hidden');
        }
      }, [open]);

    return(
        <div className="flex">
        
        <ResponsiveMasonry
                className="w-full"
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
        >
            <Masonry gutter="10px">
                {
                    results.map((char: any, index: number) => (
                        <img
                            onClick={()=> { 
                                setImgIndex(index)
                                setOpen(true)
                            }}
                            className="hover:cursor-zoom-in" 
                            src={char.url} alt={char.name} key={index} />
                            
                        
                    ))
                }
            </Masonry>
        </ResponsiveMasonry>
        { open && 
            <MyDialog 
                imageData={results[imgIndex]} 
                isOpen={open} 
                limit={limit}
                idx={imgIndex}
                closeModal={closeDialog} 
                prevImage={prevImage}
                nextImage={nextImage}
            /> 
        }
        </div>
    )
}