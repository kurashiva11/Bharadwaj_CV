import { useRef, useEffect } from 'react';

import useSVGOnScreen from '../../hooks/useSVGOnScreen';
import withMountAnimatedScreen from '../../HOC/withMountAnimatedScreen';

import './index.css';

import { workspaceSVG } from '../../components/SVGs/workspace/workspaceSVG';
import { workspaceJS } from '../../components/SVGs/workspace/workspace';

type Props = {
    isActive: boolean;
}

const experianceData = [
    {
        dataYear: '2022',
        workDuration: '2022 May - Present',
        company: 'Microsoft Corporation.',
        role: 'Software Engineer',
    },
    {
        dataYear: '2021',
        workDuration: '2021 April - 2022 May',
        company: 'IBI Group Inc.',
        role: 'Software Developer',
    },
    {
        dataYear: '2020',
        workDuration: '2020 May - 2020 July',
        company: 'Virtusa Private Limited.',
        role: 'Full Stack Developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam possimus tempore ad maiores facere fugit sunt eveniet similique, ipsa libero illo reiciendis sint quasi, amet cum esse? Quia, ratione illum!',
    },
]

function Experience(props: Props) {
    const svgRef = useRef<HTMLDivElement>(null);

    useSVGOnScreen(props.isActive, workspaceSVG, workspaceJS, svgRef);

    useEffect(() => {
        // @ts-ignore
        new Swiper(".timeline .swiper-container", {
            direction: "vertical",
            loop: false,
            speed: 1600,
            pagination: ".swiper-pagination",
            paginationBulletRender: function (swiper: any, index: number, className: string) {
                console.log('className =', className);
                var year = document
                    .querySelectorAll(".swiper-slide")
                [index].getAttribute("data-year");
                return '<span class="' + className + '">' + year + "</span>";
            },
            paginationClickable: true,
            nextButton: ".swiper-button-next",
            prevButton: ".swiper-button-prev",
            breakpoints: {
                768: {
                    direction: "horizontal",
                },
            },
        });
    }, []);

    return (
        <div className="experience">
            <div className="timeline">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {[...experianceData].map((exp) => (
                            <div className="swiper-slide" data-year={exp.dataYear}>
                                <div className="swiper-slide-content">
                                    <span className="timeline-year">{exp.workDuration}</span>
                                    <h4 className="timeline-title">{exp.company}</h4>
                                    <p className="timeline-text">
                                        {exp.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>

            <div className={"gif--container"}>
                <div ref={svgRef} className={"animated_svg"}></div>
            </div>
        </div>
    )
}

export default withMountAnimatedScreen(Experience)