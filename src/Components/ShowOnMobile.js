import React, { useState, useEffect } from 'react';

export default function ShowOnMobile({ children }) {
    let [isShow, setIsShow] = useState(false);
    useEffect(() => {
        let value = window.innerWidth < 567;
        setIsShow(value);
        console.log("called useeffect")
        window.addEventListener('resize', resizeHandler)
        return () => {
            window.removeEventListener('resize', resizeHandler)
            console.log("removed window resizer")
        }
    }, [])
    const resizeHandler = () => {
        let value = window.innerWidth < 567;
        // value is true if width is less than 567
        setIsShow(value);
    }
    return isShow ? React.Children.only(children) : null;
}
