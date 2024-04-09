import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    /*CardDescription,
    CardFooter,*/
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { FaLocationArrow } from "react-icons/fa";
import { FaClock } from "react-icons/fa";


const BlogHomepage = () => {
    return (
        <>
            <div className='events'>
                <p className='font-bold mt-5 mb-2 flex justify-center align-center'>Upcoming events</p>
                <p>
                    <div className='inline flex flex row justify-items-center' >
                        <Card>
                            <CardHeader className='w-[280px]'>
                                <img src="/event1.jpg" style={{ height: '110px' }} />
                                <CardTitle>Educational event - Breastfeeding Workshop</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <FaLocationArrow style={{ marginRight: '8px', fontSize: '0.7rem' }} />
                                    <p className='text-sm'>Korner Coworking & Event space</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <FaClock style={{ marginRight: '8px', fontSize: '0.7rem' }} />
                                    <p className='text-sm'> 6pm - 7:00pm </p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className='w-[280px]'>
                            <CardHeader >
                                <img src="/event2.jpg" style={{ height: '110px' }} />
                                <CardTitle>Entertainment event - Mamma Yoga</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <FaLocationArrow style={{ marginRight: '8px', fontSize: '0.7rem' }} />
                                    <p className='text-sm'>Yoga Vibe East</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <FaClock style={{ marginRight: '8px', fontSize: '0.7rem' }} />
                                    <p className='text-sm'> 6pm - 7:20pm (workdays) </p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className='w-[280px]'>
                            <CardHeader >
                                <img src="/event3.jpg" style={{ height: '110px' }} />
                                <CardTitle>Networking event - DIY Mocktails</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <FaLocationArrow style={{ marginRight: '8px', fontSize: '0.7rem' }} />
                                    <p className='text-sm'>Cafe 1920</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <FaClock style={{ marginRight: '8px', fontSize: '0.7rem' }} />
                                    <p className='text-sm'> 6pm - 8pm (workdays) </p>
                                </div>

                            </CardContent>
                        </Card>
                    </div>
                </p>
                <div className="flex justify-center align-center mt-2">
                    <Button variant="outline">Load more</Button>

                </div>
            </div>
        </>
    )
}

export default BlogHomepage;
