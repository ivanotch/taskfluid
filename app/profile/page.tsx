import AvatarToggle from "@/components/Avatar/AvatarToggle"
import Layout from "@/components/Layout/Layout"
import Avatar from "@/components/Avatar/Avatar"

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


export default function Profile() {
    return (
        <Layout>
            <main className="w-[100%] flex flex-col">
                <div className="border-b-[1px] border-t-[1px] border-r-[1px] border-gray-400 h-[4rem] w-[100%] flex justify-between items-center pr-[1.5rem]">
                    <span className="ml-[1.5rem] tracking-[0.2rem] font-[600] text-[1.7rem] font-sub ">Profile</span>
                    <AvatarToggle name={users[1].name} avatar={users[1].image} email={users[1].email} />
                </div>
                <div className="flex flex-col h-[70%] w-[70%] m-auto p-8 bg-white rounded-lg shadow-lg">
                    {/* Personal Information Section */}
                    <div className="flex flex-wrap p-6 bg-gray-50 rounded-lg shadow-md mb-8 border border-gray-200">
                        <div className="w-full md:w-1/3 flex items-center justify-center text-lg font-semibold text-gray-600">
                            Personal Information
                        </div>
                        <div className="flex flex-col w-full md:w-2/3 items-center md:items-start gap-2">
                            <Avatar/>
                            <span className="text-xl font-medium text-gray-700">John Doe</span>
                        </div>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-6">
                        {/* Full Name */}
                        <div className="flex items-center">
                            <label className="w-1/4 text-gray-600 font-medium text-sm md:text-base">
                                Full Name
                            </label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                className="flex-grow px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex items-center">
                            <label className="w-1/4 text-gray-600 font-medium text-sm md:text-base">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="JohnDoe@gmail.com"
                                className="flex-grow px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Action Button */}
                    <div className="mt-8 flex justify-end">
                        <button
                            className="px-6 py-3 bg-blue-600 text-white font-semibold text-sm md:text-base rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                        >
                            Edit
                        </button>
                    </div>
                </div>


            </main>
        </Layout>
    )
}  