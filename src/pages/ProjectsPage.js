import React, {useContext} from 'react';
import {AppContext} from '../context/context';

const ProjectsPage = () => {

    const data = useContext(AppContext)
    console.log(data);
    return (
        <div>
            Hello from Projects Page
        </div>
    )
};

export default ProjectsPage;

