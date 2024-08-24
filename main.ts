datalogger.mirrorToSerial(true)
datalogger.includeTimestamp(FlashLogTimeStampFormat.Seconds)
basic.forever(function () {
    basic.showNumber(input.temperature())
    datalogger.log(datalogger.createCV("Temperature", input.temperature()))
})
