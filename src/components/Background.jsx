import { Backgrounds } from "../utils/Data";

export default function Background() {
    const backgrounds = Backgrounds;
    return (
        <iframe
            title="background"
            src={backgrounds[Math.floor(Math.random() * backgrounds.length)]}
            style={styles.iframe}
        />
    );
}

const styles = {
    iframe: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        border: 'none',
        overflow: 'hidden',
    }
};
