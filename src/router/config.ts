const routes = [
  {
    path: [ "/home"],
    exact: true,
    component: "Home", // This should be '../pages/Home'
  },
  {
    path: "/about",
    exact: true,
    component: "About", // This should be '../pages/About'
  },
  {
    path: "/services",
    exact: true,
    component: "Services", // This should be '../pages/Services'
  },
  {
    path: "/products",
    exact: true,
    component: "Products", // This should be '../pages/Services'
  },
  {
    path: "/structuralServices",
    exact: true,
    component: "StructuralServices", // This should be '../pages/Services'
  },
  {
    path: "/fabrication",
    exact: true,
    component: "Fabrication", // This should be '../pages/Services'
  },

  {
    path: "/industrialGoodAndMaterialSupply",
    exact: true,
    component: "IndustrialGoodAndMaterialSupply", // This should be '../pages/Services'
  },

  {
    path: "/valveAndPump",
    exact: true,
    component: "ValveAndPump", // This should be '../pages/About'
  },
  
  {
    path: "/maintenanceServices",
    exact: true,
    component: "MaintenanceServices", // This should be '../pages/Services'
  },
  {
    path: "/hydraulicEquipment",
    exact: true,
    component: "HydraulicEquipmentPage", // This should be '../pages/Services'
  },
  {
    path: "/IndustrialMaterials",
    exact: true,
    component: "IndustrialMaterials", // This should be '../pages/Services'
  },
  {
    path: "/automationSolutions",
    exact: true,
    component: "AutomationSolutions", // This should be '../pages/Services'
  },
  
 
];

export default routes;
