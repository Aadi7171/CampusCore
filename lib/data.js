export const universityData = {
  departments: [
    {
      id: "cs",
      name: "Computer Science & Engineering",
      building: "IT Building",
      floor: "2nd Floor",
      hod: "Dr. P.K. Singh",
      description: "Center for computing, AI, and software engineering.",
    },
    {
      id: "ee",
      name: "Electrical Engineering",
      building: "Main Academic Block",
      floor: "1st Floor",
      hod: "Dr. A.K. Sharma",
      description: "Focus on power systems, electronics, and control.",
    },
    {
      id: "me",
      name: "Mechanical Engineering",
      building: "Mechanical Block",
      floor: "Ground Floor",
      hod: "Dr. S.K. Srivastava",
      description: "Automobile, thermodynamics, and manufacturing.",
    }
  ],
  professors: [
    { id: "p1", name: "Dr. Rajesh Kumar", dept: "cs", cabin: "IT-204", subjects: ["Data Structures", "Algorithms"] },
    { id: "p2", name: "Dr. Ananya Mishra", dept: "cs", cabin: "IT-205", subjects: ["Database Systems", "Operating Systems"] },
    { id: "p3", name: "Dr. S.N. Singh", dept: "ee", cabin: "EE-101", subjects: ["Circuit Theory"] },
  ],
  resources: [
    { title: "Data Structures & Algorithms - Complete Notes", type: "PDF", subject: "DSA", uploader: "Senior '24", link: "#" },
    { title: "Mid-Term Previous Year Papers (2020-2023)", type: "ZIP", subject: "All", uploader: "Student Council", link: "#" },
    { title: "Engineering Physics - Unit 1 to 4", type: "PDF", subject: "Physics", uploader: "Prof. Gupta", link: "#" }
  ]
};
