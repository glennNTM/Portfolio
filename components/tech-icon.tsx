import Image from "next/image"

interface TechIconProps {
  name: string
  color: string
  icon?: string
}

export function TechIcon({ name, color, icon }: TechIconProps) {
  // Si aucune icône n'est fournie, créer une icône avec les initiales
  if (!icon) {
    const initials = name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)

    return (
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm"
        style={{ backgroundColor: color || "#2a2a2a" }}
        title={name}
      >
        {initials}
      </div>
    )
  }

  // Sinon, utiliser l'icône fournie
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center"
      style={{
        backgroundColor: color || "#2a2a2a",
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
      }}
      title={name}
    >
      <Image src={icon || "/placeholder.svg"} alt={name} width={24} height={24} className="object-contain" />
    </div>
  )
}
