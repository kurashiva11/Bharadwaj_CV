import { RefObject, useEffect } from "react"


const useSVGOnScreen = (isActive: boolean, SVG: string, JSCode: string, svgRef: RefObject<HTMLDivElement>) => {
    useEffect(() => {
        const script = document.createElement('script');
        if (isActive) {
            if (svgRef.current) {    
                script.innerHTML = JSCode;

                setTimeout(() => {
                    svgRef.current && (svgRef.current.innerHTML = SVG);
                    document.body.appendChild(script);
                }, 600);
            }
        } else {
            // remove the js code.
            script.innerHTML = "";
        }
    }, [isActive]);
}

export default useSVGOnScreen;
