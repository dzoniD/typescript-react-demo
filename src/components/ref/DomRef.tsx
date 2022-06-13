import { useRef,useEffect  } from "react";

export const DomRef = () => {
    const inputRef = useRef<HTMLInputElement>(null!);//not null

    useEffect(() => {
        inputRef.current.focus();
    },[])

    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    )
}