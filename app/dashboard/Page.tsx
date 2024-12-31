import AvatarToggle from "@/components/Avatar/AvatarToggle"
import Layout from "@/components/Layout/Layout"
// import NavToggle from "@/components/Navtoggle/NavToggle"
// import Sidebar from "@/components/Sidebar/page"
import LeftBarToggle from "./LeftBarToggle"
//should be server side rendered
export default function Dashboard() {

    const users = {
        [1]: { 
            id: 1,
            name: "Mae Doe",
            image: "https://randomuser.me/api/portraits",
            email: "mae@gmail.com",
            password: "password",
            tasks: [],
            sharedTask: [],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        [2]: { 
            id: 1,
            name: "John Doe",
            image: "https://randomuser.me/api/portraits",
            email: "john@gmail.com",
            password: "password",
            tasks: [],
            sharedTask: [],
            createdAt: new Date(),
            updatedAt: new Date(),

        },
        [3]: { 
            id: 1,
            name: "jean Doe",
            image: "https://randomuser.me/api/portraits",
            email: "jean@gmail.com",
            password: "password",
            tasks: [],
            sharedTask: [],
            createdAt: new Date(),
            updatedAt: new Date(),

        }
    }

    return (
        <Layout>
            <main className="w-[100%] flex ">
                <div className="border-b-[1px] border-t-[1px] border-r-[1px] border-gray-400 h-[4rem] w-[100%] flex justify-between items-center">
                    <span className="ml-[1.5rem] tracking-[0.2rem] font-[600] text-[1.7rem] font-sub ">Overview</span>
                    <div className="flex items-center gap-[1.5rem] mr-[1.5rem]">
                        <AvatarToggle avatar={users[1].image} name={users[1].name} email={users[1].email}/>
                    </div>
                </div>
                <LeftBarToggle />
            </main>
        </Layout>
    )
}  