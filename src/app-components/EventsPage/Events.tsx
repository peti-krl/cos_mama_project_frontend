import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  /*CardDescription,*/
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaLocationArrow } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

const Events = () => {
  return (
    <>
      <div className="events ml-6">
        <p className="font-bold mt-5 mb-2 flex justify-center align-center flex space-x-4">
          Upcoming events
        </p>
        <p>
          <div className="flex items-center space-x-4">
            <Card className="w-[250px]">
              <CardHeader>
                <img src="/event1.jpg" style={{ height: "110px" }} />
                <CardTitle>
                  Educational event - Breastfeeding Workshop
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaLocationArrow
                    style={{ marginRight: "8px", fontSize: "0.7rem" }}
                  />
                  <p className="text-sm">Korner Coworking</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaClock style={{ marginRight: "8px", fontSize: "0.7rem" }} />
                  <p className="text-sm"> 6pm - 7:00pm </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="mr-2">Register</Button>
                <Button variant="outline">Learn more</Button>
              </CardFooter>
            </Card>
            <Card className="w-[250px]">
              <CardHeader>
                <img src="/event2.jpg" style={{ height: "110px" }} />
                <CardTitle>Entertainment event - Mamma Yoga</CardTitle>
              </CardHeader>
              <CardContent>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaLocationArrow
                    style={{ marginRight: "8px", fontSize: "0.7rem" }}
                  />
                  <p className="text-sm">Yoga Vibe East</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaClock style={{ marginRight: "8px", fontSize: "0.7rem" }} />
                  <p className="text-sm"> 6pm - 7:20pm (workdays) </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="mr-2">Register</Button>
                <Button variant="outline">Learn more</Button>
              </CardFooter>
            </Card>
            <Card className="w-[250px]">
              <CardHeader>
                <img src="/event3.jpg" style={{ height: "110px" }} />
                <CardTitle>Networking event - DIY Mocktails</CardTitle>
              </CardHeader>
              <CardContent>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaLocationArrow
                    style={{ marginRight: "8px", fontSize: "0.7rem" }}
                  />
                  <p className="text-sm">Cafe 1920</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaClock style={{ marginRight: "8px", fontSize: "0.7rem" }} />
                  <p className="text-sm"> 6pm - 8pm (workdays) </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="mr-2">Register</Button>
                <Button variant="outline">Learn more</Button>
              </CardFooter>
            </Card>
          </div>
        </p>
        <br></br>

        <p>
          <div className="flex items-center space-x-4">
            <Card className="w-[250px]">
              <CardHeader>
                <img src="/event3.jpg" style={{ height: "110px" }} />
                <CardTitle>Networking event - DIY Mocktails</CardTitle>
              </CardHeader>
              <CardContent>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaLocationArrow
                    style={{ marginRight: "8px", fontSize: "0.7rem" }}
                  />
                  <p className="text-sm">Cafe 1920</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaClock style={{ marginRight: "8px", fontSize: "0.7rem" }} />
                  <p className="text-sm"> 6pm - 8pm (workdays) </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="mr-2">Register</Button>
                <Button variant="outline">Learn more</Button>
              </CardFooter>
            </Card>
            <Card className="w-[250px]">
              <CardHeader>
                <img src="/event3.jpg" style={{ height: "110px" }} />
                <CardTitle>Networking event - DIY Mocktails</CardTitle>
              </CardHeader>
              <CardContent>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaLocationArrow
                    style={{ marginRight: "8px", fontSize: "0.7rem" }}
                  />
                  <p className="text-sm">Cafe 1920</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaClock style={{ marginRight: "8px", fontSize: "0.7rem" }} />
                  <p className="text-sm"> 6pm - 8pm (workdays) </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="mr-2">Register</Button>
                <Button variant="outline">Learn more</Button>
              </CardFooter>
            </Card>
            <Card className="w-[250px]">
              <CardHeader>
                <img src="/event3.jpg" style={{ height: "110px" }} />
                <CardTitle>Networking event - DIY Mocktails</CardTitle>
              </CardHeader>
              <CardContent>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaLocationArrow
                    style={{ marginRight: "8px", fontSize: "0.7rem" }}
                  />
                  <p className="text-sm">Cafe 1920</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaClock style={{ marginRight: "8px", fontSize: "0.7rem" }} />
                  <p className="text-sm"> 6pm - 8pm (workdays) </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="mr-2">Register</Button>
                <Button variant="outline">Learn more</Button>
              </CardFooter>
            </Card>
          </div>
        </p>
      </div>
      <div className="flex justify-center align-center mt-2">
        <Button variant="outline">Load more</Button>
        
      </div>
    </>
  );
};

export default Events;
