import { ReactNode } from "react";
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import { LockClock, Nightlife } from "@mui/icons-material";

export type Event = {
    name: string;
    time: Date;
    icon: ReactNode;
    description: string;
    hiddenTimePeriod?: {
        start: Date,
        end: Date
    }
}

export const events: Array<Event> = [
    {
        name: "Getting ready 😱",
        time: new Date(Date.parse("2022-07-06T17:00:00.000+10:00")),
        icon: <LocalBarIcon />,
        description: "Heels are required xx",
    },
    {
        name: "Tio's",
        time: new Date(Date.parse("2022-08-06T17:00:00.000+10:00")),
        icon: <LocalBarIcon />,
        description: "Margeritas n shid",
    },
    {
        name: "Al Talgio",
        time: new Date(Date.parse("2022-08-06T19:00:00.000+10:00")),
        icon: <LocalPizzaIcon />,
        description: "I BOUGHT US A PIIIZA",
    },
    {
        name: "The Clock",
        time: new Date(Date.parse("2022-08-06T20:30:00.000+10:00")),
        icon: <LockClock />,
        description: "Drinks and dance?",
    },
    {
        name: "Shout Tom and Zach a drink",
        time: new Date(Date.parse("2022-08-06T20:30:00.000+10:00")),
        icon: <LockClock />,
        description: "Becayse they're such nice people",
        
    },
    {
        name: "Goros",
        time: new Date(Date.parse("2022-08-06T22:00:00.000+10:00")),
        icon: <Nightlife />,
        description: "Drinks and dance part 2",
    },
]