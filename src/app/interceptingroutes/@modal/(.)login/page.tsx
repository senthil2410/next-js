"use client"

import { useRouter } from "next/navigation";

const Modal=()=>
{
    const router=useRouter();

    const onClose=()=>
    {
        router.back();
    }

    return(
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background:"gray",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 100,
            }}
            onClick={onClose}
            >
            <div onClick={(e)=>e.stopPropagation()} style={{}}>
            
                <h2>Login-Modal</h2>
                <button onClick={onClose}>Close</button>
            </div>
        </div>

            )

        }
        
export default Modal;