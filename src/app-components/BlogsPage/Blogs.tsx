import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  /*CardDescription,*/
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Events = () => {
  return (
    <>
      <div className="events ml-6">
        <p className="font-bold mt-5 mb-2 flex justify-center align-center flex space-x-4">
          Blogs
        </p>
        <p>
          <div className="flex items-center space-x-4">
            <Card className="w-[250px]">
              <CardHeader>
                <img src="src/public/images/blog-1.jpg" style={{ height: "110px" }} />
                <CardTitle>10 Fun Activities for Pregnant Moms for All Stages of Your Pregnancy</CardTitle>
              </CardHeader>
              <CardFooter className="flex justify-center">
                <Dialog>
                  <DialogTrigger><Button>Learn more</Button></DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                    <DialogTitle>Do you want to learn and read more about this blog?</DialogTitle>
                      <DialogDescription>
                      <a href="https://www.shopolivemill.com/theblog/navigating-social-events-during-pregnancy-a-guide-to-enjoying-gatherings" className="decoration-solid">Click here!</a>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
            <Card className="w-[250px]">
              <CardHeader>
                <img src="src/public/images/blog-2.png" style={{ height: "110px" }} />
                <CardTitle>How to make friends when you are a new mum or pregnant</CardTitle>
              </CardHeader>
              <CardFooter className="flex justify-center">
                <Dialog>
                  <DialogTrigger><Button>Learn more</Button></DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                    <DialogTitle>Do you want to learn and read more about this blog?</DialogTitle>
                      <DialogDescription>
                      <a href="https://www.shopolivemill.com/theblog/navigating-social-events-during-pregnancy-a-guide-to-enjoying-gatherings" className="decoration-solid">Click here!</a>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
            <Card className="w-[250px]">
              <CardHeader>
                <img src="src/public/images/blog-3.jpg" style={{ height: "110px" }} />
                <CardTitle>Hobbies While Pregnant: 14 New Low-Energy + Fun Ideas</CardTitle>
              </CardHeader>
              <CardFooter className="flex justify-center">
                <Dialog>
                  <DialogTrigger><Button>Learn more</Button></DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                    <DialogTitle>Do you want to learn and read more about this blog?</DialogTitle>
                      <DialogDescription>
                      <a href="https://www.shopolivemill.com/theblog/navigating-social-events-during-pregnancy-a-guide-to-enjoying-gatherings" className="decoration-solid">Click here!</a>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          </div>
        </p>
        <br></br>

        <p>
          <div className="flex items-center space-x-4">
            <Card className="w-[250px]">
              <CardHeader>
                <img src="src/public/images/blog-4.jpg" style={{ height: "110px" }} />
                <CardTitle>Women's experiences of social support during pregnancy: a qualitative systematic review</CardTitle>
              </CardHeader>
              <CardFooter className="flex justify-center">
                <Dialog>
                  <DialogTrigger><Button>Learn more</Button></DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                    <DialogTitle>Do you want to learn and read more about this blog?</DialogTitle>
                      <DialogDescription>
                      <a href="https://www.shopolivemill.com/theblog/navigating-social-events-during-pregnancy-a-guide-to-enjoying-gatherings" className="decoration-solid">Click here!</a>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
            <Card className="w-[250px]">
              <CardHeader>
                <img src="src/public/images/blog-5.jpeg" style={{ height: "110px" }} />
                <CardTitle>The importance of social support in pregnancy and ways to connect with others</CardTitle>
              </CardHeader>
              <CardFooter className="flex justify-center">
                <Dialog>
                  <DialogTrigger><Button>Learn more</Button></DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Do you want to learn and read more about this blog?</DialogTitle>
                      <DialogDescription>
                      <a href="https://www.shopolivemill.com/theblog/navigating-social-events-during-pregnancy-a-guide-to-enjoying-gatherings" className="decoration-solid">Click here!</a>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
            <Card className="w-[250px]">
              <CardHeader>
                <img src="src/public/images/blog-6.jpg" style={{ height: "110px" }} />
                <CardTitle>Navigating Social Events During Pregnancy: A Guide to Enjoying Gatherings</CardTitle>
              </CardHeader>
              <CardFooter className="flex justify-center">
                <Dialog>
                  <DialogTrigger><Button>Learn more</Button></DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Do you want to learn and read more about this blog?</DialogTitle>
                      <DialogDescription>
                      <a href="https://www.shopolivemill.com/theblog/navigating-social-events-during-pregnancy-a-guide-to-enjoying-gatherings" className="decoration-solid">Click here!</a>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
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

