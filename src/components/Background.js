export default function Background() {
    let backgrounds = ['https://glslsandbox.com/e#99596.0', 'https://glslsandbox.com/e#99332.0', 'https://glslsandbox.com/e#99536.6', 'https://glslsandbox.com/e#99443.0']
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
