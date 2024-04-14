import Image from "next/image";

export default function Page() {
    return (
        <div className="h-full w-full">
        <Image src="/maps/map.jpg" width={1200} height={1418} alt="Westeros" />
        </div>


    );
 }