"use client";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export function CreationSubmit() {
    const { pending } = useFormStatus();
    return (
        <>
            {pending ? (
                <Button type="submit" size="lg">
                    Next
                </Button>
            ) : (
                <Button type="submit" size="lg">
                    Next
                </Button>
            )}
        </>
    );
}
