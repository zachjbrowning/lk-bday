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

export type Event = {
    name: string;
    time: Date;
    icon: ReactNode;
    description: string;
}

const events: Array<Event> = [
    {
        name: "Tio's",
        time: new Date(Date.parse("2022-08-06T17:00:00.000+10:00")),
        icon: <LocalBarIcon />,
        description: "idk bro",
    },
    {
        name: "Al Talgio",
        time: new Date(Date.parse("2022-08-06T19:00:00.000+10:00")),
        icon: <LocalPizzaIcon />,
        description: "idk bro",
    },
    {
        name: "The Clock",
        time: new Date(Date.parse("2022-08-06T20:30:00.000+10:00")),
        icon: <LockClock />,
        description: "idk bro",
    },
    {
        name: "Goros",
        time: new Date(Date.parse("2022-08-06T22:00:00.000+10:00")),
        icon: <Nightlife />,
        description: "idk bro",
    },
]

export const Schedule = () => {

    const now = new Date();

    let upcoming = events.filter(e => e.time.getTime() > now.getTime());
    
    let next = upcoming.splice(0,1)[0]


    return (
        <Card>
            <CardContent>
                <div className={styles.countdown}>
                    <Countdown date={next.time} renderer={({hours, seconds, minutes}) => <>
                        <span className={styles.timer}>{String(hours).padStart(2, '0')}:{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</span>
                    </>} />
                    <Typography variant="h5" component="div">
                        Until {next.name}
                    </Typography>
                    <Typography variant="body2">
                        {next.description}
                    </Typography>
                </div>

                <EventTimeline remainingEvents={upcoming} />
            </CardContent>
        </Card>
    )
}
