import * as PIXI from 'pixi.js'
import { Game } from './game'

export class Plus extends PIXI.Sprite {
    private yspeed: number = 0
    private xspeed: number = 0
    game: Game


    constructor(texture: PIXI.Texture, game: Game) {
        super(texture)
        this.game = game
        

        this.x = 400
        this.y = 200


        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
    }









    onKeyDown(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {

            case "A":
            case "ARROWLEFT":
                this.xspeed = -6
                this.scale.set(-1, 1)
                break
            case "D":
            case "ARROWRIGHT":
                this.xspeed = 6
                this.scale.set(1, 1)
                break
            case "W":
            case "ARROWUP":
                this.yspeed = -6
                break
            case "S":
            case "ARROWDOWN":
                this.yspeed = 6
                break
        }



    }


    private onKeyUp(e: KeyboardEvent): void {
        switch (e.key.toUpperCase()) {
            case " ":
                break;
            case "A":
            case "D":
            case "ARROWLEFT":
            case "ARROWRIGHT":
                this.xspeed = 0
                break
            case "W":
            case "S":
            case "ARROWUP":
            case "ARROWDOWN":
                this.yspeed = 0
                break
        }
    }

    update(delta: number) {
        this.x += this.xspeed * delta
        this.y += this.yspeed * delta

    }

}


