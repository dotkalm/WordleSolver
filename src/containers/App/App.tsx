import React, { FC, useState, useCallback, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import browser from "webextension-polyfill";
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
    const child = body?.children && inspectTree(body.childNodes, 'tile')
    const gameApp = body?.children && inspectTree(body.childNodes, 'game-app')

    let firstChild = body.firstChild as HTMLElement

    const { solution } = JSON.parse(window.localStorage['nyt-wordle-state'])
    solution && solve(solution)
}


