import React from 'react';
import { CSSProperties } from 'react';

const NotFound = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>404</h1>
            <p style={styles.message}>Oops! Page not found.</p>
            <a href="/" style={styles.link}>Go back to Home</a>
        </div>
    );
}

const styles: { [key: string]: CSSProperties } = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
        color: '#333',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center'
    },
    title: {
        fontSize: '5rem',
        margin: '0'
    },
    message: {
        fontSize: '1.5rem',
        margin: '1rem 0'
    },
    link: {
        fontSize: '1rem',
        color: '#007bff',
        textDecoration: 'none',
        border: '1px solid #007bff',
        padding: '0.5rem 1rem',
        borderRadius: '5px',
        transition: 'background-color 0.3s, color 0.3s'
    },
    linkHover: {
        backgroundColor: '#007bff',
        color: '#fff'
    }
}

export default NotFound;
