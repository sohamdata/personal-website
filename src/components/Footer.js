export default function Footer() {
    const shader = () => {
        window.open("https://sohamdatta.ga/", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
    }
    return (
        <div style={styles.mainContainer}>
            ©2023 Soham Datta<br />
            This site is WIP, thanks for visiting <h1 style={styles.link} onClick={shader}>:)</h1>
        </div>
    )
}

const styles = {
    mainContainer: {
        width: '100%',
        height: '11vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0F216B',
        color: '#B6EADA',
        fontSize: '0.75rem',
        marginBottom: '0',
    },
    link: {
        cursor: 'pointer',
        verticalAlign: 'text-bottom'
    }

}
