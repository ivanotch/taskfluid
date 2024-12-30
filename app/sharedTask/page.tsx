import Layout from "@/components/Layout/Layout"


export default function SharedTask() {
    return (
        <Layout>
            <main className="w-[100%] flex ">
                <div className="border-b-[1px] border-t-[1px] border-r-[1px] border-gray-400 h-[4rem] w-[100%] flex justify-between items-center">
                    <span className="ml-[1.5rem] tracking-[0.2rem] font-[600] text-[1.7rem] font-sub ">Shared Task</span>
                    <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mr-[1.5rem]" src="/docs/images/people/profile-picture-5.jpg" alt="Bordered avatar" />
                </div>
            </main>
        </Layout>
    )
}  