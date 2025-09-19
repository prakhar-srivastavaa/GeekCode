import Topbar from '@/Components/Topbar/Topbar';
import Workspace from '@/Components/Workspace/Workspace';
import { problems } from '@/utils/problems';
import { GetStaticProps } from 'next';
import React from 'react';

type ProblemPageProps = {
    problem: any;
    
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
//get staticpaths => it creates the dynamic routes
export async function getStaticPaths() {
    const paths = Object.keys(problems).map((key) => ({
        params: { pid: key },
    }));
    return { paths, fallback: false };
}

//get static props => it fetches the data for each route
export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { pid } = params as { pid: string };

    // Get the problem data
    const problem = problems[pid];

    // Remove the handlerFunction before returning
    if (problem) {
        const { handlerFunction, ...problemWithoutHandler } = problem;

        return {
            props: {
                problem: problemWithoutHandler,
            },
        };
    }

    return {
        notFound: true,
    };
};

