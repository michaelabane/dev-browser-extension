export const SELECT_OPTIONS = [
  { value: "random", label: "Random" },
  { value: "healthcare", label: "Healthcare" },
  { value: "agriculture", label: "Agriculture" },
  { value: "environment", label: "Environment" },
  { value: "energy", label: "Energy" },
  { value: "space", label: "Space" },
  { value: "defense", label: "Defense" },
  { value: "education", label: "Education" },
  { value: "transportation", label: "Transportation" },
  { value: "ocean_sciences", label: "Ocean Sciences" },
  { value: "measurement_techniques", label: "Measurement Techniques" },
  { value: "homeland_security", label: "Homeland Security" }
]

const HEALTHCARE =
  "In healthcare, nanobot-assisted surgery represents a groundbreaking advancement. These microscopic robots, when injected into the bloodstream, can perform precise surgical procedures at a cellular level, reducing the need for invasive surgeries. They can target tumor removal, repair damaged tissues, and deliver medication directly to affected areas, minimizing recovery times and enhancing treatment effectiveness. This innovation holds the potential to revolutionize patient outcomes, offering a less intrusive, more accurate, and highly personalized approach to medical interventions."
const AGRICULTURE =
  "In agriculture, AI-powered crop optimization systems are transforming food production. By integrating real-time data from drones, satellites, and ground sensors, these systems analyze soil health, weather patterns, and crop health to provide precise recommendations for irrigation, fertilization, and pest control. Farmers can optimize resource usage, improve yields, and reduce environmental impact, making agriculture more sustainable and productive. This technology empowers farmers to make informed decisions, adapting to changing conditions and ensuring food security in the face of climate change."
const ENVIRONMENT =
  "In the environmental sector, atmospheric water generation units present an innovative solution to water scarcity. These devices extract water vapor from the air, even in arid regions, providing a sustainable and accessible source of fresh water. Powered by renewable energy, they can operate in remote areas, reducing reliance on dwindling groundwater sources and minimizing environmental disruption. This technology offers a promising avenue for addressing global water shortages, supporting communities, and fostering resilience against the impacts of climate change."
const ENERGY =
  "In the energy sector, quantum dot solar cells are a cutting-edge innovation. These cells utilize nanoscale semiconductor particles to capture a broader spectrum of sunlight compared to traditional solar panels. This technology significantly enhances the efficiency and flexibility of solar energy harvesting, allowing for transparent solar panels that can be integrated into windows or screens. With their potential for higher energy conversion rates and lower manufacturing costs, quantum dot solar cells could revolutionize renewable energy, making solar power more accessible and sustainable, and reducing our reliance on fossil fuels."
const SPACE =
  "In space exploration, self-healing spacecraft materials mark a significant breakthrough. These materials can autonomously repair damage caused by micro-meteoroids or space debris, extending the lifespan of spacecraft without the need for external intervention. Incorporating a network of microcapsules filled with a healing agent, these materials can seal cracks or holes, maintaining the structural integrity of spacecraft in the harsh space environment. This advancement could dramatically improve the safety and reliability of long-duration space missions, paving the way for deeper space exploration."
const DEFENSE =
  "In defense, directed energy weapon systems represent a futuristic yet increasingly tangible technology. These systems use concentrated electromagnetic energy, such as lasers or microwaves, to target and neutralize threats at the speed of light. With the capability to precisely disable enemy drones, missiles, or even incoming artillery, directed energy weapons offer a new level of precision and speed in conflict scenarios. They also reduce the risks of collateral damage and provide a cost-effective alternative to traditional ammunition, heralding a new era in military strategy and defense capabilities."
const EDUCATION =
  "In education, augmented reality (AR) learning environments are revolutionizing the way students engage with information. By overlaying digital content onto the real world, AR can turn a traditional classroom into an interactive learning experience. Students can explore the human body in 3D, walk through historical sites, or visualize complex mathematical concepts, enhancing understanding and retention. This technology fosters a more immersive, personalized, and accessible educational experience, catering to diverse learning styles and making knowledge more engaging and impactful for students of all ages."
const TRANSPORTATION =
  "In transportation, autonomous electric cargo ships are setting a new standard for maritime trade. These vessels, powered by clean energy and guided by advanced navigation systems, can traverse oceans without a crew, drastically reducing the carbon footprint and operational costs of shipping. They're designed to optimize routes for efficiency and safety, decreasing the likelihood of maritime accidents and environmental hazards. This innovation not only promises a greener and more efficient future for global trade but also paves the way for advancements in autonomous transportation technologies across various sectors."
const OCEAN_SCIENCES =
  "In ocean sciences, deep-sea exploration drones are unlocking the mysteries of the ocean depths. Equipped with cutting-edge sensors and AI, these drones can navigate the most inaccessible regions of the ocean, collecting data on marine biodiversity, geological structures, and underwater ecosystems. This technology provides crucial insights into climate change, helps in the discovery of new species, and enables the monitoring of underwater seismic activity. By expanding our understanding of the deep sea, these drones are vital tools for conservation, resource management, and advancing marine science."
const MEASUREMENT_TECHNIQUES =
  "In the field of new measurement techniques, quantum sensing stands out as a revolutionary approach. Utilizing the principles of quantum mechanics, these sensors achieve unprecedented levels of sensitivity and accuracy, far surpassing traditional measurement tools. Quantum sensors can detect minute changes in magnetic fields, gravity, and even time, which has profound implications for various fields, including navigation, geological exploration, and healthcare. By exploiting the characteristics of quantum entanglement and superposition, these sensors open new frontiers in precise measurement, enhancing our ability to observe and interact with the world at a fundamental level."
const HOMELAND_SECURITY =
  "In homeland security, AI-enhanced biometric screening is a significant advancement, bolstering the effectiveness and efficiency of identity verification processes. Integrating AI with biometric technologies like facial recognition, fingerprint analysis, and iris scanning enhances the ability to quickly and accurately identify individuals. This integration is crucial for border control, airport security, and access to sensitive areas, where rapid yet accurate identification is paramount. The technology also incorporates machine learning algorithms to continuously improve accuracy and adapt to new threats, representing a significant step forward in ensuring the safety and security of nations in an increasingly digital and interconnected world."

export const TECHNOLOGIES_BY_FIELD = {
  healthcare: HEALTHCARE,
  agriculture: AGRICULTURE,
  environment: ENVIRONMENT,
  energy: ENERGY,
  space: SPACE,
  defense: DEFENSE,
  education: EDUCATION,
  transportation: TRANSPORTATION,
  ocean_sciences: OCEAN_SCIENCES,
  measurement_techniques: MEASUREMENT_TECHNIQUES,
  homeland_security: HOMELAND_SECURITY
}

const healthcareProjectTitle = "Revolutionizing Surgery with Nanobots"
const agricultureProjectTitle = "AI-Driven Crop Optimization Revolution"
const environmentProjectTitle = "Innovative Atmospheric Water Generation"
const energyProjectTitle = "Quantum Dot Solar Cell Breakthrough"
const spaceProjectTitle = "Autonomous Self-Healing Spacecraft Materials"
const defenseProjectTitle = "Next-Gen Directed Energy Weapons"
const educationProjectTitle = "Immersive AR Learning Experiences"
const transportationProjectTitle = "Autonomous Electric Cargo Ships"
const oceanSciencesProjectTitle = "Deep-Sea Exploration with AI Drones"
const newMeasurementTechniquesProjectTitle = "Quantum Sensing Innovations"
const homelandSecurityProjectTitle = "Advanced AI Biometric Screening"

export const PROJECT_TITLES_BY_FIELD = {
  healthcare: healthcareProjectTitle,
  agriculture: agricultureProjectTitle,
  environment: environmentProjectTitle,
  energy: energyProjectTitle,
  space: spaceProjectTitle,
  defense: defenseProjectTitle,
  education: educationProjectTitle,
  transportation: transportationProjectTitle,
  ocean_sciences: oceanSciencesProjectTitle,
  measurement_techniques: newMeasurementTechniquesProjectTitle,
  homeland_security: homelandSecurityProjectTitle
}

export const KEYWORD_PHRASES = [
  "Quantum computing applications",
  "Renewable energy sources",
  "Machine learning algorithms",
  "CRISPR gene editing",
  "Nanotechnology advancements",
  "Artificial intelligence ethics",
  "Aerospace engineering breakthroughs",
  "Cybersecurity threat analysis",
  "Biometric authentication technology",
  "Autonomous vehicle technology",
  "Blockchain in healthcare",
  "Virtual reality training",
  "Robotics in surgery",
  "Climate change modeling",
  "Data mining techniques",
  "Smart grid technology",
  "Synthetic biology applications",
  "Photonics and optoelectronics",
  "Deep learning in diagnostics",
  "Sustainable urban planning",
  "Neuroinformatics research",
  "Space exploration innovations",
  "Wireless power transfer",
  "Environmental DNA analysis",
  "3D printing in construction"
]

export const COMPANY_BIOGRAPHIES = [
  "Avalon AI leverages cutting-edge artificial intelligence to revolutionize the healthcare industry by providing predictive analytics for early diagnosis of chronic diseases. By integrating AI with medical imaging, Avalon AI enables healthcare professionals to detect conditions like cancer at their nascent stages, significantly improving patient outcomes while reducing healthcare costs. Their innovative approach combines deep learning and diagnostic expertise to offer a groundbreaking tool in medical diagnostics.",

  "GreenSynth specializes in sustainable chemical manufacturing, utilizing advanced biotechnology to create eco-friendly alternatives to traditional petrochemical products. Their innovative process harnesses the power of microorganisms to convert renewable resources into high-quality bioplastics and biochemicals, reducing the carbon footprint of the chemical industry. GreenSynth's commitment to sustainability and innovation positions them as a leader in green chemistry, helping industries transition to more environmentally responsible practices.",

  "QuantumNet is a pioneer in quantum computing, offering cloud-based quantum computing services to businesses and researchers. Their state-of-the-art quantum processors provide unparalleled computational power, enabling users to tackle complex problems in optimization, cryptography, and material science. QuantumNet's platform is designed to be user-friendly, making quantum computing accessible to a broader audience and accelerating innovation across various sectors.",

  "SkyEye Innovations is revolutionizing the field of remote sensing with their fleet of advanced drones equipped with AI-powered analysis tools. Their technology provides real-time, high-resolution data for agriculture, environmental monitoring, and urban planning, enabling precise decision-making and resource management. SkyEye's commitment to innovation and sustainability is driving advancements in data collection and analysis, empowering industries to make more informed and impactful choices.",

  "NanoMed is a trailblazer in nanotechnology, developing targeted drug delivery systems that improve the efficacy and reduce the side effects of treatments. Their platform utilizes nanoscale carriers to deliver therapeutics directly to diseased cells, offering a new level of precision in medicine. NanoMed's groundbreaking approach has the potential to transform treatment protocols for a range of conditions, making healthcare more personalized and effective.",

  "EcoCharge is at the forefront of energy innovation, creating efficient, sustainable battery solutions for the renewable energy sector. Their cutting-edge batteries are designed to store solar and wind energy, enabling a more reliable and consistent power supply. EcoCharge's technology supports the transition to green energy, contributing to a reduction in carbon emissions and fostering a sustainable future.",

  "DataDive specializes in big data analytics, providing businesses with powerful insights to drive decision-making. Their platform employs advanced machine learning algorithms to analyze vast datasets, uncovering trends and patterns that can inform strategy and optimize operations. DataDive's services empower companies to harness the full potential of their data, driving growth and efficiency in an increasingly digital world.",

  "RoboBuild is transforming the construction industry with their autonomous construction robots. These robots increase efficiency and safety on construction sites, performing tasks from material handling to assembly. RoboBuild's innovative approach reduces labor costs and project timelines, while also improving worker safety and quality control in construction projects.",

  "AeroSpaceX is a dynamic startup focusing on developing sustainable propulsion technologies for space exploration. Their eco-friendly rocket engines aim to minimize the environmental impact of space launches, using novel fuel sources and advanced engineering to reduce emissions and waste. AeroSpaceX's commitment to sustainability and innovation is paving the way for cleaner, more responsible space travel.",

  "CyberSecure is a cutting-edge cybersecurity firm that provides advanced protection for digital assets and IT infrastructure. Using machine learning and AI, they offer real-time threat detection and response, safeguarding businesses from evolving cyber threats. CyberSecure's proactive approach ensures that companies can operate confidently in a digital landscape, protecting their data, reputation, and bottom line."
]
