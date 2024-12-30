import AvatarToggle from "@/components/Avatar/AvatarToggle"
import Layout from "@/components/Layout/Layout"
import NavToggle from "@/components/Navtoggle/NavToggle"
//should be server side rendered
export default function Dashboard() {
    return (
        <Layout>
            <main className="w-[100%] flex ">
                <div className="border-b-[1px] border-t-[1px] border-r-[1px] border-gray-400 h-[4rem] w-[100%] flex justify-between items-center">
                    <span className="ml-[1.5rem] tracking-[0.2rem] font-[600] text-[1.7rem] font-sub ">Overview</span>
                    <div className="flex items-center gap-[1.5rem]">
                        <AvatarToggle />
                        <NavToggle/>
                    </div>
                </div>
                <div></div>
            </main>
        </Layout>
    )
}  