'use client'

import { useEffect } from "react";

const ProjectDetails = ({project}) => {
    useEffect(() => {
    
    const event = new CustomEvent("hydrationComplete");
    document.dispatchEvent(event);
  }, []);
    return (
        <div>
            {JSON.stringify(project)}
        </div>
    );
};

export default ProjectDetails;