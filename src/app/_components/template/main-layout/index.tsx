import { ReactNode } from "react";
import NavbarMainPage from "../../molecules/navigation/NavbarMainPage";

interface LayoutProps {
    children: ReactNode
}

export default function MainLayout({ children }: LayoutProps) {
    return (
        <div>
            <header>
                <NavbarMainPage />
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}