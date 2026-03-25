import { ArrowRight } from "lucide-react";
import cert1 from "../assets/cert1.png";
import cert2 from "../assets/cert2.png";
import cert3 from "../assets/cert3.png";
import cert4 from "../assets/cert4.jpg";
import cert5 from "../assets/cert5.png";

const certificates = [
  {
    title: "TCP/IP and Advanced Topics",
    issuer: "Coursera",
    year: "2025",
    image: cert1,
    link: "https://drive.google.com/file/d/1iIPFY_ybwt5Sdf8fzcHtH2oq9D2iSUue/view?usp=sharing",
  },
  {
    title: "Bits and Bytes of Computer Networking",
    issuer: "Google",
    year: "2024",
    image: cert2,
    link: "https://drive.google.com/file/d/12HtsevUq0jLfEtZQg1XMjT_g_5jPy60G/view?usp=sharing",
  },
  {
    title: "Peer to Peer Protocols and Local Area Networks",
    issuer: "Coursera",
    year: "2024",
    image: cert3,
    link: "https://drive.google.com/file/d/1a_Cntz_Lj--isNkiG0stNTAx5_H5tlv1/view?usp=sharing",
  },
  {
    title: "Summer Training (Full Stack Development with Generative AI)",
    issuer: "W3Grads",
    year: "2025",
    image: cert4,
    link: "https://drive.google.com/file/d/12G0K4Q6IbtYEoVK8XY4Tpe5SFKK67Ibo/view?usp=sharing",
  },
  {
    title: "Social Networks",
    issuer: "NPTEL",
    year: "2025",
    image: cert5,
    link: "https://drive.google.com/file/d/1HnerGMUHU7cDOBupYqwqaOtCjm1PR_LM/view?usp=sharing",
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold">
            Certificates &{" "}
            <span className="text-primary glow-text">Credentials</span>
          </h2>

          {/* Gradient underline */}
          <div className="w-24 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500" />

          <p className="text-muted-foreground mt-6">
            Professional certifications and courses I've completed to enhance my
            skills
          </p>
        </div>

        {/* Cards */}
        <div className="relative flex gap-8 overflow-x-auto pb-6 no-scrollbar">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group relative min-w-[320px] max-w-[360px] glass rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Certificate Image */}
              <div className="relative h-52 overflow-hidden z-0">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              </div>

              {/* Bottom Content */}
              <div className="p-5 space-y-2 relative">
                <h3 className="text-lg font-semibold text-white">
                  {cert.title}
                </h3>

                <p className="text-sm text-primary">{cert.issuer}</p>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-xs text-muted-foreground">
                    {cert.year}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // prevents parent click conflicts
                      window.open(cert.link, "_blank");
                    }}
                    className="relative z-20 w-8 h-8 flex items-center justify-center rounded-full border border-primary/40 group-hover:bg-primary/10 transition"
                  >
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </button>
                </div>
              </div>

              {/* Glow border effect */}
              <div className="absolute inset-0 rounded-2xl border border-primary/20 group-hover:border-primary/60 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
