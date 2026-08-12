import React from "react"
import { motion } from "framer-motion"
import { philosophyData } from "../../constant"
import Container from "../common/Container"
import Title from "../common/Title"

const Philosophy: React.FC = () => {
  return (
    <section className="bg-white py-4 min-h-[60vh] flex items-center overflow-hidden">
      <Container>
        {/* Titre avec animation directe */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Title label="Ma Philosophie" />
        </motion.div>

        {/* Grille de contenu utilisant les variants */}
        <div className="flex justify-center">
          <motion.div
            className="space-y-6 max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {philosophyData.map((item, index) => (
              <motion.div key={index} className="flex items-start group">
                {/* Flèche animée au survol */}
                <motion.span
                  className="text-[#2563EB] mr-5 text-xl font-bold"
                  whileHover={{ x: 5 }}
                >
                  →
                </motion.span>

                {/* Texte informatif */}
                <div>
                  <h3 className="text-xl font-bold text-[#1E293B] md:inline-block md:mr-2">
                    {item.title} :
                  </h3>
                  <p className="text-[#475569] text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default Philosophy
