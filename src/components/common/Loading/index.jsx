import React from 'react';
import { Ring } from "react-awesome-spinners";
import './style.css';

const Loading = () => {
    return (
        <div className="center">
            <Ring />
        </div>
    );
}

export default Loading;