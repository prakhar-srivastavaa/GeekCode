import Topbar from '@/Components/Topbar/Topbar';
import Workspace from '@/Components/Workspace/Workspace';
import { problems } from '@/utils/problems';
import { Problem } from '@/utils/types/problem';
import { GetStaticProps } from 'next';
import React from 'react';

type ProblemPageProps = {
    problem: Problem;  
};

const ProblemPage:React.FC<ProblemPageProps> = ({problem}) => {
    console.log(problem);
    
    return <div>
        <Topbar problemPage={true}/>
        <Workspace problem={problem}/>
    </div>
}
export default ProblemPage;

//fetch the loacal data
//ssg:static site generation
//get staticpaths => it creates the dynamic routes
export async function getStaticPaths() {
    const paths = Object.keys(problems).map((key) => ({
        params: { pid: key },
    }));
    return { paths, fallback: false };//404
}

//get static props => it fetches the data for each route
export async function getStaticProps({ params }: { params: { pid: string } }) {
    const { pid } = params;

    // Get the problem data
    const problem = problems[pid];

    // Remove the handlerFunction before returning
    if (!problem) {
        return {
            notFound: true,// if not a problem 
        }
    }
    problem.handlerFunction = problem.handlerFunction.toString();
        return {
            props: {
                problem,
            },
        };
    }


