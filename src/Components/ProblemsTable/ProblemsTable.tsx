import { problems } from '@/mockProblems/problems';
import { doc } from 'firebase/firestore';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiFillYoutube } from 'react-icons/ai';
import { BsCheckCircle, BsCircle } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import YouTube from 'react-youtube';

type ProblemsTableProps = {

};

const ProblemsTable: React.FC<ProblemsTableProps> = () => {
    const [youtubePlayer, setYoutubePlayer] = useState({
        isOpen: false,
        videoId: "",
    });
    const [solvedProblems, setSolvedProblems] = useState<Set<string>>(new Set());

    const closeModal = () => {
        setYoutubePlayer({ isOpen: false, videoId: "" });
    };

    useEffect(() => {
        // Load solved problems from localStorage
        const saved = localStorage.getItem('solvedProblems');
        if (saved) {
            setSolvedProblems(new Set(JSON.parse(saved)));
        }
    }, []);

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape")  closeModal();
        };
        window.addEventListener('keydown', handleEsc)
        return () => window.removeEventListener('keydown', handleEsc)
    
    },[]);

    const toggleSolved = (problemId: string) => {
        setSolvedProblems(prev => {
            const newSet = new Set(prev);
            if (newSet.has(problemId)) {
                newSet.delete(problemId);
            } else {
                newSet.add(problemId);
            }
            localStorage.setItem('solvedProblems', JSON.stringify([...newSet]));
            // Update stats
            const stats = JSON.parse(localStorage.getItem('geekcode_stats') || '{"solved": 0, "streak": 0}');
            stats.solved = newSet.size;
            localStorage.setItem('geekcode_stats', JSON.stringify(stats));
            return newSet;
        });
    };

    return (
        <>
            <tbody className='text-white'>
                {problems.map((doc, idx) => {
                    const difficultyColor = doc.difficulty === "Easy" ? "text-dark-green-s" : doc.difficulty === "Medium" ? "text-dark-yellow" : "text-dark-pink";
                    const difficultyBg = doc.difficulty === "Easy" ? "bg-green-500/10" : doc.difficulty === "Medium" ? "bg-yellow-500/10" : "bg-pink-500/10";
                    const isSolved = solvedProblems.has(doc.id);
                    return (
                        <tr className={`${idx % 2 == 1 ? 'bg-dark-layer-2/50' : 'bg-dark-layer-1'} hover:bg-dark-fill-3/50 transition-colors`} key={doc.id}>
                            <td className='px-4 md:px-6 py-4 font-medium whitespace-nowrap'>
                                <button 
                                    onClick={() => toggleSolved(doc.id)}
                                    className={`transition-all duration-200 hover:scale-110 ${isSolved ? 'text-dark-green-s' : 'text-gray-500 hover:text-gray-300'}`}
                                >
                                    {isSolved ? <BsCheckCircle fontSize={20} /> : <BsCircle fontSize={20} />}
                                </button>
                            </td>
                            <td className='px-4 md:px-6 py-4'>
                                <Link className='hover:text-green-400 cursor-pointer transition-colors font-medium' href={`/problems/${doc.id}`}>
                                    {doc.title}
                                </Link>
                            </td>
                            <td className={`px-4 md:px-6 py-4 hidden sm:table-cell`}>
                                <span className={`${difficultyColor} ${difficultyBg} px-2.5 py-1 rounded-full text-xs font-medium`}>
                                    {doc.difficulty}
                                </span>
                            </td>
                            <td className='px-4 md:px-6 py-4 text-gray-400 hidden md:table-cell'>{doc.category}</td>
                            <td className='px-4 md:px-6 py-4'>
                                {doc.videoId ? (
                                    <button 
                                        onClick={() => setYoutubePlayer({ isOpen: true, videoId: doc.videoId as string })}
                                        className='p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 transition-colors'
                                    >
                                        <AiFillYoutube fontSize={22} className='text-red-500'/>
                                    </button>
                                ) : (
                                    <span className='text-gray-500 text-xs bg-gray-500/10 px-2 py-1 rounded'>Coming soon</span>
                                )}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
            {youtubePlayer.isOpen && (
            <tfoot className='fixed top-0 left-0 h-screen w-screen flex items-center justify-center z-50'>
                <div className='bg-black z-10 opacity-80 top-0 left-0 w-screen h-screen absolute'
                    onClick={closeModal}></div>
                <div className='w-full z-50 h-full relative max-w-4xl px-4'>
                    <div className='w-full h-full flex items-center justify-center relative'>
                        <div className='w-full relative max-w-4xl'>
                            <IoClose fontSize={"35"} className='cursor-pointer absolute -top-12 right-0 hover:text-red-400 transition-colors'
                                onClick={closeModal}
                            />
                            <YouTube videoId={youtubePlayer.videoId} loading='lazy' iframeClassName='w-full min-h-[300px] md:min-h-[500px] rounded-xl'/>
                        </div>
                    </div>
                </div>
            </tfoot>
            )}
        </>

    );
};
export default ProblemsTable;