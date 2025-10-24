import { IoClose } from "react-icons/io5";

type SettingsModalProps = {
	setSettings: React.Dispatch<React.SetStateAction<any>>;
};

const SettingsModal: React.FC<SettingsModalProps> = ({ setSettings }) => {
	const handleClose = () => {
		setSettings((prev: any) => ({ ...prev, settingsModalIsOpen: false }));
	};

	return (
		<>
			<div className='fixed inset-0 z-40 bg-black/50' onClick={handleClose}></div>
			<div className='fixed inset-0 z-50 flex items-center justify-center'>
				<div className='relative w-full max-w-2xl bg-white rounded-lg shadow dark:bg-gray-700'>
					{/* Modal header */}
					<div className='flex items-center justify-between p-4 border-b dark:border-gray-600'>
						<h3 className='text-xl font-semibold text-gray-900 dark:text-white'>Settings</h3>
						<button
							type='button'
							className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
							onClick={handleClose}
						>
							<IoClose className='h-5 w-5' />
						</button>
					</div>
					{/* Modal body */}
					<div className='p-6 space-y-6'>
						<div className='text-sm text-gray-500 dark:text-gray-400'>
							<h4 className='mb-2 text-base font-medium text-gray-900 dark:text-white'>
								Font Size
							</h4>
							<div className='flex items-center space-x-4'>
								<button className='px-3 py-1 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>
									Small
								</button>
								<button className='px-3 py-1 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700'>
									Medium
								</button>
								<button className='px-3 py-1 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'>
									Large
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default SettingsModal;
