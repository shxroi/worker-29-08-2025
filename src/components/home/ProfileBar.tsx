import Image from "next/image";

export default function ProfileBar() {
    return (
        <div className="w-full h-16 p-4 bg-white text-black flex justify-between items-center shadow-2xl">
            <div className="flex gap-5">
                <Image style={{ borderRadius: '50%' }} src="/profile.jpg" alt="Profile" width={48} height={48} />
                <div>
                    <h1>Michielle</h1>
                    <div className="flex items-center gap-1">
                        <Image src="/location.svg" alt="location" width={14} height={14} />
                        <p>Jakarta</p>
                    </div>
                </div>
            </div>
            <Image src="/sun.svg" alt="sun" width={40} height={40} />
        </div>
    );
}