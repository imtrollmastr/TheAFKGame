input.onButtonPressed(Button.A, function () {
    player.move(-1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(game.score())
})
input.onButtonPressed(Button.B, function () {
    player.move(1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    datalogger.log(datalogger.createCV("" + username + "_score", 0))
})
function runGame () {
    player = game.createSprite(2, 2)
    game.setLife(100)
}
let player: game.LedSprite = null
let username = ""
runGame()
username = "Daniel"
basic.forever(function () {
    basic.pause(15000)
    game.addScore(1)
})
basic.forever(function () {
    if (game.score() == 100) {
        player.delete()
        basic.showString("" + username + " scored " + convertToText(game.score()))
    }
})
