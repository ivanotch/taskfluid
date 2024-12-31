import Layout from "@/components/Layout/Layout"
import AvatarToggle from "@/components/Avatar/AvatarToggle"

export default function SharedTask() {

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
                <div className="border-b-[1px] border-t-[1px] border-r-[1px] border-gray-400 h-[4rem] w-[100%] flex justify-between items-center pr-[1.5rem]">
                    <span className="ml-[1.5rem] tracking-[0.2rem] font-[600] text-[1.7rem] font-sub ">Shared Task</span>
                    <AvatarToggle name={users[1].name} avatar={users[1].image} email={users[1].email}/>
                </div>
            </main>
        </Layout>
    )
}  