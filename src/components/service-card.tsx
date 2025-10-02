import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import { Check } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  gradient: string
}

export function ServiceCard({ icon: Icon, title, description, features, gradient }: ServiceCardProps) {
  return (
    <Card className="group relative overflow-hidden transition-all hover:shadow-xl">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 transition-opacity group-hover:opacity-5`}
      />
      <CardHeader>
        <div className="mb-4 flex items-center gap-4">
          <div className={`rounded-xl bg-gradient-to-br ${gradient} p-3 text-white shadow-lg`}>
            <Icon className="h-6 w-6" />
          </div>
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        </div>
        <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className={`mt-0.5 rounded-full bg-gradient-to-br ${gradient} p-1`}>
                <Check className="h-3.5 w-3.5 text-white" />
              </div>
              <span className="text-sm leading-relaxed text-card-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
