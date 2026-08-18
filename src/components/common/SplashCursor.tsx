'use client'

import { useEffect, useRef } from 'react'

interface ColorRGB {
  r: number
  g: number
  b: number
}

interface SplashCursorProps {
  SIM_RESOLUTION?: number
  DYE_RESOLUTION?: number
  CAPTURE_RESOLUTION?: number
  DENSITY_DISSIPATION?: number
  VELOCITY_DISSIPATION?: number
  PRESSURE?: number
  PRESSURE_ITERATIONS?: number
  CURL?: number
  SPLAT_RADIUS?: number
  SPLAT_FORCE?: number
  SHADING?: boolean
  COLOR_UPDATE_SPEED?: number
  BACK_COLOR?: ColorRGB
  TRANSPARENT?: boolean
  RAINBOW_MODE?: boolean
  COLOR?: string
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  color: string
}

export default function SplashCursor({
  COLOR = '#A855F7',
  RAINBOW_MODE = false,
}: SplashCursorProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvasElement = canvasRef.current

    if (!canvasElement) {
      return
    }

    /*
     * On récupère le contexte 2D UNE SEULE FOIS.
     * Cela évite l'erreur :
     * "ctx is possibly null"
     */
    const context = canvasElement.getContext('2d')

    if (!context) {
      console.warn(
        'SplashCursor : impossible de récupérer le contexte 2D.'
      )
      return
    }

    const canvas = canvasElement
    const ctx = context

    let animationFrame = 0

    let lastX = -1000
    let lastY = -1000

    let particles: Particle[] = []

    /*
     * --------------------------------------------------
     * REDIMENSIONNEMENT DU CANVAS
     * --------------------------------------------------
     */

    function resizeCanvas() {
      const rect = canvas.getBoundingClientRect()

      const ratio = Math.min(
        window.devicePixelRatio || 1,
        2
      )

      const width = Math.max(
        1,
        Math.floor(rect.width * ratio)
      )

      const height = Math.max(
        1,
        Math.floor(rect.height * ratio)
      )

      if (
        canvas.width !== width ||
        canvas.height !== height
      ) {
        canvas.width = width
        canvas.height = height
      }
    }

    /*
     * --------------------------------------------------
     * AJOUT D'UNE PARTICULE
     * --------------------------------------------------
     */

    function addParticle(
      x: number,
      y: number
    ) {
      const color = RAINBOW_MODE
        ? `hsl(${Math.random() * 360}, 90%, 60%)`
        : COLOR

      particles.push({
        x,
        y,

        vx:
          (Math.random() - 0.5) *
          2,

        vy:
          (Math.random() - 0.5) *
          2,

        life: 1,

        color,
      })

      /*
       * Limite le nombre de particules
       */
      if (particles.length > 150) {
        particles.splice(
          0,
          particles.length - 150
        )
      }
    }

    /*
     * --------------------------------------------------
     * ANIMATION
     * --------------------------------------------------
     */

    function animate() {
      /*
       * Le canvas existe forcément ici car il a été
       * vérifié au début du useEffect.
       */

      resizeCanvas()

      /*
       * Nettoyage
       */

      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      )

      /*
       * Mise à jour des particules
       */

      for (
        let index = particles.length - 1;
        index >= 0;
        index--
      ) {
        const particle = particles[index]

        /*
         * Sécurité TypeScript
         */

        if (!particle) {
          continue
        }

        /*
         * Déplacement
         */

        particle.x += particle.vx
        particle.y += particle.vy

        /*
         * Petit ralentissement
         */

        particle.vx *= 0.98
        particle.vy *= 0.98

        /*
         * Durée de vie
         */

        particle.life -= 0.015

        /*
         * Suppression
         */

        if (particle.life <= 0) {
          particles.splice(index, 1)
          continue
        }

        /*
         * Taille
         */

        const radius =
          25 * particle.life

        /*
         * Gradient
         */

        const gradient =
          ctx.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            radius
          )

        gradient.addColorStop(
          0,
          particle.color
        )

        gradient.addColorStop(
          0.4,
          particle.color
        )

        gradient.addColorStop(
          1,
          'transparent'
        )

        /*
         * Dessin
         */

        ctx.globalAlpha =
          particle.life * 0.45

        ctx.fillStyle = gradient

        ctx.beginPath()

        ctx.arc(
          particle.x,
          particle.y,
          radius,
          0,
          Math.PI * 2
        )

        ctx.fill()
      }

      /*
       * Reset alpha
       */

      ctx.globalAlpha = 1

      /*
       * Boucle suivante
       */

      animationFrame =
        requestAnimationFrame(animate)
    }

    /*
     * --------------------------------------------------
     * MOUVEMENT DE LA SOURIS
     * --------------------------------------------------
     */

    function handleMouseMove(
      event: MouseEvent
    ) {
      /*
       * canvas existe déjà et est vérifié
       */

      const rect =
        canvas.getBoundingClientRect()

      /*
       * Conversion coordonnées écran
       * -> coordonnées canvas
       */

      const x =
        (event.clientX - rect.left) *
        (canvas.width / rect.width)

      const y =
        (event.clientY - rect.top) *
        (canvas.height / rect.height)

      /*
       * Vérifie qu'on a une ancienne position
       */

      if (
        lastX !== -1000 &&
        lastY !== -1000
      ) {
        const deltaX =
          x - lastX

        const deltaY =
          y - lastY

        const distance =
          Math.sqrt(
            deltaX * deltaX +
            deltaY * deltaY
          )

        /*
         * Plus la souris bouge,
         * plus on crée de particules.
         */

        if (distance > 2) {
          const count = Math.min(
            Math.ceil(distance / 8),
            4
          )

          for (
            let i = 0;
            i < count;
            i++
          ) {
            const progress =
              i / Math.max(count, 1)

            addParticle(
              lastX +
                deltaX * progress,
              lastY +
                deltaY * progress
            )
          }
        }
      }

      /*
       * Sauvegarde position actuelle
       */

      lastX = x
      lastY = y
    }

    /*
     * --------------------------------------------------
     * SOURIS QUITTE LE CANVAS
     * --------------------------------------------------
     */

    function handleMouseLeave() {
      lastX = -1000
      lastY = -1000
    }

    /*
     * --------------------------------------------------
     * RESIZE
     * --------------------------------------------------
     */

    function handleResize() {
      resizeCanvas()
    }

    /*
     * --------------------------------------------------
     * EVENTS
     * --------------------------------------------------
     */

    canvas.addEventListener(
      'mousemove',
      handleMouseMove
    )

    canvas.addEventListener(
      'mouseleave',
      handleMouseLeave
    )

    window.addEventListener(
      'resize',
      handleResize
    )

    /*
     * --------------------------------------------------
     * INITIALISATION
     * --------------------------------------------------
     */

    resizeCanvas()

    animate()

    /*
     * --------------------------------------------------
     * CLEANUP
     * --------------------------------------------------
     */

    return () => {
      cancelAnimationFrame(
        animationFrame
      )

      canvas.removeEventListener(
        'mousemove',
        handleMouseMove
      )

      canvas.removeEventListener(
        'mouseleave',
        handleMouseLeave
      )

      window.removeEventListener(
        'resize',
        handleResize
      )

      particles = []

      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      )
    }
  }, [COLOR, RAINBOW_MODE])

  return (
    <div
      className="
        absolute
        inset-0
        z-20
        overflow-hidden
        rounded-[2rem]
        pointer-events-auto
      "
    >
      <canvas
        ref={canvasRef}
        className="
          absolute
          inset-0
          w-full
          h-full
          block
          cursor-crosshair
        "
      />
    </div>
  )
}