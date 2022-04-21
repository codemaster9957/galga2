namespace SpriteKind {
    export const boss = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        `, mySprite, 0, -100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(1)
    projectile.destroy()
})
let mySprite2: Sprite = null
let mySprite5 = 0
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
mySprite = sprites.create(img`
    ........f........
    .......fbf.......
    ......f2b2f......
    .f....f2b2f....f.
    fcf...f2b2f...fcf
    fcf...f2b2f...fcf
    fcf...f2b2f...fcf
    fcf...f2b2f...fcf
    fcf...f2b2f...fcf
    fccf..f2b2f..fccf
    fcccf.fb2bf.fcccf
    .fcccfb2b2bfcccf.
    ..fcfb22b22bfcf..
    ..fcfb22b22bfcf..
    ..fcfb22b22bfcf..
    ..fccfb2b2bfccf..
    ...fcfb2b2bfcf...
    ....fbfbbbfbf....
    ....fbbfffbbf....
    .....fffffff.....
    `, SpriteKind.Player)
mySprite.setPosition(75, 100)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
let mySprite3 = sprites.create(img`
    6 9 9 . . . . 2 . . . . 9 9 6 
    9 6 9 . . . 2 2 2 . . . 9 6 9 
    . 9 6 9 . . 5 5 5 . . 9 6 9 . 
    . . 9 6 9 . 2 2 2 . 9 6 9 . . 
    . . . 9 6 9 2 2 2 9 6 9 . . . 
    . . . . 9 6 5 5 5 6 9 . . . . 
    . . . . . 5 5 5 5 5 . . . . . 
    . . . . 9 c c 5 c c 9 . . . . 
    . . . 9 . 5 c 5 c 5 . 9 . . . 
    . . 9 . . . . 5 . . . . 9 . . 
    . 9 . . . . . . . . . . . 9 . 
    `, SpriteKind.Enemy)
let mysprite4 = sprites.create(img`
    6 9 9 . . . . 2 . . . . 9 9 6 
    9 6 9 . . . 2 2 2 . . . 9 6 9 
    . 9 6 9 . . 5 5 5 . . 9 6 9 . 
    . . 9 6 9 . 2 2 2 . 9 6 9 . . 
    . . . 9 6 9 2 2 2 9 6 9 . . . 
    . . . . 9 6 5 5 5 6 9 . . . . 
    . . . . . 5 5 5 5 5 . . . . . 
    . . . . 9 c c 5 c c 9 . . . . 
    . . . 9 . 5 c 5 c 5 . 9 . . . 
    . . 9 . . . . 5 . . . . 9 . . 
    . 9 . . . . . . . . . . . 9 . 
    `, SpriteKind.Enemy)
let _5 = sprites.create(img`
    6 9 9 . . . . 2 . . . . 9 9 6 
    9 6 9 . . . 2 2 2 . . . 9 6 9 
    . 9 6 9 . . 5 5 5 . . 9 6 9 . 
    . . 9 6 9 . 2 2 2 . 9 6 9 . . 
    . . . 9 6 9 2 2 2 9 6 9 . . . 
    . . . . 9 6 5 5 5 6 9 . . . . 
    . . . . . 5 5 5 5 5 . . . . . 
    . . . . 9 c c 5 c c 9 . . . . 
    . . . 9 . 5 c 5 c 5 . 9 . . . 
    . . 9 . . . . 5 . . . . 9 . . 
    . 9 . . . . . . . . . . . 9 . 
    `, SpriteKind.Enemy)
let _6 = sprites.create(img`
    6 9 9 . . . . 2 . . . . 9 9 6 
    9 6 9 . . . 2 2 2 . . . 9 6 9 
    . 9 6 9 . . 5 5 5 . . 9 6 9 . 
    . . 9 6 9 . 2 2 2 . 9 6 9 . . 
    . . . 9 6 9 2 2 2 9 6 9 . . . 
    . . . . 9 6 5 5 5 6 9 . . . . 
    . . . . . 5 5 5 5 5 . . . . . 
    . . . . 9 c c 5 c c 9 . . . . 
    . . . 9 . 5 c 5 c 5 . 9 . . . 
    . . 9 . . . . 5 . . . . 9 . . 
    . 9 . . . . . . . . . . . 9 . 
    `, SpriteKind.Enemy)
let _7 = sprites.create(img`
    6 9 9 . . . . 2 . . . . 9 9 6 
    9 6 9 . . . 2 2 2 . . . 9 6 9 
    . 9 6 9 . . 5 5 5 . . 9 6 9 . 
    . . 9 6 9 . 2 2 2 . 9 6 9 . . 
    . . . 9 6 9 2 2 2 9 6 9 . . . 
    . . . . 9 6 5 5 5 6 9 . . . . 
    . . . . . 5 5 5 5 5 . . . . . 
    . . . . 9 c c 5 c c 9 . . . . 
    . . . 9 . 5 c 5 c 5 . 9 . . . 
    . . 9 . . . . 5 . . . . 9 . . 
    . 9 . . . . . . . . . . . 9 . 
    `, SpriteKind.Enemy)
let _8 = sprites.create(img`
    6 9 9 . . . . 2 . . . . 9 9 6 
    9 6 9 . . . 2 2 2 . . . 9 6 9 
    . 9 6 9 . . 5 5 5 . . 9 6 9 . 
    . . 9 6 9 . 2 2 2 . 9 6 9 . . 
    . . . 9 6 9 2 2 2 9 6 9 . . . 
    . . . . 9 6 5 5 5 6 9 . . . . 
    . . . . . 5 5 5 5 5 . . . . . 
    . . . . 9 c c 5 c c 9 . . . . 
    . . . 9 . 5 c 5 c 5 . 9 . . . 
    . . 9 . . . . 5 . . . . 9 . . 
    . 9 . . . . . . . . . . . 9 . 
    `, SpriteKind.Enemy)
let _9 = sprites.create(img`
    6 9 9 . . . . 2 . . . . 9 9 6 
    9 6 9 . . . 2 2 2 . . . 9 6 9 
    . 9 6 9 . . 5 5 5 . . 9 6 9 . 
    . . 9 6 9 . 2 2 2 . 9 6 9 . . 
    . . . 9 6 9 2 2 2 9 6 9 . . . 
    . . . . 9 6 5 5 5 6 9 . . . . 
    . . . . . 5 5 5 5 5 . . . . . 
    . . . . 9 c c 5 c c 9 . . . . 
    . . . 9 . 5 c 5 c 5 . 9 . . . 
    . . 9 . . . . 5 . . . . 9 . . 
    . 9 . . . . . . . . . . . 9 . 
    `, SpriteKind.Enemy)
let _10 = sprites.create(img`
    6 9 9 . . . . 2 . . . . 9 9 6 
    9 6 9 . . . 2 2 2 . . . 9 6 9 
    . 9 6 9 . . 5 5 5 . . 9 6 9 . 
    . . 9 6 9 . 2 2 2 . 9 6 9 . . 
    . . . 9 6 9 2 2 2 9 6 9 . . . 
    . . . . 9 6 5 5 5 6 9 . . . . 
    . . . . . 5 5 5 5 5 . . . . . 
    . . . . 9 c c 5 c c 9 . . . . 
    . . . 9 . 5 c 5 c 5 . 9 . . . 
    . . 9 . . . . 5 . . . . 9 . . 
    . 9 . . . . . . . . . . . 9 . 
    `, SpriteKind.Enemy)
let _11 = sprites.create(img`
    6 9 9 . . . . 2 . . . . 9 9 6 
    9 6 9 . . . 2 2 2 . . . 9 6 9 
    . 9 6 9 . . 5 5 5 . . 9 6 9 . 
    . . 9 6 9 . 2 2 2 . 9 6 9 . . 
    . . . 9 6 9 2 2 2 9 6 9 . . . 
    . . . . 9 6 5 5 5 6 9 . . . . 
    . . . . . 5 5 5 5 5 . . . . . 
    . . . . 9 c c 5 c c 9 . . . . 
    . . . 9 . 5 c 5 c 5 . 9 . . . 
    . . 9 . . . . 5 . . . . 9 . . 
    . 9 . . . . . . . . . . . 9 . 
    `, SpriteKind.Enemy)
let _12 = sprites.create(img`
    6 9 9 . . . . 2 . . . . 9 9 6 
    9 6 9 . . . 2 2 2 . . . 9 6 9 
    . 9 6 9 . . 5 5 5 . . 9 6 9 . 
    . . 9 6 9 . 2 2 2 . 9 6 9 . . 
    . . . 9 6 9 2 2 2 9 6 9 . . . 
    . . . . 9 6 5 5 5 6 9 . . . . 
    . . . . . 5 5 5 5 5 . . . . . 
    . . . . 9 c c 5 c c 9 . . . . 
    . . . 9 . 5 c 5 c 5 . 9 . . . 
    . . 9 . . . . 5 . . . . 9 . . 
    . 9 . . . . . . . . . . . 9 . 
    `, SpriteKind.Enemy)
let _13 = sprites.create(img`
    6 9 9 . . . . 2 . . . . 9 9 6 
    9 6 9 . . . 2 2 2 . . . 9 6 9 
    . 9 6 9 . . 5 5 5 . . 9 6 9 . 
    . . 9 6 9 . 2 2 2 . 9 6 9 . . 
    . . . 9 6 9 2 2 2 9 6 9 . . . 
    . . . . 9 6 5 5 5 6 9 . . . . 
    . . . . . 5 5 5 5 5 . . . . . 
    . . . . 9 c c 5 c c 9 . . . . 
    . . . 9 . 5 c 5 c 5 . 9 . . . 
    . . 9 . . . . 5 . . . . 9 . . 
    . 9 . . . . . . . . . . . 9 . 
    `, SpriteKind.Enemy)
let _14 = sprites.create(img`
    6 9 9 . . . . 2 . . . . 9 9 6 
    9 6 9 . . . 2 2 2 . . . 9 6 9 
    . 9 6 9 . . 5 5 5 . . 9 6 9 . 
    . . 9 6 9 . 2 2 2 . 9 6 9 . . 
    . . . 9 6 9 2 2 2 9 6 9 . . . 
    . . . . 9 6 5 5 5 6 9 . . . . 
    . . . . . 5 5 5 5 5 . . . . . 
    . . . . 9 c c 5 c c 9 . . . . 
    . . . 9 . 5 c 5 c 5 . 9 . . . 
    . . 9 . . . . 5 . . . . 9 . . 
    . 9 . . . . . . . . . . . 9 . 
    `, SpriteKind.Enemy)
let _15 = sprites.create(img`
    6 9 9 . . . . 2 . . . . 9 9 6 
    9 6 9 . . . 2 2 2 . . . 9 6 9 
    . 9 6 9 . . 5 5 5 . . 9 6 9 . 
    . . 9 6 9 . 2 2 2 . 9 6 9 . . 
    . . . 9 6 9 2 2 2 9 6 9 . . . 
    . . . . 9 6 5 5 5 6 9 . . . . 
    . . . . . 5 5 5 5 5 . . . . . 
    . . . . 9 c c 5 c c 9 . . . . 
    . . . 9 . 5 c 5 c 5 . 9 . . . 
    . . 9 . . . . 5 . . . . 9 . . 
    . 9 . . . . . . . . . . . 9 . 
    `, SpriteKind.Enemy)
let _16 = sprites.create(img`
    6 9 9 . . . . 2 . . . . 9 9 6 
    9 6 9 . . . 2 2 2 . . . 9 6 9 
    . 9 6 9 . . 5 5 5 . . 9 6 9 . 
    . . 9 6 9 . 2 2 2 . 9 6 9 . . 
    . . . 9 6 9 2 2 2 9 6 9 . . . 
    . . . . 9 6 5 5 5 6 9 . . . . 
    . . . . . 5 5 5 5 5 . . . . . 
    . . . . 9 c c 5 c c 9 . . . . 
    . . . 9 . 5 c 5 c 5 . 9 . . . 
    . . 9 . . . . 5 . . . . 9 . . 
    . 9 . . . . . . . . . . . 9 . 
    `, SpriteKind.Enemy)
let _17 = sprites.create(img`
    6 9 9 . . . . 2 . . . . 9 9 6 
    9 6 9 . . . 2 2 2 . . . 9 6 9 
    . 9 6 9 . . 5 5 5 . . 9 6 9 . 
    . . 9 6 9 . 2 2 2 . 9 6 9 . . 
    . . . 9 6 9 2 2 2 9 6 9 . . . 
    . . . . 9 6 5 5 5 6 9 . . . . 
    . . . . . 5 5 5 5 5 . . . . . 
    . . . . 9 c c 5 c c 9 . . . . 
    . . . 9 . 5 c 5 c 5 . 9 . . . 
    . . 9 . . . . 5 . . . . 9 . . 
    . 9 . . . . . . . . . . . 9 . 
    `, SpriteKind.Enemy)
let _18 = sprites.create(img`
    6 9 9 . . . . 2 . . . . 9 9 6 
    9 6 9 . . . 2 2 2 . . . 9 6 9 
    . 9 6 9 . . 5 5 5 . . 9 6 9 . 
    . . 9 6 9 . 2 2 2 . 9 6 9 . . 
    . . . 9 6 9 2 2 2 9 6 9 . . . 
    . . . . 9 6 5 5 5 6 9 . . . . 
    . . . . . 5 5 5 5 5 . . . . . 
    . . . . 9 c c 5 c c 9 . . . . 
    . . . 9 . 5 c 5 c 5 . 9 . . . 
    . . 9 . . . . 5 . . . . 9 . . 
    . 9 . . . . . . . . . . . 9 . 
    `, SpriteKind.Enemy)
let _19 = sprites.create(img`
    6 9 9 . . . . 2 . . . . 9 9 6 
    9 6 9 . . . 2 2 2 . . . 9 6 9 
    . 9 6 9 . . 5 5 5 . . 9 6 9 . 
    . . 9 6 9 . 2 2 2 . 9 6 9 . . 
    . . . 9 6 9 2 2 2 9 6 9 . . . 
    . . . . 9 6 5 5 5 6 9 . . . . 
    . . . . . 5 5 5 5 5 . . . . . 
    . . . . 9 c c 5 c c 9 . . . . 
    . . . 9 . 5 c 5 c 5 . 9 . . . 
    . . 9 . . . . 5 . . . . 9 . . 
    . 9 . . . . . . . . . . . 9 . 
    `, SpriteKind.Enemy)
let _20 = sprites.create(img`
    6 9 9 . . . . 2 . . . . 9 9 6 
    9 6 9 . . . 2 2 2 . . . 9 6 9 
    . 9 6 9 . . 5 5 5 . . 9 6 9 . 
    . . 9 6 9 . 2 2 2 . 9 6 9 . . 
    . . . 9 6 9 2 2 2 9 6 9 . . . 
    . . . . 9 6 5 5 5 6 9 . . . . 
    . . . . . 5 5 5 5 5 . . . . . 
    . . . . 9 c c 5 c c 9 . . . . 
    . . . 9 . 5 c 5 c 5 . 9 . . . 
    . . 9 . . . . 5 . . . . 9 . . 
    . 9 . . . . . . . . . . . 9 . 
    `, SpriteKind.Enemy)
let _21 = sprites.create(img`
    6 9 9 . . . . 2 . . . . 9 9 6 
    9 6 9 . . . 2 2 2 . . . 9 6 9 
    . 9 6 9 . . 5 5 5 . . 9 6 9 . 
    . . 9 6 9 . 2 2 2 . 9 6 9 . . 
    . . . 9 6 9 2 2 2 9 6 9 . . . 
    . . . . 9 6 5 5 5 6 9 . . . . 
    . . . . . 5 5 5 5 5 . . . . . 
    . . . . 9 c c 5 c c 9 . . . . 
    . . . 9 . 5 c 5 c 5 . 9 . . . 
    . . 9 . . . . 5 . . . . 9 . . 
    . 9 . . . . . . . . . . . 9 . 
    `, SpriteKind.Enemy)
let _22 = sprites.create(img`
    6 9 9 . . . . 2 . . . . 9 9 6 
    9 6 9 . . . 2 2 2 . . . 9 6 9 
    . 9 6 9 . . 5 5 5 . . 9 6 9 . 
    . . 9 6 9 . 2 2 2 . 9 6 9 . . 
    . . . 9 6 9 2 2 2 9 6 9 . . . 
    . . . . 9 6 5 5 5 6 9 . . . . 
    . . . . . 5 5 5 5 5 . . . . . 
    . . . . 9 c c 5 c c 9 . . . . 
    . . . 9 . 5 c 5 c 5 . 9 . . . 
    . . 9 . . . . 5 . . . . 9 . . 
    . 9 . . . . . . . . . . . 9 . 
    `, SpriteKind.Enemy)
let _23 = sprites.create(img`
    6 9 9 . . . . 2 . . . . 9 9 6 
    9 6 9 . . . 2 2 2 . . . 9 6 9 
    . 9 6 9 . . 5 5 5 . . 9 6 9 . 
    . . 9 6 9 . 2 2 2 . 9 6 9 . . 
    . . . 9 6 9 2 2 2 9 6 9 . . . 
    . . . . 9 6 5 5 5 6 9 . . . . 
    . . . . . 5 5 5 5 5 . . . . . 
    . . . . 9 c c 5 c c 9 . . . . 
    . . . 9 . 5 c 5 c 5 . 9 . . . 
    . . 9 . . . . 5 . . . . 9 . . 
    . 9 . . . . . . . . . . . 9 . 
    `, SpriteKind.Enemy)
mySprite3.setPosition(22, 23)
mysprite4.setPosition(40, 23)
_5.setPosition(58, 23)
_6.setPosition(76, 23)
_7.setPosition(94, 23)
_8.setPosition(112, 23)
_9.setPosition(130, 23)
_10.setPosition(22, 41)
_11.setPosition(40, 41)
_12.setPosition(58, 41)
_13.setPosition(76, 41)
_14.setPosition(94, 41)
_15.setPosition(112, 41)
_16.setPosition(130, 41)
_17.setPosition(22, 59)
_18.setPosition(40, 59)
_19.setPosition(58, 59)
_20.setPosition(76, 59)
_21.setPosition(94, 59)
_22.setPosition(112, 59)
_23.setPosition(130, 59)
game.onUpdateInterval(2000, function () {
	
})
game.onUpdateInterval(2000, function () {
    if (mySprite5 == 1) {
        mySprite2.setVelocity(50, 0)
        if (characterAnimations.matchesRule(mySprite2, characterAnimations.rule(Predicate.HittingWallRight))) {
            mySprite2.setVelocity(50, 0)
            mySprite2.setFlag(SpriteFlag.StayInScreen, true)
        }
        if (mySprite2.isHittingTile(CollisionDirection.Left)) {
            mySprite2.setVelocity(-50, 0)
        }
    }
})
forever(function () {
    animation.runImageAnimation(
    mysprite4,
    [img`
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        `],
    500,
    true
    )
    animation.runImageAnimation(
    mySprite3,
    [img`
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        `],
    500,
    true
    )
    animation.runImageAnimation(
    _10,
    [img`
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        `],
    500,
    true
    )
    animation.runImageAnimation(
    _11,
    [img`
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        `],
    500,
    true
    )
    animation.runImageAnimation(
    _12,
    [img`
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        `],
    500,
    true
    )
    animation.runImageAnimation(
    _13,
    [img`
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        `],
    500,
    true
    )
    animation.runImageAnimation(
    _14,
    [img`
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        `],
    500,
    true
    )
    animation.runImageAnimation(
    _15,
    [img`
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        `],
    500,
    true
    )
    animation.runImageAnimation(
    _16,
    [img`
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        `],
    500,
    true
    )
    animation.runImageAnimation(
    _17,
    [img`
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        `],
    500,
    true
    )
    animation.runImageAnimation(
    _18,
    [img`
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        `],
    500,
    true
    )
    animation.runImageAnimation(
    _19,
    [img`
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        `],
    500,
    true
    )
    animation.runImageAnimation(
    _20,
    [img`
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        `],
    500,
    true
    )
    animation.runImageAnimation(
    _21,
    [img`
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        `],
    500,
    true
    )
    animation.runImageAnimation(
    _22,
    [img`
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        `],
    500,
    true
    )
    animation.runImageAnimation(
    _23,
    [img`
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        `],
    500,
    true
    )
    animation.runImageAnimation(
    _5,
    [img`
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        `],
    500,
    true
    )
    animation.runImageAnimation(
    _6,
    [img`
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        `],
    500,
    true
    )
    animation.runImageAnimation(
    _7,
    [img`
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        `],
    500,
    true
    )
    animation.runImageAnimation(
    _8,
    [img`
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        `],
    500,
    true
    )
    animation.runImageAnimation(
    _9,
    [img`
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        6 9 9 . . . . 2 . . . . 9 9 6 
        9 6 9 . . . 2 2 2 . . . 9 6 9 
        . 9 6 9 . . 5 5 5 . . 9 6 9 . 
        . . 9 6 9 . 2 2 2 . 9 6 9 . . 
        . . . 9 6 9 2 2 2 9 6 9 . . . 
        . . . . 9 6 5 5 5 6 9 . . . . 
        . . . . . 5 5 5 5 5 . . . . . 
        . . . . 9 c c 5 c c 9 . . . . 
        . . . 9 . 5 c 5 c 5 . 9 . . . 
        . . 9 . . . . 5 . . . . 9 . . 
        . 9 . . . . . . . . . . . 9 . 
        `],
    500,
    true
    )
    music.playMelody("C5 D A F A D G D ", 250)
    if (game.runtime() >= 20000) {
        music.playMelody("C F A D A E C5 F ", 500)
    }
    if (info.score() == 21) {
        game.splash("BOSS BATTLE!", "")
        info.changeScoreBy(1)
        mySprite2 = sprites.create(img`
            .................f......................
            ................f1f.....................
            ...............f212f....................
            ...fff.........f212f.........fff........
            ...fbbf........f212f........fb2f........
            ...f2bbf.......f212f.......fb2bf........
            ...fb2bbf......f212f......fb2bbf........
            ...fbb2bbf.....f121f.....fb2bbf.........
            ....fbb2bbf....f121f....fb2bbf..........
            .....fbb2bbf...f121f...fb2bbf...........
            ......fbb2bbf..f121f..fb2bff....fff.....
            fff....ffb2bbff11211ffb2bf.....faaf.....
            faaf.....fb2bbb11211bbb2bf....faaaf.....
            faaaf....fb2b2b112112b2bf9f..faaaf......
            .faaaf..f9fb2b211211b2bf99f.faaaf.......
            ..faaaf.f99fbbb21b1bbbf9199faaaf........
            ...faaaf9919fbbbb1bbbf91199faaaf........
            ...faaaf99119fbbbbbbf99999faaaaf........
            ...faaaaf99999fbbbbf99999faaaaaf........
            ...faaaaaf99999fbbf99999faaaaaaf........
            ....faaaaaf99999ff99999faaaaaaf.........
            .....faaaaaf999faaf999faaaaaaf..........
            ......faaaaaf9faaaaf9faaaaaaf...........
            .......faaaaafaaaaaafaaaaaaf............
            .......faaaaaaaaaaaaaaaaaaaf............
            ........faaaaaaaaaaaaaaaaaf.............
            .........faaaaaaafaaaaaaaf..............
            ..........faaaaafcfaaaaaf...............
            ...........faaafcfcfaaaf................
            ............fafcfcfcfaf.................
            .............fcfcccfcf..................
            ..............fcfcfcf...................
            ...............fcfcf....................
            ................fcf.....................
            .................f......................
            ........................................
            ........................................
            ........................................
            ........................................
            ........................................
            `, SpriteKind.boss)
        mySprite5 = 1
    }
})
