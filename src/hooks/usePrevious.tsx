import { useEffect, useRef } from "react";

const usePrevious: (d: any) => any = (data: any) => {
    let prevData: any = useRef<any>();

    useEffect(() => {
        prevData.current = data;
    }, [data]);

    return prevData;
}

export default usePrevious;