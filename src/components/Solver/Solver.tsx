import React, { useEffect } from "react";
import type { Runtime } from "webextension-polyfill";
import styles from "./Solver.module.css" 

type Props = {
    solution: string;
}
export function Solver({solution}:Props){
    const answer = solution.split('').map((character: string) => {
        return(
            <div className={styles.correct}>
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
