for (let i = 0; i <= 4; i++) {
    for (let y = 0; y <= 4; y++) {
        led.plot(y, i)
        basic.pause(200)
    }
}
basic.pause(200)
basic.clearScreen()
basic.pause(200)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.clearScreen()
basic.pause(200)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.clearScreen()
basic.pause(200)
led.toggle(0, 0)
led.unplot(0, 0)
led.toggle(1, 1)
