import { useState } from "react";
import Layout from "./components/Layout/Layout";
import NavBar from "./components/NavBar/NavBar";
import { dataProfiles } from "./utils/utils";
import "./App.css";
import Profile from "./components/Profile/Profile";

const dataCompanies = dataProfiles.map((profile) => profile.company);

function App() {
  const [profile, setProfile] = useState(dataProfiles[0]);
  const [companies, setCompanies] = useState(dataCompanies);

  const handleProfile = (company) => {
    const profile = dataProfiles.find((profile) => profile.company === company);
    console.log(profile);
    setProfile(profile);
  };

  return (
    <Layout>
      <NavBar companies={companies} handleProfile={handleProfile} />
      <Profile {...profile} />
    </Layout>
  );
}

export default App;
