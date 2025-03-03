import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function EditTask({ task }: { task: any }) {

    async function handleSubmit(event: any) {
        try {
            const res = await fetch("/api/data/edit/", {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body:JSON.stringify({taskId: currentTask.id, action: "editTask", data: {...currentTask}})

            });

            const data = await res.json();
            console.log(data);
            console.log("Status updated successfully");
        } catch (error) {
            console.log("Error updating status", error);        
        }
        event.preventDefault();
        console.log(currentTask);
    }

    function formatDate(dateString: string) {
        if (!dateString) return ""; // Handle empty value
        const date = new Date(dateString);
    
        // Convert to local time & format as YYYY-MM-DDTHH:MM
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
    
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    }

    const [currentTask, setCurrentTask] = useState<{ id: string; title: string; description: string; status: string; priority: string; deadline: string; creatorId: string; creator: string; sharedWith: number[]; createdAt: string; updatedAt: string; }>({
        ...task
    });

    const handleChange = (e: any) => {
        setCurrentTask({ ...currentTask, [e.target.name]: e.target.value });
    }

    return (

        <div className="mt-[3rem]">
            <div className="mb-[2rem]">
                <label htmlFor="title" >New Task Name</label>
                <Input name="title" type="text" onChange={handleChange} defaultValue={task.title} className=" h-[3.5rem]" />
            </div>

            <div className="mb-[2rem]">
                <label htmlFor="description" >Description</label>
                <Textarea name="description" onChange={handleChange} defaultValue={task.description} placeholder={task.description} />
            </div>

            <div className="mb-[2rem]">
                <p>Set Priority</p>
                <Select onValueChange={(value) => setCurrentTask({...currentTask, priority: value})} defaultValue={task.priority}>
                    <SelectTrigger className="w-[15rem]">
                        <SelectValue placeholder="Select Priority Level" />
                    </SelectTrigger>
                    <SelectContent side="bottom" align="start" className="p-2">
                        <SelectGroup>
                            <SelectLabel>Priority</SelectLabel>
                            <SelectItem value="HIGH">HIGH</SelectItem>
                            <SelectItem value="MEDIUM">MEDIUM</SelectItem>
                            <SelectItem value="LOW">LOW</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <div className="mb-[2rem]">
                <p>Set Status</p>
                <Select onValueChange={(value) => setCurrentTask({...currentTask, status: value})} defaultValue={task.status}>
                    <SelectTrigger className="w-[15rem]">
                        <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent side="bottom" align="start" className="p-2">
                        <SelectGroup>
                            <SelectLabel>Status</SelectLabel>
                            <SelectItem value="IN_PROGRESS">IN PROGRESS</SelectItem>
                            <SelectItem value="PENDING">PENDING</SelectItem>
                            <SelectItem value="COMPLETED">COMPLETED</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <div className="mb-[3rem]">
                <label htmlFor="deadline" >Set New Deadline</label>
                <Input id="deadline" defaultValue={task.deadline ? formatDate(task.deadline) : ""} onChange={handleChange} name="deadline" type="datetime-local" className="w-[15rem]" />
            </div>

            <form onSubmit={handleSubmit}>
                <Button type="submit" className="block mx-[auto]">Edit Task</Button>
            </form>
        </div>

    )
}