import React from 'react';
import PreferenceNav from './PreferenceNav/PreferenceNav';
import Split from 'react-split';
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { javascript } from '@codemirror/lang-javascript';

type PlaygroundProps = {
    
};

const Playground:React.FC<PlaygroundProps> = () => {
    
    return (
    <div className='flex flex-col bg-dark-layer-1 relative'>
        <PreferenceNav/>

        <Split className='h-[calc(100vh-94px)]' direction='vertical' sizes={[60,40]} minSize={60} >
                <div className="w-full overflow-auto">
                    <CodeMirror
                        value="const a=1;"
                        theme={vscodeDark}
                        extensions={[javascript()]}
                        style={{fontSize: 16}}
                     />
                </div>
                <div className='w-full px-5 overflow-auto'>
                    {/* testcases heading */}
                    <div className='flex h-10 items-center space-x-6'>
                        <div className='relative flex h-full flex-col justify-center cursor-pointer'>
                            <div className='text-sm font-medium leading-5 text-white'>Testcase</div>
                            <hr className='absolute bottom-0 h-0.5 w-full rounded-full border-none bg-white'/>
                        </div>
                    </div>
                    {/* testcasees */}
                    <button data-e2e-locator="console-testcase-tag" class="font-medium items-center whitespace-nowrap focus:outline-none inline-flex bg-fill-3 dark:bg-dark-fill-3 hover:bg-fill-2 dark:hover:bg-dark-fill-2 relative rounded-lg px-4 py-1 hover:text-label-1 dark:hover:text-dark-label-1 text-label-1 dark:text-dark-label-1" jf-ext-button-ct="case 1">Case 1</button>

                </div>
        </Split>
    </div>
    )
}
export default Playground;