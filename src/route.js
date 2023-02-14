const express = require("express"); 
const cron = require('node-cron');

// cron.schedule('* * * * *', () => {
//   console.log('running a task every minute');
// });
const router = express. Router();

    router.post("/schedule", (_, res) => {
        try {
            let obj = [
                {
                    text: "First Event",
                    time: "2023-02-12 11:55:00"
                },
                {
                    text: "Second Event",
                    time: "2023-02-15 11:55:03"
                },
                {
                    text: "Third Event",
                    time: "2023-02-15 11:55:06"
                },
                {
                    text: "Fourth Event",
                    time: "2023-02-15 11:55:09"
                },
                {
                    text: "Fifth Event",
                    time: "2023-02-15 11:55:12"
                },
                {
                    text: "Sixth Event",
                    time: "2023-02-15 11:55:15"
                },
                {
                    text: "Seventh Event",
                    time: "2023-02-15 11:55:18"
                },
                {
                    text: "Eigth Event",
                    time: "2023-02-15 11:55:21"
                }

            ]
            
            
            
            
            obj.forEach(x => {
                let timeString = x.time
                let [dateString, time] = timeString.split(" ")
            
                let [year, month, date] = dateString.split("-")
                let [hour, min, sec] = time.split(":")
            
                cron.schedule(`${sec} ${min} ${hour} ${date} ${month} *`, () => {
                    console.log(x.text)
                })
            })        

            return res.status(201).send({status: true, message:"Event sheduled succesfully"})
        } catch (error) {
            return res.status(500).send({status: false, message : error.message})
        }

    })


module.exports = router;
