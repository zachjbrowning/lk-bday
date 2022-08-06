import React, { useCallback, useEffect } from 'react';
import { Button, Typography, Modal, Box, Paper } from "@mui/material";
import Image from 'next/image'
import {useAudio} from '../AudioPlayer/useAudio';
const style = {
    position: 'absolute' as 'absolute',
    display: 'flex',
    flexDirection: 'column',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    justifyContent: 'center',
    minWidth: 'min-content',
    hieght: 'max-content',
    bgcolor: 'background.paper',
    boxShadow: 24,
    
  };
type Person = {
    name: string,
    img: string;
    imgs?: string[]
};
type People = Person[];
const Lorna: Person = {name: 'Lorna', img: '/lornaZombie.jpg'}
const Kaitlyn: Person = {name: 'Kaitlyn', img: '/kK.jpg'}
const Zach: Person = {name: 'Zachary', img: '/zz.jpg'}
const people: People = [
    Lorna, Kaitlyn, Zach

]
export const Chooser: React.FC = () => {
    const playChoose = useAudio('/Voice.mp3');
    const [open, setOpen] = React.useState(false);
    const [choosing, setChoosing] = React.useState(false);
    const [choice, setChoice] = React.useState<Person>(Lorna);
    const [loadingMessage, setLoadingMessage] = React.useState<string>("uh");

    const handleChoice = useCallback(() => {
        setChoice(people[Math.floor(Math.random() * people.length)]);
        if (open) setChoosing(false);
        
    }, [open]);
    
    const handleOpen = () => {
        setOpen(true);
        setChoosing(true);
        playChoose();
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
                    Let's go with...
                </Typography>
                </> : 
                <>
                    <Image src={choice.img} width={100} height={100} alt={choice.name} />
                    <Typography variant='h4' align='center' >{choice.name}! </Typography>
                </>}
            </Paper>
            </Modal>
            <Typography variant="h2">Chooser!</Typography>
            <Button variant='contained' type='button' onClick={handleOpen}>Choose</Button>
        </>
    )
}