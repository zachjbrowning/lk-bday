import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";
import { Typography } from "@mui/material";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';


import { Event } from "./Schedule";


type EventTimelineProps = {
    remainingEvents: Array<Event>
};

export const EventTimeline = ({remainingEvents}: EventTimelineProps) => {

    return <Timeline position="alternate">
        {
            remainingEvents.map((v,i) => {
                if (i % 2 == 1) return <TimelineItem key={i}>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                    >
                    {v.time.toLocaleTimeString()}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot>
                            {v.icon}
                        </TimelineDot>
                        {
                            i !== remainingEvents.length - 1 && <TimelineConnector/>
                        }
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            {v.name}
                        </Typography>
                        <Typography>{v.description}</Typography>
                    </TimelineContent>
                </TimelineItem>

                return <TimelineItem key={i}>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                    >
                    {v.time.toLocaleTimeString()}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary">
                            {v.icon}
                        </TimelineDot>
                        {
                            i !== remainingEvents.length - 1 && <TimelineConnector/>
                        }
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            {v.name}
                        </Typography>
                        <Typography>{v.description}</Typography>
                    </TimelineContent>
              </TimelineItem>
            })
        }
    
  </Timeline>
}
