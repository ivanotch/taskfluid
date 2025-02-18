import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
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

    const handleSubmit = () => {
        console.log('submit')
    }

    return (

        <form className="mt-[3rem]" onSubmit={handleSubmit}>
            <div className="mb-[2rem]">
                <label htmlFor="title" >New Task Name</label>
                <Input name="title" type="text" placeholder={task.title} className=" h-[3.5rem]"/>
            </div>

            <div className="mb-[2rem]">
                <label htmlFor="description" >Description</label>
                <Textarea name="description" placeholder={task.description} />
            </div>

            <div className="mb-[2rem]">
                <Select>
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
                <Select>
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
                <Input name="dueDate" type="datetime-local" className="w-[15rem]"/>
            </div>

            <Button type="submit" className="block mx-[auto]">Edit Task</Button>
        </form>

    )
}