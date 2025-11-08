"use client";

import { FC, useEffect, useState } from "react";
import "./Information.css";

export type InformationProps = {
    title: string;
    subTitle: string;
    achievements: Array<{
        number: string;
        title: string;
    }>;
};

const Information: FC<InformationProps> = ({
    title,
    subTitle,
    achievements,
}) => {
    const [displayedNumbers, setDisplayedNumbers] = useState<number[]>([]);

    useEffect(() => {
        const targetNumbers = achievements.map((a) => parseInt(a.number, 10));
        const duration = 1500;
        const frameRate = 30;
        const totalFrames = Math.round((duration / 1000) * frameRate);

        let frame = 0;
        const interval = setInterval(() => {
            frame++;
            setDisplayedNumbers(
                targetNumbers.map((target) =>
                    Math.floor((target / totalFrames) * frame),
                ),
            );

            if (frame === totalFrames) clearInterval(interval);
        }, 1000 / frameRate);

        return () => clearInterval(interval);
    }, [achievements]);

    return (
        <div className="information">
            <div className="information__left">
                <h2 className="information__title">{title}</h2>
                <p className="information__subtitle">{subTitle}</p>
            </div>
            <div className="information__achievements">
                {achievements.map((achievement, index) => (
                    <div key={index} className="information__achievement">
                        <span className="information__achievement-number">
                            {displayedNumbers[index] ?? 0}
                        </span>
                        <span className="information__achievement-title">
                            {achievement.title}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Information;
