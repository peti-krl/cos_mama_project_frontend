import React, { useState } from "react";

// Import your components
import { ProfileBreadcrumbContainer } from "./ProfileBreadcrumbContainer";
import { SectionsList } from "./SectionsList";
import { Identification } from "./Identification";
import { Button } from "@/components/ui/button";

export const Profile = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const renderSelectedTab = () => {
    switch(selectedTab) {
      case 0:
        return <PersonalData />
      case 1:
        return <Subscription />
      case 2:
        return <Payment />
      case 3:
        return <Discounts />
      case 4:
        return <ContactUs />
    }
  }

  return (
    <>
      <div className="mt-5">
      <div className="inline-block mr-4">
          <SectionsList setSelectedTab={setSelectedTab} />
      </div>
        {renderSelectedTab()}
      </div>
    </>
  );
};

const PersonalData = () => {
  return <>
    <div className="inline-block mr-4">
          <Identification placeholder="Jenny Smith" title="Name"/>
          <Identification placeholder="(+359) 876 987 234" title="Phone"/>
          <Identification placeholder="Blagoevgrad, Svoboda Buchvarova 7" title="Address"/>
        </div>
        <div className="inline-block mr-4">
          <Identification placeholder="man210@aubg.edu" title="E-mail"/>
          <Identification placeholder="*******" title="Password"/>
          <Identification placeholder="2700" title="Post code"/>
        </div>
  </>
}

const Subscription = () => {
  return <>
  <div>
    <p>Current subscription</p>
    <Button>Update Plan</Button>
  </div>
  </>
}

const Payment = () => {
  return 
  <>
     <div className="inline-block mr-4">
          <Identification placeholder="**********" title="Creditcard"/>
          <Identification placeholder="Account number: ****" title="PayPay"/>
      </div>
  </>
}
