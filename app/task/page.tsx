'use client';

import Layout from "@/components/Layout/Layout"
import AvatarToggle from "@/components/Avatar/AvatarToggle"
import { FcFullTrash } from "react-icons/fc";
import { useState, useEffect, use } from "react";

export default function Task() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchTasks() {

            const response = await fetch('/api/data/tasks/', {
                method: 'GET',
                credentials: 'include',
            });

            const data = await response.json();
            setTasks(data);
            setLoading(false);
        }
        fetchTasks();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }


    const users = {
        [1]: {
            id: 1,
            name: "Mae Doe",
            image: "https://randomuser.me/api/portraits",
            email: "mae@gmail.com",
            password: "password",
            task: [],
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
            task: [],
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
            task: [],
            sharedTask: [],
            createdAt: new Date(),
            updatedAt: new Date(),

        }
    }

    const task = [
        {
            id: 1,
            title: "Task 1",
            description: "Task 1 description",
            status: "pending",
            priority: "high",
            dueDate: "2022-12-12",
            creatorId: 1,
            creator: users[1].name,
            sharedWith: [2, 3], // users' id
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 2,
            title: "Task 2",
            description: "Task 2 description",
            status: "pending",
            dueDate: "2022-12-12",
            creatorId: 1,
            creator: users[1].name,
            sharedWith: [2, 3], // users' id
            createdAt: new Date(),
            updatedAt: new Date
        },
        {
            id: 3,
            title: "Task 3",
            description: "Task 3 description",
            status: "pending",
            dueDate: "2022-12-12",
            creatorId: 1,
            creator: users[1].name,
            sharedWith: [2, 3], // users' id
            createdAt: new Date(),
            updatedAt: new Date
        }
    ]
    return (
        <Layout>
            <main className="w-[100%] flex flex-col">
                <div className="border-b-[1px] border-t-[1px] border-r-[1px] border-gray-400 h-[4rem] w-[100%] flex justify-between items-center pr-[1.5rem]">
                    <span className="ml-[1.5rem] tracking-[0.2rem] font-[600] text-[1.7rem] font-sub ">Task</span>
                    <AvatarToggle name={users[1].name} avatar={users[1].image} email={users[1].email} />
                </div>
                <div className="border-y-2 border-gray-300 bg-gray-50 w-[70%] mx-[auto] mt-[2rem]">
                    <div className="flex justify-center gap-[5rem]">
                        <button className=" text-gray-800 text-[1.2rem] shadow-sm hover:bg-gray-300 p-[0.5rem] transition-colors">
                            Task
                        </button>
                        <button className=" text-gray-800 text-[1.3rem] shadow-sm hover:bg-gray-300 p-[0.5rem] transition-colors">
                            In Progress
                        </button>
                        <button className=" text-gray-800 text-[1.3rem] shadow-sm hover:bg-gray-300 p-[0.5rem] transition-colors">
                            Finished
                        </button>
                        <button className=" text-gray-800 text-[1.3rem] shadow-sm hover:bg-gray-300 p-[0.5rem] transition-colors">
                            Missing
                        </button>
                    </div>
                </div>

                <div className="w-[70%] mt-[4rem] mx-auto flex justify-center items-center">
                    <div className="relative overflow-hidden shadow-lg rounded-lg w-full bg-gray-100">
                        <div className="text-lg text-left text-gray-600 bg-white shadow-sm rounded-md">

                            {task.map((task, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between p-4 bg-white border-b last:border-0 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300"
                                >
                                    <div className="w-2/3 font-medium text-gray-900 truncate dark:text-white">
                                        {task.title}
                                    </div>
                                    <div className="w-1/4 text-md text-[1rem] text-gray-600 dark:text-gray-400">
                                        {task.dueDate}
                                    </div>
                                    <div className="w-1/12 flex justify-end">
                                        <span className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 cursor-pointer">
                                            <FcFullTrash />
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>





            </main>
        </Layout>
    )
}  