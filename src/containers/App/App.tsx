import React from "react";
import { inspectTree, inputCharacter } from "@src/actions"

async function solve(solution: string){
    const letters = solution.split('')
    while(letters.length > 0){
        const letter = letters.shift()
        if(!letter) break;
        await inputCharacter(letter)
    }
    await inputCharacter('↵')
}

export function App(){
    const body = document.querySelector<HTMLBodyElement>('body')
    if(!body) throw new Error("no body");
    const { solution, gameStatus } = JSON.parse(window.localStorage['nyt-wordle-state'])
    function clickThing(){
        gameStatus === 'IN_PROGRESS' && solution && solve(solution).then(() => {
            body?.children && inspectTree(body.childNodes, 'nav-icon', clickThing, false)
        })
    }
    const gameApp = body?.children && inspectTree(body.childNodes, 'nav-icon', clickThing, gameStatus === 'IN_PROGRESS')
    let firstChild = body.firstChild as HTMLElement

}
