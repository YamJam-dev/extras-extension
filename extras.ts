//% groups='["Organizing", "Extras"]
namespace misc {
    //% block="description $desc"
    //% handlerStatement
    //% group="Organizing"
    export function description(desc: string, handler: () => void) {
        handler();
    }

    //% block="seperate"
    //% group="Organizing"
    export function seperate() {

    }

    //% block="seperate $desc"
    //% group="Organizing"
    export function seperateWithDesc(desc: string) {
    }

    //% block="Hold code and execute $tag"
    //% handlerStatement
    //% group="Organizing"
    export function holdCode(tag: string, handler: () => void) {
        handler();
    }

    //% block="Hold unused code $tag"
    //% group="Organizing"
    export function holdUnusedCode(tag: string, handler: () => void) {
        
    }

    //% block="infinity"
    //% group="Extras"
    export function returnInfinity() {
        return Infinity
    }

    //% block="choose $one or $two with $chance percent chance"
    //% group="Extras"
    export function thisOrThat(one: number, two: number, chance: number) {
        if (Math.percentChance(chance)) {
            return one
        } else {
            return two
        }   
    }

    //% block="loop $desc"
    //% group="Organizing"
    //% handlerStatement
    export function loopWithDesc(desc: string, handler: () => void) {
        handler()
    }

    //% block="loop (twice) $desc"
    //% group="Organizing"
    //% handlerStatement
    export function loopWithDescTwice(desc: string, handler: () => void) {
        for (let i = 0; i < 2; i++) {
            handler()
        }
    }
    
    

        
}