import { Button } from "@/components/ui/button"

interface ButtonProps {
  name: string
}

export function ButtonDestructive(props: ButtonProps) {
  return <Button type="submit" className="bg-green-600 hover:bg-green-900" variant="destructive">{props.name}</Button>
}
export function ButtonOutline() {
  return <Button className="bg-black" variant="outline">Outline</Button>
}
