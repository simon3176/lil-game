input.onButtonPressed(Button.A, function () {
    P1.move(1)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
})
input.onButtonPressed(Button.AB, function () {
    while (!(input.pinIsPressed(TouchPin.P0))) {
        Opponent = game.createSprite(randint(0, 4), 0)
        for (let index = 0; index < 4; index++) {
            basic.pause(100)
            Opponent.change(LedSpriteProperty.Y, 1)
            basic.pause(100)
        }
        if (P1.isTouching(Opponent)) {
            Points += 1
            Opponent.delete()
            music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    P1.move(-1)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
})
let Opponent: game.LedSprite = null
let P1: game.LedSprite = null
music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 500, 1, 255, 0, 10, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
P1 = game.createSprite(2, 4)
let Points = 0
basic.forever(function () {
	
})
