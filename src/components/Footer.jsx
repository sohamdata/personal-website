export default function Footer() {
    const shader = () => {
        window.open("https://www.sohamisa.live/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
    }
    return (
        <div style={styles.mainContainer}>
            &copy;2024 <span style={{ cursor: 'pointer', marginLeft: '4px' }} onClick={shader}>Soham Datta</span>
        </div>
    )
}

const styles = {
    mainContainer: {
        marginTop: '3em',
        marginBottom: '0',
        display: 'flex',
        width: '100%',
        height: '11vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0F216B',
        color: '#B6EADA',
    },
}
