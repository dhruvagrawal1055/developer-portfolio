export const personalInfo = {
  name: "Dhruv Agrawal",
  role: "Software Engineer",
  title: "Backend & Systems Software Developer",
  location: "Bengaluru, India",
  email: "dhruvagrawal1055@gmail.com",
  phone: "+91-9528176750",
  linkedin: "https://www.linkedin.com/in/dhruv-agrawal-9287b71b6",
  github: "https://github.com/dhruvagrawal1055",
  status: "Associate Software Developer @ TransUnion",
  bio: "Software engineer with production experience in high-concurrency backend services, custom C++ shared libraries, and in-memory data pipelines. Focused on building scalable microservices in Java/Spring Boot and low-latency execution engines.",
  resumeUrl: "/Dhruv_Agrawal_Resume.pdf",
  highlights: [
    { label: "Core Experience", value: "TransUnion", sub: "Core Platform Development", metric: "Active" },
    { label: "Service Latency", value: "~16ms", sub: "Distributed inference at ~1000 req/s", metric: "Production" },
    { label: "C++ Plugin Engine", value: "10+ Regions", sub: "Dynamic .so shared libraries", metric: "Architecture" },
    { label: "Data Acceleration", value: "+45%", sub: "Vertex AI Ray & Dataproc pipelines", metric: "Throughput" },
  ]
};

export const experiences = [
  {
    company: "TransUnion",
    role: "Associate Software Developer",
    location: "Bengaluru, India",
    period: "June 2024 - Present",
    current: true,
    team: "Core Platform & Execution Engineering",
    summary: "Developing core backend services, custom C++ shared libraries, and distributed computation pipelines for region-specific business logic and machine learning evaluation.",
    keyDeliverables: [
      {
        title: "Modular C++ Execution Engine & Shared Libraries",
        category: "Systems & C++",
        description: "Architected a modular C++ execution engine utilizing dynamic plugin architectures (.so shared libraries). Enabled runtime loading of region-specific transformation logic and ML models across 10+ regions without requiring service restarts.",
        impact: "Decoupled regional business rules from the core engine, allowing independent versioning and hot-loading across 10+ deployment targets.",
        tech: ["C++", "Shared Libraries (.so)", "Dynamic Linking", "Plugin Architecture"]
      },
      {
        title: "Apache Arrow Columnar In-Memory Pipelines",
        category: "Data & Memory Optimization",
        description: "Implemented Apache Arrow columnar data structures for zero-copy memory transfer between the C++ native execution core and distributed higher-level orchestrators.",
        impact: "Eliminated costly data serialization/deserialization overhead across language boundaries, maximizing memory throughput.",
        tech: ["Apache Arrow", "Columnar Storage", "Zero-Copy", "IPC"]
      },
      {
        title: "Distributed Model Serving with Ray Serve & gRPC",
        category: "Backend & Distributed Comms",
        description: "Collaborated with backend and platform teams to integrate the C++ execution engine with Ray Serve and gRPC services for scalable distributed inference.",
        impact: "Achieved ~16 ms p99 latency under ~1000 requests/sec concurrent load in production environments.",
        tech: ["Ray Serve", "gRPC", "Protobuf", "Distributed Inference"]
      },
      {
        title: "Distributed Compute Acceleration (Vertex AI Ray & Dataproc)",
        category: "Cloud & Compute",
        description: "Integrated Vertex AI Ray clusters alongside Google Cloud Dataproc for large-scale distributed data processing workloads, coordinating closely with data engineering teams.",
        impact: "Improved large-scale data processing throughput by 45% while optimizing resource utilization.",
        tech: ["Google Cloud Platform", "Vertex AI", "Dataproc", "Distributed Computing"]
      },
      {
        title: "Automated Notebook Provisioning & Migration Workflows",
        category: "Platform Automation",
        description: "Designed and implemented an automated migration and provisioning workflow for transitioning user-created Jupyter notebooks to Vertex AI managed notebooks.",
        impact: "Boosted deployment consistency and automation efficiency by 60% while maintaining complete backward compatibility.",
        tech: ["Vertex AI", "Workflow Automation", "CI/CD", "Python"]
      },
      {
        title: "Role-Based Access Control (RBAC) & Service Governance",
        category: "Security & Reliability",
        description: "Established comprehensive Role-Based Access Control (RBAC) policies and security governance mechanisms across multiple platform microservices.",
        impact: "Reduced unauthorized access incidents to zero in production and strengthened platform security posture.",
        tech: ["RBAC", "Access Governance", "API Security", "Production Monitoring"]
      }
    ]
  }
];

export const projects = [
  {
    id: "workforce-saas",
    title: "Workforce Management SaaS Platform",
    subtitle: "High-concurrency multi-tenant scheduling & microservices",
    category: "Backend & Microservices",
    period: "Aug 2025 - Oct 2025",
    overview: "A multi-tenant backend platform engineered to manage workforce scheduling, shift attendance, and real-time alerts under high concurrent user load.",
    problemSolved: "Manual workforce scheduling in large teams leads to scheduling conflicts, slow response times, and high administrative overhead.",
    architecture: [
      "Modular microservices architecture separating user management, shift scheduling, and notification services.",
      "Stateless JWT authentication and role-based access control (RBAC) securing service endpoints.",
      "Kafka message broker handling asynchronous event-driven communication between microservices.",
      "Redis distributed cache layer reducing read latency on high-frequency schedule lookups."
    ],
    verifiedMetrics: [
      "40% reduction in manual scheduling turnaround time",
      "35% response time improvement under concurrent traffic using Redis caching",
      "Event-driven decoupling via Apache Kafka"
    ],
    techStack: ["Java", "Spring Boot", "PostgreSQL", "Apache Kafka", "Redis", "Spring Security", "JWT", "Docker"],
    github: "https://github.com/dhruvagrawal1055",
    featured: true
  },
  {
    id: "cpp-execution-engine",
    title: "Modular C++ Execution Engine & Shared Library Pipeline",
    subtitle: "Dynamic plugin architecture with Apache Arrow memory sharing",
    category: "Systems & C++",
    period: "June 2024 - Present",
    overview: "A high-performance C++ execution engine designed with dynamic shared library (.so) plugins to evaluate region-specific transformations and model scoring at low latency.",
    problemSolved: "Evaluating region-specific business logic often requires recompiling entire services. This architecture decouples logic into dynamic modules with zero-copy data transfer.",
    architecture: [
      "Plugin-based shared object (.so) loader enabling dynamic symbol resolution at runtime.",
      "Apache Arrow integration for efficient in-memory columnar data layouts and cross-language sharing.",
      "gRPC client/server interfaces for high-throughput protobuf communication."
    ],
    verifiedMetrics: [
      "~16ms p99 latency at ~1000 requests/sec inference load",
      "Dynamic loading support across 10+ deployment regions",
      "Zero-copy in-memory buffer passing"
    ],
    techStack: ["C++", "Apache Arrow", "Shared Libraries", "gRPC", "Protobuf", "Ray Serve", "ONNX Runtime"],
    github: "https://github.com/dhruvagrawal1055",
    featured: true
  },
  {
    id: "notes-android-app",
    title: "Offline-First Notes Application",
    subtitle: "Modern Android app with reactive MVVM & Cloud Sync",
    category: "Mobile & Cloud",
    period: "Mar 2023 - Jun 2023",
    overview: "A clean Android note-taking application designed with offline-first architecture, local SQLite/Room caching, and real-time Firebase cloud synchronization.",
    problemSolved: "Ensuring seamless note access and reliable synchronization even in intermittent or offline network conditions.",
    architecture: [
      "Declarative UI built using Jetpack Compose with reactive state flow.",
      "Room Database local persistence layer ensuring offline accessibility.",
      "Firebase Authentication, Firestore cloud sync, and Kotlin Coroutines for asynchronous state management."
    ],
    verifiedMetrics: [
      "40% crash reduction via robust MVVM state management and Coroutines",
      "Instant offline read/write with automatic cloud reconciliation"
    ],
    techStack: ["Kotlin", "Jetpack Compose", "Room Database", "Firebase Firestore", "Coroutines", "LiveData", "MVVM"],
    github: "https://github.com/dhruvagrawal1055",
    featured: true
  }
];

export const skillMatrix = [
  {
    group: "Core Languages",
    description: "Languages used in production services and systems",
    items: [
      { name: "Java", context: "Spring Boot, enterprise microservices, OOP, concurrency" },
      { name: "C++", context: "Shared libraries (.so), dynamic plugin architectures, memory layouts" },
      { name: "Python", context: "Ray, data pipelines, automation scripts, Vertex AI" },
      { name: "JavaScript", context: "Node.js, Express, React.js frontend development" },
      { name: "Kotlin", context: "Modern Android, Jetpack Compose, Coroutines" }
    ]
  },
  {
    group: "Backend & Microservices",
    description: "Frameworks for building reliable, scalable backend APIs",
    items: [
      { name: "Spring Boot", context: "Spring Security, Data JPA, REST APIs, Microservices" },
      { name: "Kafka & Redis", context: "Event-driven asynchronous messaging and distributed caching" },
      { name: "gRPC & REST", context: "High-throughput Protobuf RPC communication and RESTful APIs" },
      { name: "FastAPI & Node.js", context: "Asynchronous backend services and lightweight microservices" }
    ]
  },
  {
    group: "Systems & In-Memory Data",
    description: "Low-latency libraries and distributed compute components",
    items: [
      { name: "C++ Shared Libraries", context: "Dynamic loading (.so), runtime modularity, C/C++ ABI" },
      { name: "Apache Arrow", context: "In-memory columnar data pipelines, zero-copy buffer sharing" },
      { name: "Ray Serve", context: "Distributed model serving and scalable distributed execution" },
      { name: "ONNX Runtime", context: "Cross-platform model scoring and inference execution" }
    ]
  },
  {
    group: "Cloud, DevOps & Databases",
    description: "Infrastructure, relational/document storage, and CI/CD",
    items: [
      { name: "Google Cloud Platform", context: "Vertex AI, Dataproc, Cloud Build, IAM, GCS" },
      { name: "PostgreSQL & MySQL", context: "Relational schema design, indexing, transactions" },
      { name: "MongoDB & Firebase", context: "Document stores, real-time Firestore synchronization" },
      { name: "Docker & CI/CD", context: "Containerization, GitHub Actions, Harness automation" }
    ]
  },
  {
    group: "Engineering Architecture",
    description: "System design patterns applied in production",
    items: [
      { name: "Microservices Design", context: "Service decomposition, API gateways, independent scaling" },
      { name: "Plugin-Based Modularity", context: "Hot-swappable business logic without core recompilation" },
      { name: "Zero-Copy Data Transfer", context: "Minimizing serialization bottlenecks across boundaries" },
      { name: "Role-Based Access Control", context: "Stateless JWT authorization and enterprise governance" }
    ]
  }
];

export const education = {
  degree: "Bachelor of Technology (B.Tech)",
  major: "Computer Science and Engineering",
  institution: "Lovely Professional University",
  location: "Phagwara, Punjab, India",
  period: "Aug 2020 - May 2024",
  cgpa: "8.58 / 10.0",
  coursework: [
    "Data Structures & Algorithms",
    "Operating Systems & Systems Programming",
    "Database Management Systems",
    "Computer Networks & Distributed Systems",
    "Object-Oriented Software Engineering"
  ]
};

export const terminalCommands = {
  help: `Available commands:
  • summary      - High-level engineering profile summary
  • experience   - TransUnion core platform deliverables
  • libraries    - Custom C++ shared libraries & plugin details
  • backend      - Spring Boot, Kafka, and microservices projects
  • skills       - Technical capabilities & production tools
  • education    - Academic credentials & degree details
  • contact      - Email, phone, and LinkedIn coordinates
  • resume       - View / download resume PDF
  • clear        - Clear the terminal console`,

  summary: `Dhruv Agrawal — Software Engineer (Associate Software Developer @ TransUnion)
Specialization: Backend Engineering, Custom C++ Shared Libraries, Spring Boot, and Data Pipelines.
Location: Bengaluru, India | Status: Open to Software Engineering Opportunities`,

  experience: `[TransUnion] Associate Software Developer (June 2024 - Present | Bengaluru, India)
• Developed modular C++ execution engine using dynamic .so shared libraries across 10+ regions.
• Leveraged Apache Arrow columnar data pipelines for zero-copy memory transfer.
• Integrated Ray Serve and gRPC services, achieving ~16ms latency at ~1000 requests/sec.
• Accelerated distributed compute pipelines by 45% using Vertex AI Ray & Dataproc.
• Enforced service-wide Role-Based Access Control (RBAC) with zero production incidents.`,

  libraries: `[Custom C++ Shared Libraries & Systems]
• Architecture: Dynamic runtime module loader using .so shared libraries.
• Function: Enables region-specific business transformation logic without service restarts.
• Interoperability: Apache Arrow columnar layouts for zero-copy memory passing.
• Protocol: gRPC / Protobuf communication with distributed Ray Serve clusters.`,

  backend: `[Backend & Microservices]
• Workforce Management SaaS: Spring Boot, Apache Kafka, Redis, PostgreSQL, JWT RBAC.
• Key Result: 40% reduction in manual scheduling effort, 35% faster response times.
• Design: Modular services for user auth, shift scheduling, and async notification events.`,

  skills: `Languages:    Java, C++, Python, JavaScript, Kotlin
Backend:      Spring Boot, Kafka, Redis, gRPC, REST, FastAPI, Node.js
Systems/Data: C++ Shared Libraries (.so), Apache Arrow, Ray Serve, ONNX Runtime
Databases:    PostgreSQL, MySQL, MongoDB, Firebase (Firestore, Auth)
Cloud/DevOps: GCP (Vertex AI, Dataproc, Cloud Build), Docker, GitHub Actions, Harness`,

  education: `Lovely Professional University (2020 - 2024)
Degree: B.Tech in Computer Science and Engineering | CGPA: 8.58 / 10.0`,

  contact: `Email:    dhruvagrawal1055@gmail.com
Phone:    +91-9528176750
LinkedIn: https://linkedin.com/in/dhruv-agrawal
GitHub:   https://github.com/dhruvagrawal1055
Location: Bengaluru, India`,

  resume: `Resume PDF is ready for review. Click "Resume (PDF)" in the header to download!`
};
