import { Typography } from "@mui/material";
import styles from "./Title.module.scss";
type TitleProps = {};

export const Title = ({}: TitleProps) => {

    return <div className={styles.title}>
        <Typography color='white' sx={{width: "100%"}} variant='h2' align={"left"}>
            Lorna
        </Typography>
        <Typography color='white' sx={{width: "100%"}} variant='h2' align={"right"}>
            + Daitlyn
        </Typography>
        <div>
            
        </div>
        <Typography color='white' variant='h2' align={"center"}> 
            BIRTHDAY
        </Typography>
    </div>
}
