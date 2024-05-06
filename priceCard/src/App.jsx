import Card from "./Cards/Card";

// component inside componet 
export function ChildComp() {
  return (
    <div>
      <h1>Hello child</h1>
    </div>
  )
}

function App() {

  const priceCard = [
    {
      name: "FREE",
      rate: "$0/month",
      userCount: "Single User",
      storage: "50GB Storage",
      access: "Community Access",
      publicProjects: "Unlimited Public Projects",
      privateProjects: "Unlimited Private Projects",
      support: "Deticated Phone Support",
      domain: "Free Subdomain",
      reports: "Monthly Status Reports",
      icon1: "bi bi-check",
      icon2: "bi bi-x"
    },
    {
      name: "PLUS",
      rate: "$9/month",
      userCount: "5 Users",
      storage: "50GB Storage",
      access: "Community Access",
      publicProjects: "Unlimited Public Projects",
      privateProjects: "Unlimited Private Projects",
      support: "Deticated Phone Support",
      domain: "Free Subdomain",
      reports: "Monthly Status Reports",
      icon1: "bi bi-check",
      icon2: "bi bi-x"
    },
    {
      name: "PRO",
      rate: "$49/month",
      userCount: "Single user",
      storage: "50GB Storage",
      access: "Community Access",
      publicProjects: "Unlimited Public Projects",
      privateProjects: "Unlimited Private Projects",
      support: "Deticated Phone Support",
      domain: "Free Subdomain",
      reports: "Monthly Status Reports",
      icon1: "bi bi-check",
      icon2: "bi bi-x"
    },
  ]

  return (
    <div className="container-fluid p-5">
      <Card cards={priceCard} />
    </div>
  )
}

export default App
