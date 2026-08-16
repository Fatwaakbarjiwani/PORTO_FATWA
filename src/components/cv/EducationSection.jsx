export default function EducationSection() {
  const education = [
    {
      school: "Universitas Islam Sultan Agung - Semarang",
      degree: "S1 Teknik Informatika",
      year: "2021 - 2025",
      gpa: "3.85/4.00",
    },
    {
      school: "Binar Academy - Studi Independen",
      degree: "Studi Independen",
      year: "Aug 2023 - Jan 2023",
      gpa: "",
    },
  ];
  return (
    <section className="w-full py-12 bg-dark flex flex-col items-center">
      <h2 className="text-3xl font-bold text-white mb-6">Education</h2>
      <ul className="space-y-6 max-w-2xl w-full">
        {education.map((edu, idx) => (
          <li key={idx} className="flex items-start gap-4">
            <div className="w-3 h-3 mt-2 rounded-full bg-yellow-400 flex-shrink-0" />
            <div>
              <div className="font-bold text-white text-lg">{edu.school}</div>
              <div className="text-white/80 text-base">
                {edu.degree} {edu.gpa && `| IPK: ${edu.gpa}`}
              </div>
              <div className="text-xs text-yellow-300">{edu.year}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
