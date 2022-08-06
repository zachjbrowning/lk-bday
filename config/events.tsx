import { ReactNode } from "react";
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import { LockClock, Nightlife, QuestionMark } from "@mui/icons-material";

export type Event = {
    name: string;
    time: Date;
    icon: ReactNode;
    description: string;
    visibleTimePeriod?: {
        start: Date,
        end: Date
    }
}

export const isVisible = (event: Event, current: Date) => {
    if (!event.visibleTimePeriod) return true;
    return event.visibleTimePeriod.start.getTime() <= current.getTime() && event.visibleTimePeriod.end.getTime() >= current.getTime()
}

export const events: Array<Event> = [
    {
        name: "Hahah uhh make a website 👩🏿‍💻",
        time: new Date(Date.parse("2022-08-06T10:00:00.000+10:00")),
        icon: <QuestionMark />,
        description: "YOU NERD",
        visibleTimePeriod: {
            start: new Date(Date.parse("2022-07-06T20:30:00.000+10:00")),
            end: new Date(Date.parse("2022-08-06T16:20:00.000+10:00")),
        }
    },
    {
        name: "Getting ready 😱",
        time: new Date(Date.parse("2022-07-06T17:00:00.000+10:00")),
        icon: <LocalBarIcon />,
        description: "Heels are required xx",
    },
    {
        name: "Tio's 🍸",
        time: new Date(Date.parse("2022-08-06T17:00:00.000+10:00")),
        icon: <LocalBarIcon />,
        description: "Margeritas n shid",
    },
    {
        name: "Cut Lorna's fringe ✂️",
        time: new Date(Date.parse("2022-08-06T17:15:00.000+10:00")),
        icon: <QuestionMark />,
        description: "New Job, new me",
        visibleTimePeriod: {
            start: new Date(Date.parse("2022-08-06T17:15:00.000+10:00")),
            end: new Date(Date.parse("2022-08-06T17:50:00.000+10:00")),
        }
    },
{
        name: "Roll the chooser ",
        time: new Date(Date.parse("2022-08-06T18:40:00.000+10:00")),
        icon: <QuestionMark />,
        description: "Whoever it lands on picks someone to take a shot",
        visibleTimePeriod: {
            start: new Date(Date.parse("2022-08-06T18:25:00.000+10:00")),
            end: new Date(Date.parse("2022-08-06T19:00:00.000+10:00")),
        }
    },


    {
        name: "Al Talgio 🍕",
        time: new Date(Date.parse("2022-08-06T19:00:00.000+10:00")),
        icon: <LocalPizzaIcon />,
        description: "I BOUGHT US A PIIIZA",
    },
    {
        name: "The Clock ⏰",
        time: new Date(Date.parse("2022-08-06T20:30:00.000+10:00")),
        icon: <LockClock />,
        description: "Drinks and dance?",
    },
    {
        name: "Shout Tom and Zach a drink",
        time: new Date(Date.parse("2022-08-06T21:00:00.000+10:00")),
        icon: <QuestionMark />,
        description: "Becayse they're such nice people",
        visibleTimePeriod: {
            start: new Date(Date.parse("2022-08-06T20:30:00.000+10:00")),
            end: new Date(Date.parse("2022-08-06T21:30:00.000+10:00")),
        }
    },
    {
        name: "Goros",
        time: new Date(Date.parse("2022-08-06T22:00:00.000+10:00")),
        icon: <Nightlife />,
        description: "Drinks and dance part 2",
    },
    {
        name: "The Casino 🎲",
        time: new Date(Date.parse("2022-08-06T23:00:00.000+10:00")),
        icon: <QuestionMark />,
        description: "Who's feeling luck xd",
        visibleTimePeriod: {
            start: new Date(Date.parse("2022-08-06T20:30:00.000+10:00")),
            end: new Date(Date.parse("2022-08-07T01:30:00.000+10:00")),
        }
    },
]
