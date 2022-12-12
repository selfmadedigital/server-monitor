bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
    uartData = bluetooth.uartReadUntil(serial.delimiters(Delimiters.Hash))
    basic.showString(uartData)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
let uartData = ""
bluetooth.startUartService()
basic.showIcon(IconNames.Ghost)
