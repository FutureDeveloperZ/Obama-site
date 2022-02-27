import { ReactChild, ReactFragment, ReactPortal } from "react";
import img from "../assets/Logo.webp";


function Person(props: { href: string; name: string; title: string; img: string; }) {
    return <div className={"col-span-2 grid grid-cols-3"}>
        <img src={props.img} alt="logo" className={"w-3/4 rounded-full border-solid border-black border-4"} />
        <div className={"top-0 bottom-0 left-0 right-0 m-auto cols-2 w-full"}>
            <h1 className={"text-center text-xl "}>
                <a href={props.href} className={"text-white"} target={"_blank"}>
                    {props.name}
                </a>
            </h1>
            <h1 className={"text-center text-xs text-green-500 "}>
                {props.title}
            </h1>
        </div>
    </div>;
}
export default Person;