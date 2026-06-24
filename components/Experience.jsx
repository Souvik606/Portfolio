import { motion } from 'framer-motion'
import { FiBriefcase } from 'react-icons/fi'

export default function Experience() {
  const experiences = [
    {
      role: "Backend Intern",
      company: "Extended Dynamic Solutions",
      location: "Kolkata, India",
      duration: "Nov 2025 – May 2026",
      techStack: ["Go (Golang)", "AWS (Cognito, SQS, S3)", "gRPC", "REST", "Terraform", "CI/CD"],
      points: [
        "Took ownership of designing a scalable distributed, microservices architecture (4+ services) with high availability and concurrency-safe request handling; dove deep into access control to implement a granular RBAC software design controlling fine-grained permissions across 6 roles.",
        "Engineered the integration of AWS Cognito for passwordless authentication and AWS S3 for KYC storage; developed 30+ REST APIs and 15+ gRPC methods, implementing explicit exception-mapping handlers to improve error reliability and debuggability across services.",
        "Architected an event-driven, asynchronous system using AWS SQS with multi-worker task processing, decoupling critical workflows and improving fault tolerance; automated infrastructure via Terraform (IaC) and built end-to-end CI/CD pipelines with GitHub Actions."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-pink-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-semibold">
            My professional background and industry experience in backend engineering and distributed systems
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line on the left */}
          <div className="absolute left-4 md:left-8 h-full w-0.5 bg-gray-700"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 flex items-start"
            >
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full bg-pink-500/20 border-2 border-pink-500 z-10 mr-6 md:mr-10 flex-shrink-0">
                <FiBriefcase className="text-pink-500 text-sm md:text-lg" />
              </div>

              {/* Content box */}
              <div className="flex-1 bg-gray-800/50 p-6 md:p-8 rounded-xl border border-gray-700 backdrop-blur-sm hover:border-pink-500/30 transition-all duration-300 shadow-xl">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-100">{exp.role}</h3>
                    <p className="text-pink-400 font-semibold text-lg">
                      {exp.company} — <span className="text-gray-400 text-sm font-normal">{exp.location}</span>
                    </p>
                  </div>
                  <span className="text-gray-300 bg-gray-700 px-4 py-1.5 rounded-full text-sm font-medium w-fit h-fit">
                    {exp.duration}
                  </span>
                </div>

                <ul className="list-disc list-outside ml-5 space-y-3 text-gray-300 mb-6 leading-relaxed">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-sm md:text-base">
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-gray-700/60">
                  {exp.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1 text-xs rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
