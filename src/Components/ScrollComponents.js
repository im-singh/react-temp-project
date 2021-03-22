import React from 'react';

export default function ScrollComponent() {
    let m = ['jdkjf', 'jkdj', 'jdkflj', 'jdkjf', 'jkdj', 'jdkflj', 'jdkjf', 'jkdj', 'jdkflj', 'jdkjf', 'jkdj', 'jdkflj', 'jdkjf', 'jkdj', 'jdkflj', 'jdkjf', 'jkdj', 'jdkflj', 'jdkjf', 'jkdj', 'jdkflj', 'jdkjf', 'jkdj', 'jdkflj', 'jdkjf', 'jkdj', 'jdkflj', 'jdkjf', 'jkdj', 'jdkflj', 'jdkjf', 'jkdj', 'jdkflj', 'jdkjf', 'jkdj', 'jdkflj', 'jdkjf', 'jkdj', 'jdkflj', 'jdkjf', 'jkdj', 'jdkflj', 'jdkjf', 'jkdj', 'jdkflj', 'jdkjf', 'jkdj', 'jdkflj', 'jdkjf', 'jkdj', 'jdkflj', 'jdkjf', 'jkdj', 'jdkflj'];
    return (
        m.map((ele, idx) => {
            return <p key={idx}>{ele} jdkjf</p>
        })
    );
}
