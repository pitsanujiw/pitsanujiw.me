import { Navbar } from '../../components'
import useSWR from 'swr'
import { ServiceHelper } from '../../utils'
import { GithubProfile } from '../../interfaces'
export const HomePage = () => {
    const { data, } = useSWR<GithubProfile,
        Error>('/users/pitsanujiw', (url) => ServiceHelper.requestData({ url }))
    if (!data) {
        return <div className="relative flex justify-center items-center h-screen">
            <div className="inline-block animate-spin ease duration-300 w-5 h-5 bg-black mx-2"></div>
            <div className="inline-block animate-ping ease duration-300 w-5 h-5 bg-black mx-2"></div>
            <div className="inline-block animate-pulse ease duration-300 w-5 h-5 bg-black mx-2"></div>
            <div className="inline-block animate-bounce ease duration-300 w-5 h-5 bg-black mx-2"></div>
        </div>
    }
    return (
        <div>
            <Navbar />
            <div className="py-20 min-h-screen">
                <div className="container mx-auto rounded rounded-t-lg overflow-hidden shadow max-w-xs my-3 dark:bg-gray-900">
                    <img src="https://i.imgur.com/dYcYQ7E.png" alt="" className="w-full" />
                    <div className="flex justify-center -mt-8">
                        <img src={data?.avatar_url} alt="" className="rounded-full border-solid border-white border-2 -mt-3 w-20 h-20" />
                    </div>
                    <div className="text-center px-3 pb-6 pt-2">
                        <h3 className="text-black text-sm bold font-sans dark:text-white">{data?.name}</h3>
                        <p className="mt-2 font-sans font-light text-grey-dark dark:text-white">{data?.bio}</p>
                    </div>
                    <div className="flex justify-center pb-3 text-grey-dark dark:text-white">
                        <div className="text-center mr-3 border-r pr-3">
                            <h2>{data?.followers}</h2>
                            <span>Followers</span>
                        </div>
                        <div className="text-center">
                            <h2>{data?.following}</h2>
                            <span>Following</span>
                        </div>
                    </div>
                </div>
                <div className="container grid py-5 px-5">
                    <div className="grid  gap-6 mb-8 md:grid-cols-2 xl:grid-cols-2">
                        <div className="flex items-center p-4 bg-white rounded-lg shadow dark:bg-gray-900">
                            <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                    Public Repository
                    </p>
                                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                    {data?.public_repos}
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center p-4 bg-white rounded-lg shadow dark:bg-gray-900">
                            <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                    Public Gist
                    </p>
                                <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                                    {data?.public_gists}
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}