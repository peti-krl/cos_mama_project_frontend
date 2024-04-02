import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const PartnersPage = ()=> {
    return (    
        <>
        <div className="w-full bg-violet-100 flex flex-col justify-center items-center">
            <div className="my-7 flex flex-wrap justify-center items-center">
                <div className="w-[400px] h-[600px] bg-white mx-8 rounded-2xl border-2 border-rose-400 shadow-lg" ></div>
                <div className="w-[400px] h-[650px] bg-white mx-8 rounded-2xl border-2 border-rose-400 shadow-lg"></div>
                <div className="w-[400px] h-[600px] bg-white mx-8 rounded-2xl border-2 border-rose-400 shadow-lg"></div>
            </div>
          
            <div className="bg-indigo-800 p-6 sm:p-12 rounded-2xl shadow-lg mx-auto my-14 w-[1300px] flex flex-wrap justify-center items-center">
                <Input type="name" placeholder="Name" className="w-[400px] h-[40px] text-gray-700 bg-white mr-14"  />
                <Input type="email" placeholder="Email" className="w-[400px] h-[40px] text-gray-700 bg-white mr-14" />
                <Button className="w-[80px] h-[40px] mx-1">Send</Button>
            </div>
        </div>
        </>
    )
}

export default PartnersPage;
