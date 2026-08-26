import emailjs from "@emailjs/browser"
import React, {
  useId,
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

interface EmailJSError {
  status?: number
  text?: string
}

const SectionContact: React.FC = () => {
  const [formData, setFormData] = useState<FormState>({
    nom: "",
    email: "",
    sujet: "",
    message: "",
  })

  const [envoiEnCours, setEnvoiEnCours] = useState(false)
  const [statutMessage, setStatutMessage] = useState<{
    type: "succes" | "erreur" | null
    texte: string
  }>({ type: null, texte: "" })

  const messageInputId = useId()

  const gererChangement = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const gererSoumission = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (envoiEnCours) return

    setEnvoiEnCours(true)
    setStatutMessage({ type: null, texte: "" })

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Les variables d'environnement EmailJS sont manquantes.")
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.nom,
          email: formData.email,
          subject: formData.sujet,
          message: formData.message,
        },
        { publicKey }
      )

      setStatutMessage({
        type: "succes",
        texte: "Message envoyé avec succès !",
      })

      setFormData({ nom: "", email: "", sujet: "", message: "" })
    } catch (err) {
      const error = err as EmailJSError
      console.error("Erreur EmailJS :", error)

      setStatutMessage({
        type: "erreur",
        texte: `Échec de l'envoi : ${
          error?.text || "Une erreur est survenue lors de l'envoi."
        }`,
      })
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
              <span className="text-blue-600">prochain projet !</span>
            </h2>
          </div>

          <p className="text-slate-500 text-lg leading-relaxed max-w-md font-primary">
            Vous avez une idée ou une proposition de collaboration ? Envoyez-moi
            un message, je vous répondrai dans les plus brefs délais.
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
        <div className="bg-[#C9F0FF]/30 p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm font-primary">
          <form onSubmit={gererSoumission} className="space-y-6 text-lg">
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

            <ChampSaisie
              label="Sujet"
              name="sujet"
              type="text"
              placeholder="Comment puis-je vous aider ?"
              value={formData.sujet}
              onChange={gererChangement}
            />

            <div className="flex flex-col space-y-2">
              <label
                htmlFor={messageInputId}
                className="text-sm font-semibold text-slate-700 ml-1"
              >
                Message
              </label>

              <textarea
                id={messageInputId}
                name="message"
                placeholder="Décrivez votre projet en quelques mots..."
                rows={5}
                value={formData.message}
                onChange={gererChangement}
                required
                className="w-full bg-white border border-slate-200 rounded-2xl p-4 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-500/5 transition-all text-slate-800 placeholder-slate-400 resize-none"
              />
            </div>

            {/* Notification UX à la place des alerts */}
            {statutMessage.type && (
              <div
                className={`p-4 rounded-xl text-sm font-medium ${
                  statutMessage.type === "succes"
                    ? "bg-green-100 text-green-800 border border-green-200"
                    : "bg-red-100 text-red-800 border border-red-200"
                }`}
              >
                {statutMessage.texte}
              </div>
            )}

            <button
              type="submit"
              disabled={envoiEnCours}
              className={`w-full ${
                envoiEnCours
                  ? "bg-slate-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              } text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-600/10 flex items-center justify-center gap-3`}
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
}> = ({ label, name, type, placeholder, value, onChange }) => {
  const inputId = useId()

  return (
    <div className="flex flex-col space-y-2">
      <label
        htmlFor={inputId}
        className="text-sm font-semibold text-slate-700 ml-1"
      >
        {label}
      </label>
      <input
        id={inputId}
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