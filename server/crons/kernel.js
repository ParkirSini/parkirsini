const CronJob = require("cron").CronJob;
const { Booking } = require('../models');

const job = new CronJob(
    // "*/10 * * * * *",untuk cek tiap 10 detik
    "0 0 * * *",
    async function () {
        console.log("Running your scheduled task...");
        try {
            const bookings = await Booking.findAll();
            console.log("Fetched bookings:", bookings);

            for (const booking of bookings) {
                if (booking.duration === 0) {
                    booking.paid = false;
                } else if (booking.duration > 0 && booking.paid === true) {
                    booking.duration -= 1;
                }
                await booking.save();
                console.log("Updated booking:", booking);
            }
        } catch (error) {
            console.error("Error updating bookings:", error);
        }
    },
    null,
    true,
    "Asia/Jakarta"
);

module.exports = job;