import Topbar from '@/Components/Topbar/Topbar';
import Workspace from '@/Components/Workspace/Workspace';
import React from 'react';

type ProblemPageProps = {
    
};

const ProblemPage:React.FC<ProblemPageProps> = () => {
    
    return <div>
        <Topbar problemPage={true}/>
        <Workspace />
    </div>
}
export default ProblemPage;

//fetch the loacal data
//ssg:static site generation