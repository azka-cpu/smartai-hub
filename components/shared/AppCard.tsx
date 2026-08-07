import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

type AppCardProps = {
  icon: string;
  name: string;
  description: string;
  href: string;
};

export default function AppCard({ icon, name, description, href }: AppCardProps) {
  return (
    <Link href={href}>
      <Card className="h-full transition hover:shadow-lg hover:-translate-y-1">
        <CardHeader>
          <div className="mb-2 text-3xl">{icon}</div>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">{description}</p>
          <div className="mt-4 flex items-center text-sm font-medium text-blue-600">
            Learn more <ArrowRight size={16} className="ml-1" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
