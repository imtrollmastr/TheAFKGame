def on_button_pressed_a():
    player.move(-1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.show_number(game.score())
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    player.move(1)
input.on_button_pressed(Button.B, on_button_pressed_b)

def runGame():
    global player
    player = game.create_sprite(2, 2)
    game.set_life(25)
player: game.LedSprite = None
runGame()

def on_forever():
    basic.pause(15000)
    game.add_score(1)
basic.forever(on_forever)
