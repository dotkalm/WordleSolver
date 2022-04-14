import { inspectTree, sleep } from "@src/actions"
export async function inputCharacter(character: string): Promise<void|Error>{
    try{
        const body = document.querySelector<HTMLBodyElement>('body')
        if(!body) throw new Error("no body");
        const keyboardRoot = body?.children && inspectTree(body.childNodes, 'game-keyboard') as HTMLElement
        const keyboard = keyboardRoot.shadowRoot && keyboardRoot.shadowRoot.querySelector('#keyboard')
        if(!keyboard) throw new Error('no keyboard')

        const element = keyboard.querySelector<HTMLButtonElement>(`[data-key='${character}']`)
        if(!element) throw new Error('no character element')
        await sleep(1000)
        element.click()
        return
    }catch(err: unknown){
        if(err instanceof Error){
            return err
        }
        return 
	}
}

