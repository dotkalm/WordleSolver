import React  from "react";
import { inputCharacter } from "@src/actions"

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

    let firstChild = body.firstChild as HTMLElement

    const { solution } = JSON.parse(window.localStorage['nyt-wordle-state'])
    solution && solve(solution)
}


