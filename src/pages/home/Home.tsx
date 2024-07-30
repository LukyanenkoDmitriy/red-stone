import {Button} from "@/components/ui/button/Button.tsx";
import {Settings} from "lucide-react";

export const Home = () => {
    return (
        <>
            <h1>Start game</h1>
            <Button variant='primary'><Settings/></Button>
        </>
    );
};

