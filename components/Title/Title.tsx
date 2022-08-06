import { Typography } from "@mui/material";
import styles from "./Title.module.scss";
type TitleProps = {};

export const Title = ({}: TitleProps) => {

    return <div className={styles.title}>
        <Typography sx={{width: "100%"}} variant='h2' align={"left"}>
            Lorna
        </Typography>
        <Typography sx={{width: "100%"}} variant='h2' align={"right"}>
            + Dubz
        </Typography>
        <div>
            
        </div>
        <Typography variant='h2' align={"center"}> 
            BIRTHDAY
        </Typography>
    </div>
}
