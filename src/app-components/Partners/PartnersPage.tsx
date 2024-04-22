import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const PartnersPage = () => {

    const placeholderText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet consequat diam, nec ultrices libero feugiat vel. Praesent non orci auctor, suscipit tellus at, consequat purus. Pellentesque vel lorem malesuada, faucibus erat sed, fermentum nulla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet consequat diam, nec ultrices libero feugiat vel. Praesent non orci auctor, suscipit tellus at, consequat purus. Pellentesque vel lorem malesuada, faucibus erat sed, fermentum nulla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet consequat diam, nec ultrices libero feugiat vel. Praesent non orci auctor, suscipit tellus at, consequat purus. Pellentesque vel lorem malesuada, faucibus erat sed, fermentum nulla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet consequat diam, nec ultrices libero feugiat vel. Praesent non orci auctor, suscipit tellus at, consequat purus. Pellentesque vel lorem malesuada, faucibus erat sed, fermentum nulla.`;
    
    return (    
        <>
        <div className="w-full bg-rose-100 flex flex-col items-center py-10">
            <h1 className="text-6xl font-bold mt-[80px] mb-[100px] text-center">PARTNERS</h1>
            <div className="flex justify-between items-center w-[1300px] my-7">
                <div className=" h-[850px] bg-white p-11  rounded-2xl shadow-lg flex-1 mr-4">
                    <h2 className="text-4xl font-bold mb-8">Partners with ...</h2>
                    <p className="text-2xl mb-4">{placeholderText}</p>
                </div>
                <img src="/images/women_picnic.jpg" alt="Image Description" className="w-1/2 rounded-2xl h-[850px] shadow-lg" />
            </div>
            
    <h1 className="text-6xl font-bold mt-[120px] mb-[100px] text-center">SPONSORSHIP PACKAGES</h1>
    <div className="my-7 flex flex-wrap justify-center items-center">
    
        <div className="w-[400px] h-[600px] bg-white mx-8 my-5 rounded-2xl border-2 border-red-400 shadow-lg flex flex-col">
             <div className="p-5">
                 <h3 className="text-center font-bold text-2xl">SILVER</h3>
                    <div className="border-b-2 border-black w-[300px] mx-auto mb-5 mt-5"></div>
                     <div className="flex flex-col justify-center items-center text-center my-4">
                     <p className="text-6xl  mt-4 font-bold">5000</p>
                     <span className="text-2xl font-medium">Yearly</span>
                    </div>
        </div>
    
        <ul className="flex-1 p-5">
            <li className="mb-3 flex items-center">
                 <span className="flex-none text-green-500 bg-white mr-2 font-bold flex justify-center items-center">✓</span>
            Newsletter
            </li>
             <li className="mb-3 text-l flex items-center">
                 <span className="flex-none text-green-500 bg-white mr-2 font-bold flex justify-center items-center">✓</span>
                Logo on our website
            </li>
            <li className="mb-3 flex items-center">
                 <span className="flex-none text-green-500 bg-white mr-2 font-bold flex justify-center items-center">✓</span>
                Mention in article (without link)
            </li>
            <li className="mb-3 flex items-center">
                 <span className="flex-none text-green-500 bg-white mr-2 font-bold flex justify-center items-center">✓</span>
                Merch during events
            </li>
         </ul>
         <div className="flex justify-center items-center p-5">
         <Button className="w-[120px] h-[50px] mx-1">Choose</Button>
        </div>
    </div>
    <div className="w-[400px] h-[650px] bg-white mx-8 my-5 rounded-2xl border-2 border-red-400 shadow-lg flex flex-col">
        <div className="p-5">
            <h3 className="text-center text-2xl font-bold ">GOLD</h3>
            <div className="border-b-2 border-black w-[300px] mx-auto mb-5 mt-5"></div>
            <div className="flex flex-col justify-center items-center text-center my-4">
            <p className="text-6xl  mt-4 font-bold">7000</p>
            <span className="text-2xl font-medium">Yearly</span>
        </div>
    </div>
    <ul className="flex-1 p-5">
        <li className="mb-3 flex items-center">
            <span className="flex-none text-green-500 bg-white mr-2 font-bold flex justify-center items-center">✓</span>
             Newsletter
        </li>
        <li className="mb-3 flex items-center">
            <span className="flex-none text-green-500 bg-white mr-2 font-bold flex justify-center items-center">✓</span>
            Logo on our website
        </li>
        <li className="mb-3 flex items-center">
            <span className="flex-none  text-green-500 bg-white mr-2 font-bold flex justify-center items-center">✓</span>
            Link in an article
        </li>
        <li className="mb-3 flex items-center">
            <span className="flex-none text-green-500 bg-white mr-2 font-bold flex justify-center items-center">✓</span>
            Merch during events
        </li>
        <li className="mb-3 flex items-center">
             <span className="flex-none text-green-500 text-green-500 bg-white mr-2 font-bold flex justify-center items-center">✓</span>
            Interactive workshop
        </li>
    </ul>
        <div className="flex justify-center items-center p-5">
         <Button className="w-[120px] h-[50px] mx-1">Choose</Button>
        </div>
    </div>
    
    <div className="w-[400px] h-[600px]  bg-white mx-8 my-5 rounded-2xl border-2 border-red-400 shadow-lg flex flex-col">
    <div className="p-5">
        <h3 className="text-center font-bold text-2xl ">PLATINUM</h3>
        <div className="border-b-2 border-black w-[300px] mx-auto mb-5 mt-5"></div>
        <div className="flex flex-col justify-center items-center text-center my-4">
    <p className="text-6xl  mt-4 font-bold">12000</p>
    <span className="text-2xl font-medium">Yearly</span>
    </div>

    </div>
    <ul className="flex-1 p-5">
        <li className="mb-3 flex items-center">
            <span className="flex-none text-green-500 bg-white mr-2 font-bold flex justify-center items-center">✓</span>
            Newsletter
        </li>
        <li className="mb-3 flex items-center">
             <span className="flex-none text-green-500 bg-white mr-2 font-bold flex justify-center items-center">✓</span>
            Logo on our website
        </li>
        <li className="mb-3 flex items-center">
             <span className="flex-none text-green-500 bg-white mr-2 font-bold flex justify-center items-center">✓</span>
            Whole article for the company
        </li>
        <li className="mb-3 flex items-center">
             <span className="flex-none text-green-500 bg-white mr-2 font-bold flex justify-center items-center">✓</span>
            Merch during events
        </li>
        <li className="mb-3 flex items-center">
            <span className="flex-none text-green-500 bg-white mr-2 font-bold flex justify-center items-center">✓</span>
            Exclusive event for the company
        </li>
        <li className="mb-3 flex items-center">
             <span className="flex-none text-green-500 bg-white mr-2 font-bold flex justify-center items-center">✓</span>
            Banner on spot
        </li>
        <li className="mb-3 flex items-center">
             <span className="flex-none text-green-500 bg-white mr-2 font-bold flex justify-center items-center">✓</span>
            Post on Instagram
        </li>
        <li className="flex items-center">
             <span className="flex-none text-green-500 bg-white mr-2 font-bold flex justify-center items-center">✓</span>
            Post on Facebook
        </li>
    </ul>
        <div className="flex justify-center items-center">
         <Button className="w-[120px] h-[50px]">Choose</Button>
        </div>
    </div>
    </div>
          
    <div className="bg-red-400 p-6 sm:p-12 rounded-2xl shadow-lg mx-auto mt-[100px] mb-[50px] w-[1300px] flex flex-wrap justify-center items-center">
        <Input type="name" placeholder="Name" className="w-[400px] h-[40px] text-gray-700 bg-white mr-14"  />
        <Input type="email" placeholder="Email" className="w-[400px] h-[40px] text-gray-700 bg-white mr-14" />
        <Button className="w-[100px] h-[40px] mx-1">Send</Button>
    </div>

        <h1 className="text-2xl  mt-10 mb-4 text-center">MamaBuddy.com</h1>

    </div>
        </>
    )
}

export default PartnersPage;
