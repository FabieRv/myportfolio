import React, { useState, type ChangeEvent, type FormEvent } from "react"

// Type rigoureux pour le formulaire
interface FormState {
  nom: string
  email: string
  sujet: string
  message: string
}

const SectionContact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    nom: "",
    email: "",
    sujet: "",
    message: "",
  })

  const [envoiEnCours, setEnvoiEnCours] = useState(false)

  const gererChangement = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const gererSoumission = async (e: FormEvent) => {
    e.preventDefault()
    setEnvoiEnCours(true)

    // Simulation d'envoi
    console.log("Données envoyées :", formData)

    setTimeout(() => {
      setEnvoiEnCours(false)
      alert("Message envoyé avec succès !")
    }, 1500)
  }

  return (
    <section className="bg-white text-slate-900 py-24 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Partie Gauche : Informations */}
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 text-slate-900 leading-tight">
              Parlons de votre <br />{" "}
              <span className="text-blue-600">prochain projet !</span>
            </h2>
          </div>

          <p className="text-slate-500 text-lg leading-relaxed max-w-md">
            Vous avez une idée ou une proposition de collaboration ? Envoyez-moi
            un message, je vous répondrai dans les plus brefs délais.
          </p>

          <div className="text-sm pt-4 felx flex-col gap-4 mb-4">
            <ElementInfo
              icone="📧"
              titre="Email"
              valeur="fabie.rav@gmail.com"
            />
            <ElementInfo
              icone="📍"
              titre="Ankadikely Ilafy"
              valeur="Antananarivo, Madagascar"
            />
          </div>
        </div>

        {/* Partie Droite : Formulaire (Style Épuré) */}
        <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
          <form onSubmit={gererSoumission} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ChampSaisie
                label="Nom complet"
                name="nom"
                type="text"
                placeholder="Fabienne"
                value={formData.nom}
                onChange={gererChangement}
              />
              <ChampSaisie
                label="Adresse Email"
                name="email"
                type="email"
                placeholder="fabie.rav@gmail.com"
                value={formData.email}
                onChange={gererChangement}
              />
            </div>

            <ChampSaisie
              label="Sujet"
              name="sujet"
              type="text"
              placeholder="Comment puis-je vous aider ?"
              value={formData.sujet}
              onChange={gererChangement}
            />

            <div className="flex flex-col space-y-2">
              <label className="text-sm font-semibold text-slate-700 ml-1">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Décrivez votre projet en quelques mots..."
                rows={2}
                value={formData.message}
                onChange={gererChangement}
                className="w-full bg-white border border-slate-200 rounded-2xl p-4 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-500/5 transition-all text-slate-800 placeholder-slate-400"
                required
              />
            </div>

            <button
              type="submit"
              disabled={envoiEnCours}
              className={`w-full ${
                envoiEnCours ? "bg-slate-400" : "bg-blue-600 hover:bg-blue-700"
              } text-white font-bold py-4 rounded-2xl transition-all shadow-lg shadow-blue-600/10 flex items-center justify-center gap-3`}
            >
              {envoiEnCours ? "Envoi en cours..." : "Envoyer le message"}
              {!envoiEnCours && <span className="text-xl">→</span>}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

// Composants de support pour la clarté
const ElementInfo: React.FC<{
  icone: string
  titre: string
  valeur: string
}> = ({ icone, titre, valeur }) => (
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-xl shadow-sm">
      {icone}
    </div>
    <div>
      <p className="text-[10px] text-slate-400 uppercase font-black tracking-tighter">
        {titre}
      </p>
      <p className="text-slate-800 font-semibold">{valeur}</p>
    </div>
  </div>
)

const ChampSaisie: React.FC<{
  label: string
  name: string
  type: string
  placeholder: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}> = ({ label, name, type, placeholder, value, onChange }) => (
  <div className="flex flex-col space-y-2">
    <label className="text-sm font-semibold text-slate-700 ml-1">{label}</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      className="w-full bg-white border border-slate-200 rounded-xl p-4 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-500/5 transition-all text-slate-800 placeholder-slate-400"
    />
  </div>
)

export default SectionContact
