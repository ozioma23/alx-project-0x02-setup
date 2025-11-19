import Button from "@/components/common/Button";

const About = () => {
    return (
<div>
     <h1 className="text-2xl font-semibold">About Page</h1>
      <div className="flex gap-4">
        <Button size="small" shape="rounded-sm">Small</Button>
        <Button size="medium" shape="rounded-md">Medium</Button>
        <Button size="large" shape="rounded-full">Large</Button>
      </div>
    </div>

    )
}

export default About;