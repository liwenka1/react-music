import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

const Album = () => {
  return (
    <Card className="col-span-full">
      <CardHeader>
        <CardTitle>新碟上架</CardTitle>
        <CardDescription>热门新碟</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
    </Card>
  )
}

export default Album
