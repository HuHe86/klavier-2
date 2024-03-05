basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
    if (input.pinIsPressed(TouchPin.P1)) {
        music.playTone(440, music.beat(BeatFraction.Whole))
    }
    if (input.pinIsPressed(TouchPin.P2)) {
        music.playTone(494, music.beat(BeatFraction.Whole))
    }
    if (input.pinIsPressed(TouchPin.P3)) {
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
})
