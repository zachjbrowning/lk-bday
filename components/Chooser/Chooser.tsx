import React, { useCallback, useEffect } from 'react';
import { Button, Typography, Modal, Box, Paper } from "@mui/material";
import Image from 'next/image'

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
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
    const [open, setOpen] = React.useState(false);
    const [choosing, setChoosing] = React.useState(false);
    const [messageLength, setmessageLength] = React.useState(false);
    const [choice, setChoice] = React.useState<Person>(Lorna);

    const handleChoice = useCallback(() => {
        if (open) setChoosing(false);
        
    }, [open]);

    const handleOpen = () => {
        setOpen(true);
        setChoosing(true);
    };
    const handleClose = () => {
        setOpen(false);
        setChoosing(false);
    };

    useEffect(() => {
        if (open) setTimeout(handleChoice, 3000);
    }, [handleChoice, open])

    return (
        <>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
            >
            <Paper sx={{  ...style, width: 'max-content' }}>
                { choosing ? 
                
                <><Typography variant='h2' id="parent-modal-title">uhhhh ummm...</Typography>
                <Typography variant='body1' id="parent-modal-description">
                    Let's go with...
                </Typography>
                </> : 
                <>
                    <Image src={choice.img} width={100} height={100} alt={choice.name} />
                    <Typography variant='h4' >{choice.name}! </Typography>
                </>}
            </Paper>
            </Modal>
            <Typography variant="h2">Ch-Ch-Ch-ChoooOOoser!</Typography>
            <Button variant='contained' type='button'>Choose</Button>
        </>
    )
}