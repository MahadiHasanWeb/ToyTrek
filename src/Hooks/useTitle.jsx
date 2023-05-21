import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `ToyTrek | ${title}`;
    }, [title])
};

export default useTitle;