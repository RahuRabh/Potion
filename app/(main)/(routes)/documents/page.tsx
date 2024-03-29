"use client"

import Image from "next/image"
import { useUser } from "@clerk/clerk-react"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const DocumentsPage = () => {
    const router = useRouter()
    const {user} = useUser()
    const create = useMutation(api.documents.create)

    const onCreate = () => {
        const promise = create({title: "Untitled" })
            .then((documentId) => router.push(`/documents/${documentId}`))

        toast.promise(promise, {
            loading: "Createing a new note...",
            success: "New note added successfully",
            error: "Failed to create a new note"
        })
    }

    return(
        <div className="flex flex-col justify-center items-center h-full space-y-4">
            <Image 
             src="/empty.png"
             width="300"
             height="300"
             alt="Empty PNG Logo"
             className="dark:hidden"
            />
            <Image 
             src="/empty-dark.png"
             width="300"
             height="300"
             alt="Empty PNG Logo"
             className="dark:block hidden"
            />
            <h2 className="text-lg font-medium">Welcome to {user?.firstName}&apos;s Potion</h2>
            <Button onClick={onCreate}>
                <PlusCircle className="h-4 w-4 mr-2" />
                Create a note
            </Button>
        </div>
    )
}

export default DocumentsPage