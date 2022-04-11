import { useEffect, useRef } from "react";

const usePrevious: (d: any) => any = (data: any) => {
    let prevData: any = useRef<any>(undefined);

    useEffect(() => {
        prevData.current = data;
    }, [data]);

    return prevData.current;
}

export default usePrevious;