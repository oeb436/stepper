let motor = stepperMotor.createMotor(
DigitalPin.P1,
DigitalPin.P2,
DigitalPin.P3,
DigitalPin.P4
)
basic.forever(function () {
    motor.moveClockwise(1, stepUnit.Rotations)
    basic.pause(1000)
})
