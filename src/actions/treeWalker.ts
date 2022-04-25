import { isType } from "@src/actions"
import { closeIcon } from "@src/fixtures"



export function inspectTree<T>(
    nodeList: NodeList, 
    selector: string, 
    callback: () => void,
): unknown{
    try{
        for(const node of Array.from(nodeList)){
            const element = node as HTMLElement 
            if(element.shadowRoot){
                const { localName } = element
                if(localName && localName === selector){
                    return node 
                }
                const inspectChildren = inspectTree<T>(element.shadowRoot.childNodes, selector, callback)
                if(inspectChildren){
                    const correct = isType<T>(inspectChildren as unknown || undefined)
                    if(correct) return inspectChildren;
                };
            }
            if(element.className === 'menu-left'){
                const exists = element.querySelector('#first-try')
                if(!exists){
                    const check = document.createElement('button')
                    check.className = 'icon'
                    check.id = 'first-try'
                    check.textContent = 'solve'
                    check.style.border = 'solid #6aaa64 3px'
                    check.style.backgroundColor = '#6aaa64'
                    check.style.color = '#fff'
                    check.style.fontSize = '14px'
                    check.style.borderRadius = '.4em'
                    check.style.height = '24px'
                    check.onpointerdown = () => {
                        check.style.backgroundColor = '#538d4e'
                        check.style.border = 'solid #538d4e 3px'
                    }
                    check.onblur = () => {
                        check.style.backgroundColor = '#6aaa64'
                        check.style.border = 'solid #6aaa64 3px'
                    }
                    check.onpointerup = callback 
                    element.appendChild(check)
                }
            }

            if(node.hasChildNodes()){
                const inspectChildren = inspectTree<T>(node.childNodes, selector, callback)
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
