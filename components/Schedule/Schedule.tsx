import { Card, CardContent, Grid } from "@mui/material";
import { EventTimeline } from "./EventTimeline";

import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import { Typography } from "@mui/material";
import { ReactNode } from "react";
import styles from "./Schedule.module.scss";
import Countdown from "react-countdown";
import { LockClock, Nightlife } from "@mui/icons-material";
import { events } from "../../config/events";


export const Schedule = () => {

    const now = new Date(Date.parse("2022-08-06T17:01:00.000+10:00"));

    let upcoming = events.filter(e => e.time.getTime() > now.getTime());
    let finished = events.filter(e => e.time.getTime() < now.getTime());
    console.log({upcoming, finished})
    let current = finished[finished.length - 1];

    let next = upcoming.splice(0,1)[0]

    return <>
        <Card>
            <CardContent sx={{display:"flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                <Typography variant="h5">
                    Current activity:
                </Typography>
                <Typography variant="h4">
                    {current.name}
                </Typography>
                <Typography variant="subtitle1" color="gray">
                    {current.description}
                </Typography>
            </CardContent>
        </Card>
        <Card>
            <CardContent>
                <div className={styles.countdown}>
                    <Countdown date={next.time} renderer={({hours, seconds, minutes}) => <Typography>
                        <span className={styles.timer}>
                            {String(hours).padStart(2, '0')}
                            <span className={styles.sub}>hrs</span>
                            &nbsp;&nbsp;
                            {String(minutes).padStart(2, '0')}
                            <span className={styles.sub}>mins</span>
                            &nbsp;&nbsp;
                            {String(seconds).padStart(2, '0')}
                            <span className={styles.sub}>s</span>
                        </span>
                    </Typography>} />
                    <Typography variant="h5" component="div">
                        Until next event: <span style={{fontWeight:"700"}}>{next.name}</span>
                    </Typography>
                    <Typography variant="body2">
                        {next.description}
                    </Typography>
                </div>

                <EventTimeline remainingEvents={upcoming} />
            </CardContent>
        </Card>
    </>
}
