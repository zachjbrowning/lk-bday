import React, { useCallback, useEffect } from 'react';
import { Button, Typography, Modal, Box, Paper } from "@mui/material";
import Image from 'next/image'
import {playAudio, useAudio} from '../AudioPlayer/useAudio';
import { people, Person, randomAUdio, randomImage } from '../../config/people';
import HelpIcon from '@mui/icons-material/Help';

const style = {
    position: 'absolute' as 'absolute',
    display: 'flex',
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '300px',
    justifyContent: 'center',
    minWidth: 'min-content',
    minHeight: '300px',
    hieght: 'max-content',
    bgcolor: 'background.paper',
    boxShadow: 24,
    padding: '2rem'
  };
export const Chooser: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const [choosing, setChoosing] = React.useState(false);
    const [choice, setChoice] = React.useState<Person | undefined>(undefined);
    const [loadingMessage, setLoadingMessage] = React.useState<string>("uh");

    const handleChoice = useCallback(() => {
        
        const newPerson = people[Math.floor(Math.random() * people.length)];
        setChoice(newPerson);

        playAudio(randomAUdio(newPerson));
        
        
        if (open) setChoosing(false);
        
    }, [open]);
    
    const handleOpen = () => {
        setOpen(true);
        setChoosing(true);
        playAudio("/Choose.mp3");
    };
    const handleClose = () => {
        setOpen(false);
        setChoosing(false);
        setLoadingMessage('uh..')
    };

    useEffect(() => {
        if (open) {
            setTimeout(() => setLoadingMessage('uhhhh...'), 1000);
            setTimeout(() => setLoadingMessage('uhhhh ummm...'), 2000);
            setTimeout(handleChoice, 3000);
        
        }
    }, [handleChoice, open])

    return (
        <>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
            >
            <Paper sx={{  ...style  }}>
                { choosing ? 
                
                <><Typography variant='h2' id="parent-modal-title">{loadingMessage}</Typography>
                <Typography variant='body1' id="parent-modal-description">
                    Let{"\'"}s go with...
                </Typography>
                </> : 
                <>
                    <Image src={choice ? randomImage(choice) : ""} width={200} height={200}  />
                    <Typography variant='h4' align='center' >{choice?.name}! </Typography>
                </>}
            </Paper>
            </Modal>
            <Typography sx={{textAlign: "center"}} variant="h2"><HelpIcon color='primary'/><HelpIcon color='primary'/>Chooser<HelpIcon color='primary'/><HelpIcon color='primary'/></Typography>
            <Button sx={{marginLeft: "auto", marginRight: "auto"}} variant='contained' type='button' onClick={handleOpen}>Choose</Button>
        </>
    )
}