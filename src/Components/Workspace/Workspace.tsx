import React, { useState, useEffect } from 'react';
import Split from 'react-split';
import ProblemDescription from './ProblemDescription/ProblemDescription';
import Playground from './Playground/Playground';
import { Problem } from '../../utils/types/problem';

type WorkspaceProps = {
    problem : Problem
};


const Workspace:React.FC<WorkspaceProps> = ({problem}) => {
    const [isMobile, setIsMobile] = useState(false);
    const [activeTab, setActiveTab] = useState<'description' | 'code'>('description');

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Mobile view with tabs
    if (isMobile) {
        return (
            <div className='flex flex-col h-[calc(100vh-50px)]'>
                {/* Tab Navigation */}
                <div className='flex bg-dark-layer-2 border-b border-dark-fill-3'>
                    <button 
                        onClick={() => setActiveTab('description')}
                        className={`flex-1 py-3 text-sm font-medium transition-colors ${
                            activeTab === 'description' 
                                ? 'text-green-400 border-b-2 border-green-400 bg-dark-layer-1' 
                                : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        📝 Description
                    </button>
                    <button 
                        onClick={() => setActiveTab('code')}
                        className={`flex-1 py-3 text-sm font-medium transition-colors ${
                            activeTab === 'code' 
                                ? 'text-green-400 border-b-2 border-green-400 bg-dark-layer-1' 
                                : 'text-gray-400 hover:text-white'
                        }`}
                    >
                        💻 Code
                    </button>
                </div>
                
                {/* Content */}
                <div className='flex-1 overflow-hidden'>
                    {activeTab === 'description' ? (
                        <ProblemDescription problem={problem}/>
                    ) : (
                        <Playground problem={problem}/>
                    )}
                </div>
            </div>
        );
    }

    // Desktop view with split
    return (
        <Split className='split' minSize={0}>
            <ProblemDescription problem={problem}/>
            <Playground problem={problem}/>
        </Split>
    );
};
export default Workspace;