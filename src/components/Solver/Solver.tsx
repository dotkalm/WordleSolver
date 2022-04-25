import React from "react";
import styles from "./Solver.module.css" 

type Props = {
    solution: string;
}
export function Solver({solution}:Props){
    const answer = solution.split('').map((character: string, index: number) => {
        return(
            <div className={styles.correct} key={index}>
                {character}
            </div>
        )
    })
    return(
        <div className={styles.solution}>
            {answer}
        </div>
    )
}
