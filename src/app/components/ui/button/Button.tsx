import { Button } from "@/components/ui/button"

interface ButtonProps {
  name: string
}

export function ButtonDestructive(props: ButtonProps) {
  return <Button type="submit" className="bg-purple-600 hover:bg-purple-900" variant="destructive">{props.name}</Button>
}
export function ButtonOutline() {
  return <Button className="bg-black" variant="outline">Outline</Button>
}
