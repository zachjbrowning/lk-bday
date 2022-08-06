
type AudioPlayerProps = {
    audioSrc: string;
};

export const AudioPlayer = ({audioSrc}: AudioPlayerProps) => {
    let audio = new Audio(audioSrc);
    return () => audio.play();
}
