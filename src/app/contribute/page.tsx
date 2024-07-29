import { ModeToggle } from "@/components/mode-toggle"
import Nav from "@/components/nav"
import './globals.css'

export default function docs() {
    return (
        <>
            <Nav />
            <h1 className="docs_heading">welcome to the contributions page...</h1>
            <ModeToggle />
        </>
    )
}