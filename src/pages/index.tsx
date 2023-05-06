import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-center`}>
      <Button
        className="px-8"
        onClick={() => {
          toast.success("Okay, I'm done!");
        }}
      >
        I do nothing!
      </Button>
    </main>
  );
}
