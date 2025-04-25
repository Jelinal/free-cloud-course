import React, { useState } from 'react';

const SidebarAzu = () => {
    const [filters, setFilters] = useState({
        Products: [],
        Roles: [],
        Level: '',
        Types: [],
    });

    const [searchQuery, setSearchQuery] = useState('');
    const [openSections, setOpenSections] = useState({
        Products: false,
        ".NET": false,
        "Adaptive Cards": false,
        "ASP.NET": false,
        "Azure": false,
        "Bing": false,
        "Clarity": false,
        "Consumer": false,
        "Dynamics 365": false,
        "entra": false,
        "Excel": false,
        "fabric": false,
        "GitHub": false,
        "HoloLens": false,
        "Industry Solutions": false,
        "intune": false,
        "m365-ems-advanced-threat-analytics": false,
        "Microsoft 365": false,
        "Microsoft Authentication Library": false,
        "Microsoft Edge": false,
        "Microsoft Endpoint Manager": false,
        "Microsoft Forms": false,
        "Microsoft Graph": false,
        "Microsoft MakeCode": false,
        "Microsoft Power Platform": false,
        "Microsoft Priva": false,
        "Microsoft Sentinel": false,
        "Microsoft Stream": false,
        "Microsoft Teams": false,
        "Microsoft Teams Phone": false,
        "Microsoft Viva": false,
        "microsoft-365-copilot": false,
        "microsoft-365-copilot-chat": false,
        "microsoft-defender": false,
        "microsoft-purview": false,
        "microsoft-whiteboard": false,
        "Minecraft": false,
        "Mixed Reality Toolkit": false,
        "ms-copilot": false,
        "ms-website": false,
        "Office": false,
        "Office 365": false,
        "office-exchange": false,
        "OneDrive": false,
        "OneNote": false,
        "Outlook": false,
        "playwright": false,
        "PowerPoint": false,
        "Quantum Development Kit": false,
        "SharePoint": false,
        "SQL Server": false,
        "Surface": false,
        "Sway": false,
        "sysinternals": false,
        "Visual Studio": false,
        "Visual Studio App Center": false,
        "Visual Studio Code": false,
        "Windows": false,
        "Windows App SDK": false,
        "Windows Mixed Reality": false,
        "Windows Server": false,
        "Word": false,
        "Xbox": false,

        Roles: false,
        Level: false,
        Types: false,
    });

    const products = [
        { name: ".NET", subFields: ["Blazor", "dotnet-aspire", "dotnet-maui", "Orleans", "Entity Framework Core"] },
        { name: "Adaptive Cards", subFields: [] },
        { name: "ASP.NET", subFields: ["ASP.NET Core"] },
        {
            name: "Azure", subFields: ["Azure AD Graph API", "Azure Advisor", "API Management", "App Configuration",
                "App Service", "Application Gateway", "Arc", "Artifacts", "Automation", "Backup",
                "Bastion", "Batch", "Blob Storage", "Blueprints", "Boards", "Bot Service",
                "Cache for Redis", "Content Delivery Network", "CLIs", "Cloud Services", "Cloud Shell",
                "Cognitive Search", "Communication Services", "Computer Vision", "Azure Container Apps",
                "Container Instances", "Container Registry", "Cosmos DB", "Cost Management",
                "Custom Vision", "CycleCloud", "Data Box Family", "Data Explorer", "Data Factory",
                "Data Lake", "Data Lake Storage", "Data Science Virtual Machines", "Data Share",
                "azure-data-studio", "Database Migration service", "Database for MySQL",
                "Database for PostgreSQL", "Databricks", "DDos Protection", "Dedicated Host",
                "Dedicated HSM", "Azure DevOps", "Digital Twins", "Disk Encryption", "Disk Storage",
                "DNS", "Event Grid", "Event Hubs", "ExpressRoute", "Face", "Files", "Firewall",
                "Firewall Manager", "Front Door", "Functions", "HDInsight", "IoT", "IoT Central",
                "IoT Edge", "IoT Hub", "Key Vault", "Kubernetes Service", "Lighthouse",
                "Load Balancer", "azure-load-testing", "Log Analytics", "Logic Apps",
                "Machine Learning", "Machine Learning designer", "Managed Disks",
                "azure-managed-lustre", "Maps", "Migrate", "Monitor", "Azure NetApp Files",
                "Network Watcher", "azure-openai", "Pipelines", "Policy", "Azure Portal",
                "Azure PowerShell", "Private Link", "Quantum", "Queue Storage",
                "Azure Role-based access control", "Red Hat OpenShift", "Remote Rendering",
                "Repos", "Resource Graph", "Azure Resource Manager",
                "SAP HANA on Azure Large Instances", "SDKs", "Service Bus", "Service Fabric",
                "Service Health", "SignalR Service", "Site Recovery", "Azure US Government",
                "Speech", "azure-spring-apps", "SQL Database", "SQL Edge", "SQL Managed Instance",
                "SQL Virtual Machines", "SQL Server on Virtual Machines", "Azure Stack",
                "Azure Stack Hub", "Storage", "Storage Accounts", "Storage Explorer",
                "Stream Analytics", "Synapse Analytics", "Table Storage", "Test Plans",
                "Traffic Manager", "Translator", "Translator Speech", "Translator Text",
                "Video Indexer", "Azure Virtual Desktop", "Virtual Machines",
                "Windows Virtual Machines", "Virtual Network", "Virtual WAN",
                "Virtual Machine Scale Sets", "Azure VMware Solution", "VPN Gateway",
                "Web Application Firewall", "content-safety", "document-intelligence",
                "language-service", "static-web-apps", "update-manager"]
        },
        { name: "Bing", subFields: [] },
        { name: "Clarity", subFields: [] },
        { name: "Consumer", subFields: [] },
        {
            name: "Dynamics 365", subFields: [
                "customer-insights-data",
                "customer-insights-journeys",
                "Customer Voice",
                "Business Central",
                "Commerce",
                "dynamics-contact-center",
                "Customer Engagement apps",
                "Customer Service",
                "Field Service",
                "Finance",
                "Guides",
                "Human Resources",
                "Intelligent Order Management",
                "Project Operations",
                "Remote Assist",
                "Sales",
                "Supply Chain Management"]
        },
        {
            name: "entra", subFields: [
                "entra-external-id",
                "entra-id",
                "entra-id-protection",
                "entra-identity-governance",
                "entra-permissions-management",
                "entra-verified-id",
                "entra-workload-identities"]
        },
        { name: "Excel", subFields: [] },
        { name: "fabric", subFields: [] },
        { name: "GitHub", subFields: [] },
        { name: "HoloLens", subFields: [] },
        {
            name: "Industry Solutions", subFields: [
                "Microsoft Cloud for Financial Services",
                "Microsoft Cloud for Healthcare",
                "Microsoft Cloud for Manufacturing",
                "Microsoft Cloud for Nonprofit",
                "Microsoft Cloud for Retail",
                "mscloud-sovereignty",
                "mscloud-sustainability"
            ]
        },
        { name: "Internet Explorer", subFields: [] },
        { name: "intune", subFields: [] },
        { name: "m365-ems-advanced-threat-analytics", subFields: [] },
        {
            name: "Microsoft 365", subFields: ["m365-apps",
                "Microsoft 365 Apps Admin Center",
                "m365-education",
                "Microsoft 365 Security Center"]
        },
        {
            name: "Microsoft Authentication Library", subFields: [
                "Microsoft Identity Web Authentication Library",
                "Microsoft Authentication Library for Java"]
        },
        { name: "Microsoft Edge", subFields: [] },
        { name: "Microsoft Endpoint Manager", subFields: ["Microsoft Deployment Toolkit"] },
        { name: "Microsoft Forms", subFields: [] },
        { name: "Microsoft MakeCode", subFields: [] },
        {
            name: "Microsoft Power Platform", subFields: [
                "AI Builder",
                "dataverse",
                "microsoft-copilot-studio",
                "Power Apps",
                "Power Automate",
                "Power BI",
                "power-pages",
                "Power Query"
            ]
        },
        { name: "Microsoft Priva", subFields: [] },
        { name: "Microsoft Sentinel", subFields: [] },
        { name: "Microsoft Stream", subFields: [] },
        { name: "Microsoft Teams", subFields: [] },
        { name: "Microsoft Teams Phone", subFields: [] },
        {
            name: "Microsoft Viva", subFields: [
                "Viva Connections",
                "viva-engage",
                "viva-glint",
                "Viva Insights",
                "Viva Learning",
                "Viva Topics"
            ]
        },
        { name: "microsoft-365-copilot", subFields: [] },
        { name: "microsoft-365-copilot-chat", subFields: [] },
        { name: "microsoft-defender", subFields: [] },
        { name: "microsoft-purview", subFields: [] },
        { name: "microsoft-whiteboard", subFields: [] },
        { name: "Minecraft", subFields: [] },
        { name: "Mixed Reality Toolkit", subFields: [] },
        { name: "ms-copilot", subFields: [] },
        {
            name: "ms-website", subFields: [
                "appsource",
                "Azure Marketplace",
                "microsoft-education-center"
            ]
        },
        { name: "Office", subFields: ["Office Add-ins"] },
        { name: "Office 365", subFields: [] },
        {
            name: "office-exchange", subFields: [
                "Microsoft Exchange Online",
                "Exchange Server"]
        },
        { name: "OneDrive", subFields: [] },
        { name: "OneNote", subFields: [] },
        { name: "Outlook", subFields: [] },
        { name: "playwright", subFields: [] },
        { name: "PowerPoint", subFields: [] },
        { name: "Quantum Development Kit", subFields: [] },
        { name: "SharePoint", subFields: ["SharePoint Framework"] },
        { name: "SQL Server", subFields: [] },
        { name: "Surface", subFields: [] },
        { name: "Sway", subFields: [] },
        { name: "sysinternals", subFields: [] },
        { name: "Visual Studio", subFields: ["Visual Studio IDE"] },
        { name: "Visual Studio App Center", subFields: [] },
        { name: "Visual Studio Code", subFields: [] },
        {
            name: "Windows", subFields: [
                "Active Directory",
                "Windows 10",
                "windows-11",
                "windows-365",
                "Windows Autopilot",
                "Windows Forms",
                "Windows Security",
                "Windows Presentation Foundation (WPF)",
                "winui"
            ]},
        { name: "Windows App SDK", subFields: [] },
        { name: "Windows Mixed Reality", subFields: [] },
        { name: "Windows Server", subFields: [] },
        { name: "Word", subFields: [] },
        { name: "Xbox", subFields: [] },


    ];
    const roles = ["Administrator",
        "AI Edge Engineer",
        "AI Engineer",
        "Auditor",
        "Business Analyst",
        "Business Owner",
        "Business User",
        "Data Analyst",
        "Data Engineer",
        "Data Scientist",
        "Database Administrator",
        "Developer",
        "DevOps Engineer",
        "Functional Consultant",
        "Higher Education Educator",
        "Identity And Access Administrator",
        "Information Protection Administrator",
        "K-12 Educator",
        "App Maker",
        "Network Engineer",
        "Parent/Guardian",
        "Privacy Manager",
        "Risk Practitioner",
        "School Leader",
        "Security Engineer",
        "Security Operations Analyst",
        "Service Adoption Specialist",
        "Solution Architect",
        "startup-founder",
        "Student",
        "Support Engineer",
        "technical-writer",
        "Technology Manager"];
    const levels = ['Beginner', 'Intermediate', 'Advanced'];
    const types = ['Learning Path', 'Modules'];

    const toggleSection = (section) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const clearAllFilters = () => {
        setFilters({
            Products: [],
            Roles: [],
            Level: '',
            Types: [],
        });
        setSearchQuery('');
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleCheckboxChange = (e, product) => {
        const { value, checked } = e.target;
        setFilters((prev) => {
            const updatedProducts = checked
                ? [...prev.Products, value]
                : prev.Products.filter((item) => item !== value);
            return { ...prev, Products: updatedProducts };
        });
    };

    const handleFilterChange = (e, category) => {
        const { value, checked } = e.target;
        setFilters((prev) => {
            const updatedCategory = checked
                ? [...prev[category], value]
                : prev[category].filter((item) => item !== value);
            return { ...prev, [category]: updatedCategory };
        });
    };

    return (
        <div className="w-72 p-6 bg-white shadow-md font-sans text-sm space-y-2">
            {/* Filter Header */}
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold">Filter</h2>
                <button
                    onClick={clearAllFilters}
                    className="text-blue-600 hover:underline text-sm"
                >
                    Clear All
                </button>
            </div>
            <div className="border-b border-black mb-12" />

            {/*Search bar */}
            <div className="relative">
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full pl-8 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                    placeholder="Search services..."
                />
                <svg
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.15 6.15z"
                    />
                </svg>
            </div>


            {/* Products Filter */}
            <div className="w-72 p bg-white font-sans text-sm space-y-6">
                {/* Products Section */}
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold mb-2">Products</h3>
                        <button
                            onClick={() => toggleSection("Products")}
                            className="text-blue-600 text-xl pr-12"
                        >
                            {openSections.Products ? "-" : "+"}
                        </button>
                    </div>
                    {openSections.Products && (
                        <div className="space-y-1">
                            {products.map((product) => (
                                <div key={product.name} className="space-y-1">
                                    <div className="flex justify-between items-center pl-2">
                                        <h4 className="font-semibold">{product.name}</h4>
                                        <button
                                            onClick={() => toggleSection(product.name)}
                                            className="text-blue-600 text-xl pr-11"
                                        >
                                            {openSections[product.name] ? "▼" : "▶"}
                                        </button>
                                    </div>
                                    {openSections[product.name] && (
                                        <div className="space-y-1 pl-5">
                                            {product.subFields.map((subField) => (
                                                <label key={subField} className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        value={subField}
                                                        checked={filters.Products.includes(subField)}
                                                        onChange={(e) => handleCheckboxChange(e, product.name)}
                                                        className="mr-2"
                                                    />
                                                    {subField}
                                                </label>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Roles Filter */}
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <h3 className="font-semibold mb-2">Roles</h3>
                    <button
                        onClick={() => toggleSection('Roles')}
                        className="text-blue-600 text-xl"
                    >
                        {openSections.Roles ? '-' : '+'}
                    </button>
                </div>
                {openSections.Roles && (
                    <div className="space-y-1">
                        {roles.map((role) => (
                            <label key={role} className="flex items-center">
                                <input
                                    type="checkbox"
                                    value={role}
                                    checked={filters.Roles.includes(role)}
                                    onChange={(e) => handleFilterChange(e, 'Roles')}
                                    className="mr-2"
                                />
                                {role}
                            </label>
                        ))}
                    </div>
                )}
            </div>

            {/* Level Filter */}
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <h3 className="font-semibold mb-2">Level</h3>
                    <button
                        onClick={() => toggleSection('Level')}
                        className="text-blue-600 text-xl"
                    >
                        {openSections.Level ? '-' : '+'}
                    </button>
                </div>
                {openSections.Level && (
                    <div className="space-y-1">
                        {levels.map((level) => (
                            <label key={level} className="flex items-center">
                                <input
                                    type="radio"
                                    value={level}
                                    checked={filters.Level === level}
                                    onChange={(e) => setFilters((prev) => ({ ...prev, Level: level }))}
                                    className="mr-2"
                                />
                                {level}
                            </label>
                        ))}
                    </div>
                )}
            </div>

            {/* Types Filter */}
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <h3 className="font-semibold mb-2">Types</h3>
                    <button
                        onClick={() => toggleSection('Types')}
                        className="text-blue-600 text-xl"
                    >
                        {openSections.Types ? '-' : '+'}
                    </button>
                </div>
                {openSections.Types && (
                    <div className="space-y-1">
                        {types.map((type) => (
                            <label key={type} className="flex items-center">
                                <input
                                    type="checkbox"
                                    value={type}
                                    checked={filters.Types.includes(type)}
                                    onChange={(e) => handleFilterChange(e, 'Types')}
                                    className="mr-2"
                                />
                                {type}
                            </label>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SidebarAzu;
