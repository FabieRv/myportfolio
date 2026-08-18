import emailjs from "@emailjs/browser"
import React, {
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react"

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

  // Gestion des changements
  const gererChangement = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  // Envoi du formulaire
  const gererSoumission = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    if (envoiEnCours) return

    setEnvoiEnCours(true)

    try {
      const serviceId =
        import.meta.env.VITE_EMAILJS_SERVICE_ID

      const templateId =
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID

      const publicKey =
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      // Vérification des variables
      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "Les variables EmailJS sont manquantes."
        )
      }

      console.log("EmailJS Service ID :", serviceId)
      console.log("EmailJS Template ID :", templateId)

      // Envoi du message
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.nom,
          email: formData.email,
          subject: formData.sujet,
          message: formData.message,
        },
        {
          publicKey
        }
      )

      console.log("EmailJS réponse :", response)

      // Succès
      alert("Message envoyé avec succès !")

      // Réinitialisation
      setFormData({
        nom: "",
        email: "",
        sujet: "",
        message: "",
      })
    } catch (error: any) {
      console.error("Erreur EmailJS :", error)
      console.error("Status :", error?.status)
      console.error("Message :", error?.text)

      alert(
        `Échec de l'envoi : ${
          error?.text || "Une erreur est survenue."
        }`
      )
    } finally {
      setEnvoiEnCours(false)
    }
  }

  return (
    <section
      className="bg-white text-slate-900 py-24 px-6 lg:px-24"
      id="Contact"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* GAUCHE */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-header mt-2 text-slate-900 leading-tight">
              Parlons de votre <br />

              <span className="text-blue-600">
                prochain projet !
              </span>
            </h2>
          </div>

          <p className="text-slate-500 text-lg leading-relaxed max-w-md font-primary">
            Vous avez une idée ou une proposition de
            collaboration ? Envoyez-moi un message, je vous
            répondrai dans les plus brefs délais.
          </p>

          <div className="text-sm pt-4 flex flex-col gap-4 mb-4">

            <ElementInfo
              icone="📧"
              titre="Email"
              valeur="fabie.rav@gmail.com"
            />

            <ElementInfo
              icone="📍"
              titre="Localisation"
              valeur="Antananarivo, Madagascar"
            />

          </div>
        </div>

        {/* DROITE : FORMULAIRE */}
        <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm font-primary">

          <form
            onSubmit={gererSoumission}
            className="space-y-6 text-lg"
          >

            {/* Nom + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <ChampSaisie
                label="Nom complet"
                name="nom"
                type="text"
                placeholder="Votre nom"
                value={formData.nom}
                onChange={gererChangement}
              />

              <ChampSaisie
                label="Adresse Email"
                name="email"
                type="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={gererChangement}
              />

            </div>

            {/* Sujet */}
            <ChampSaisie
              label="Sujet"
              name="sujet"
              type="text"
              placeholder="Comment puis-je vous aider ?"
              value={formData.sujet}
              onChange={gererChangement}
            />

            {/* Message */}
            <div className="flex flex-col space-y-2">

              <label className="text-sm font-semibold text-slate-700 ml-1">
                Message
              </label>

              <textarea
                name="message"
                placeholder="Décrivez votre projet en quelques mots..."
                rows={5}
                value={formData.message}
                onChange={gererChangement}
                required
                className="w-full bg-white border border-slate-200 rounded-2xl p-4 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-500/5 transition-all text-slate-800 placeholder-slate-400 resize-none"
              />

            </div>

            {/* Bouton */}
            <button
              type="submit"
              disabled={envoiEnCours}
              className={`w-full ${
                envoiEnCours
                  ? "bg-slate-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              } text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-600/10 flex items-center justify-center gap-3`}
            >

              {envoiEnCours
                ? "Envoi en cours..."
                : "Envoyer le message"}

              {!envoiEnCours && (
                <span className="text-xl">
                  →
                </span>
              )}

            </button>

          </form>
        </div>
      </div>
    </section>
  )
}

// ============================================
// INFORMATIONS
// ============================================

const ElementInfo: React.FC<{
  icone: string
  titre: string
  valeur: string
}> = ({
  icone,
  titre,
  valeur,
}) => {
  return (
    <div className="flex items-center gap-4">

      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-xl shadow-sm">
        {icone}
      </div>

      <div>
        <p className="text-[10px] text-slate-400 uppercase font-black tracking-tighter">
          {titre}
        </p>

        <p className="text-slate-800 font-semibold">
          {valeur}
        </p>
      </div>

    </div>
  )
}

// ============================================
// CHAMP DE SAISIE
// ============================================

const ChampSaisie: React.FC<{
  label: string
  name: string
  type: string
  placeholder: string
  value: string
  onChange: (
    e: ChangeEvent<HTMLInputElement>
  ) => void
}> = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col space-y-2">

      <label className="text-sm font-semibold text-slate-700 ml-1">
        {label}
      </label>

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
}

export default SectionContact