import { Button } from "@/components/ui/button"

export default function Buttons() {
  type str = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"

  const vari: str[] = ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link']
  return (
    <div className="flex flex-col justify-center items-center gap-4">
    {
      vari.map((t) => (
        <div className='flex gap-4 justify-center items-center'>
          <Button size={'sm'} variant={t} className=''>
            My button
          </Button>
          <Button size={'default'} variant={t}>
            My button
          </Button>
          <Button size={'lg'} variant={t}>
            My button
          </Button>
          <Button size={'icon'} variant={t}>
            ✅
          </Button>
        </div>
      ))
    }
    </div>
  )
}