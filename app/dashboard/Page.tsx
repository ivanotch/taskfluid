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
            image: "/laptop.jpg",
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

    const tasks = {
        [1]: {
            id: 1,
            title: "Task 1",
            description: "Task 1 description",
            status: "pending",
            priority: "high",
            deadline: new Date(),
            creatorId: 1,
            creator: users[1].name,
            sharedWith: [2, 3], // users' id
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        [2]: {
            id: 2,
            title: "Task 2",
            description: "Task 2 description",
            status: "pending",
            dueDate: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        [3]: {
            id: 3,
            title: "Task 3",
            description: "Task 3 description",
            status: "pending",
            dueDate: new Date(),
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    }

    return (
        <Layout>
            <main className="w-full flex">
                <div className="flex flex-col w-full">
                    {/* Header Section */}
                    <div className="border-b border-t border-r border-gray-400 h-16 w-full flex justify-between items-center">
                        <span className="ml-6 tracking-wide font-semibold text-xl font-sub">Overview</span>
                        <div className="flex items-center gap-6 mr-6">
                            <AvatarToggle avatar={users[1].image} name={users[1].name} email={users[1].email} />
                        </div>
                    </div>

                    {/* Cards Section */}
                    <div className="flex flex-wrap justify-center gap-4 mt-12 items-center w-full mb-[5rem]">
                        {[
                            { count: 13, label: "Total Task" },
                            { count: 7, label: "Pending Task" },
                            { count: "67%", label: "In Progress" },
                            { count: "13%", label: "Completed" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex h-40 bg-gray-300 w-64 rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow relative"
                            >
                                <div className="flex flex-col justify-center">
                                    <span className="text-4xl font-bold">{item.count}</span>
                                    <p className="text-lg">{item.label}</p>
                                </div>
                                <a href="">
                                    <img
                                        className="absolute right-5 top-1/2 transform -translate-y-1/2"
                                        src="arrow-right.svg"
                                        alt="icon"
                                        width="35"
                                        height="35"
                                    />
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="w-[100%] flex justify-center items-center">
                        <div className="relative overflow-x-auto shadow-lg sm:rounded-lg w-[80%]">
                            <table className="w-full text-lg text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            Task Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Priority
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Status
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Deadline
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-md text-gray-900 whitespace-nowrap dark:text-white">
                                            Apple MacBook Pro 17"
                                        </th>
                                        <td className="px-6 py-4">
                                            Silver
                                        </td>
                                        <td className="px-6 py-4">
                                            Laptop
                                        </td>
                                        <td className="px-6 py-4">
                                            $2999
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Microsoft Surface Pro
                                        </th>
                                        <td className="px-6 py-4">
                                            White
                                        </td>
                                        <td className="px-6 py-4">
                                            Laptop PC
                                        </td>
                                        <td className="px-6 py-4">
                                            $1999
                                        </td>
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            Magic Mouse 2
                                        </th>
                                        <td className="px-6 py-4">
                                            Black
                                        </td>
                                        <td className="px-6 py-4">
                                            Accessories
                                        </td>
                                        <td className="px-6 py-4">
                                            $99
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                </div>
                <LeftBarToggle />
            </main>
        </Layout>

    )
}  