import { ComponetBase } from "../main"

const reRender = async (elment: string, component: ComponetBase) => {
    if (elment) {
        document.querySelector(elment)?.innerHTML = await component.render()
    } if (component.afterRender) {
        await component.afterRender()
    }
}