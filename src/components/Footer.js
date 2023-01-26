export default function Footer() {
    return (
        <div style={styles.mainContainer}>
            ©2023 Soham Datta
        </div>
    )
}

const styles = {
    mainContainer: {
        width: '100%',
        height: '3rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0F216B',
        color: '#B6EADA',
        fontSize: '0.75rem',
    },

}