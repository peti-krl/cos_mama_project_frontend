import Mustela from "../../assets/sponsors/mustela.png";
import Hipoland from "../../assets/sponsors/hipoland.jpg";
import BalevBio from "../../assets/sponsors/balev_bio.png";
import Apteka from "../../assets/sponsors/rsz_sopharmacy.png";
import Aptamil from "../../assets/sponsors/aptamil.jpg";
import Attitude from "../../assets/sponsors/attitude.png";
import Bochko from "../../assets/sponsors/bochko-logo.png";
import Chipolino from "../../assets/sponsors/chipolino.png";
import Puffies from "../../assets/sponsors/pufies.png";
import RayaToys from "../../assets/sponsors/Raya-Toys.jpg";


const Sponsors = () => {
  return (
    <>
    <h1 className="flex items-center mt-8">Our partners</h1>

    <div className="grid gap-4 grid-cols-5 grid-rows-3 flex items-center pl-3 pr-3">
    <img src={Mustela} alt="Description of the image" />
    <img src={Hipoland} alt="Description of the image" />
    <img src={BalevBio} alt="Description of the image" />
    <img src={Apteka} alt="Description of the image" />
    <img src={Aptamil} alt="Description of the image" />
    <img src={Attitude} alt="Description of the image" />
    <img src={Bochko} alt="Description of the image" />
    <img src={Chipolino} alt="Description of the image" />
    <img src={Puffies} alt="Description of the image" />
    <img src={RayaToys} alt="Description of the image" />
    </div>
      
    </>
  )
}

export default Sponsors
