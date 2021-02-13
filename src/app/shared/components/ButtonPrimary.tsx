import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'contained' | 'outlined' | 'text'
}
const ButtonPrimary: React.FC<ButtonProps> = ({ variant,...props }) => {  
    switch(variant) {
        case 'contained':
            return (
                <button 
                    {...props}
                    className={"padding-s margin-top-m background-primary border-none text-white font-size-m text-uppercase border-thin " + props.className} >
                </button>
            );
        case 'text':
            return (
                <button 
                    {...props}
                    className={"padding-s margin-top-m border-none text-white font-size-m text-uppercase border-thin " + props.className} >
                </button>
            );            
        default:
            return (
                <button 
                    {...props}
                    className={"padding-s margin-top-m border-soft text-white font-size-m text-uppercase " + props.className} >
                </button> 
            );
    }
}

export default ButtonPrimary;