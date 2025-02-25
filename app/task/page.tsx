'use client';

import Layout from "@/components/Layout/Layout"
import AvatarToggle from "@/components/Avatar/AvatarToggle"
import { FcFullTrash } from "react-icons/fc";
import { useState, useEffect, use } from "react";
import Avatar from "@/components/Avatar/Avatar";
import TaskForm from "./editTask";
import { useRouter } from 'next/router';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function Task() {

    useEffect(() => {
        async function fetchTasks() {

            const response = await fetch('/api/data/tasks/', {
                method: 'GET',
                credentials: 'include',
            });

            const data = await response.json();
            setTasks(data.tasks);
            setLoading(false);
        }
        fetchTasks();
    }, []);

    const [tasks, setTasks] = useState<{ id: string; title: string; description: string; status: string; priority?: string; deadline: string; creatorId: number; creator: string; sharedUser: number[]; createdAt: Date; updatedAt: Date; }[]>([]);
    const [loading, setLoading] = useState(true);
    const [display, setDisplay] = useState("TASK");
    const [clicked, setClicked] = useState(false);
    const [deletePrompt, setDeletePrompt] = useState(false);
    const [chosenTask, setChosenTask] = useState<{ id: string; title: string; description: string; status: string; priority: string; deadline: string; creatorId: string; creator: string; sharedUser: number[]; createdAt: string; updatedAt: string; }>({
        id: "",
        title: "",
        description: "",
        status: "",
        priority: "",
        deadline: "",
        creatorId: "",
        creator: "",
        sharedUser: [],
        createdAt: "",
        updatedAt: "",
    });
    const [edit, setEdit] = useState(false);

    const formatDate = (isoString: string) => {
        const date = new Date(isoString);
        return date.toLocaleString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true, // 12-hour format
            month: "short", // Jan, Feb, Mar
            day: "numeric", // 31, 1, 2
        });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    const now = new Date();
    const overdueTask = tasks.filter((task) => new Date(task.deadline) <= now && task.status !== "COMPLETED");
    const completedTask = tasks.filter(task => task.status === "COMPLETED");
    const inProgressTask = tasks.filter(task => task.status === "IN_PROGRESS" && new Date(task.deadline) >= now);
    const allIncomplete = tasks.filter(task => task.status !== "COMPLETED" && new Date(task.deadline) >= now);



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

    function handleClicked({ task }: { task: any }) {
        setChosenTask({
            id: task.id,
            title: task.title,
            description: task.description,
            status: task.status,
            priority: task.priority,
            deadline: task.deadline,
            creatorId: task.creatorId,
            creator: task.creator,
            sharedUser: task.sharedUser,
            createdAt: task.createdAt,
            updatedAt: task.updatedAt,
        });
        setClicked(true);
    }

    async function handleDone() {

        try {
            const res = await fetch("/api/data/edit/", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ taskId: chosenTask.id, action: "updateStatus", data: { status: "COMPLETED" } }),
            });

            const data = await res.json();
            console.log(data);
            setChosenTask({
                ...chosenTask,
                status: data.status,
            });
            console.log("Status updated successfully");
        } catch (error) {
            console.log("Error updating status", error);
        }
    }

    function handleEdit() {
        setEdit(true);
    }

    function promptDelete() {
        setDeletePrompt(!deletePrompt);
    }

    async function handleDelete({ task }: { task: any }) {

        console.log(task.id);
        if (!task || !task.id) {
            console.error("Task is undefined or missing an ID:", task);
            return;
        }

        try {
            console.log("Sending delete request for task ID:", task.id);

            const res = await fetch("/api/data/edit/", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ taskId: task.id }) // Removed `action`
            });

            // Check if response has content before parsing
            let data;
            try {
                data = await res.json();
            } catch {
                data = null;
            }

            if (!res.ok) {
                console.error("Error deleting task:", data?.error || "Unknown error");
                return;
            }

            console.log("Task deleted successfully:", data);

            // Reset chosenTask after successful deletion
            setChosenTask({
                id: "",
                title: "",
                description: "",
                status: "",
                priority: "",
                deadline: "",
                creatorId: "",
                creator: "",
                sharedUser: [],
                createdAt: "",
                updatedAt: "",
            });

        } catch (error) {
            console.error("Failed to delete task:", error);
        }
    }



    return (
        <Layout>
            <main className="w-[100%] flex flex-col">
                {!clicked ? (
                    <div>
                        <div className="border-b-[1px] border-t-[1px] border-r-[1px] border-gray-400 h-[4rem] w-[100%] flex justify-between items-center pr-[1.5rem]">
                            <span className="ml-[1.5rem] tracking-[0.2rem] font-[600] text-[1.7rem] font-sub ">Task</span>
                            <AvatarToggle name={users[1].name} avatar={users[1].image} email={users[1].email} />
                        </div>
                        <div className="border-y-2 border-gray-300 bg-gray-50 w-[70%] mx-[auto] mt-[2rem]">
                            <div className="flex justify-center gap-[5rem]">
                                <button onClick={() => setDisplay("TASK")} className=" text-gray-800 text-[1.2rem] shadow-sm hover:bg-gray-300 p-[0.5rem] transition-colors">
                                    Task
                                </button>
                                <button onClick={() => setDisplay("IN_PROGRESS")} className=" text-gray-800 text-[1.3rem] shadow-sm hover:bg-gray-300 p-[0.5rem] transition-colors">
                                    In Progress
                                </button>
                                <button onClick={() => setDisplay("COMPLETED")} className=" text-gray-800 text-[1.3rem] shadow-sm hover:bg-gray-300 p-[0.5rem] transition-colors">
                                    Finished
                                </button>
                                <button onClick={() => setDisplay("MISSING")} className=" text-gray-800 text-[1.3rem] shadow-sm hover:bg-gray-300 p-[0.5rem] transition-colors">
                                    Missing
                                </button>
                            </div>
                        </div>

                        <div className="w-[70%] mt-[4rem] mx-auto flex justify-center items-center">
                            <div className="relative rounded-lg w-full ">
                                <div className="text-lg text-left text-gray-600">

                                    {display === "TASK" ? allIncomplete.length > 0 ? allIncomplete.map((task, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between p-4  border-b last:border-0 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300"
                                        >
                                            <div onClick={() => handleClicked({ task })} className="h-[100%] w-[100%] flex items-center justify-between">
                                                <div className=" font-medium text-gray-900 truncate dark:text-white">
                                                    {task.title}
                                                </div>
                                                <div className="w-1/4 text-md text-[1rem] text-gray-600 dark:text-gray-400">
                                                    Due: {formatDate(task.deadline)}
                                                </div>
                                            </div>
                                            <div className="flex justify-end">
                                                <AlertDialog>
                                                    <AlertDialogTrigger className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"><FcFullTrash /></AlertDialogTrigger>
                                                    <AlertDialogContent>
                                                        <AlertDialogHeader>
                                                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                            <AlertDialogDescription>
                                                                This action cannot be undone. This will permanently delete your task
                                                                and remove your data from our servers.
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                            <form onSubmit={() => handleDelete({ task })}>
                                                                <AlertDialogAction type="submit">Delete</AlertDialogAction>
                                                            </form>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
                                            </div>
                                        </div>
                                    )) : <div className="text-center">No task for now.</div> : null
                                    }

                                    {display === "COMPLETED" ? completedTask.length > 0 ? completedTask.map((task, index) => (
                                        <div
                                            key={index}
                                            className="mb-[1rem] px-[1rem] flex items-center justify-between h-[4rem] bg-white border-b last:border-0 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300"
                                        >
                                            <div onClick={() => handleClicked({ task })} className="h-[100%] w-[100%] flex items-center justify-between">
                                                <div className=" font-medium text-gray-900 truncate dark:text-white">
                                                    {task.title}
                                                </div>
                                                <div className="w-1/4 text-md text-[1rem] text-gray-600 dark:text-gray-400">
                                                    Due: {formatDate(task.deadline)}
                                                </div>
                                            </div>
                                            <div className="flex justify-end">
                                                <AlertDialog>
                                                    <AlertDialogTrigger className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"><FcFullTrash /></AlertDialogTrigger>
                                                    <AlertDialogContent>
                                                        <AlertDialogHeader>
                                                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                            <AlertDialogDescription>
                                                                This action cannot be undone. This will permanently delete your task
                                                                and remove your data from our servers.
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                            <form onSubmit={() => handleDelete({ task })}>
                                                                <AlertDialogAction type="submit">Delete</AlertDialogAction>
                                                            </form>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
                                            </div>
                                        </div>
                                    )) : <div className="text-center">No completed Task yet!</div> : null
                                    }

                                    {display === "IN_PROGRESS" ? inProgressTask.length > 0 ? inProgressTask.map((task, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between p-4 bg-white border-b last:border-0 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300"
                                        >
                                            <div onClick={() => handleClicked({ task })} className="h-[100%] w-[100%] flex items-center justify-between">
                                                <div className=" font-medium text-gray-900 truncate dark:text-white">
                                                    {task.title}
                                                </div>
                                                <div className="w-1/4 text-md text-[1rem] text-gray-600 dark:text-gray-400">
                                                    Due: {formatDate(task.deadline)}
                                                </div>
                                            </div>
                                            <div className="flex justify-end">
                                                <AlertDialog>
                                                    <AlertDialogTrigger className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"><FcFullTrash /></AlertDialogTrigger>
                                                    <AlertDialogContent>
                                                        <AlertDialogHeader>
                                                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                            <AlertDialogDescription>
                                                                This action cannot be undone. This will permanently delete your task
                                                                and remove your data from our servers.
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                            <form onSubmit={() => handleDelete({ task })}>
                                                                <AlertDialogAction type="submit">Delete</AlertDialogAction>
                                                            </form>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
                                            </div>
                                        </div>
                                    )) : <div className="text-center">Don't be lazy, Start some tasks!!</div> : null
                                    }

                                    {display === "MISSING" ? overdueTask.length > 0 ? overdueTask.map((task, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between p-4 bg-white border-b last:border-0 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300"
                                        >
                                            <div onClick={() => handleClicked({ task })} className="h-[100%] w-[100%] flex items-center justify-between">
                                                <div className=" font-medium text-gray-900 truncate dark:text-white">
                                                    {task.title}
                                                </div>
                                                <div className="w-1/4 text-md text-[1rem] text-gray-600 dark:text-gray-400">
                                                    Due: {formatDate(task.deadline)}
                                                </div>
                                            </div>
                                            <div className="flex justify-end">
                                                <AlertDialog>
                                                    <AlertDialogTrigger className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"><FcFullTrash /></AlertDialogTrigger>
                                                    <AlertDialogContent>
                                                        <AlertDialogHeader>
                                                            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                            <AlertDialogDescription>
                                                                This action cannot be undone. This will permanently delete your task
                                                                and remove your data from our servers.
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                            <form onSubmit={() => handleDelete({ task })}>
                                                                <AlertDialogAction type="submit">Delete</AlertDialogAction>
                                                            </form>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
                                            </div>
                                        </div>
                                    )) : <div className="text-center">Nice! no missing activity for now.</div> : null}

                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    edit ? (
                        <div className="w-[60%] mx-auto mt-[4rem]">
                            <button onClick={() => setEdit(false)} className="mb-[1rem]">{`<`} Return</button>
                            <TaskForm task={chosenTask} />
                        </div>
                    ) : (
                        <div className="">
                            <div className="text-center border-b-[1px] border-t-[1px] border-r-[1px] border-gray-400 h-[4rem] flex items-center justify-between w-[100%] pr-[1.5rem]">
                                <button onClick={() => setClicked(false)} className="ml-[1rem]">Back</button>
                                <span className="tracking-[0.2rem] font-[600] text-[1.7rem] font-sub ">Task</span>
                                <AvatarToggle name={users[1].name} avatar={users[1].image} email={users[1].email} />
                            </div>
                            <div className="title flex justify-between items-center p-[1.5rem] w-[80%] mt-[4rem] mx-auto border-b border-gray-500 p-4">
                                <div className="flex gap-[1.5rem]">
                                    <Avatar />
                                    <div className="flex flex-col">
                                        <span className="text-[1.7rem] font-main">{chosenTask.title}</span>
                                        {formatDate(chosenTask.createdAt) !== formatDate(chosenTask.updatedAt) ? (
                                            <span>Updated At: {formatDate(chosenTask.updatedAt)}</span>
                                        ) : (
                                            <span>{formatDate(chosenTask.createdAt)}</span>
                                        )}
                                    </div>
                                </div>
                                <div className="self-start">
                                    <button>share</button>
                                </div>
                            </div>

                            <div className="h-[15rem] description w-[80%] mt-[2rem] pb-[2rem] mx-auto border-b border-gray-500 overflow-y-auto scrollbar-hide">
                                <p className="text-[1.1rem] font-sub">{chosenTask.description}</p>
                            </div>

                            <div className="status w-[80%] mt-[4rem] mx-auto border-b border-gray-500 pb-[3rem]">
                                <ul className="text-[1.1rem] font-sub">
                                    <li className="mb-[0.5rem]">Priority: {chosenTask.priority}</li>
                                    <li className="mb-[0.5rem]">Status: {chosenTask.status}</li>
                                    <li className="mb-[0.5rem]">Deadline: {formatDate(chosenTask.deadline)}</li>
                                </ul>
                            </div>

                            <div className="buttons w-[80%] mt-[3rem] mx-auto gap-[1rem] flex justify-center items-center">
                                <button onClick={() => handleEdit()} className="px-4 py-2 border-2 border-slate-500 text-slate-500 font-semibold rounded-lg transition duration-300 hover:bg-blue-100 hover:border-blue-400">
                                    Edit
                                </button>

                                {chosenTask.status !== "COMPLETED" ? (
                                    <form onSubmit={handleDone}>
                                        <button type="submit" className="px-4 py-2 border-2 border-slate-500 text-slate-500 font-semibold rounded-lg transition duration-300 hover:bg-blue-100 hover:border-blue-400">
                                            Mark as Done
                                        </button>
                                    </form>
                                ) : (
                                    <button disabled onClick={() => handleDone()} className="px-4 py-2 border-2 border-slate-400 text-slate-300 font-semibold rounded-lg">
                                        Marked as Done
                                    </button>
                                )}
                            </div>
                        </div>
                    )
                )}




            </main>
        </Layout>
    )
}  