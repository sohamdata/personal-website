export default function Footer() {
    return (
        <div style={styles.mainContainer}>
            ©2023 Soham Datta<br />
            This site is WIP, thanks for visiting :)
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

}