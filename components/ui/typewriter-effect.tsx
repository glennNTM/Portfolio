"use client"

import { cn } from "@/lib/utils"
import { motion, stagger, useAnimate, useInView } from "framer-motion"
import { useEffect } from "react"

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string
    className?: string
  }[]
  className?: string
  cursorClassName?: string
}) => {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
        },
      )
    }
  }, [isInView, animate])

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {words.map((word, idx) => {
          return (
            <motion.span key={`${word}-${idx}`} className={cn("opacity-0", word.className)} initial={{ opacity: 0 }}>
              {word.text}&nbsp;
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  return (
    <div className={cn("flex items-center", className)}>
      <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center">
        {renderWords()}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className={cn("inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-8 bg-white", cursorClassName)}
        />
      </div>
    </div>
  )
}
