const ksSecondSemComputer = [
  {
    id: "computer-second-basicelectronics",
    title: "Basic Electronics",
    objective:
      "To understand the language of electronics, elements and their functionality, basic understanding of analog systems and their applications, basic understanding of digital systems and their applications.",
    chapters: [
      {
        title: "Basic Circuits Concepts (4 hours)",
        topics: [
          "Passive components: Resistance, Inductance, Capacitance; series, parallel combinations; Kirchhoff's law: Voltage, Current; Linearity",
          "Signal sources: Voltage and Current sources; Non-ideal sources; Representation under assumption of Linearity; controlled sources: VCVS, CCVS, VCCS, CCCS; concept of Gain, Transconductance, Transimpedance",
          "Superposition theorem, Thevenin's theorem, Norton's theorem",
          "Introduction to Filter",
        ],
      },
      {
        title: "Diodes (7 hours)",
        topics: [
          "Semiconductor Diode Characteristics",
          "Modeling the Semiconductor Diode",
          "Diode circuits: Clipper; Clamper circuits",
          "Zener diode, LED, Photodiode, Varacters diode, Tunnel diodes",
          "DC power supply: Rectifier; Half wave, Full wave(center-tapped, bridge), Zener-regulated power supply",
        ],
      },
      {
        title: "Transistor (4 hours)",
        topics: [
          "BJT configuration and biasing, small and large signal model",
          "T and µ model",
          "Concept of Differential amplifier using BJT",
          "BJT switch and Logic circuits",
          "Construction and working principle of MOSFET and CMOS",
          "MOSFET as logic circuits",
        ],
      },
      {
        title: "The Operational Amplifier and Oscillator(7 hours)",
        topics: [
          "Basic model; Virtual ground concept; Inverting Amplifier, Non-inverting Amplifier, Integrator, Differentiator,Ssumming Amplifier and their applications",
          "Basic feedback theory; positive and negative feedback; concept of stability; Oscillator",
          "Waveform generator using Op-Amp for Square Wave, Triangular Wave, Wien Bridge Oscillator for sinusoidal waveform",
        ],
      },
      {
        title: "Communication System (4 hours)",
        topics: [
          "Introduction",
          "Wired and Wireless Communication system",
          "EMW and propagation, Antenna, Broadcasting and Communication",
          "Internet/Intranet",
          "Optical fiber",
        ],
      },
      {
        title: "Digital Electronics (11 hours)",
        topics: [
          "Number systems, Binary arithmetic",
          "Logic gates: OR, NOT, AND, NOR, NAND, XOR, XNOR gate; Truth tables",
          "Multiplexers, Demux, Encoder, Decoder",
          "Logic Function Representation",
          "Combinational circuits: SOP, POS form; K-map",
          "Latch, flip-flop: S-R flip-flop; JK flip-flop, Master-Slave flip-flop; D-flip flop",
          "Sequential circuits: Generic block diagram; Shift registers; Counters",
        ],
      },
      {
        title: "Application of Electronic System (5 hours)",
        topics: [
          "Instrumentation system: Transducer, Strain Gauge, DMM, Oscilloscope",
          "Regulated power supply",
          "Remote control, Character Display, Clock, Counter, Measurements, Data Logging, Audio-Video system",
        ],
      },
    ],
    references: [
      "Robert Boylestad and Louis Nashelsky, “Electronic Devices and Circuit Theory” PHI; 8th Edition.200",
      "Thomas L. Floyd, “Electronic Devices” 8th Edition, Pearson Education, Inc., 2007",
      "A.S. Sedra and K.C. Smith, “Microelectronic Circuits”, 6th Edition, Oxford University Press, 2006",
    ],
  },
  {
    id: "computer-second-engineeringchemistry",
    title: "Engineering Chemistry",
    objective:
      "To develop the basic concepts of Physical Chemistry, Inorganic Chemistry and Organic Chemistry relevant to problems in engineering.",
    chapters: [
      {
        title: "Electro-chemistry and Buffer (6 hours)",
        topics: [
          "Electro-Chemical cells",
          "Electrode Potential and Standard Electrode Potential",
          "Measurement of Electrode Potential",
          "Nernst equation",
          "EMF of Cell",
          "Application of Electrochemical and Electrolytic cells",
          "Electrochemical Series and its Application",
          "Buffer: Its type and mechanism",
          "Henderson’s equation for pH of buffer and related problems",
          "Corrosion and its type",
          "Factors influencing Corrosion",
          "Prevention of Corrosion",
        ],
      },
      {
        title: "Catalyst (4 hours)",
        topics: [
          "Introduction",
          "Action of Catalyst(Catalytic Promoters and Catalytic Poisons)",
          "Characteristics of Catalyst",
          "Types of Catalyst",
          "Theories of Catalysis",
          "Industrial Applications of Catalysts",
        ],
      },
      {
        title: "Environmental Chemistry (5 hours)",
        topics: [
          "Air Pollution",
          "Air Pollutants i) Gases:SOx, NOx, CO, CO2, O3 and Hydrocarbons ii)Particulates dust, smoke and fly ash",
          "Effects of Air Pollutants on human beings and their possible remedies",
          "Ozone depletion and its Photochemistry",
          "Water Pollution(Ref of Surface Water and Pond Water)",
          "Water Pollutants(Ref of Surface Water), their adverse effect and remedies",
          "Soil Pollution",
          "Pollutants of Soil, their adverse effects and possible remedies",
        ],
      },
      {
        title: "Engineering Polymers (6 hours)",
        topics: [
          "Inorganic Polymers",
          "General properties of Inorganic Polymers: Polyphosphazines",
          "General properties of Inorganic Polymers: Sulpher Based Polymers",
          "General properties of Inorganic Polymers: Chalcogenide Glasses",
          "General properties of Inorganic Polymers: Silicones",
          "Organic Polymers",
          "Types of Organic Polymers",
          "Preparation and application of i) Polyurethane ii) Polystyrene iii) Polyvinylchloride iv) Teflon v) Nylon 6,6 and vi) Bakelite vii) Epoxy Resin viii) Fiber Reinforced Polymer",
          "Concept of Bio-Degradable, Non-Biodegradable and Conducting polymers",
        ],
      },
      {
        title: "3-d Transition elements and their applications (5 hours)",
        topics: [
          "Introduction",
          "Electronic Configuration",
          "Variable Oxidation states",
          "Complex formation tendency",
          "Color formation",
          "Magnetic properties",
          "Alloy formation",
          "Applications of 3-d transition elements",
        ],
      },
      {
        title: "Coordination Complexes (5 hours)",
        topics: [
          "Introduction",
          "Terms used in Coordination Complexes",
          "Werner’s Theory Coordination Complexes",
          "Sidgwick’s Model and Sidgwick’s effective atomic number rule",
          "Nomenclature of Coordination compounds(Neutral type, simple cation and complex anion and complex cation and simple anion type)",
          "Valence Bond Theory of Complexes",
          "Application of valence bond theory in the formation of i) Tetrahedral Complexes ii) Square planar Complexes and iii) Octahedral Complexes",
          "Limitations of Valence Bond Theory",
          "Applications of Coordination Complexes",
        ],
      },
      {
        title: "Explosives (3 hours)",
        topics: [
          "Introduction",
          "Types of explosives: Primary, Low and High explosives",
          "Preparation and application of TNT, TNG, Nitrocellulose and Plastic explosives",
        ],
      },
      {
        title: "Lubricants and Paints(2 hours)",
        topics: [
          "Introduction",
          "Function of Lubricants",
          "Classification of Lubricants(Oils, Greases and Solid)",
          "Paints",
          "Types of Paint",
          "Application of Paints",
        ],
      },
      {
        title: "Stereochemistry (4 hours)",
        topics: [
          "Introduction",
          "Geometrical Isomerism(Cis-Trans Isomerism), Z and E concept of Geometrical Isomerism",
          "Optical Isomerism with reference to two asymmetrical carbon center molecules",
          "Terms Optical activity, Enantiomers, Diastereomers, Meso structures, Racemic mixture and Resolution",
        ],
      },
      {
        title: "Reaction Mechanism in Organic reactions (4 hours)",
        topics: [
          "Substitution reaction",
          "Types of substitution reaction SN1 and SN2",
          "Elimination reaction",
          "Types of elimination reaction E1 and E2",
          "Factors governing SN1, SN2, E1 and E2 reaction mechanism path",
        ],
      },
    ],
    references: [
      '"Engineering Chemistry",by Jain and Jain',
      '"A Text Book of Engineering Chemistry",by Shashi Chawala',
      '"A New Concise Inorganic Chemistry by",J.D. Lee',
      '"Principles of Physical Chemistry",by Marron and Prutton',
      '"Essential of Physical Chemistry",by Bahl and Tuli',
      '"Advanced Inorganic Chemistry Vol 1 and 2",by Satya Prakash and Tuli',
      '"Organic chemistry",by Morrison and Boyd',
      '"Selected Topics in Physical Chemistry",by Moti Kaji Sthapit',
      '"Environmental Engineering",by Peavy, Rowe and Tchobanoglous',
    ],
  },
  {
    id: "computer-second-drawingii",
    title: "Drawing II",
    objective:
      "To make familiar with the conventional practices of sectional views. To develop basic concept and skill of pictorial drawing and working drawings. Also to make familiar with standard symbols of different engineering fields.",
    chapters: [
      {
        title:
          "Conventional Practices for Orthographic and Sectional Views (12 hours)",
        topics: [
          "Conventional Practices in Orthographic views: Half Views and Partial Views, Treatment of Unimportant Intersections, Aligned Views, Treatment for Radially Arranged Features, Representation of Fillets and Rounds",
          "Conventional Practices in Sectional views: Conventions for Ribs, Webs and Spokes in Sectional View, Broken Section, Removed Section, Revolved Section, Offset Section, Phantom Section and Auxiliary Sectional Views",
          "Simplified Representations of Standard Machine Elements",
        ],
      },
      {
        title: "Pictorial Drawings (20 hours)",
        topics: [
          "Classifications: Advantages and Disadvantages",
          "Axonometric Projection: Isometric Projection and Isometric Drawing: i) Procedure for making an isometric drawing ii) Isometric and Non-isometric Lines; Isometric and Non-isometric Surfaces iii) Angles in Isometric Drawing iv) Circles and Circular Arcs in Isometric Drawing v) Irregular Curves in Isometric Drawing vi) Isometric sectional Views",
          "Oblique Projection and Oblique Drawing: i) Procedure for making an Oblique drawing ii) Rules for Placing Objects in Oblique drawing iii) Angles, Circles and Circular Arcs in Oblique drawing",
          "Perspective Projection: i) Terms used in Perspective Projection ii) Parallel and Angular Perspective iii) Selection of Station Point",
        ],
      },
      {
        title:
          "Familiarization with Different Components and Conventions (8 hours)",
        topics: [
          "Limit Dimensioning and Machining Symbols: i) Limit, Fit and Tolerances ii) Machining Symbols and Surface Finish",
          "Threads, Bolts and Nuts: i) Thread Terms and Nomenclature, Forms of Screw Threads ii) Detailed and Simplified Representation of Internal and External Threads iii) Thread Dimensioning iv) Standard Bolts and Nuts: Hexagonal Head and Square Head v) Conventional Symbols for Bolts and Nuts",
          "Welding and Riveting: i) Types of Welded Joints and Types of Welds, Welding Symbols ii) Forms and Proportions for Rivet Heads, Rivet Symbols, Types of Riveted Joints: Lap Joint, Butt Joint",
          "Familiarization with Graphical Symbols and Conventions in Different Engineering Fields: i) Standard Symbols for Civil, Structural and Agricultural Components ii) Standard Symbols for Electrical, Mechanical and Industrial Components iii) Standard Symbols for Electronics, Communication and Computer Components iv) Topographical Symbols",
          "Standard Piping Symbols and Piping Drawing",
        ],
      },
      {
        title: "Detail and Assembly Drawings (20 hours)",
        topics: [
          "Introduction to Working Drawing",
          "Components of Working Drawing: Drawing Layout, Bill of Materials, Drawing Numbers",
          "Detail Drawing",
          "Assembly Drawing",
          "Practices of Detail and Assembly Drawing: V-block Clamp, Centering Cone, Couplings, Bearings, Antivibration Mounts, Stuffing Boxes, Screw Jacks, etc",
        ],
      },
    ],
    references: [
      "“ Fundamentals of Engineering Drawing”, W. J. Luzadder, Prentice Hall, 11th Edition.",
      "“Engineering Drawing and Graphic Technology”, T. E. French, C. J. Vierck, and R. J. Foster, Mc Graw Hill Publshing Co,1992.",
      "“Technical Drawing”, F. E. Giescke, A . Mitchell, H. C. Spencer and J. T. Dygdone, Macmillan Publshing Co, 10th Edition.",
      "“Machine Drawing”, N. D. Bhatt, Charotar Publshing House, India, 1991.",
      "“Machine Drawing”, P. S. Gill, S. K. Kataria and Sons, India,7th Edition, 2008.",
      "“Machine Drawing”, R. K. Dhawan, S. Chand and Company Limited, India, 1992.",
    ],
  },
  {
    id: "computer-second-mathii",
    title: "Maths II",
    objective:
      "To develop the skill of solving differential equations and to provide knowledge of vector algebra and calculus and to make students familiar with calculus of several variables and infinite series.",
    chapters: [
      {
        title: "Calculus of Two or more variables (6 hours)",
        topics: [
          "Introduction: Limit and Continuity",
          "Partial Derivatives: Homogeneous function, Euler’s theorem for the function of two and three variables",
          "Partial Derivatives: Total Derivatives",
          "Extrema of functions of two and three variables: Lagrange’s Multiplier",
        ],
      },
      {
        title: "Multiple Integrals (6 hours)",
        topics: [
          "Introduction",
          "Double Integrals in Cartesian and Polar form: Change of order of integration",
          "Triple Integrals in Cartesian, Cylindrical and Spherical coordinates",
          "Area and Volume by Double and Triple Integrals",
        ],
      },
      {
        title: "Three Dimensional Solid Geometry (11 hours)",
        topics: [
          "The Straight Line; Symmetric and General form",
          "Coplanar Lines",
          "Shortest Distance",
          "Sphere",
          "Plane Section of a Sphere by Planes",
          "Tangent Planes and Lines to the Spheres",
          "Right Circular Cone",
          "Right Circular Cylinder",
        ],
      },
      {
        title:
          "Solution of Differential Equations in Series and Special Functions (9 hours)",
        topics: [
          "Solution of Differential Equation by Power Series Method",
          "Legendre’s Equation",
          "Legendre's Polynomial function: Properties and Applications",
          "Bessel’s Equation",
          "Bessel’s Function of First and Second kind: Properties and Applications",
        ],
      },
      {
        title: "Vector Algebra and Calculus (8 hours)",
        topics: [
          "Introduction",
          "Two and Three dimensional vectors",
          "Scalar Products and Vector Products",
          "Reciprocal System of Vectors",
          "Application of Vectors: Lines and Planes",
          "Scalar and Vector fields",
          "Derivatives– Velocity and Acceleration",
          "Directional Derivatives",
        ],
      },
      {
        title: "Infinite Series (5 hours)",
        topics: [
          "Introduction",
          "Series with Positives terms",
          "Convergence and Divergence",
          "Alternating series: Absolute convergence",
          "Radius and Interval of Convergence",
        ],
      },
    ],
    references: [
      'Erwin Kreyszig, "Advanced Engineering Mathematics" , John Wiley and Sons Inc',
      'Thomas, Finney, "Calculus and Analytical Geometry" Addison- Wesley',
      'M. B. Singh, B. C. Bajrachrya,"Differential Calculus", Sukunda  Pustak Bhandar,Nepal',
      'M. B. Singh, B. C. Bajrachrya, "A text book of Vectors", Sukunda  Pustak Bhandar,Nepal',
      'M. B. Singh,  S. P. Shrestha, "Applied Mathematics"',
      'G.D. Pant, G. S. Shrestha, "Integral Calculus and Differential Equations", Sunila Prakashan,Nepal',
      'Y. R. Sthapit, B. C. Bajrachrya, "A text book of Three Dimensional Geometry", Sukunda  Pustak Bhandar,Nepal',
      'Santosh Man Maskey,"Calculus", Ratna Pustak Bhandar, Nepal',
    ],
  },
  {
    id: "computer-second-thermodynamics",
    title: "Fundamentals of Thermodynamics and Heat Transfer",
    objective:
      "After the completion of this course, students will able to understand basic concepts, laws of thermodynamics and heat transfer and their applications as well.",
    chapters: [
      {
        title: "Introduction (4 hours)",
        topics: [
          "Definition and Scope of Engineering Thermodynamics",
          "Value of energy to society",
          "Microscopic versus Macroscopic Viewpoint",
          "Concepts and Definitions: System, Surroundings, Boundary and Universe; Closed Systems, Open Systems, and Isolated Systems",
          "Concepts and Definitions: Thermodynamic Properties: Intensive, Extensive and Specific Property",
          "Concepts and Definitions: Thermodynamic Equilibrium",
          "Concepts and Definitions: State, Process, and Path, Cyclic Process, Quasi-equilibrium Process, Reversible and Irreversible Process",
          "Concepts and Definitions: Common Properties: Pressure, Specific Volume, Temperature",
          "Zeroth Law of Thermodynamics, Equality of Temperature",
        ],
      },
      {
        title: "Energy and Energy Transfer (3 hours)",
        topics: [
          "Energy and its Meaning",
          "Stored Energy and Transient Energy: Total Energy",
          "Energy Transfer: Heat Transfer",
          "Energy Transfer: Work Transfer",
          "Expressions for displacement Work Transfer",
          "Power",
        ],
      },
      {
        title: "Properties of Common Substances (6 hours)",
        topics: [
          "Pure Substance and State Postulate",
          "Ideal Gas and Ideal Gas Relations",
          "Two Phase (Liquid and Vapor) Systems: Phase Change, Subcooled Liquid, Saturated Liquid, Wet Mixture, Critical Point, Quality, Moisture Content, Saturated Vapor and Superheated Vapor",
          "Properties of Two Phase Mixture",
          "Other Thermodynamic Properties: Internal Energy, Enthalpy and Specific Heats",
          "Development of Property Data: Graphical Data Presentation and Tabular Data Presentation",
        ],
      },
      {
        title: "First Law of Thermodynamics (8 hours)",
        topics: [
          "First Law of Thermodynamics for Control Mass: First Law of Thermodynamics for Control Mass Undergoing Cyclic Process",
          "First Law of Thermodynamics for Control Volume",
          "Control Volume Analysis: Steady State Analysis and Unsteady State Analysis",
          "Control Volume Application: Steady and Unsteady Work Applications and Steady and Unsteady Flow Applications",
          "Other Statements of the First Law",
        ],
      },
      {
        title: "Second Law of Thermodynamics(8 hours)",
        topics: [
          "Necessity of Formulation of Second Law",
          "Entropy and Second Law of Thermodynamics for an Isolated System",
          "Reversible and Irreversible Processes",
          "Entropy and Process Relation for an Ideal Gases and Incompressible Substances",
          "Control Mass and Control Volume Formulation of Second Law",
          "Isentropic Process for an Ideal Gas and for an Incompressible Substances",
          "Carnot Cycle, Carnot Efficiency, Heat Engine and Thermal Efficiency, Heat Pump, Refrigerator and coefficient of Performance(COP)",
          "Kelvin-Planck and Clausius Statements of the Second Law of Thermodynamics and their Equivalence",
        ],
      },
      {
        title: "Thermodynamic Cycles (8 hours)",
        topics: [
          "Classification of Cycles",
          "Air Standard Analysis: Otto Cycle",
          "Air Standard Analysis: Diesel Cycle",
          "Air Standard Analysis: Brayton Cycle",
          "Air Standard Analysis: Rankine Cycle",
          "Air Standard Analysis: Vapor Compression Refrigeration Cycle",
        ],
      },
      {
        title: "Introduction to Heat Transfer (8 hours)",
        topics: [
          "Basic Concepts and Modes of Heat Transfer",
          "One dimensional steady state heat conduction through a plane wall",
          "Radial steady state heat conduction through a hollow cylinder",
          "Heat flow through composite structures: Composite Plane Wall",
          "Heat flow through composite structures: Multilayer Ttubes",
          "Electrical Analogy for Thermal Resistance",
          "Combined Heat Transfer and Overall Heat Transfer Coefficient for Plane Wall and Tube",
          "Nature of Convection: Free and Forced Convection",
          "Heat Radiation, Stefan's Law, Absorptivity, Reflectivity and Transmisivity; Black Body, White Body and Gray Body",
        ],
      },
    ],
  },
  {
    id: "computer-second-workshoptechnology",
    title: "Workshop Techonology",
    objective: "The subject aims at imparting knowledge and skill components in the field of basic workshop technology. It deals with different hand and machine tools required for manufacturing simple metal components and articles.",
    chapters: [
      {
        title: "General safety Considerations (2 hours)",
        topics: [
          "Bench Tools",
          "Machinist’s Hammers",
          "Screw Drivers",
          "Punches",
          "Chisels",
          "Scrapers",
          "Scribers",
          "Files",
          "Pliers and Cutters",
          "Wrenches",
          "Hacksaw",
          "Bench Vise",
          "Hand Drill",
          "Taps and Dies",
          "Hand Shears",
          "Rules,Tapes and Squares",
          "Soldering Iron",
          "Rivets",
        ],
      },
      {
        title: "Hand Working Operations (1 hour)",
        topics: [
          "Sawing",
          "Filing",
          "Threading",
          "Scribing",
          "Shearing",
          "Soldering",
          "Riveting",
        ],
      },
      {
        title: "",
        topics: [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
      {
        title: "",
        topics: [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
      {
        title: "",
        topics: [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
      {
        title: "",
        topics: [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
      {
        title: "",
        topics: [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
      {
        title: "",
        topics: [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
      {
        title: "",
        topics: [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
      {
        title: "",
        topics: [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
    ],
  }
];

export default ksSecondSemComputer;
