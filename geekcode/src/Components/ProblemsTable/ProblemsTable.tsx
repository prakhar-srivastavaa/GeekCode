import { problems } from '@/mockProblems/problems';
import { doc } from 'firebase/firestore';
import React from 'react';
import { BsCheckCircle } from 'react-icons/bs';

type ProblemsTableProps = {
    
};

const ProblemsTable:React.FC<ProblemsTableProps> = () => {
    return (
        <tbody className='text-white'>
            {problems.map((doc,idx)=>{
                return(
                    <tr className={`${idx % 2 == 1 ? 'bg-dark-layer-1' : ''}`} key={doc.id}>
                        <th className='px-2 py-4 font-medium whitespace-nowrap text-dark-green-s'>
                            <BsCheckCircle fontSize={18} width={18} />
                        </th>
                    </tr>
                    )
                })
            }   
        </tbody>
        
    )
}
export default ProblemsTable;