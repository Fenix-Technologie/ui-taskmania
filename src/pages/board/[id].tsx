import Link from "next/link";
import { Input } from "@/components/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/Button";
import BoardAside from "@/components/BoardAside";
export default function Board () {
    return(
        <main>
            <BoardAside />
        </main>
    )
}