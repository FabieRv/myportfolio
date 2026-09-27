import { useTranslation } from "react-i18next";
import {
  Design,
  backendSkills,
  databaseSkills,
  frontendSkills,
  mobileSkills,
  toolsSkills,
} from "../../constant";
import Container from "../common/Container";

const SkillCard = ({
  titleKey,
  skills,
  gradientColor,
  shadowColor,

}: {
  titleKey: string;
  skills: any[];
  gradientColor: string;
  shadowColor: string;
  borderColor: string;
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={`skill-card relative overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5
        /* Style Mode Clair */
        bg-[#C9F0FF]/30 backdrop-blur-md border border-[#5DA9E9]/25 shadow-sm hover:shadow-xl hover:border-primary/40
        /* Style Mode Sombre (comme la capture) */
        dark:bg-[#13101E] dark:border-white/5 ${shadowColor}`}
    >
      {/* Bordure supérieure colorée (effet néon de la capture) */}
      <div className={`hidden dark:block absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${gradientColor}`} />

      <h3 className="text-lg font-bold mb-5 text-gray-800 dark:text-white tracking-wide flex items-center gap-3">
        {t(titleKey)}
      </h3>

      <div className="grid grid-cols-3 gap-4">
        {skills.map((skill: any, i: number) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 group cursor-pointer"
          >
            {/* Conteneur d'icône sombre en mode dark */}
            <div className="w-12 h-12 flex items-center justify-center bg-white/70 backdrop-blur-sm rounded-2xl border border-white/80 shadow-xs group-hover:scale-110 group-hover:bg-white group-hover:shadow-md dark:bg-white/5 dark:border-white/10 dark:group-hover:bg-white/10 transition-all duration-300 ">
              <img
                src={skill.image}
                alt={skill.name}
                className="w-7 h-7 object-contain rounded-lg "
              />
            </div>

            <span className="text-xs font-medium text-gray-700 text-center group-hover:text-[#2563eb] dark:text-gray-300 dark:group-hover:text-white transition-colors">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function SkillsSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-linear-to-b from-transparent via-[#C9F0FF]/15 to-transparent dark:bg-[#13101E] transition-colors">
      <Container className="py-10" id="skills">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {t("skills.sectionTitle")}
          </h2>
         
        </div>

        {/* SKILL CARDS */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {/* Frontend - Rose / Fuchsia */}
          <SkillCard
            titleKey="skills.categories.frontend"
            skills={frontendSkills}
            gradientColor="from-transparent via-pink-500 to-transparent"
            shadowColor="dark:shadow-[0_-12px_30px_-8px_rgba(236,72,153,0.35)]"
            borderColor="border-pink-500"
          />

          {/* Backend - Violet */}
          <SkillCard
            titleKey="skills.categories.backend"
            skills={backendSkills}
            gradientColor="from-transparent via-purple-500 to-transparent"
            shadowColor="dark:shadow-[0_-12px_30px_-8px_rgba(168,85,247,0.35)]"
            borderColor="border-purple-500"
          />

          {/* Mobile - Bleu Cyan */}
          <SkillCard
            titleKey="skills.categories.mobile"
            skills={mobileSkills}
            gradientColor="from-transparent via-blue-500 to-transparent"
            shadowColor="dark:shadow-[0_-12px_30px_-8px_rgba(59,130,246,0.35)]"
            borderColor="border-blue-500"
          />

          {/* Databases - Orange / Ambre */}
          <SkillCard
            titleKey="skills.categories.database"
            skills={databaseSkills}
            gradientColor="from-transparent via-amber-500 to-transparent"
            shadowColor="dark:shadow-[0_-12px_30px_-8px_rgba(245,158,11,0.35)]"
            borderColor="border-amber-500"
          />

          {/* Outils - Turquoise / Vert */}
          <SkillCard
            titleKey="skills.categories.tools"
            skills={toolsSkills}
            gradientColor="from-transparent via-teal-400 to-transparent"
            shadowColor="dark:shadow-[0_-12px_30px_-8px_rgba(45,212,191,0.35)]"
            borderColor="border-teal-400"
          />

          {/* Design - Magenta */}
          <SkillCard
            titleKey="skills.categories.design"
            skills={Design}
            gradientColor="from-transparent via-fuchsia-500 to-transparent"
            shadowColor="dark:shadow-[0_-12px_30px_-8px_rgba(217,70,239,0.35)]"
            borderColor="border-fuchsia-500"
          />
        </div>
      </Container>
    </section>
  );
}