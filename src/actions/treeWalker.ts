import { isType } from "@src/actions"
import { closeIcon } from "@src/fixtures"



export function inspectTree<T>(
    nodeList: NodeList, 
    selector: string, 
): unknown{
    try{
        for(const node of Array.from(nodeList)){
            const element = node as HTMLElement 
            if(element.shadowRoot){
                const { localName } = element
                if(localName && localName === 'game-icon'){
                    if(element.shadowRoot.innerHTML === closeIcon){
                        const { gameStatus } = JSON.parse(window.localStorage['nyt-wordle-state'])
                        gameStatus === "IN_PROGRESS" && element.click()
                    }
                }
                if(localName && localName === selector){
                    return node 
                }
                const inspectChildren = inspectTree<T>(element.shadowRoot.childNodes, selector)
                if(inspectChildren){
                    const correct = isType<T>(inspectChildren as unknown || undefined)
                    if(correct) return inspectChildren;
                };
            }

            if(node.hasChildNodes()){
                const inspectChildren = inspectTree<T>(node.childNodes, selector)
                if(inspectChildren){
                    const correct = isType<T>(inspectChildren as unknown || undefined)
                    if(correct) return inspectChildren;
                };
            }
        }
    }catch(err){
        console.log(err)
        return undefined
    }
}
