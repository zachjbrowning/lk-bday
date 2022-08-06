

export const useAudio = (audioSrc: string) => {
    const audio = typeof Audio !== "undefined" ? new Audio(audioSrc) : undefined;
    
    return () => audio?.play();
}
