import { Box, Modal, Typography } from "@mui/material";
import styles from "./ZachIsDumb.module.scss";
import HelpIcon from '@mui/icons-material/Help';
import { useEffect, useState } from "react";
import { playAudio, useAudio } from "../AudioPlayer/useAudio";


type ZachIsDumbProps = {};

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    minWidth: "70%",
    borderRadius: '4px',
    boxShadow: 24,
    p: 4,
  };

export const ZachIsDumb = ({}: ZachIsDumbProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        if (isOpen) playAudio("/Choose.mp3");
    }, [isOpen])

    return <>
        <div className={styles.explainer} onClick={() => setIsOpen(true)}>
                <Typography>
                    Why LD bday instead of LK bday? &nbsp;   
                </Typography> 
                <HelpIcon color="info"/>
            </div>
            <Modal
                open={isOpen}
                onClose={() => setIsOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    Hahah uhhh, Zach is an idiot
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    And accidentally bought ldbday.com instead of lkbday.com...
                    </Typography>
                </Box>
            </Modal>
    </>
}
